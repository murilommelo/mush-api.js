import type { GamePlace, MapKeys, Period } from "./";

type BuildBattleMode = "mini" | "solo" | "doubles" | "pro";

type BuildBattlePeriodPerfects = MapKeys<Period, "perfects_">;

type BuildBattlePeriodPlayed = MapKeys<Period, "played_">;

type BuildBattlePeriodPoints = MapKeys<Period, "points_">;

type BuildBattlePeriodWins = MapKeys<Period, "wins_">;

type BuildBattlePeriodWinstreak = MapKeys<Period, "winstreak_">;

type BuildBattlePeriodXP = MapKeys<Period, "xp_">;

type BuildBattleStatsPerPeriod = BuildBattlePeriodPerfects &
  BuildBattlePeriodPlayed &
  BuildBattlePeriodPoints &
  BuildBattlePeriodWins &
  BuildBattlePeriodWinstreak &
  BuildBattlePeriodXP;

type BuildBattlePeriodModePerfects = MapKeys<
  Period,
  `${BuildBattleMode}_perfects_`
>;

type BuildBattlePeriodModePlayed = MapKeys<
  Period,
  `${BuildBattleMode}_played_`
>;

type BuildBattlePeriodModePoints = MapKeys<
  Period,
  `${BuildBattleMode}_points_`
>;

type BuildBattlePeriodModeWins = MapKeys<Period, `${BuildBattleMode}_wins_`>;

type BuildBattlePeriodModeWinstreak = MapKeys<
  Period,
  `${BuildBattleMode}_winstreak_`
>;

type BuildBattleModeStatsPerPeriod = BuildBattlePeriodModePerfects &
  BuildBattlePeriodModePlayed &
  BuildBattlePeriodModePoints &
  BuildBattlePeriodModeWins &
  BuildBattlePeriodModeWinstreak;

type BuildBattleModeMaxWinstreak = MapKeys<
  BuildBattleMode,
  "",
  "_max_winstreak"
>;

type BuildBattleModePlayed = MapKeys<BuildBattleMode, "", "_played">;

type BuildBattleModePoints = MapKeys<BuildBattleMode, "", "_points">;

type BuildBattleModeWins = MapKeys<BuildBattleMode, "", "_wins">;

type BuildBattleModeWinstreak = MapKeys<BuildBattleMode, "", "_winstreak">;

type BuildBattleModeLosses = MapKeys<BuildBattleMode, "", "_losses">;

type BuildBattleModeVotes = MapKeys<BuildBattleMode, "", "_votes">;

type BuildBattleModePerfects = MapKeys<BuildBattleMode, "", "_perfects">;

type BuildBattleModePlace = MapKeys<BuildBattleMode, "", `_${GamePlace}`>;

type BuildBattleStatsPerMode = BuildBattleModeMaxWinstreak &
  BuildBattleModePlayed &
  BuildBattleModePoints &
  BuildBattleModeWins &
  BuildBattleModeWinstreak &
  BuildBattleModeLosses &
  BuildBattleModeVotes &
  BuildBattleModePerfects &
  BuildBattleModePlace;

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
