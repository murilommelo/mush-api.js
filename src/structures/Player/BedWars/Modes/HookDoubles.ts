import type { APIPlayerBedWarsStats } from "@stats-types/bedwars.js";

export interface BedWarsHookDoublesStats {
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
}

export class BedWarsHookDoublesStats {
  constructor(data: Partial<APIPlayerBedWarsStats> = {}) {
    this.assists = data.hook_doubles_assists ?? 0;
    this.bedsBroken = data.hook_doubles_beds_broken ?? 0;
    this.bedsLost = data.hook_doubles_beds_lost ?? 0;
    this.deaths = data.hook_doubles_deaths ?? 0;
    this.finalAssists = data.hook_doubles_final_assists ?? 0;
    this.finalDeaths = data.hook_doubles_final_deaths ?? 0;
    this.finalKills = data.hook_doubles_final_kills ?? 0;
    this.fkdr = data.hook_doubles_fkdr ?? 0;
    this.gamesPlayed = data.hook_doubles_games_played ?? 0;
    this.kills = data.hook_doubles_kills ?? 0;
    this.losses = data.hook_doubles_losses ?? 0;
    this.maxWinstreak = data.hook_doubles_max_winstreak ?? 0;
    this.wins = data.hook_doubles_wins ?? 0;
    this.winstreak = data.hook_doubles_winstreak ?? 0;
  }
}
