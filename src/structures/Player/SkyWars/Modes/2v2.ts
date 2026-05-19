import type {
  APIPlayerSkyWarsStats,
  SkyWarsKit,
} from "@stats-types/skywars_r1.js";

export interface SkyWars2v2Stats {
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

export class SkyWars2v2Stats {
  constructor(data: Partial<APIPlayerSkyWarsStats> = {}) {
    this.selectedKit = data["2v2_selected_kit"] ?? 0;
    this.wins = data.wins_2v2 ?? 0;
    this.dailyWins = data.wins_2v2_daily ?? 0;
    this.monthlyWins = data.wins_2v2_monthly ?? 0;
    this.weeklyWins = data.wins_2v2_weekly ?? 0;
    this.kills = data.kills_2v2 ?? 0;
    this.dailyKills = data.kills_2v2_daily ?? 0;
    this.monthlyKills = data.kills_2v2_monthly ?? 0;
    this.weeklyKills = data.kills_2v2_weekly ?? 0;
    this.deaths = data.deaths_2v2 ?? 0;
    this.losses = data.losses_2v2 ?? 0;
    this.winstreak = data.winstreak_2v2 ?? 0;
    this.dailyWinstreak = data.winstreak_2v2_daily ?? 0;
    this.monthlyWinstreak = data.winstreak_2v2_monthly ?? 0;
    this.weeklyWinstreak = data.winstreak_2v2_weekly ?? 0;
    this.gamesPlayed = data.games_played_2v2 ?? 0;
    this.maxWinstreak = data.max_winstreak_2v2 ?? 0;

    this.getKitStats = function getKitStats(kit: SkyWarsKit) {
      const wins = data[`wins_2v2_kit_${kit}`] ?? 0;
      const losses = data[`losses_2v2_kit_${kit}`] ?? 0;
      const kills = data[`kills_2v2_kit_${kit}`] ?? 0;
      const deaths = data[`deaths_2v2_kit_${kit}`] ?? 0;
      const gamesPlayed = data[`games_played_2v2_kit_${kit}`] ?? 0;

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
