export * from "./client/Client.js";
export * from "./client/Error.js"
export * from "./structures/Player/Player.js";

export type * from "./typings/index";
export type * from "./typings/player/player";

/**
 * The {@link https://npmjs.com/package/mush-api.js | mush-api.js} version you're currently using
 */
export const version = "[VI]{{inject}}[/VI]" as string;
