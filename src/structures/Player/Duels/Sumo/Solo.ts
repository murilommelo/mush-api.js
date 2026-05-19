import type { APIPlayerDuelsStats } from "@stats-types/duels.js";

export interface DuelsSumoSoloStats {
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

export class DuelsSumoSoloStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.sumo_solo_deaths ?? 0;
    this.kills = data.sumo_solo_kills ?? 0;
    this.dailyKills = data.sumo_solo_kills_daily ?? 0;
    this.monthlyKills = data.sumo_solo_kills_monthly ?? 0;
    this.weeklyKills = data.sumo_solo_kills_weekly ?? 0;
    this.losses = data.sumo_solo_losses ?? 0;
    this.maxWinstreak = data.sumo_solo_max_winstreak ?? 0;
    this.gamesPlayed = data.sumo_solo_played ?? 0;
    this.wins = data.sumo_solo_wins ?? 0;
    this.dailyWins = data.sumo_solo_wins_daily ?? 0;
    this.monthlyWins = data.sumo_solo_wins_monthly ?? 0;
    this.weeklyWins = data.sumo_solo_wins_weekly ?? 0;
    this.winstreak = data.sumo_solo_winstreak ?? 0;
    this.dailyWinstreak = data.sumo_solo_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.sumo_solo_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.sumo_solo_winstreak_weekly ?? 0;
  }
}
