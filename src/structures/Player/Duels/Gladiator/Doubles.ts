import type { APIPlayerDuelsStats } from "@stats-types/duels.js";

export interface DuelsGladiatorDoublesStats {
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
  winstreak: number;
  wins: number;
}

export class DuelsGladiatorDoublesStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.gladiator_doubles_deaths ?? 0;
    this.kills = data.gladiator_doubles_kills ?? 0;
    this.dailyKills = data.gladiator_doubles_kills_daily ?? 0;
    this.monthlyKills = data.gladiator_doubles_kills_monthly ?? 0;
    this.weeklyKills = data.gladiator_doubles_kills_weekly ?? 0;
    this.losses = data.gladiator_doubles_losses ?? 0;
    this.maxWinstreak = data.gladiator_doubles_max_winstreak ?? 0;
    this.gamesPlayed = data.gladiator_doubles_played ?? 0;
    this.wins = data.gladiator_doubles_wins ?? 0;
    this.dailyWins = data.gladiator_doubles_wins_daily ?? 0;
    this.monthlyWins = data.gladiator_doubles_wins_monthly ?? 0;
    this.weeklyWins = data.gladiator_doubles_wins_weekly ?? 0;
    this.winstreak = data.gladiator_doubles_winstreak ?? 0;
    this.dailyWinstreak = data.gladiator_doubles_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.gladiator_doubles_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.gladiator_doubles_winstreak_weekly ?? 0;
  }
}
