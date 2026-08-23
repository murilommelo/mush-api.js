import type {
  APIGameModeLeaderboard,
  APIGameModeXPTable,
  APILeaderboardMode,
  ModeLeaderboardPlayer,
} from "@api-types/index";
import type { APIPlayer } from "@api-types/player/player";
import { ModeLeaderboard } from "../structures/Leaderboard/Leaderboard.js";
import { Player } from "../structures/Player/Player.js";
import { Routes } from "../utils/constants.js";
import { isUUID } from "../utils/isUUID.js";
import request from "./API.js";
import { MushAPIJSError } from "./Error.js";

export async function getPlayer(username: string | number) {
  if (typeof username !== "string" && typeof username !== "number") {
    throw new MushAPIJSError(
      'The "username" parameter must be a string or number',
      4001,
    );
  }

  if (typeof username === "number") {
    return getPlayerByProfileId(username);
  }

  if (isUUID(username)) {
    return getPlayerByUUID(username);
  }

  const data = await request<APIPlayer>(Routes.Player(username));

  return new Player(data);
}

export async function getPlayerByUUID(uuid: string) {
  if (!isUUID(uuid)) {
    throw new MushAPIJSError(
      'The "uuid" parameter must be a valid Minecraft UUID',
      4001,
    );
  }

  const data = await request<APIPlayer>(Routes.Player(uuid, "uuid"));

  return new Player(data);
}

export async function getPlayerByProfileId(profileId: number) {
  if (
    typeof profileId !== "number" ||
    Number.isNaN(profileId) ||
    profileId < 0
  ) {
    throw new MushAPIJSError(
      'The "profileId" parameter must be a positive number',
      4001,
    );
  }

  const data = await request<APIPlayer>(Routes.Player(profileId, "profileid"));

  return new Player(data);
}

export async function getLeaderboard<M extends APILeaderboardMode>(mode: M) {
  const leaderboard = await request<APIGameModeLeaderboard>(
    Routes.Leaderboard(mode),
  );

  return new ModeLeaderboard<M>(
    mode,
    leaderboard.records as ModeLeaderboardPlayer<M>[],
  );
}

export async function getXPTable(mode: "bedwars" | "skywars" | "duels") {
  return await request<APIGameModeXPTable>(Routes.XPTable(mode));
}
