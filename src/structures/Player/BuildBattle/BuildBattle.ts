import type { APIPlayerBuildBattleStats } from "@stats-types/buildbattle";

export interface BuildBattleStats {
  dailyGames: number;
  dailyPerfects: number;
  dailyPoints: number;
  dailyWins: number;
  dailyWinstreak: number;
  dailyXp: number;
  gamesPlayed: number;
  level: number;
  losses: number;
  maxWinstreak: number;
  monthlyGames: number;
  monthlyPerfects: number;
  monthlyPoints: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  monthlyXp: number;
  perfectBuilds: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  votes: number;
  weeklyGames: number;
  weeklyPerfects: number;
  weeklyPoints: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  weeklyXp: number;
  wins: number;
  winstreak: number;
  xp: number;
}

export class BuildBattleStats {
  constructor(data: Partial<APIPlayerBuildBattleStats> = {}) {
    this.dailyGames = data.played_daily ?? 0;
    this.dailyPerfects = data.perfects_daily ?? 0;
    this.dailyPoints = data.points_daily ?? 0;
    this.dailyWins = data.wins_daily ?? 0;
    this.dailyWinstreak = data.winstreak_daily ?? 0;
    this.dailyXp = data.xp_daily ?? 0;
    this.gamesPlayed = data.played ?? 0;
    this.level = data.level ?? 0;
    this.losses = data.losses ?? 0;
    this.maxWinstreak = data.max_winstreak ?? 0;
    this.monthlyGames = data.played_monthly ?? 0;
    this.monthlyPerfects = data.perfects_monthly ?? 0;
    this.monthlyPoints = data.points_monthly ?? 0;
    this.monthlyWins = data.wins_monthly ?? 0;
    this.monthlyWinstreak = data.winstreak_monthly ?? 0;
    this.monthlyXp = data.xp_monthly ?? 0;
    this.perfectBuilds = data.perfects ?? 0;
    this.points = data.points ?? 0;
    this.secondPlace = data.second_place ?? 0;
    this.thirdPlace = data.third_place ?? 0;
    this.votes = data.votes ?? 0;
    this.weeklyGames = data.played_weekly ?? 0;
    this.weeklyPerfects = data.perfects_weekly ?? 0;
    this.weeklyPoints = data.points_weekly ?? 0;
    this.weeklyWins = data.wins_weekly ?? 0;
    this.weeklyWinstreak = data.winstreak_weekly ?? 0;
    this.weeklyXp = data.xp_weekly ?? 0;
    this.wins = data.wins ?? 0;
    this.winstreak = data.winstreak ?? 0;
    this.xp = data.xp ?? 0;
  }
}
