import type { APIPlayerBuildBattleStats } from "@stats-types/buildbattle";

export interface BuildBattleDoublesStats {
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

export class BuildBattleDoublesStats {
  constructor(data: Partial<APIPlayerBuildBattleStats> = {}) {
    this.dailyGames = data.doubles_played_daily ?? 0;
    this.dailyPerfects = data.doubles_perfects_daily ?? 0;
    this.dailyPoints = data.doubles_points_daily ?? 0;
    this.dailyWins = data.doubles_wins_daily ?? 0;
    this.dailyWinstreak = data.doubles_winstreak_daily ?? 0;
    this.gamesPlayed = data.doubles_played ?? 0;
    this.losses = data.doubles_losses ?? 0;
    this.maxWinstreak = data.doubles_max_winstreak ?? 0;
    this.monthlyGames = data.doubles_played_monthly ?? 0;
    this.monthlyPerfects = data.doubles_perfects_monthly ?? 0;
    this.monthlyPoints = data.doubles_points_monthly ?? 0;
    this.monthlyWins = data.doubles_wins_monthly ?? 0;
    this.monthlyWinstreak = data.doubles_winstreak_monthly ?? 0;
    this.perfectBuilds = data.doubles_perfects ?? 0;
    this.points = data.doubles_points ?? 0;
    this.secondPlace = data.doubles_second_place ?? 0;
    this.thirdPlace = data.doubles_third_place ?? 0;
    this.votes = data.doubles_votes ?? 0;
    this.weeklyGames = data.doubles_played_weekly ?? 0;
    this.weeklyPerfects = data.doubles_perfects_weekly ?? 0;
    this.weeklyPoints = data.doubles_points_weekly ?? 0;
    this.weeklyWins = data.doubles_wins_weekly ?? 0;
    this.weeklyWinstreak = data.doubles_winstreak_weekly ?? 0;
    this.wins = data.doubles_wins ?? 0;
    this.winstreak = data.doubles_winstreak ?? 0;
  }
}
