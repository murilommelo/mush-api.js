import type { APIPlayerBedWarsStats } from "@stats-types/bedwars.js";

export interface BedWars4sStats {
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

export class BedWars4sStats {
  constructor(data: Partial<APIPlayerBedWarsStats> = {}) {
    this.assists = data["4s_assists"] ?? 0;
    this.bedsBroken = data["4s_beds_broken"] ?? 0;
    this.bedsLost = data["4s_beds_lost"] ?? 0;
    this.deaths = data["4s_deaths"] ?? 0;
    this.finalAssists = data["4s_final_assists"] ?? 0;
    this.finalDeaths = data["4s_final_deaths"] ?? 0;
    this.finalKills = data["4s_final_kills"] ?? 0;
    this.fkdr = data["4s_fkdr"] ?? 0;
    this.gamesPlayed = data["4s_games_played"] ?? 0;
    this.kills = data["4s_kills"] ?? 0;
    this.losses = data["4s_losses"] ?? 0;
    this.maxWinstreak = data["4s_max_winstreak"] ?? 0;
    this.wins = data["4s_wins"] ?? 0;
    this.winstreak = data["4s_winstreak"] ?? 0;
  }
}
