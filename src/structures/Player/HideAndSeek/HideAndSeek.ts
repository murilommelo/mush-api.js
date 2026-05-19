import type { APIPlayerHideAndSeekStats } from "@stats-types/seek";
import { HideAndSeekHiderStats } from "./Hider";
import { HideAndSeekSeekerStats } from "./Seeker";

export interface HideAndSeekStats {
  dailyWins: number;
  dailyWinstreak: number;
  deaths: number;
  gamesPlayed: number;
  kills: number;
  losses: number;
  maxWinstreak: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  wins: number;
  winstreak: number;
  hiderRole: HideAndSeekHiderStats;
  seekerRole: HideAndSeekSeekerStats;
}

export class HideAndSeekStats {
  constructor(data: Partial<APIPlayerHideAndSeekStats> = {}) {
    this.deaths = data.deaths ?? 0;
    this.kills = data.kills ?? 0;
    this.losses = data.losses ?? 0;
    this.maxWinstreak = data.max_winstreak ?? 0;
    this.gamesPlayed = data.played ?? 0;
    this.wins = data.wins ?? 0;
    this.dailyWins = data.wins_daily ?? 0;
    this.monthlyWins = data.wins_monthly ?? 0;
    this.weeklyWins = data.wins_weekly ?? 0;
    this.winstreak = data.winstreak ?? 0;
    this.dailyWinstreak = data.winstreak_daily ?? 0;
    this.monthlyWinstreak = data.winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.winstreak_weekly ?? 0;

    this.hiderRole = new HideAndSeekHiderStats(data);
    this.seekerRole = new HideAndSeekSeekerStats(data);
  }
}
