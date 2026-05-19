import type { APIPlayerHideAndSeekStats } from "@stats-types/seek";

export interface HideAndSeekHiderStats {
  blocksChanged: number;
  dailyWins: number;
  dailyWinstreak: number;
  deaths: number;
  frozen: number;
  gamesPlayed: number;
  losses: number;
  maxWinstreak: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  seekersStunned: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  wins: number;
  winstreak: number;
}

export class HideAndSeekHiderStats {
  constructor(data: Partial<APIPlayerHideAndSeekStats> = {}) {
    this.blocksChanged = data.hider_blocks_changed ?? 0;
    this.deaths = data.hider_deaths ?? 0;
    this.frozen = data.hider_frozen ?? 0;
    this.losses = data.hider_losses ?? 0;
    this.maxWinstreak = data.hider_max_winstreak ?? 0;
    this.gamesPlayed = data.hider_played ?? 0;
    this.seekersStunned = data.hider_stunned_seekers ?? 0;
    this.wins = data.hider_wins ?? 0;
    this.dailyWins = data.hider_wins_daily ?? 0;
    this.monthlyWins = data.hider_wins_monthly ?? 0;
    this.weeklyWins = data.hider_wins_weekly ?? 0;
    this.winstreak = data.hider_winstreak ?? 0;
    this.dailyWinstreak = data.hider_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.hider_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.hider_winstreak_weekly ?? 0;
  }
}
