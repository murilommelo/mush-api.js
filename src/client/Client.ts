import type { APIXPTableInfo } from "../typings/index.js";
import { MUSH_API_URL, Routes } from "../utils/constants.js";
import { API } from "./API.js";

export class MushClient {
  declare api: API;

  constructor() {
    this.api = new API();
  }

  async xpTable(mode: "bedwars" | "skywars" | "duels") {
    if (typeof fetch !== "function") {
      throw new Error(
        "Unable to perform requests. Make sure you have installed a Node.js version 18 or higher.",
      );
    }

    try {
      const response = await fetch(MUSH_API_URL + Routes.XPTable(mode), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "mush-api.js (https://npmjs.com/package/mush-api.js, [VI]{{inject}}[/VI])",
        },
      });

      return (await response.json()) as APIXPTableInfo;
    } catch {
      return null;
    }
  }
}
