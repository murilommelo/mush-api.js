import { describe, expect, test } from "vitest";
import { MushClient, Player } from "../dist/index.js";

const client = new MushClient();

describe("MushClient's methods", () => {
  test("MushClient#getPlayer() returns instance of Player", async () => {
    await expect(client.getPlayer("mariaum")).resolves.toBeInstanceOf(Player);
  });

  test("MushClient#getPlayer() throws 404 statusCode error", async () => {
    await expect(client.getPlayer("player desconhecido")).rejects.toMatchObject(
      {
        statusCode: 404,
      },
    );
    // MushAPIJSError { statusCode: 404; }
  });

  test("MushClient#getXPTable() returns Record<string, number>", async () => {
    const xpTable = await client.getXPTable("bedwars");

    expect(xpTable["0"]).toBeTypeOf("number");
    // Record<string, number>;
  });
});
