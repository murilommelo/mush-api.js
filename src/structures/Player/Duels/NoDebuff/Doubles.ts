import type { APIPlayerDuelsStats } from "@stats-types/duels.js";

export interface DuelsNoDebuffDoublesStats {
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

export class DuelsNoDebuffDoublesStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.no_debuff_doubles_deaths ?? 0;
    this.kills = data.no_debuff_doubles_kills ?? 0;
    this.dailyKills = data.no_debuff_doubles_kills_daily ?? 0;
    this.monthlyKills = data.no_debuff_doubles_kills_monthly ?? 0;
    this.weeklyKills = data.no_debuff_doubles_kills_weekly ?? 0;
    this.losses = data.no_debuff_doubles_losses ?? 0;
    this.maxWinstreak = data.no_debuff_doubles_max_winstreak ?? 0;
    this.gamesPlayed = data.no_debuff_doubles_played ?? 0;
    this.wins = data.no_debuff_doubles_wins ?? 0;
    this.dailyWins = data.no_debuff_doubles_wins_daily ?? 0;
    this.monthlyWins = data.no_debuff_doubles_wins_monthly ?? 0;
    this.weeklyWins = data.no_debuff_doubles_wins_weekly ?? 0;
    this.winstreak = data.no_debuff_doubles_winstreak ?? 0;
    this.dailyWinstreak = data.no_debuff_doubles_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.no_debuff_doubles_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.no_debuff_doubles_winstreak_weekly ?? 0;
  }
}
