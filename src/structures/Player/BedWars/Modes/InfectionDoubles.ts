import type { APIPlayerBedWarsStats } from "@stats-types/bedwars.js";

export interface BedWarsInfectionDoublesStats {
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

export class BedWarsInfectionDoublesStats {
  constructor(data: Partial<APIPlayerBedWarsStats> = {}) {
    this.assists = data.infection_doubles_assists ?? 0;
    this.bedsBroken = data.infection_doubles_beds_broken ?? 0;
    this.bedsLost = data.infection_doubles_beds_lost ?? 0;
    this.deaths = data.infection_doubles_deaths ?? 0;
    this.finalAssists = data.infection_doubles_final_assists ?? 0;
    this.finalDeaths = data.infection_doubles_final_deaths ?? 0;
    this.finalKills = data.infection_doubles_final_kills ?? 0;
    this.fkdr = data.infection_doubles_fkdr ?? 0;
    this.gamesPlayed = data.infection_doubles_games_played ?? 0;
    this.kills = data.infection_doubles_kills ?? 0;
    this.losses = data.infection_doubles_losses ?? 0;
    this.maxWinstreak = data.infection_doubles_max_winstreak ?? 0;
    this.wins = data.infection_doubles_wins ?? 0;
    this.winstreak = data.infection_doubles_winstreak ?? 0;
  }
}
