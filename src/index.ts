export * from "./client/Client.js";

export type * from "./typings/index.js";
export type * from "./typings/player/player.js";

export * from "./utils/constants.js";

/**
 * The {@link https://npmjs.com/package/mush-api.js | mush-api.js} version you're currently using
 */
export const version = "[VI]{{inject}}[/VI]" as string;
