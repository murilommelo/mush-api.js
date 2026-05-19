import type { Month, Year } from "@api-types/index.js";
import type { APIPlayerHungerGamesStats } from "@stats-types/hungergames.js";

export interface HungerGamesMegaFastStats {
  assists: number;
  deaths: number;
  gamesPlayed: number;
  kd: number;
  kills: number;
  maxKills: number;
  wins: number;
  getPeriodMaxKills(
    year: Year,
    month: Month,
  ): {
    maxKills: number;
    period: string;
  } | null;
}

export class HungerGamesMegaFastStats {
  constructor(data: Partial<APIPlayerHungerGamesStats> = {}) {
    this.assists = data.mode_mega_fast_assists ?? 0;
    this.deaths = data.mode_mega_fast_deaths ?? 0;
    this.gamesPlayed = data.mode_mega_fast_games_played ?? 0;
    this.kd = data.mode_mega_fast_kd ?? 0;
    this.kills = data.mode_mega_fast_kills ?? 0;
    this.maxKills = data.mode_mega_fast_max_kills ?? 0;
    this.wins = data.mode_mega_fast_wins ?? 0;

    this.getPeriodMaxKills = function getPeriodMaxKills(
      year: Year,
      month: Month,
    ) {
      if (Number.isNaN(year) || Number.isNaN(month)) {
        return null;
      }

      const maxKills = data[`mode_${year}_${month}_mega_fast_max_kills`] ?? 0;

      return { maxKills, period: `${year}-${month}` };
    };
  }
}
