import { assertType, expect, test } from "vitest";
import { type APIPlayer, MushClient, Routes } from "../dist/index.js";

const client = new MushClient();

test("fetching a player's profile", async () => {
  const player = await client.api.request<APIPlayer>(Routes.Player("ryzui"));

  expect(player.success).toBeTruthy();

  if (player.success) assertType<APIPlayer>(player.response);
});
