import type { APIPlayerBedWarsStats } from "@stats-types/bedwars.js";

export interface BedWarsDoublesStats {
  assists: number;
  bedsBroken: number;
  bedsLost: number;
  dailyBedsBroken: number;
  dailyFinalKills: number;
  dailyKills: number;
  dailyWins: number;
  dailyWinstreak: number;
  deaths: number;
  finalAssists: number;
  finalDeaths: number;
  finalKills: number;
  fkdr: number;
  gamesPlayed: number;
  kills: number;
  losses: number;
  maxWinstreak: number;
  monthlyBedsBroken: number;
  monthlyKills: number;
  monthlyFinalKills: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  wins: number;
  winstreak: number;
  weeklyBedsBroken: number;
  weeklyFinalKills: number;
  weeklyKills: number;
  weeklyWins: number;
  weeklyWinstreak: number;
}

export class BedWarsDoublesStats {
  constructor(data: Partial<APIPlayerBedWarsStats> = {}) {
    this.assists = data.doubles_assists ?? 0;
    this.bedsBroken = data.doubles_beds_broken ?? 0;
    this.bedsLost = data.doubles_beds_lost ?? 0;
    this.dailyBedsBroken = data.doubles_beds_broken_daily ?? 0;
    this.dailyFinalKills = data.doubles_final_kills_daily ?? 0;
    this.dailyKills = data.doubles_kills_daily ?? 0;
    this.dailyWins = data.doubles_wins_daily ?? 0;
    this.dailyWinstreak = data.doubles_winstreak_daily ?? 0;
    this.deaths = data.doubles_deaths ?? 0;
    this.finalAssists = data.doubles_final_assists ?? 0;
    this.finalDeaths = data.doubles_final_deaths ?? 0;
    this.finalKills = data.doubles_final_kills ?? 0;
    this.fkdr = data.doubles_fkdr ?? 0;
    this.gamesPlayed = data.doubles_games_played ?? 0;
    this.kills = data.doubles_kills ?? 0;
    this.losses = data.doubles_losses ?? 0;
    this.maxWinstreak = data.doubles_max_winstreak ?? 0;
    this.monthlyBedsBroken = data.doubles_beds_broken_monthly ?? 0;
    this.monthlyFinalKills = data.doubles_final_kills_monthly ?? 0;
    this.monthlyKills = data.doubles_kills_monthly ?? 0;
    this.monthlyWins = data.doubles_wins_monthly ?? 0;
    this.monthlyWinstreak = data.doubles_winstreak_monthly ?? 0;
    this.wins = data.doubles_wins ?? 0;
    this.winstreak = data.doubles_winstreak ?? 0;
    this.weeklyBedsBroken = data.doubles_beds_broken_weekly ?? 0;
    this.weeklyFinalKills = data.doubles_final_kills_weekly ?? 0;
    this.weeklyKills = data.doubles_kills_weekly ?? 0;
    this.weeklyWins = data.doubles_wins_weekly ?? 0;
    this.weeklyWinstreak = data.doubles_winstreak_weekly ?? 0;
  }
}
