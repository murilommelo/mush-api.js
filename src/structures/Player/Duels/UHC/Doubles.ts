import type { APIPlayerDuelsStats } from "@stats-types/duels.js";

export interface DuelsUHCDoublesStats {
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

export class DuelsUHCDoublesStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.uhc_doubles_deaths ?? 0;
    this.kills = data.uhc_doubles_kills ?? 0;
    this.dailyKills = data.uhc_doubles_kills_daily ?? 0;
    this.monthlyKills = data.uhc_doubles_kills_monthly ?? 0;
    this.weeklyKills = data.uhc_doubles_kills_weekly ?? 0;
    this.losses = data.uhc_doubles_losses ?? 0;
    this.maxWinstreak = data.uhc_doubles_max_winstreak ?? 0;
    this.gamesPlayed = data.uhc_doubles_played ?? 0;
    this.wins = data.uhc_doubles_wins ?? 0;
    this.dailyWins = data.uhc_doubles_wins_daily ?? 0;
    this.monthlyWins = data.uhc_doubles_wins_monthly ?? 0;
    this.weeklyWins = data.uhc_doubles_wins_weekly ?? 0;
    this.winstreak = data.uhc_doubles_winstreak ?? 0;
    this.dailyWinstreak = data.uhc_doubles_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.uhc_doubles_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.uhc_doubles_winstreak_weekly ?? 0;
  }
}
