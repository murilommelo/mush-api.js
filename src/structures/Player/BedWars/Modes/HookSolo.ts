import type { APIPlayerBedWarsStats } from "@stats-types/bedwars.js";

export interface BedWarsHookSoloStats {
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

export class BedWarsHookSoloStats {
  constructor(data: Partial<APIPlayerBedWarsStats> = {}) {
    this.assists = data.hook_solo_assists ?? 0;
    this.bedsBroken = data.hook_solo_beds_broken ?? 0;
    this.bedsLost = data.hook_solo_beds_lost ?? 0;
    this.deaths = data.hook_solo_deaths ?? 0;
    this.finalAssists = data.hook_solo_final_assists ?? 0;
    this.finalDeaths = data.hook_solo_final_deaths ?? 0;
    this.finalKills = data.hook_solo_final_kills ?? 0;
    this.fkdr = data.hook_solo_fkdr ?? 0;
    this.gamesPlayed = data.hook_solo_games_played ?? 0;
    this.kills = data.hook_solo_kills ?? 0;
    this.losses = data.hook_solo_losses ?? 0;
    this.maxWinstreak = data.hook_solo_max_winstreak ?? 0;
    this.wins = data.hook_solo_wins ?? 0;
    this.winstreak = data.hook_solo_winstreak ?? 0;
  }
}
