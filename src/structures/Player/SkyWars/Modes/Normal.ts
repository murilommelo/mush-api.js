import type {
  APIPlayerSkyWarsStats,
  SkyWarsKit,
} from "@stats-types/skywars_r1.js";

export interface SkyWarsNormalStats {
  deaths: number;
  dailyKills: number;
  dailyWins: number;
  dailyWinstreak: number;
  gamesPlayed: number;
  kills: number;
  losses: number;
  maxWinstreak: number;
  monthlyKills: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  selectedKit: number;
  weeklyKills: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  wins: number;
  winstreak: number;
  getKitStats(kit: SkyWarsKit): {
    wins: number;
    losses: number;
    kills: number;
    deaths: number;
    gamesPlayed: number;
    kit: SkyWarsKit;
  };
}

export class SkyWarsNormalStats {
  constructor(data: Partial<APIPlayerSkyWarsStats> = {}) {
    this.selectedKit = data.normal_selected_kit ?? 0;
    this.wins = data.wins_normal ?? 0;
    this.dailyWins = data.wins_normal_daily ?? 0;
    this.monthlyWins = data.wins_normal_monthly ?? 0;
    this.weeklyWins = data.wins_normal_weekly ?? 0;
    this.kills = data.kills_normal ?? 0;
    this.dailyKills = data.kills_normal_daily ?? 0;
    this.monthlyKills = data.kills_normal_monthly ?? 0;
    this.weeklyKills = data.kills_normal_weekly ?? 0;
    this.deaths = data.deaths_normal ?? 0;
    this.losses = data.losses_normal ?? 0;
    this.winstreak = data.winstreak_normal ?? 0;
    this.dailyWinstreak = data.winstreak_normal_daily ?? 0;
    this.monthlyWinstreak = data.winstreak_normal_monthly ?? 0;
    this.weeklyWinstreak = data.winstreak_normal_weekly ?? 0;
    this.gamesPlayed = data.games_played_normal ?? 0;
    this.maxWinstreak = data.max_winstreak_normal ?? 0;

    this.getKitStats = function getKitStats(kit: SkyWarsKit) {
      const wins = data[`wins_normal_kit_${kit}`] ?? 0;
      const losses = data[`losses_normal_kit_${kit}`] ?? 0;
      const kills = data[`kills_normal_kit_${kit}`] ?? 0;
      const deaths = data[`deaths_normal_kit_${kit}`] ?? 0;
      const gamesPlayed = data[`games_played_normal_kit_${kit}`] ?? 0;

      return {
        wins,
        losses,
        kills,
        deaths,
        gamesPlayed,
        kit,
      };
    };
  }
}
