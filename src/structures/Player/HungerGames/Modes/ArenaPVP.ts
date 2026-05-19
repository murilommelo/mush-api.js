import type { APIPlayerHungerGamesStats } from "@stats-types/hungergames.js";

export interface HungerGamesArenaPVPStats {
  assists: number;
  deaths: number;
  gamesPlayed: number;
  kd: number;
  kills: number;
  maxKills: number;
  wins: number;
}

export class HungerGamesArenaPVPStats {
  constructor(data: Partial<APIPlayerHungerGamesStats> = {}) {
    this.assists = data.mode_arena_pvp_assists ?? 0;
    this.deaths = data.mode_arena_pvp_deaths ?? 0;
    this.gamesPlayed = data.mode_arena_pvp_games_played ?? 0;
    this.kd = data.mode_arena_pvp_kd ?? 0;
    this.kills = data.mode_arena_pvp_kills ?? 0;
    this.maxKills = data.mode_arena_pvp_max_kills ?? 0;
    this.wins = data.mode_arena_pvp_wins ?? 0;
  }
}
