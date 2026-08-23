import type { MushAPIResponse } from "@api-types/index.js";
import { MUSH_API_URL } from "../utils/constants.js";
import { MushAPIJSError } from "./Error.js";

export default async function request<T>(route: string) {
  if (typeof globalThis.fetch !== "function") {
    throw new Error(
      "Unable to perform requests. Make sure you're running on Node.js version 18 or higher.",
    );
  }

  const response = await fetch(MUSH_API_URL + route, {
    method: "GET",
    headers: {
      "User-Agent":
        "mush-api.js (+https://npmjs.com/package/mush-api.js, [VI]{{inject}}[/VI])",
    },
  });

  // For some reason, all API requests return a 200 status, even when "error_code" is 404
  // "ok" is only false when a rate limit is reached or the API doesn't respond with an object
  if (!response.ok) {
    if (response.status === 429) {
      const retryAfter = response.headers.get("retry-after");

      throw new MushAPIJSError(
        `Rate limit reached. Try again in ${retryAfter} seconds.`,
        response.status,
        { route },
      );
    }

    throw new MushAPIJSError(response.statusText, response.status, { route });
  }

  const contentType = response.headers.get("Content-Type") ?? "";

  // Handling the /leaderboard/:mode route, because for some reason it returns plain text
  if (contentType.includes("text/html")) {
    return JSON.parse(await response.text()) as T;
  }

  const data = (await response.json()) as MushAPIResponse<T>;

  // When providing an invalid profile ID or UUID in the /player/<idType>/<parameter> route
  if (data.error_code === 400) {
    throw new MushAPIJSError("Invalid parameter provided", 400, { route });
  }

  // When the requested game or player doesn't exist
  if (data.error_code === 404) {
    throw new MushAPIJSError("Entity not found", 404, { route });
  }

  // Unknown error detected
  if (data.success === false) {
    throw new MushAPIJSError(
      data.response?.message ?? "Unknown error while interacting with the API",
      data.error_code,
      { route },
    );
  }

  // The only route that doesn't return the data in "response" is the XP table route, so we verify that here
  return ("response" in data ? data.response : data) as T;
}
