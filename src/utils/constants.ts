export const MUSH_API_URL = "https://mush.com.br/api";

type IDType = "name" | "profileid" | "uuid";

export const Routes = {
  Player(player: string | number, idType: IDType = "name") {
    return `/player/${idType}/${player}` as const;
  },
  PlayerBedWarsQuickBuy(player: string | number, idType: IDType = "name") {
    return `/player/${idType}/${player}/bedwars` as const;
  },
  PlayerQuickBuildersRecords(player: string | number, idType: IDType = "name") {
    return `/player/${idType}/${player}/quickbuilders` as const;
  },
  PlayerMissions(player: string | number, idType: IDType = "name") {
    return `/player/${idType}/${player}/missions` as const;
  },
  PlayerSkyWarsPerks(player: string | number, idType: IDType = "name") {
    return `/player/${idType}/${player}/skywars` as const;
  },
  PlayerParkourRecords(player: string | number, idType: IDType = "name") {
    return `/player/${idType}/${player}/parkour` as const;
  },
  PlayerEquippedCosmetics(player: string | number, idType: IDType = "name") {
    return `/player/${idType}/${player}/cosmetics` as const;
  },
  XPTable(mode: "bedwars" | "skywars" | "duels") {
    return `/games/${mode}/xptable` as const;
  },
};
