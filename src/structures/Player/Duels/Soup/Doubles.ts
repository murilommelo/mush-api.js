import type { APIPlayerDuelsStats } from "@stats-types/duels.js";

export interface DuelsSoupDoublesStats {
  dailyKills: number;
  dailyWins: number;
  dailyWinstreak: number;
  deaths: number;
  gamesPlayed: number;
  kills: number;
  losses: number;
  maxWinstreak: number;
  monthlyKills: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  weeklyKills: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  wins: number;
  winstreak: number;
}

export class DuelsSoupDoublesStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.soup_doubles_deaths ?? 0;
    this.kills = data.soup_doubles_kills ?? 0;
    this.dailyKills = data.soup_doubles_kills_daily ?? 0;
    this.monthlyKills = data.soup_doubles_kills_monthly ?? 0;
    this.weeklyKills = data.soup_doubles_kills_weekly ?? 0;
    this.losses = data.soup_doubles_losses ?? 0;
    this.maxWinstreak = data.soup_doubles_max_winstreak ?? 0;
    this.gamesPlayed = data.soup_doubles_played ?? 0;
    this.wins = data.soup_doubles_wins ?? 0;
    this.dailyWins = data.soup_doubles_wins_daily ?? 0;
    this.monthlyWins = data.soup_doubles_wins_monthly ?? 0;
    this.weeklyWins = data.soup_doubles_wins_weekly ?? 0;
    this.winstreak = data.soup_doubles_winstreak ?? 0;
    this.dailyWinstreak = data.soup_doubles_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.soup_doubles_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.soup_doubles_winstreak_weekly ?? 0;
  }
}
