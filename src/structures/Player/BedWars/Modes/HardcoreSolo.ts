import type { APIPlayerBedWarsStats } from "@stats-types/bedwars.js";

export interface BedWarsHardcoreSoloStats {
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

export class BedWarsHardcoreSoloStats {
  constructor(data: Partial<APIPlayerBedWarsStats> = {}) {
    this.assists = data.hardcore_solo_assists ?? 0;
    this.bedsBroken = data.hardcore_solo_beds_broken ?? 0;
    this.bedsLost = data.hardcore_solo_beds_lost ?? 0;
    this.deaths = data.hardcore_solo_deaths ?? 0;
    this.finalAssists = data.hardcore_solo_final_assists ?? 0;
    this.finalDeaths = data.hardcore_solo_final_deaths ?? 0;
    this.finalKills = data.hardcore_solo_final_kills ?? 0;
    this.fkdr = data.hardcore_solo_fkdr ?? 0;
    this.gamesPlayed = data.hardcore_solo_games_played ?? 0;
    this.kills = data.hardcore_solo_kills ?? 0;
    this.losses = data.hardcore_solo_losses ?? 0;
    this.maxWinstreak = data.hardcore_solo_max_winstreak ?? 0;
    this.wins = data.hardcore_solo_wins ?? 0;
    this.winstreak = data.hardcore_solo_winstreak ?? 0;
  }
}
