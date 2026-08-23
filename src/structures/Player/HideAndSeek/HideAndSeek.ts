import type { APIPlayerHideAndSeekStats } from "@stats-types/seek";
import { HideAndSeekHiderStats } from "./Hider";
import { HideAndSeekSeekerStats } from "./Seeker";

export class HideAndSeekStats {
  public dailyWins: number;
  public dailyWinstreak: number;
  public deaths: number;
  public gamesPlayed: number;
  public kills: number;
  public losses: number;
  public maxWinstreak: number;
  public monthlyWins: number;
  public monthlyWinstreak: number;
  public weeklyWins: number;
  public weeklyWinstreak: number;
  public wins: number;
  public winstreak: number;
  public hiderRole: HideAndSeekHiderStats;
  public seekerRole: HideAndSeekSeekerStats;

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
