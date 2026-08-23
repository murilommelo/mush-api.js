import type { APIPlayerPVPStats } from "@stats-types/pvp";

export class PVPMLGStats {
  public hits: number;
  public misses: number;
  public getTierStats: (tier: 1 | 2 | 3 | 4) => {
    tier: number;
    streak: number;
    dailyStreak: number;
    weeklyStreak: number;
    monthlyStreak: number;
  };

  constructor(data: Partial<APIPlayerPVPStats> = {}) {
    this.hits = data.mlg_hits ?? 0;
    this.misses = data.mlg_misses ?? 0;

    this.getTierStats = function getTierStats(tier: 1 | 2 | 3 | 4) {
      const streak = data[`mlg_streak_${tier}`] ?? 0;
      const dailyStreak = data[`mlg_streak_${tier}_daily`] ?? 0;
      const weeklyStreak = data[`mlg_streak_${tier}_weekly`] ?? 0;
      const monthlyStreak = data[`mlg_streak_${tier}_monthly`] ?? 0;

      return {
        tier,
        streak,
        dailyStreak,
        weeklyStreak,
        monthlyStreak,
      };
    };
  }
}
