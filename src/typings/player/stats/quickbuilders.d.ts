import type { MapKeys, Period } from ".";

type QuickBuilderStatsPerPeriod = MapKeys<Period, "wins_"> &
  MapKeys<Period, "xp_"> &
  MapKeys<Period, "winstreak_"> &
  MapKeys<Period, "perfect_builds_streak_">;

export interface APIPlayerQuickBuildersStats
  extends QuickBuilderStatsPerPeriod {
  builds: number;
  level: number;
  losses: number;
  max_perfect_build_streak: number;
  max_winstreak: number;
  perfect_build_streak: number;
  perfect_builds: number;
  played: number;
  wins: number;
  winstreak: number;
  xp: number;
}
