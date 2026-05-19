import type { APIPlayerPVPStats } from "@stats-types/pvp";

export interface PVPMLGStats {
  hits: number;
  misses: number;
  tier1Streak: number;
  tier1DailyStreak: number;
  tier1WeeklyStreak: number;
  tier1MonthlyStreak: number;
  tier2Streak: number;
  tier2DailyStreak: number;
  tier2WeeklyStreak: number;
  tier2MonthlyStreak: number;
  tier3Streak: number;
  tier3DailyStreak: number;
  tier3WeeklyStreak: number;
  tier3MonthlyStreak: number;
  tier4Streak: number;
  tier4DailyStreak: number;
  tier4WeeklyStreak: number;
  tier4MonthlyStreak: number;
}

export class PVPMLGStats {
  constructor(data: Partial<APIPlayerPVPStats> = {}) {
    this.hits = data.mlg_hits ?? 0;
    this.misses = data.mlg_misses ?? 0;

    this.tier1Streak = data.mlg_streak_1 ?? 0;
    this.tier1DailyStreak = data.mlg_streak_1_daily ?? 0;
    this.tier1WeeklyStreak = data.mlg_streak_1_weekly ?? 0;
    this.tier1MonthlyStreak = data.mlg_streak_1_monthly ?? 0;

    this.tier2Streak = data.mlg_streak_2 ?? 0;
    this.tier2DailyStreak = data.mlg_streak_2_daily ?? 0;
    this.tier2WeeklyStreak = data.mlg_streak_2_weekly ?? 0;
    this.tier2MonthlyStreak = data.mlg_streak_2_monthly ?? 0;

    this.tier3Streak = data.mlg_streak_3 ?? 0;
    this.tier3DailyStreak = data.mlg_streak_3_daily ?? 0;
    this.tier3WeeklyStreak = data.mlg_streak_3_weekly ?? 0;
    this.tier3MonthlyStreak = data.mlg_streak_3_monthly ?? 0;

    this.tier4Streak = data.mlg_streak_4 ?? 0;
    this.tier4DailyStreak = data.mlg_streak_4_daily ?? 0;
    this.tier4WeeklyStreak = data.mlg_streak_4_weekly ?? 0;
    this.tier4MonthlyStreak = data.mlg_streak_4_monthly ?? 0;
  }
}
