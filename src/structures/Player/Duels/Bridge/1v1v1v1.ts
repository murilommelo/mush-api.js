import type { APIPlayerDuelsStats } from "@stats-types/duels.js";

export interface DuelsBridge1v1v1v1Stats {
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
  points: number;
  weeklyKills: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  winstreak: number;
  wins: number;
}

export class DuelsBridge1v1v1v1Stats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.bridge_1v1v1v1_deaths ?? 0;
    this.kills = data.bridge_1v1v1v1_kills ?? 0;
    this.dailyKills = data.bridge_1v1v1v1_kills_daily ?? 0;
    this.monthlyKills = data.bridge_1v1v1v1_kills_monthly ?? 0;
    this.weeklyKills = data.bridge_1v1v1v1_kills_weekly ?? 0;
    this.losses = data.bridge_1v1v1v1_losses ?? 0;
    this.maxWinstreak = data.bridge_1v1v1v1_max_winstreak ?? 0;
    this.gamesPlayed = data.bridge_1v1v1v1_played ?? 0;
    this.points = data.bridge_1v1v1v1_points ?? 0;
    this.wins = data.bridge_1v1v1v1_wins ?? 0;
    this.dailyWins = data.bridge_1v1v1v1_wins_daily ?? 0;
    this.monthlyWins = data.bridge_1v1v1v1_wins_monthly ?? 0;
    this.weeklyWins = data.bridge_1v1v1v1_wins_weekly ?? 0;
    this.winstreak = data.bridge_1v1v1v1_winstreak ?? 0;
    this.dailyWinstreak = data.bridge_1v1v1v1_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.bridge_1v1v1v1_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.bridge_1v1v1v1_winstreak_weekly ?? 0;
  }
}
