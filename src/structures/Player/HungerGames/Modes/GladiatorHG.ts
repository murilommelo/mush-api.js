import type { APIPlayerHungerGamesStats } from "@stats-types/hungergames.js";

export interface HungerGamesGladiatorHGStats {
  assists: number;
  deaths: number;
  gamesPlayed: number;
  kd: number;
  kills: number;
  maxKills: number;
  wins: number;
}

export class HungerGamesGladiatorHGStats {
  constructor(data: Partial<APIPlayerHungerGamesStats> = {}) {
    this.assists = data.mode_gladiatorhg_assists ?? 0;
    this.deaths = data.mode_gladiatorhg_deaths ?? 0;
    this.gamesPlayed = data.mode_gladiatorhg_games_played ?? 0;
    this.kd = data.mode_gladiatorhg_kd ?? 0;
    this.kills = data.mode_gladiatorhg_kills ?? 0;
    this.maxKills = data.mode_gladiatorhg_max_kills ?? 0;
    this.wins = data.mode_gladiatorhg_wins ?? 0;
  }
}
