import type {
  APIPlayerBuildBattleStats,
  BuildBattleMode,
} from "@stats-types/buildbattle";

export class BuildBattleStats {
  public dailyGames: number;
  public dailyPerfects: number;
  public dailyPoints: number;
  public dailyWins: number;
  public dailyWinstreak: number;
  public dailyXp: number;
  public gamesPlayed: number;
  public level: number;
  public losses: number;
  public maxWinstreak: number;
  public monthlyGames: number;
  public monthlyPerfects: number;
  public monthlyPoints: number;
  public monthlyWins: number;
  public monthlyWinstreak: number;
  public monthlyXp: number;
  public perfectBuilds: number;
  public points: number;
  public secondPlace: number;
  public thirdPlace: number;
  public votes: number;
  public weeklyGames: number;
  public weeklyPerfects: number;
  public weeklyPoints: number;
  public weeklyWins: number;
  public weeklyWinstreak: number;
  public weeklyXp: number;
  public wins: number;
  public winstreak: number;
  public xp: number;
  public getModeStats: (mode: BuildBattleMode) => {
    mode: BuildBattleMode;
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
  };

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

    this.getModeStats = function getModeStats(mode: BuildBattleMode) {
      const dailyGames = data[`${mode}_played_daily`] ?? 0;
      const dailyPerfects = data[`${mode}_perfects_daily`] ?? 0;
      const dailyPoints = data[`${mode}_points_daily`] ?? 0;
      const dailyWins = data[`${mode}_wins_daily`] ?? 0;
      const dailyWinstreak = data[`${mode}_winstreak_daily`] ?? 0;
      const gamesPlayed = data[`${mode}_played`] ?? 0;
      const losses = data[`${mode}_losses`] ?? 0;
      const maxWinstreak = data[`${mode}_max_winstreak`] ?? 0;
      const monthlyGames = data[`${mode}_played_monthly`] ?? 0;
      const monthlyPerfects = data[`${mode}_perfects_monthly`] ?? 0;
      const monthlyPoints = data[`${mode}_points_monthly`] ?? 0;
      const monthlyWins = data[`${mode}_wins_monthly`] ?? 0;
      const monthlyWinstreak = data[`${mode}_winstreak_monthly`] ?? 0;
      const perfectBuilds = data[`${mode}_perfects`] ?? 0;
      const points = data[`${mode}_points`] ?? 0;
      const secondPlace = data[`${mode}_second_place`] ?? 0;
      const thirdPlace = data[`${mode}_third_place`] ?? 0;
      const votes = data[`${mode}_votes`] ?? 0;
      const weeklyGames = data[`${mode}_played_weekly`] ?? 0;
      const weeklyPerfects = data[`${mode}_perfects_weekly`] ?? 0;
      const weeklyPoints = data[`${mode}_points_weekly`] ?? 0;
      const weeklyWins = data[`${mode}_wins_weekly`] ?? 0;
      const weeklyWinstreak = data[`${mode}_winstreak_weekly`] ?? 0;
      const wins = data[`${mode}_wins`] ?? 0;
      const winstreak = data[`${mode}_winstreak`] ?? 0;

      return {
        mode,
        dailyGames,
        dailyPerfects,
        dailyPoints,
        dailyWins,
        dailyWinstreak,
        gamesPlayed,
        losses,
        maxWinstreak,
        monthlyGames,
        monthlyPerfects,
        monthlyPoints,
        monthlyWins,
        monthlyWinstreak,
        perfectBuilds,
        points,
        secondPlace,
        thirdPlace,
        votes,
        weeklyGames,
        weeklyPerfects,
        weeklyPoints,
        weeklyWins,
        weeklyWinstreak,
        wins,
        winstreak,
      };
    };
  }
}
