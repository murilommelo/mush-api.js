import type { APIPlayerQuickBuildersStats } from "@stats-types/quickbuilders";

export class QuickBuildersStats {
  public builds: number;
  public level: number;
  public losses: number;
  public maxPerfectBuildStreak: number;
  public maxWinstreak: number;
  public perfectBuilds: number;
  public perfectBuildsStreak: number;
  public dailyPerfectBuildsStreak: number;
  public weeklyPerfectBuildsStreak: number;
  public monthlyPerfectBuildsStreak: number;
  public gamesPlayed: number;
  public wins: number;
  public dailyWins: number;
  public weeklyWins: number;
  public monthlyWins: number;
  public winstreak: number;
  public dailyWinstreak: number;
  public weeklyWinstreak: number;
  public monthlyWinstreak: number;
  public xp: number;
  public dailyXp: number;
  public weeklyXp: number;
  public monthlyXp: number;

  constructor(data: Partial<APIPlayerQuickBuildersStats> = {}) {
    this.builds = data.builds ?? 0;
    this.level = data.level ?? 0;
    this.losses = data.losses ?? 0;
    this.maxPerfectBuildStreak = data.max_perfect_build_streak ?? 0;
    this.maxWinstreak = data.max_winstreak ?? 0;
    this.perfectBuildsStreak = data.perfect_build_streak ?? 0;
    this.perfectBuilds = data.perfect_builds ?? 0;
    this.dailyPerfectBuildsStreak = data.perfect_builds_streak_daily ?? 0;
    this.monthlyPerfectBuildsStreak = data.perfect_builds_streak_monthly ?? 0;
    this.weeklyPerfectBuildsStreak = data.perfect_builds_streak_weekly ?? 0;
    this.gamesPlayed = data.played ?? 0;
    this.wins = data.wins ?? 0;
    this.dailyWins = data.wins_daily ?? 0;
    this.monthlyWins = data.wins_monthly ?? 0;
    this.weeklyWins = data.wins_weekly ?? 0;
    this.winstreak = data.winstreak ?? 0;
    this.dailyWinstreak = data.winstreak_daily ?? 0;
    this.monthlyWinstreak = data.winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.winstreak_weekly ?? 0;
    this.xp = data.xp ?? 0;
    this.dailyXp = data.xp_daily ?? 0;
    this.monthlyXp = data.xp_monthly ?? 0;
    this.weeklyXp = data.xp_weekly ?? 0;
  }
}
