import type { APIPlayerDuelsStats } from "@stats-types/duels.js";

export interface DuelsBridgeThreeStats {
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

export class DuelsBridgeThreeStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.bridge_three_deaths ?? 0;
    this.kills = data.bridge_three_kills ?? 0;
    this.dailyKills = data.bridge_three_kills_daily ?? 0;
    this.monthlyKills = data.bridge_three_kills_monthly ?? 0;
    this.weeklyKills = data.bridge_three_kills_weekly ?? 0;
    this.losses = data.bridge_three_losses ?? 0;
    this.maxWinstreak = data.bridge_three_max_winstreak ?? 0;
    this.gamesPlayed = data.bridge_three_played ?? 0;
    this.points = data.bridge_three_points ?? 0;
    this.wins = data.bridge_three_wins ?? 0;
    this.dailyWins = data.bridge_three_wins_daily ?? 0;
    this.monthlyWins = data.bridge_three_wins_monthly ?? 0;
    this.weeklyWins = data.bridge_three_wins_weekly ?? 0;
    this.winstreak = data.bridge_three_winstreak ?? 0;
    this.dailyWinstreak = data.bridge_three_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.bridge_three_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.bridge_three_winstreak_weekly ?? 0;
  }
}
