import type { GamePlace, MapKeys, Period } from "./";

type BuildBattleMode = "mini" | "solo" | "doubles" | "pro";

type BuildBattleStatsPerPeriod = MapKeys<Period, "perfects_"> &
  MapKeys<Period, "played_"> &
  MapKeys<Period, "points_"> &
  MapKeys<Period, "wins_"> &
  MapKeys<Period, "winstreak_"> &
  MapKeys<Period, "xp_">;

type BuildBattleModeStatsPerPeriod = MapKeys<
  Period,
  `${BuildBattleMode}_wins_`
> &
  MapKeys<Period, `${BuildBattleMode}_played_`> &
  MapKeys<Period, `${BuildBattleMode}_points_`> &
  MapKeys<Period, `${BuildBattleMode}_perfects_`> &
  MapKeys<Period, `${BuildBattleMode}_winstreak_`>;

type BuildBattleStatsPerMode = MapKeys<BuildBattleMode, "", "_played"> &
  MapKeys<BuildBattleMode, "", "_points"> &
  MapKeys<BuildBattleMode, "", "_wins"> &
  MapKeys<BuildBattleMode, "", "_winstreak"> &
  MapKeys<BuildBattleMode, "", "_losses"> &
  MapKeys<BuildBattleMode, "", "_votes"> &
  MapKeys<BuildBattleMode, "", "_perfects"> &
  MapKeys<BuildBattleMode, "", `_${GamePlace}`> &
  MapKeys<BuildBattleMode, "", "_max_winstreak">;

export interface APIPlayerBuildBattleStats
  extends BuildBattleStatsPerPeriod,
    BuildBattleModeStatsPerPeriod,
    BuildBattleStatsPerMode {
  level: number;
  losses: number;
  max_winstreak: number;
  perfects: number;
  played: number;
  points: number;
  second_place: number;
  third_place: number;
  votes: number;
  wins: number;
  winstreak: number;
  xp: number;
}
