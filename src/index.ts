export * from "./client/Client.js";

export type * from "./typings/index.js";
export type * from "./typings/player.js";

export * from "./utils/constants.js";

/**
 * The {@link https://npmjs.com/package/mushmc.js | mushmc.js} version you're currently using
 *
 * @privateRemark We export this as string for better typings
 */
export const version = "!!PACKAGE_VERSION!!" as string;
