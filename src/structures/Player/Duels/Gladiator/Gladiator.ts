import type { TwoDigitMonth, Year } from "@api-types/index.js";
import type { APIPlayerDuelsStats } from "@stats-types/duels.js";
import {
  DefaultGameLevelBadgeColorType,
  LevelBadge,
} from "../../LevelBadge.js";

export interface DuelsGladiatorStats {
  dailyKills: number;
  dailyWins: number;
  dailyWinstreak: number;
  dailyXp: number;
  deaths: number;
  gamesPlayed: number;
  kills: number;
  losses: number;
  level: number;
  levelBadge: LevelBadge;
  maxWinstreak: number;
  monthlyKills: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  monthlyXp: number;
  points: number;
  weeklyKills: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  weeklyXp: number;
  winstreak: number;
  wins: number;
  xp: number;
  getPeriodStats(
    year: Year,
    month: TwoDigitMonth,
  ): {
    exp: number;
    rank: number;
    period: string;
  } | null;
}

export class DuelsGladiatorStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.gladiator_deaths ?? 0;
    this.kills = data.gladiator_kills ?? 0;
    this.dailyKills = data.gladiator_kills_daily ?? 0;
    this.monthlyKills = data.gladiator_kills_monthly ?? 0;
    this.weeklyKills = data.gladiator_kills_weekly ?? 0;
    this.losses = data.gladiator_losses ?? 0;
    this.level = data.gladiator_level ?? 0;
    this.levelBadge = new LevelBadge(
      data.gladiator_level_badge ?? DefaultGameLevelBadgeColorType,
    );
    this.maxWinstreak = data.gladiator_max_winstreak ?? 0;
    this.gamesPlayed = data.gladiator_played ?? 0;
    this.wins = data.gladiator_wins ?? 0;
    this.dailyWins = data.gladiator_wins_daily ?? 0;
    this.monthlyWins = data.gladiator_wins_monthly ?? 0;
    this.weeklyWins = data.gladiator_wins_weekly ?? 0;
    this.winstreak = data.gladiator_winstreak ?? 0;
    this.dailyWinstreak = data.gladiator_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.gladiator_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.gladiator_winstreak_weekly ?? 0;
    this.xp = data.gladiator_xp ?? 0;
    this.dailyXp = data.gladiator_xp_daily ?? 0;
    this.monthlyXp = data.gladiator_xp_monthly ?? 0;
    this.weeklyXp = data.gladiator_xp_weekly ?? 0;

    this.getPeriodStats = function getPeriodStats(
      year: Year,
      month: TwoDigitMonth,
    ) {
      if (Number.isNaN(year) || Number.isNaN(month)) {
        return null;
      }

      const exp = data[`gladiator_exp_${year}-${month}`] ?? 0;
      const rank = data[`gladiator_rank_${year}-${month}`] ?? 0;

      return {
        exp,
        rank,
        period: `${year}-${month}`,
      };
    };
  }
}
