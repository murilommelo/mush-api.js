import type { APIPlayerHideAndSeekStats } from "@stats-types/seek";

export class HideAndSeekSeekerStats {
  public dailyWins: number;
  public dailyWinstreak: number;
  public deaths: number;
  public hidersDetected: number;
  public gamesPlayed: number;
  public kills: number;
  public losses: number;
  public monthlyWins: number;
  public monthlyWinstreak: number;
  public maxWinstreak: number;
  public weeklyWins: number;
  public weeklyWinstreak: number;
  public wins: number;
  public winstreak: number;

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
    this.monthlyWinstreak = data.seeker_winstreak_monthly ?? 0;
  }
}
