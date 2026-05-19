import type { Month, Year } from "@api-types/index.js";
import type { APIPlayerHungerGamesStats } from "@stats-types/hungergames.js";

export interface HungerGamesQuarterQuellStats {
  assists: number;
  deaths: number;
  gamesPlayed: number;
  kd: number;
  kills: number;
  maxKills: number;
  wins: number;
  getPeriodStats(
    year: Year,
    month: Month,
  ): {
    exp: number;
    points: number;
    maxKills: number;
    period: string;
  } | null;
}

export class HungerGamesQuarterQuellStats {
  constructor(data: Partial<APIPlayerHungerGamesStats> = {}) {
    this.assists = data.mode_quarterquell_assists ?? 0;
    this.deaths = data.mode_quarterquell_deaths ?? 0;
    this.gamesPlayed = data.mode_quarterquell_games_played ?? 0;
    this.kd = data.mode_quarterquell_kd ?? 0;
    this.kills = data.mode_quarterquell_kills ?? 0;
    this.maxKills = data.mode_quarterquell_max_kills ?? 0;
    this.wins = data.mode_quarterquell_wins ?? 0;

    this.getPeriodStats = function getPeriodStats(year: Year, month: Month) {
      if (Number.isNaN(year) || Number.isNaN(month)) {
        return null;
      }

      const exp = data[`qq_${year}_${month}_xp`] ?? 0;
      const points = data[`quarter_points_qq_${year}_${month}`] ?? 0;
      const maxKills =
        data[`mode_${year}_${month}_quarterquell_max_kills`] ?? 0;

      return {
        exp,
        points,
        maxKills,
        period: `${year}-${month}`,
      };
    };
  }
}
