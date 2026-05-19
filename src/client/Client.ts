import type {
  APIGameModeXPTable,
  APILeaderboardMode,
  ModeLeaderboardPlayer,
  ParsedAPIGameModeLeaderboard,
} from "@api-types/index";
import type { APIPlayer } from "@api-types/player/player";
import { ModeLeaderboard } from "../structures/Leaderboard/Leaderboard.js";
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

    const data = (await this.request(Routes.Player(username))) as APIPlayer;

    return new Player(data);
  }

  async getPlayerByUUID(uuid: string) {
    if (!isUUID(uuid)) {
      throw new MushAPIJSError(
        `The "uuid" parameter must be a valid Minecraft UUID`,
        4001,
      );
    }

    const data = (await this.request(Routes.Player(uuid, "uuid"))) as APIPlayer;

    return new Player(data);
  }

  async getPlayerByProfileId(profileId: number) {
    if (typeof profileId !== "number") {
      throw new MushAPIJSError(
        `The "profileId" parameter must be a number`,
        4001,
      );
    }

    const data = (await this.request(
      Routes.Player(profileId, "profileid"),
    )) as APIPlayer;

    return new Player(data);
  }

  async getLeaderboard<M extends APILeaderboardMode>(mode: M) {
    const leaderboard = await this.request<string>(Routes.Leaderboard(mode));

    const parsed: ParsedAPIGameModeLeaderboard = JSON.parse(leaderboard);

    return new ModeLeaderboard<M>(
      mode,
      parsed.records as ModeLeaderboardPlayer<M>[],
    );
  }

  async getXPTable(mode: "bedwars" | "skywars" | "duels") {
    return (await this.request(Routes.XPTable(mode))) as APIGameModeXPTable;
  }
}
