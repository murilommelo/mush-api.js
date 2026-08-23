import { assertType, describe, expect, test } from "vitest";
import {
  getLeaderboard,
  getPlayer,
  getPlayerByProfileId,
  getPlayerByUUID,
  getXPTable,
  ModeLeaderboard,
  Player,
} from "../dist/index.js";

describe("mush-api.js", () => {
  test("getPlayer() returns instance of Player", async () => {
    await expect(getPlayer("mariaum")).resolves.toBeInstanceOf(Player);
  });

  test("getPlayer() throws 404 error", async () => {
    await expect(getPlayer("player desconhecido")).rejects.toMatchObject({
      message: "Entity not found",
      statusCode: 404,
    });
  });

  test("getPlayerByUUID() throws 4001 error", async () => {
    await expect(getPlayerByUUID("player desconhecido")).rejects.toMatchObject({
      message: 'The "uuid" parameter must be a valid Minecraft UUID',
      statusCode: 4001,
    });
  });

  test("getPlayerByProfileId() throws 404 error", async () => {
    await expect(getPlayerByProfileId(9007199254740991)).rejects.toMatchObject({
      message: "Entity not found",
      statusCode: 404,
    });
  });

  test("getLeaderboard() returns instance of ModeLeaderboard<'bedwars'>", async () => {
    const leaderboard = getLeaderboard("bedwars");

    await expect(leaderboard).resolves.toBeInstanceOf(ModeLeaderboard);
    assertType<ModeLeaderboard<"bedwars">>(await leaderboard);
  });

  test("getXPTable() returns Record<string, number>", async () => {
    const xpTable = await getXPTable("bedwars");

    expect(xpTable["0"]).toBeTypeOf("number");
    assertType<Record<string, number>>(xpTable);
  });
});
