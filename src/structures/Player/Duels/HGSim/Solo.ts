import type { APIPlayerDuelsStats } from "@stats-types/duels.js";

export interface DuelsHGSimSoloStats {
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

export class DuelsHGSimSoloStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.hgsim_solo_deaths ?? 0;
    this.kills = data.hgsim_solo_kills ?? 0;
    this.dailyKills = data.hgsim_solo_kills_daily ?? 0;
    this.monthlyKills = data.hgsim_solo_kills_monthly ?? 0;
    this.weeklyKills = data.hgsim_solo_kills_weekly ?? 0;
    this.losses = data.hgsim_solo_losses ?? 0;
    this.maxWinstreak = data.hgsim_solo_max_winstreak ?? 0;
    this.gamesPlayed = data.hgsim_solo_played ?? 0;
    this.wins = data.hgsim_solo_wins ?? 0;
    this.dailyWins = data.hgsim_solo_wins_daily ?? 0;
    this.monthlyWins = data.hgsim_solo_wins_monthly ?? 0;
    this.weeklyWins = data.hgsim_solo_wins_weekly ?? 0;
    this.winstreak = data.hgsim_solo_winstreak ?? 0;
    this.dailyWinstreak = data.hgsim_solo_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.hgsim_solo_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.hgsim_solo_winstreak_weekly ?? 0;
  }
}
