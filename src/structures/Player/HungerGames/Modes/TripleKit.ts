import type { APIPlayerHungerGamesStats } from "@stats-types/hungergames.js";

export interface HungerGamesTripleKitStats {
  assists: number;
  deaths: number;
  gamesPlayed: number;
  kd: number;
  kills: number;
  maxKills: number;
  wins: number;
}

export class HungerGamesTripleKitStats {
  constructor(data: Partial<APIPlayerHungerGamesStats> = {}) {
    this.assists = data.mode_triplekit_assists ?? 0;
    this.deaths = data.mode_triplekit_deaths ?? 0;
    this.gamesPlayed = data.mode_triplekit_games_played ?? 0;
    this.kd = data.mode_triplekit_kd ?? 0;
    this.kills = data.mode_triplekit_kills ?? 0;
    this.maxKills = data.mode_triplekit_max_kills ?? 0;
    this.wins = data.mode_triplekit_wins ?? 0;
  }
}
