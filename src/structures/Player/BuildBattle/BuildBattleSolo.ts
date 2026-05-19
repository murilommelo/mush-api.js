import type { APIPlayerBuildBattleStats } from "@stats-types/buildbattle";

export interface BuildBattleSoloStats {
  dailyGames: number;
  dailyPerfects: number;
  dailyPoints: number;
  dailyWins: number;
  dailyWinstreak: number;
  gamesPlayed: number;
  losses: number;
  maxWinstreak: number;
  monthlyGames: number;
  monthlyPerfects: number;
  monthlyPoints: number;
  monthlyWins: number;
  monthlyWinstreak: number;
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
  wins: number;
  winstreak: number;
}

export class BuildBattleSoloStats {
  constructor(data: Partial<APIPlayerBuildBattleStats> = {}) {
    this.dailyGames = data.solo_played_daily ?? 0;
    this.dailyPerfects = data.solo_perfects_daily ?? 0;
    this.dailyPoints = data.solo_points_daily ?? 0;
    this.dailyWins = data.solo_wins_daily ?? 0;
    this.dailyWinstreak = data.solo_winstreak_daily ?? 0;
    this.gamesPlayed = data.solo_played ?? 0;
    this.losses = data.solo_losses ?? 0;
    this.maxWinstreak = data.solo_max_winstreak ?? 0;
    this.monthlyGames = data.solo_played_monthly ?? 0;
    this.monthlyPerfects = data.solo_perfects_monthly ?? 0;
    this.monthlyPoints = data.solo_points_monthly ?? 0;
    this.monthlyWins = data.solo_wins_monthly ?? 0;
    this.monthlyWinstreak = data.solo_winstreak_monthly ?? 0;
    this.perfectBuilds = data.solo_perfects ?? 0;
    this.points = data.solo_points ?? 0;
    this.secondPlace = data.solo_second_place ?? 0;
    this.thirdPlace = data.solo_third_place ?? 0;
    this.votes = data.solo_votes ?? 0;
    this.weeklyGames = data.solo_played_weekly ?? 0;
    this.weeklyPerfects = data.solo_perfects_weekly ?? 0;
    this.weeklyPoints = data.solo_points_weekly ?? 0;
    this.weeklyWins = data.solo_wins_weekly ?? 0;
    this.weeklyWinstreak = data.solo_winstreak_weekly ?? 0;
    this.wins = data.solo_wins ?? 0;
    this.winstreak = data.solo_winstreak ?? 0;
  }
}
