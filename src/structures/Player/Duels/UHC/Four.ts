import type { APIPlayerDuelsStats } from "@stats-types/duels.js";

export interface DuelsUHCFourStats {
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

export class DuelsUHCFourStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.uhc_four_deaths ?? 0;
    this.kills = data.uhc_four_kills ?? 0;
    this.dailyKills = data.uhc_four_kills_daily ?? 0;
    this.monthlyKills = data.uhc_four_kills_monthly ?? 0;
    this.weeklyKills = data.uhc_four_kills_weekly ?? 0;
    this.losses = data.uhc_four_losses ?? 0;
    this.maxWinstreak = data.uhc_four_max_winstreak ?? 0;
    this.gamesPlayed = data.uhc_four_played ?? 0;
    this.wins = data.uhc_four_wins ?? 0;
    this.dailyWins = data.uhc_four_wins_daily ?? 0;
    this.monthlyWins = data.uhc_four_wins_monthly ?? 0;
    this.weeklyWins = data.uhc_four_wins_weekly ?? 0;
    this.winstreak = data.uhc_four_winstreak ?? 0;
    this.dailyWinstreak = data.uhc_four_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.uhc_four_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.uhc_four_winstreak_weekly ?? 0;
  }
}
