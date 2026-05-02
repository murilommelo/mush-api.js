export const MUSH_API_URL = "https://mush.com.br/api";

export const Routes = {
  Player<P extends string>(player: P) {
    return `/player/name/${player}` as const;
  },
  PlayerBedWarsInfo<P extends string>(player: P) {
    return `/player/name/${player}/bedwars` as const;
  },
  PlayerQuickBuildersInfo<P extends string>(player: P) {
    return `/player/name/${player}/quickbuilders` as const;
  },
  PlayerMissionsInfo<P extends string>(player: P) {
    return `/player/name/${player}/missions` as const;
  },
  PlayerSkyWarsInfo<P extends string>(player: P) {
    return `/player/name/${player}/skywars` as const;
  },
  PlayerParkourInfo<P extends string>(player: P) {
    return `/player/name/${player}/parkour` as const;
  },
  PlayerCosmeticsInfo<P extends string>(player: P) {
    return `/player/name/${player}/cosmetics` as const;
  },
  XPTable<M extends "bedwars" | "skywars" | "duels">(mode: M) {
    return `/games/${mode}/xptable` as const;
  },
};
