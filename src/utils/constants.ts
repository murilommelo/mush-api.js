import type { APILeaderboardMode } from "@api-types/index.js";

export const MUSH_API_URL = "https://mush.com.br/api";

type IDType = "name" | "profileid" | "uuid";

export const Routes = {
  /**
   * Player data route
   * - `/player/:idType/:player`
   */
  Player(player: string | number, idType: IDType = "name") {
    return `/player/${idType}/${player}` as const;
  },
  /**
   * Player BedWars Quick Buy route
   * - `/player/:idType/:player/bedwars`
   */
  PlayerBedWarsQuickBuy(player: string | number, idType: IDType = "name") {
    return `/player/${idType}/${player}/bedwars` as const;
  },
  /**
   * Player QuickBuilders records route
   * - `/player/:idType/:player/quickbuilders`
   */
  PlayerQuickBuildersRecords(player: string | number, idType: IDType = "name") {
    return `/player/${idType}/${player}/quickbuilders` as const;
  },
  /**
   * Player missions route
   * - `/player/:idType/:player/missions`
   */
  PlayerMissions(player: string | number, idType: IDType = "name") {
    return `/player/${idType}/${player}/missions` as const;
  },
  /**
   * Player equipped SkyWars perks route
   * - `/player/:idType/:player/skywars`
   */
  PlayerSkyWarsPerks(player: string | number, idType: IDType = "name") {
    return `/player/${idType}/${player}/skywars` as const;
  },
  /**
   * Player lobby parkour records route
   * - `/player/:idType/:player/parkour`
   */
  PlayerParkourRecords(player: string | number, idType: IDType = "name") {
    return `/player/${idType}/${player}/parkour` as const;
  },
  /**
   * Player equipped cosmetics route
   * - `/player/:idType/:player/cosmetics`
   */
  PlayerEquippedCosmetics(player: string | number, idType: IDType = "name") {
    return `/player/${idType}/${player}/cosmetics` as const;
  },
  /**
   * Leaderboard route for a game mode
   * - `/leaderboard/:mode`
   */
  Leaderboard(mode: APILeaderboardMode) {
    return `/leaderboard/${mode}`;
  },
  /**
   * XP table route for a game mode
   * - `/games/:mode/xptable`
   */
  XPTable(mode: "bedwars" | "skywars" | "duels") {
    return `/games/${mode}/xptable` as const;
  },
};
