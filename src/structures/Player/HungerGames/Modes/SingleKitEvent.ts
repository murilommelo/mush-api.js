import type { APIPlayerHungerGamesStats } from "@stats-types/hungergames.js";

export interface HungerGamesSingleKitEventStats {
  assists: number;
  deaths: number;
  gamesPlayed: number;
  kd: number;
  kills: number;
  maxKills: number;
  wins: number;
}

export class HungerGamesSingleKitEventStats {
  constructor(data: Partial<APIPlayerHungerGamesStats> = {}) {
    this.assists = data.mode_singlekitevent_assists ?? 0;
    this.deaths = data.mode_singlekitevent_deaths ?? 0;
    this.gamesPlayed = data.mode_singlekitevent_games_played ?? 0;
    this.kd = data.mode_singlekitevent_kd ?? 0;
    this.kills = data.mode_singlekitevent_kills ?? 0;
    this.maxKills = data.mode_singlekitevent_max_kills ?? 0;
    this.wins = data.mode_singlekitevent_wins ?? 0;
  }
}
