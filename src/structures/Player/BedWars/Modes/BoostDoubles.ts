import type { APIPlayerBedWarsStats } from "@stats-types/bedwars.js";

export interface BedWarsBoostDoublesStats {
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

export class BedWarsBoostDoublesStats {
  constructor(data: Partial<APIPlayerBedWarsStats> = {}) {
    this.assists = data.boost_doubles_assists ?? 0;
    this.bedsBroken = data.boost_doubles_beds_broken ?? 0;
    this.bedsLost = data.boost_doubles_beds_lost ?? 0;
    this.deaths = data.boost_doubles_deaths ?? 0;
    this.finalAssists = data.boost_doubles_final_assists ?? 0;
    this.finalDeaths = data.boost_doubles_final_deaths ?? 0;
    this.finalKills = data.boost_doubles_final_kills ?? 0;
    this.fkdr = data.boost_doubles_fkdr ?? 0;
    this.gamesPlayed = data.boost_doubles_games_played ?? 0;
    this.kills = data.boost_doubles_kills ?? 0;
    this.losses = data.boost_doubles_losses ?? 0;
    this.maxWinstreak = data.boost_doubles_max_winstreak ?? 0;
    this.wins = data.boost_doubles_wins ?? 0;
    this.winstreak = data.boost_doubles_winstreak ?? 0;
  }
}
