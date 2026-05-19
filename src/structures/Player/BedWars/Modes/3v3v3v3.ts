import type { APIPlayerBedWarsStats } from "@stats-types/bedwars.js";

export interface BedWars3v3v3v3Stats {
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

export class BedWars3v3v3v3Stats {
  constructor(data: Partial<APIPlayerBedWarsStats> = {}) {
    this.assists = data["3v3v3v3_assists"] ?? 0;
    this.bedsBroken = data["3v3v3v3_beds_broken"] ?? 0;
    this.bedsLost = data["3v3v3v3_beds_lost"] ?? 0;
    this.deaths = data["3v3v3v3_deaths"] ?? 0;
    this.finalAssists = data["3v3v3v3_final_assists"] ?? 0;
    this.finalDeaths = data["3v3v3v3_final_deaths"] ?? 0;
    this.finalKills = data["3v3v3v3_final_kills"] ?? 0;
    this.fkdr = data["3v3v3v3_fkdr"] ?? 0;
    this.gamesPlayed = data["3v3v3v3_games_played"] ?? 0;
    this.kills = data["3v3v3v3_kills"] ?? 0;
    this.losses = data["3v3v3v3_losses"] ?? 0;
    this.maxWinstreak = data["3v3v3v3_max_winstreak"] ?? 0;
    this.wins = data["3v3v3v3_wins"] ?? 0;
    this.winstreak = data["3v3v3v3_winstreak"] ?? 0;
  }
}
