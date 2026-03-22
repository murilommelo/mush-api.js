import type { APIGameLevelBadge, MapKeys, Period } from "./";

type SkyWarsKit =
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

type SkyWarsMode =
  | "solo"
  | "team"
  | "normal"
  | "tournament"
  | "duels"
  | "1v1"
  | "2v2"
  | "uhc"
  | "soup";

type SkyWarsKitWins = MapKeys<SkyWarsKit, `wins_${SkyWarsMode}_kit_`>;

type SkyWarsKitLosses = MapKeys<SkyWarsKit, `losses_${SkyWarsMode}_kit_`>;

type SkyWarsKitKills = MapKeys<SkyWarsKit, `kills_${SkyWarsMode}_kit_`>;

type SkyWarsKitDeaths = MapKeys<SkyWarsKit, `deaths_${SkyWarsMode}_kit_`>;

type SkyWarsKitGamesPlayed = MapKeys<
  SkyWarsKit,
  `games_played_${SkyWarsMode}_kit_`
>;

type SkyWarsStatsPerKit = SkyWarsKitDeaths &
  SkyWarsKitGamesPlayed &
  SkyWarsKitKills &
  SkyWarsKitLosses &
  SkyWarsKitWins;

type SkyWarsModeDeaths = MapKeys<SkyWarsMode, "deaths_">;

type SkyWarsModeGamesPlayed = MapKeys<SkyWarsMode, "games_played_">;

type SkyWarsModeKills = MapKeys<SkyWarsMode, "kills_">;

type SkyWarsModeLosses = MapKeys<SkyWarsMode, "losses_">;

type SkyWarsModeMaxWinstreak = MapKeys<SkyWarsMode, "max_winstreak_">;

type SkyWarsModeSelectedKit = MapKeys<SkyWarsMode, "", "_selected_kit">;

type SkyWarsModeWins = MapKeys<SkyWarsMode, "wins_">;

type SkyWarsModeWinstreak = MapKeys<SkyWarsMode, "winstreak_">;

type SkyWarsModeKillsPerPeriod = MapKeys<SkyWarsMode, "kills_", `_${Period}`>;

type SkyWarsModeWinsPerPeriod = MapKeys<SkyWarsMode, "wins_", `_${Period}`>;

type SkyWarsModeWinstreakPerPeriod = MapKeys<
  SkyWarsMode,
  "winstreak_",
  `_${Period}`
>;

type SkyWarsStatsPerMode = SkyWarsModeDeaths &
  SkyWarsModeGamesPlayed &
  SkyWarsModeKills &
  SkyWarsModeLosses &
  SkyWarsModeMaxWinstreak &
  SkyWarsModeSelectedKit &
  SkyWarsModeWins &
  SkyWarsModeWinstreak &
  SkyWarsModeKillsPerPeriod &
  SkyWarsModeWinsPerPeriod &
  SkyWarsModeWinstreakPerPeriod;

type SkyWarsKillsPerPeriod = MapKeys<Period, "kills_">;

type SkyWarsWinsPerPeriod = MapKeys<Period, "wins_">;

type SkyWarsWinstreakPerPeriod = MapKeys<Period, "winstreak_">;

type SkyWarsXPPerPeriod = MapKeys<Period, "xp_">;

type SkyWarsStatsPerPeriod = SkyWarsKillsPerPeriod &
  SkyWarsWinsPerPeriod &
  SkyWarsWinstreakPerPeriod &
  SkyWarsXPPerPeriod;

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
