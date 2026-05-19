import type { APIPlayerBedWarsStats } from "@stats-types/bedwars.js";

export interface BedWarsClassicSoloStats {
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

export class BedWarsClassicSoloStats {
  constructor(data: Partial<APIPlayerBedWarsStats> = {}) {
    this.assists = data.classic_solo_assists ?? 0;
    this.bedsBroken = data.classic_solo_beds_broken ?? 0;
    this.bedsLost = data.classic_solo_beds_lost ?? 0;
    this.deaths = data.classic_solo_deaths ?? 0;
    this.finalAssists = data.classic_solo_final_assists ?? 0;
    this.finalDeaths = data.classic_solo_final_deaths ?? 0;
    this.finalKills = data.classic_solo_final_kills ?? 0;
    this.fkdr = data.classic_solo_fkdr ?? 0;
    this.gamesPlayed = data.classic_solo_games_played ?? 0;
    this.kills = data.classic_solo_kills ?? 0;
    this.losses = data.classic_solo_losses ?? 0;
    this.maxWinstreak = data.classic_solo_max_winstreak ?? 0;
    this.wins = data.classic_solo_wins ?? 0;
    this.winstreak = data.classic_solo_winstreak ?? 0;
  }
}
