import type { APIGameLevelBadge, MapKeys, Period } from ".";

export type SkyWarsKit =
  | "default"
  | "snowman"
  | "archer"
  | "ecologist"
  | "none"
  | "golden_boy"
  | "incendiary"
  | "fisherman"
  | "kangaroo"
  | "rider"
  | "miner"
  | "rush"
  | "cannonner"
  | "enchanter"
  | "engineer"
  | "fighter"
  | "spiderman"
  | "healer"
  | "chemist"
  | "frog"
  | "beastmaster"
  | "chicken"
  | "soup";

export type SkyWarsMode =
  | "solo"
  | "team"
  | "normal"
  | "tournament"
  | "duels"
  | "1v1"
  | "2v2"
  | "uhc"
  | "soup";

type SkyWarsStatsPerKit = MapKeys<SkyWarsKit, `wins_${SkyWarsMode}_kit_`> &
  MapKeys<SkyWarsKit, `losses_${SkyWarsMode}_kit_`> &
  MapKeys<SkyWarsKit, `kills_${SkyWarsMode}_kit_`> &
  MapKeys<SkyWarsKit, `deaths_${SkyWarsMode}_kit_`> &
  MapKeys<SkyWarsKit, `games_played_${SkyWarsMode}_kit_`>;

type SkyWarsStatsPerMode = MapKeys<SkyWarsMode, "deaths_"> &
  MapKeys<SkyWarsMode, "games_played_"> &
  MapKeys<SkyWarsMode, "kills_"> &
  MapKeys<SkyWarsMode, "losses_"> &
  MapKeys<SkyWarsMode, "max_winstreak_"> &
  MapKeys<SkyWarsMode, "", "_selected_kit"> &
  MapKeys<SkyWarsMode, "wins_"> &
  MapKeys<SkyWarsMode, "winstreak_"> &
  MapKeys<SkyWarsMode, "kills_", `_${Period}`> &
  MapKeys<SkyWarsMode, "wins_", `_${Period}`> &
  MapKeys<SkyWarsMode, "winstreak_", `_${Period}`>;

type SkyWarsStatsPerPeriod = MapKeys<Period, "kills_"> &
  MapKeys<Period, "wins_"> &
  MapKeys<Period, "winstreak_"> &
  MapKeys<Period, "xp_">;

export interface APIPlayerSkyWarsStats
  extends SkyWarsStatsPerKit,
    SkyWarsStatsPerMode,
    SkyWarsStatsPerPeriod {
  coins: number;
  deaths: number;
  games_played: number;
  kills: number;
  level: number;
  level_badge: APIGameLevelBadge;
  losses: number;
  max_winstreak: number;
  selected_cage: number;
  souls: number;
  wins: number;
  winstreak: number;
  xp: number;
}
