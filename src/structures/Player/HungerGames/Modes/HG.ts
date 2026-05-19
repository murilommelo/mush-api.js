import type { Month, Year } from "@api-types/index.js";
import type { APIPlayerHungerGamesStats } from "@stats-types/hungergames.js";

export interface HungerGamesHGStats {
  assists: number;
  dailyKills: number;
  dailyWins: number;
  deaths: number;
  exp: number;
  gamesPlayed: number;
  rank: number;
  kd: number;
  kills: number;
  maxKills: number;
  monthlyKills: number;
  monthlyWins: number;
  wins: number;
  weeklyKills: number;
  weeklyWins: number;
  getPeriodStats(
    year: Year,
    month: Month,
  ): {
    exp: number;
    rank: number;
    maxKills: number;
    period: string;
  } | null;
}

export class HungerGamesHGStats {
  constructor(data: Partial<APIPlayerHungerGamesStats> = {}) {
    this.assists = data.mode_hg_assists ?? 0;
    this.deaths = data.mode_hg_deaths ?? 0;
    this.gamesPlayed = data.mode_hg_games_played ?? 0;
    this.kd = data.mode_hg_kd ?? 0;
    this.kills = data.mode_hg_kills ?? 0;
    this.dailyKills = data.mode_hg_kills_daily ?? 0;
    this.monthlyKills = data.mode_hg_kills_monthly ?? 0;
    this.weeklyKills = data.mode_hg_kills_weekly ?? 0;
    this.maxKills = data.mode_hg_max_kills ?? 0;
    this.rank = data.mode_hg_rank ?? 0;
    this.exp = data.mode_hg_rank_exp ?? 0;
    this.wins = data.mode_hg_wins ?? 0;
    this.dailyWins = data.mode_hg_wins_daily ?? 0;
    this.weeklyWins = data.mode_hg_wins_weekly ?? 0;
    this.monthlyWins = data.mode_hg_wins_monthly ?? 0;

    this.getPeriodStats = function getPeriodStats(year: Year, month: Month) {
      if (Number.isNaN(year) || Number.isNaN(month)) {
        return null;
      }

      const rank = data[`mode_${year}_${month}_hg_rank`] ?? 0;
      const exp = data[`mode_${year}_${month}_hg_rank_exp`] ?? 0;
      const maxKills = data[`mode_${year}_${month}_hg_max_kills`] ?? 0;

      return {
        exp,
        rank,
        maxKills,
        period: `${year}-${month}`,
      };
    };
  }
}
