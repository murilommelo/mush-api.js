import type { APIPlayerHideAndSeekStats } from "@stats-types/seek";

export interface HideAndSeekSeekerStats {
  dailyWins: number;
  dailyWinstreak: number;
  deaths: number;
  hidersDetected: number;
  gamesPlayed: number;
  kills: number;
  losses: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  maxWinstreak: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  wins: number;
  winstreak: number;
}

export class HideAndSeekSeekerStats {
  constructor(data: Partial<APIPlayerHideAndSeekStats> = {}) {
    this.deaths = data.seeker_deaths ?? 0;
    this.hidersDetected = data.seeker_detected_hiders ?? 0;
    this.kills = data.seeker_kills ?? 0;
    this.losses = data.seeker_losses ?? 0;
    this.maxWinstreak = data.seeker_max_winstreak ?? 0;
    this.gamesPlayed = data.seeker_played ?? 0;
    this.wins = data.seeker_wins ?? 0;
    this.dailyWins = data.seeker_wins_daily ?? 0;
    this.monthlyWins = data.seeker_wins_monthly ?? 0;
    this.weeklyWins = data.seeker_wins_weekly ?? 0;
    this.winstreak = data.seeker_winstreak ?? 0;
    this.dailyWinstreak = data.seeker_winstreak_daily ?? 0;
    this.weeklyWinstreak = data.seeker_winstreak_weekly ?? 0;
    this.dailyWinstreak = data.seeker_winstreak_daily ?? 0;
  }
}
