import type { APIPlayerBuildBattleStats } from "@stats-types/buildbattle";

export interface BuildBattleProStats {
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

export class BuildBattleProStats {
  constructor(data: Partial<APIPlayerBuildBattleStats> = {}) {
    this.dailyGames = data.pro_played_daily ?? 0;
    this.dailyPerfects = data.pro_perfects_daily ?? 0;
    this.dailyPoints = data.pro_points_daily ?? 0;
    this.dailyWins = data.pro_wins_daily ?? 0;
    this.dailyWinstreak = data.pro_winstreak_daily ?? 0;
    this.gamesPlayed = data.pro_played ?? 0;
    this.losses = data.pro_losses ?? 0;
    this.maxWinstreak = data.pro_max_winstreak ?? 0;
    this.monthlyGames = data.pro_played_monthly ?? 0;
    this.monthlyPerfects = data.pro_perfects_monthly ?? 0;
    this.monthlyPoints = data.pro_points_monthly ?? 0;
    this.monthlyWins = data.pro_wins_monthly ?? 0;
    this.monthlyWinstreak = data.pro_winstreak_monthly ?? 0;
    this.perfectBuilds = data.pro_perfects ?? 0;
    this.points = data.pro_points ?? 0;
    this.secondPlace = data.pro_second_place ?? 0;
    this.thirdPlace = data.pro_third_place ?? 0;
    this.votes = data.pro_votes ?? 0;
    this.weeklyGames = data.pro_played_weekly ?? 0;
    this.weeklyPerfects = data.pro_perfects_weekly ?? 0;
    this.weeklyPoints = data.pro_points_weekly ?? 0;
    this.weeklyWins = data.pro_wins_weekly ?? 0;
    this.weeklyWinstreak = data.pro_winstreak_weekly ?? 0;
    this.wins = data.pro_wins ?? 0;
    this.winstreak = data.pro_winstreak ?? 0;
  }
}
