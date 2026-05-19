import type { APIPlayerBedWarsStats } from "@stats-types/bedwars.js";

export interface BedWars2v2Stats {
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

export class BedWars2v2Stats {
  constructor(data: Partial<APIPlayerBedWarsStats> = {}) {
    this.assists = data["2v2_assists"] ?? 0;
    this.bedsBroken = data["2v2_beds_broken"] ?? 0;
    this.bedsLost = data["2v2_beds_lost"] ?? 0;
    this.deaths = data["2v2_deaths"] ?? 0;
    this.finalAssists = data["2v2_final_assists"] ?? 0;
    this.finalDeaths = data["2v2_final_deaths"] ?? 0;
    this.finalKills = data["2v2_final_kills"] ?? 0;
    this.fkdr = data["2v2_fkdr"] ?? 0;
    this.gamesPlayed = data["2v2_games_played"] ?? 0;
    this.kills = data["2v2_kills"] ?? 0;
    this.losses = data["2v2_losses"] ?? 0;
    this.maxWinstreak = data["2v2_max_winstreak"] ?? 0;
    this.wins = data["2v2_wins"] ?? 0;
    this.winstreak = data["2v2_winstreak"] ?? 0;
  }
}
