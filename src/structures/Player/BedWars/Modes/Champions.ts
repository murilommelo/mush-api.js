import type { TwoDigitMonth } from "@api-types/index";
import type {
  APIPlayerBedWarsStats,
  ChampionYear,
} from "@stats-types/bedwars.js";

export interface BedWarsChampionsStats {
  assists: number;
  bedsBroken: number;
  bedsLost: number;
  deaths: number;
  finalAssists: number;
  finalDeaths: number;
  finalKills: number;
  fkdr: number;
  gamesPlayed: number;
  kills: number;
  losses: number;
  maxWinstreak: number;
  wins: number;
  winstreak: number;
  getPeriodStats(
    year: ChampionYear,
    month: TwoDigitMonth,
  ): {
    finalPoints: number;
    finalRank: number;
    lastLeague: number;
    removedPoints: number;
  } | null;
}

export class BedWarsChampionsStats {
  constructor(data: Partial<APIPlayerBedWarsStats> = {}) {
    this.assists = data.champions_assists ?? 0;
    this.bedsBroken = data.champions_beds_broken ?? 0;
    this.bedsLost = data.champions_beds_lost ?? 0;
    this.deaths = data.champions_deaths ?? 0;
    this.finalAssists = data.champions_final_assists ?? 0;
    this.finalDeaths = data.champions_final_deaths ?? 0;
    this.finalKills = data.champions_final_kills ?? 0;
    this.fkdr = data.champions_fkdr ?? 0;
    this.gamesPlayed = data.champions_games_played ?? 0;
    this.kills = data.champions_kills ?? 0;
    this.losses = data.champions_losses ?? 0;
    this.maxWinstreak = data.champions_max_winstreak ?? 0;
    this.wins = data.champions_wins ?? 0;
    this.winstreak = data.champions_winstreak ?? 0;

    this.getPeriodStats = function getPeriodStats(
      year: ChampionYear,
      month: TwoDigitMonth,
    ) {
      if (Number.isNaN(year) || Number.isNaN(month)) {
        return null;
      }

      const finalPoints = data[`champions_${year}_${month}_final_points`] ?? 0;
      const finalRank = data[`champions_${year}_${month}_final_rank`] ?? 0;
      const lastLeague = data[`champions_${year}_${month}_last_league`] ?? 0;
      const removedPoints =
        data[`champions_${year}_${month}_removed_points`] ?? 0;

      return {
        finalPoints,
        finalRank,
        lastLeague,
        removedPoints,
        period: `${year}-${month}`,
      };
    };
  }
}
