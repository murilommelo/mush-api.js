import type { APIXPTableInfo } from "@api-types/index";
import type { APIPlayer } from "@api-types/player/player";
import { Player } from "../structures/Player/Player.js";
import { Routes } from "../utils/constants.js";
import { isUUID } from "../utils/isUUID.js";
import { API } from "./API.js";
import { MushAPIJSError } from "./Error.js";

export class MushClient extends API {
  async getPlayer(username: string | number) {
    if (typeof username === "number") {
      return this.getPlayerByProfileId(username);
    }

    if (isUUID(username)) {
      return this.getPlayerByUUID(username);
    }

    const data = await this.request<APIPlayer>(Routes.Player(username));

    return new Player(data);
  }

  async getPlayerByUUID(uuid: string) {
    if (!isUUID(uuid)) {
      throw new MushAPIJSError(
        `The "uuid" parameter must be a valid Minecraft UUID`,
        4001,
      );
    }

    const data = await this.request<APIPlayer>(Routes.Player(uuid, "uuid"));

    return new Player(data);
  }

  async getPlayerByProfileId(profileId: number) {
    if (typeof profileId !== "number") {
      throw new MushAPIJSError(
        `The "profileId" parameter must be a number`,
        4001,
      );
    }

    const data = await this.request<APIPlayer>(
      Routes.Player(profileId, "profileid"),
    );

    return new Player(data);
  }

  async getXPTable(mode: "bedwars" | "skywars" | "duels") {
    return await this.request<APIXPTableInfo>(Routes.XPTable(mode));
  }
}
