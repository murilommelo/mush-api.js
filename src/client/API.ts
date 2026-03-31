import type { MushAPIResponse } from "../typings/index";
import { MUSH_API_URL } from "../utils/constants.js";

export class API {
  async request<T>(route: string): Promise<MushAPIResponse<T>> {
    if (typeof fetch !== "function") {
      throw new Error(
        "Unable to perform requests. Make sure you have installed a Node.js version 18 or higher.",
      );
    }

    try {
      const response = await fetch(MUSH_API_URL + route, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      return data;
    } catch {
      return { error_code: 400, success: false };
    }
  }
}
