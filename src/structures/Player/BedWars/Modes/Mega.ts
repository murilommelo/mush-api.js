import type { APIPlayerBedWarsStats } from "@stats-types/bedwars.js";

export interface BedWarsMegaStats {
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

export class BedWarsMegaStats {
  constructor(data: Partial<APIPlayerBedWarsStats> = {}) {
    this.assists = data.mega_assists ?? 0;
    this.bedsBroken = data.mega_beds_broken ?? 0;
    this.bedsLost = data.mega_beds_lost ?? 0;
    this.dailyBedsBroken = data.mega_beds_broken_daily ?? 0;
    this.dailyFinalKills = data.mega_final_kills_daily ?? 0;
    this.dailyKills = data.mega_kills_daily ?? 0;
    this.dailyWins = data.mega_wins_daily ?? 0;
    this.dailyWinstreak = data.mega_winstreak_daily ?? 0;
    this.deaths = data.mega_deaths ?? 0;
    this.finalAssists = data.mega_final_assists ?? 0;
    this.finalDeaths = data.mega_final_deaths ?? 0;
    this.finalKills = data.mega_final_kills ?? 0;
    this.fkdr = data.mega_fkdr ?? 0;
    this.gamesPlayed = data.mega_games_played ?? 0;
    this.kills = data.mega_kills ?? 0;
    this.losses = data.mega_losses ?? 0;
    this.maxWinstreak = data.mega_max_winstreak ?? 0;
    this.monthlyBedsBroken = data.mega_beds_broken_monthly ?? 0;
    this.monthlyFinalKills = data.mega_final_kills_monthly ?? 0;
    this.monthlyKills = data.mega_kills_monthly ?? 0;
    this.monthlyWins = data.mega_wins_monthly ?? 0;
    this.monthlyWinstreak = data.mega_winstreak_monthly ?? 0;
    this.wins = data.mega_wins ?? 0;
    this.winstreak = data.mega_winstreak ?? 0;
    this.weeklyBedsBroken = data.mega_beds_broken_weekly ?? 0;
    this.weeklyFinalKills = data.mega_final_kills_weekly ?? 0;
    this.weeklyKills = data.mega_kills_weekly ?? 0;
    this.weeklyWins = data.mega_wins_weekly ?? 0;
    this.weeklyWinstreak = data.mega_winstreak_weekly ?? 0;
  }
}
