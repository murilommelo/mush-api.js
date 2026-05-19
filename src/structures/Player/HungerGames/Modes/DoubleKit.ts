import type { Month, Year } from "@api-types/index.js";
import type { APIPlayerHungerGamesStats } from "@stats-types/hungergames.js";
import { Ranking } from "../../Ranking.js";

export interface HungerGamesDoubleKitStats {
  assists: number;
  dailyKills: number;
  dailyWins: number;
  deaths: number;
  exp: number;
  gamesPlayed: number;
  rank: number;
  ranking: Ranking | null;
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

export class HungerGamesDoubleKitStats {
  constructor(data: Partial<APIPlayerHungerGamesStats> = {}) {
    this.assists = data.mode_doublekit_assists ?? 0;
    this.deaths = data.mode_doublekit_deaths ?? 0;
    this.gamesPlayed = data.mode_doublekit_games_played ?? 0;
    this.kd = data.mode_doublekit_kd ?? 0;
    this.kills = data.mode_doublekit_kills ?? 0;
    this.dailyKills = data.mode_doublekit_kills_daily ?? 0;
    this.monthlyKills = data.mode_doublekit_kills_monthly ?? 0;
    this.weeklyKills = data.mode_doublekit_kills_weekly ?? 0;
    this.maxKills = data.mode_doublekit_max_kills ?? 0;
    this.rank = data.mode_doublekit_rank ?? 0;
    this.exp = data.mode_doublekit_rank_exp ?? 0;
    this.wins = data.mode_doublekit_wins ?? 0;
    this.dailyWins = data.mode_doublekit_wins_daily ?? 0;
    this.weeklyWins = data.mode_doublekit_wins_weekly ?? 0;
    this.monthlyWins = data.mode_doublekit_wins_monthly ?? 0;

    if (data.doublekit_ranking) {
      this.ranking = new Ranking(data.doublekit_ranking);
    } else {
      this.ranking = null;
    }

    this.getPeriodStats = function getPeriodStats(year: Year, month: Month) {
      if (Number.isNaN(year) || Number.isNaN(month)) {
        return null;
      }

      const rank = data[`mode_${year}_${month}_doublekit_rank`] ?? 0;
      const exp = data[`mode_${year}_${month}_doublekit_rank_exp`] ?? 0;
      const maxKills = data[`mode_${year}_${month}_doublekit_max_kills`] ?? 0;

      return {
        exp,
        rank,
        maxKills,
        period: `${year}-${month}`,
      };
    };
  }
}
