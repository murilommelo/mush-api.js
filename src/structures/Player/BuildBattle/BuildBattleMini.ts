import type { APIPlayerBuildBattleStats } from "@stats-types/buildbattle";

export interface BuildBattleMiniStats {
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

export class BuildBattleMiniStats {
  constructor(data: Partial<APIPlayerBuildBattleStats> = {}) {
    this.dailyGames = data.mini_played_daily ?? 0;
    this.dailyPerfects = data.mini_perfects_daily ?? 0;
    this.dailyPoints = data.mini_points_daily ?? 0;
    this.dailyWins = data.mini_wins_daily ?? 0;
    this.dailyWinstreak = data.mini_winstreak_daily ?? 0;
    this.gamesPlayed = data.mini_played ?? 0;
    this.losses = data.mini_losses ?? 0;
    this.maxWinstreak = data.mini_max_winstreak ?? 0;
    this.monthlyGames = data.mini_played_monthly ?? 0;
    this.monthlyPerfects = data.mini_perfects_monthly ?? 0;
    this.monthlyPoints = data.mini_points_monthly ?? 0;
    this.monthlyWins = data.mini_wins_monthly ?? 0;
    this.monthlyWinstreak = data.mini_winstreak_monthly ?? 0;
    this.perfectBuilds = data.mini_perfects ?? 0;
    this.points = data.mini_points ?? 0;
    this.secondPlace = data.mini_second_place ?? 0;
    this.thirdPlace = data.mini_third_place ?? 0;
    this.votes = data.mini_votes ?? 0;
    this.weeklyGames = data.mini_played_weekly ?? 0;
    this.weeklyPerfects = data.mini_perfects_weekly ?? 0;
    this.weeklyPoints = data.mini_points_weekly ?? 0;
    this.weeklyWins = data.mini_wins_weekly ?? 0;
    this.weeklyWinstreak = data.mini_winstreak_weekly ?? 0;
    this.wins = data.mini_wins ?? 0;
    this.winstreak = data.mini_winstreak ?? 0;
  }
}
