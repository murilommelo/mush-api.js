import type { APIPlayerHungerGamesStats } from "@stats-types/hungergames.js";

export interface HungerGamesClanxClanStats {
  assists: number;
  deaths: number;
  gamesPlayed: number;
  kd: number;
  kills: number;
  maxKills: number;
  wins: number;
}

export class HungerGamesClanxClanStats {
  constructor(data: Partial<APIPlayerHungerGamesStats> = {}) {
    this.assists = data.mode_clanxclan_assists ?? 0;
    this.deaths = data.mode_clanxclan_deaths ?? 0;
    this.gamesPlayed = data.mode_clanxclan_games_played ?? 0;
    this.kd = data.mode_clanxclan_kd ?? 0;
    this.kills = data.mode_clanxclan_kills ?? 0;
    this.maxKills = data.mode_clanxclan_max_kills ?? 0;
    this.wins = data.mode_clanxclan_wins ?? 0;
  }
}
