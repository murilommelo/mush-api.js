import type { APIPlayerDuelsStats } from "@stats-types/duels.js";

export interface DuelsBoxingSoloStats {
  dailyKills: number;
  dailyWins: number;
  dailyWinstreak: number;
  deaths: number;
  gamesPlayed: number;
  kills: number;
  losses: number;
  monthlyKills: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  maxWinstreak: number;
  wins: number;
  winstreak: number;
  weeklyKills: number;
  weeklyWins: number;
  weeklyWinstreak: number;
}

export class DuelsBoxingSoloStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.boxing_deaths ?? 0;
    this.kills = data.boxing_kills ?? 0;
    this.dailyKills = data.boxing_kills_daily ?? 0;
    this.monthlyKills = data.boxing_kills_monthly ?? 0;
    this.weeklyKills = data.boxing_kills_weekly ?? 0;
    this.losses = data.boxing_losses ?? 0;
    this.maxWinstreak = data.boxing_max_winstreak ?? 0;
    this.gamesPlayed = data.boxing_played ?? 0;
    this.wins = data.boxing_wins ?? 0;
    this.dailyWins = data.boxing_wins_daily ?? 0;
    this.monthlyWins = data.boxing_wins_monthly ?? 0;
    this.weeklyWins = data.boxing_wins_weekly ?? 0;
    this.winstreak = data.boxing_winstreak ?? 0;
    this.dailyWinstreak = data.boxing_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.boxing_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.boxing_winstreak_weekly ?? 0;
  }
}
