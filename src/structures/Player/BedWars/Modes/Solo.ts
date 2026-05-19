import type { APIPlayerBedWarsStats } from "@stats-types/bedwars.js";

export interface BedWarsSoloStats {
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

export class BedWarsSoloStats {
  constructor(data: Partial<APIPlayerBedWarsStats> = {}) {
    this.assists = data.solo_assists ?? 0;
    this.bedsBroken = data.solo_beds_broken ?? 0;
    this.bedsLost = data.solo_beds_lost ?? 0;
    this.dailyBedsBroken = data.solo_beds_broken_daily ?? 0;
    this.dailyFinalKills = data.solo_final_kills_daily ?? 0;
    this.dailyKills = data.solo_kills_daily ?? 0;
    this.dailyWins = data.solo_wins_daily ?? 0;
    this.dailyWinstreak = data.solo_winstreak_daily ?? 0;
    this.deaths = data.solo_deaths ?? 0;
    this.finalAssists = data.solo_final_assists ?? 0;
    this.finalDeaths = data.solo_final_deaths ?? 0;
    this.finalKills = data.solo_final_kills ?? 0;
    this.fkdr = data.solo_fkdr ?? 0;
    this.gamesPlayed = data.solo_games_played ?? 0;
    this.kills = data.solo_kills ?? 0;
    this.losses = data.solo_losses ?? 0;
    this.maxWinstreak = data.solo_max_winstreak ?? 0;
    this.monthlyBedsBroken = data.solo_beds_broken_monthly ?? 0;
    this.monthlyFinalKills = data.solo_final_kills_monthly ?? 0;
    this.monthlyKills = data.solo_kills_monthly ?? 0;
    this.monthlyWins = data.solo_wins_monthly ?? 0;
    this.monthlyWinstreak = data.solo_winstreak_monthly ?? 0;
    this.wins = data.solo_wins ?? 0;
    this.winstreak = data.solo_winstreak ?? 0;
    this.weeklyBedsBroken = data.solo_beds_broken_weekly ?? 0;
    this.weeklyFinalKills = data.solo_final_kills_weekly ?? 0;
    this.weeklyKills = data.solo_kills_weekly ?? 0;
    this.weeklyWins = data.solo_wins_weekly ?? 0;
    this.weeklyWinstreak = data.solo_winstreak_weekly ?? 0;
  }
}
