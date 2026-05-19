import type { APIPlayerBedWarsStats } from "@stats-types/bedwars.js";

export interface BedWars1v1Stats {
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

export class BedWars1v1Stats {
  constructor(data: Partial<APIPlayerBedWarsStats> = {}) {
    this.assists = data["1v1_assists"] ?? 0;
    this.bedsBroken = data["1v1_beds_broken"] ?? 0;
    this.bedsLost = data["1v1_beds_lost"] ?? 0;
    this.deaths = data["1v1_deaths"] ?? 0;
    this.finalAssists = data["1v1_final_assists"] ?? 0;
    this.finalDeaths = data["1v1_final_deaths"] ?? 0;
    this.finalKills = data["1v1_final_kills"] ?? 0;
    this.fkdr = data["1v1_fkdr"] ?? 0;
    this.gamesPlayed = data["1v1_games_played"] ?? 0;
    this.kills = data["1v1_kills"] ?? 0;
    this.losses = data["1v1_losses"] ?? 0;
    this.maxWinstreak = data["1v1_max_winstreak"] ?? 0;
    this.wins = data["1v1_wins"] ?? 0;
    this.winstreak = data["1v1_winstreak"] ?? 0;
  }
}
