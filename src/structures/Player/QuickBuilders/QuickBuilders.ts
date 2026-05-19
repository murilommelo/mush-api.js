import type { APIPlayerQuickBuildersStats } from "@stats-types/quickbuilders";

export interface QuickBuildersStats {
  builds: number;
  level: number;
  losses: number;
  maxPerfectBuildStreak: number;
  maxWinstreak: number;
  perfectBuilds: number;
  perfectBuildsStreak: number;
  dailyPerfectBuildsStreak: number;
  weeklyPerfectBuildsStreak: number;
  monthlyPerfectBuildsStreak: number;
  gamesPlayed: number;
  wins: number;
  dailyWins: number;
  weeklyWins: number;
  monthlyWins: number;
  winstreak: number;
  dailyWinstreak: number;
  weeklyWinstreak: number;
  monthlyWinstreak: number;
  xp: number;
  dailyXp: number;
  weeklyXp: number;
  monthlyXp: number;
}

export class QuickBuildersStats {
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
