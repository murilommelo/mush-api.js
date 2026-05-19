import type { TwoDigitMonth, Year } from "@api-types/index.js";
import type { APIPlayerDuelsStats } from "@stats-types/duels.js";
import {
  DefaultGameLevelBadgeColorType,
  LevelBadge,
} from "../../LevelBadge.js";

export interface DuelsSoupStats {
  dailyKills: number;
  dailyWins: number;
  dailyWinstreak: number;
  dailyXp: number;
  deaths: number;
  gamesPlayed: number;
  kills: number;
  level: number;
  levelBadge: LevelBadge;
  losses: number;
  maxWinstreak: number;
  monthlyKills: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  monthlyXp: number;
  weeklyKills: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  weeklyXp: number;
  wins: number;
  winstreak: number;
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

export class DuelsSoupStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.soup_deaths ?? 0;
    this.kills = data.soup_kills ?? 0;
    this.dailyKills = data.soup_kills_daily ?? 0;
    this.monthlyKills = data.soup_kills_monthly ?? 0;
    this.weeklyKills = data.soup_kills_weekly ?? 0;
    this.level = data.soup_level ?? 0;
    this.levelBadge = new LevelBadge(
      data.soup_level_badge ?? DefaultGameLevelBadgeColorType,
    );
    this.losses = data.soup_losses ?? 0;
    this.maxWinstreak = data.soup_max_winstreak ?? 0;
    this.gamesPlayed = data.soup_played ?? 0;
    this.wins = data.soup_wins ?? 0;
    this.dailyWins = data.soup_wins_daily ?? 0;
    this.monthlyWins = data.soup_wins_monthly ?? 0;
    this.weeklyWins = data.soup_wins_weekly ?? 0;
    this.winstreak = data.soup_winstreak ?? 0;
    this.dailyWinstreak = data.soup_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.soup_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.soup_winstreak_weekly ?? 0;
    this.xp = data.soup_xp ?? 0;
    this.dailyXp = data.soup_xp_daily ?? 0;
    this.monthlyXp = data.soup_xp_monthly ?? 0;
    this.weeklyXp = data.soup_xp_weekly ?? 0;

    this.getPeriodStats = function getPeriodStats(
      year: Year,
      month: TwoDigitMonth,
    ) {
      if (Number.isNaN(year) || Number.isNaN(month)) {
        return null;
      }

      const exp = data[`soup_exp_${year}-${month}`] ?? 0;
      const rank = data[`soup_rank_${year}-${month}`] ?? 0;

      return {
        exp,
        rank,
        period: `${year}-${month}`,
      };
    };
  }
}
