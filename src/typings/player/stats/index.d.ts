import type { Color } from "../..";
import type { APIPlayerBedWarsStats } from "./bedwars";
import type { APIPlayerBlockPartyStats } from "./blockparty";
import type { APIPlayerBridgePracticeStats } from "./bridgepractice";
import type { APIPlayerBuildBattleStats } from "./buildbattle";
import type { APIPlayerCTFStats } from "./ctf";
import type { APIPlayerDuelsStats } from "./duels";
import type { APIPlayerGeneralStats } from "./general";
import type { APIPlayerHungerGamesStats } from "./hungergames";
import type { APIPlayerMissionsStats } from "./missions";
import type { APIPlayerMurderStats } from "./murder";
import type { APIPlayerNascoMandouStats } from "./nascomandou";
import type { APIPlayerPartyStats } from "./party";
import type { APIPlayerPlayTimeStats } from "./play_time";
import type { APIPlayerPVPStats } from "./pvp";
import type { APIPlayerQuickBuildersStats } from "./quickbuilders";
import type { APIPlayerHideAndSeekStats } from "./seek";
import type { APIPlayerSkyWarsStats } from "./skywars_r1";

export interface APIGameLevelBadgeFormatType {
  format: string;
  min_level: number;
  type: "format";
}

export interface APIGameLevelBadgeColorType {
  format: string;
  hex_color: Color;
  min_level: number;
  symbol: string;
  type: "color";
}

export type APIGameLevelBadge =
  | APIGameLevelBadgeFormatType
  | APIGameLevelBadgeColorType;

// Utility type to avoid repetitive typings
export type MapKeys<
  Keys extends string,
  Prefix extends string = "",
  Suffix extends string = "",
  Type = number,
> = {
  [K in Keys as `${Prefix}${K}${Suffix}`]: Type;
};

export type Period = "daily" | "weekly" | "monthly";

export type GamePlace = "first_place" | "second_place" | "third_place";

export interface APIPlayerStats {
  bedwars?: Partial<APIPlayerBedWarsStats>;
  blockparty?: Partial<APIPlayerBlockPartyStats>;
  bridgepractice?: Partial<APIPlayerBridgePracticeStats>;
  buildbattle?: Partial<APIPlayerBuildBattleStats>;
  ctf?: Partial<APIPlayerCTFStats>;
  duels?: Partial<APIPlayerDuelsStats>;
  general?: Partial<APIPlayerGeneralStats>;
  hungergames?: Partial<APIPlayerHungerGamesStats>;
  missions?: Partial<APIPlayerMissionsStats>;
  murder?: Partial<APIPlayerMurderStats>;
  nascomandou?: Partial<APIPlayerNascoMandouStats>;
  party?: Partial<APIPlayerPartyStats>;
  play_time?: Partial<APIPlayerPlayTimeStats>;
  pvp?: Partial<APIPlayerPVPStats>;
  quickbuilders?: Partial<APIPlayerQuickBuildersStats>;
  seek?: Partial<APIPlayerHideAndSeekStats>;
  skywars_r1?: Partial<APIPlayerSkyWarsStats>;
}
