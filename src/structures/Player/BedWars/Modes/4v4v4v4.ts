import type { APIPlayerBedWarsStats } from "@stats-types/bedwars.js";

export interface BedWars4v4v4v4Stats {
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

export class BedWars4v4v4v4Stats {
  constructor(data: Partial<APIPlayerBedWarsStats> = {}) {
    this.assists = data["4v4v4v4_assists"] ?? 0;
    this.bedsBroken = data["4v4v4v4_beds_broken"] ?? 0;
    this.bedsLost = data["4v4v4v4_beds_lost"] ?? 0;
    this.deaths = data["4v4v4v4_deaths"] ?? 0;
    this.finalAssists = data["4v4v4v4_final_assists"] ?? 0;
    this.finalDeaths = data["4v4v4v4_final_deaths"] ?? 0;
    this.finalKills = data["4v4v4v4_final_kills"] ?? 0;
    this.fkdr = data["4v4v4v4_fkdr"] ?? 0;
    this.gamesPlayed = data["4v4v4v4_games_played"] ?? 0;
    this.kills = data["4v4v4v4_kills"] ?? 0;
    this.losses = data["4v4v4v4_losses"] ?? 0;
    this.maxWinstreak = data["4v4v4v4_max_winstreak"] ?? 0;
    this.wins = data["4v4v4v4_wins"] ?? 0;
    this.winstreak = data["4v4v4v4_winstreak"] ?? 0;
  }
}
