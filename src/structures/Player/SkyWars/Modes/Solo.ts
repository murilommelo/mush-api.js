import type {
  APIPlayerSkyWarsStats,
  SkyWarsKit,
} from "@stats-types/skywars_r1.js";

export interface SkyWarsSoloStats {
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

export class SkyWarsSoloStats {
  constructor(data: Partial<APIPlayerSkyWarsStats> = {}) {
    this.selectedKit = data.solo_selected_kit ?? 0;
    this.wins = data.wins_solo ?? 0;
    this.dailyWins = data.wins_solo_daily ?? 0;
    this.monthlyWins = data.wins_solo_monthly ?? 0;
    this.weeklyWins = data.wins_solo_weekly ?? 0;
    this.kills = data.kills_solo ?? 0;
    this.dailyKills = data.kills_solo_daily ?? 0;
    this.monthlyKills = data.kills_solo_monthly ?? 0;
    this.weeklyKills = data.kills_solo_weekly ?? 0;
    this.deaths = data.deaths_solo ?? 0;
    this.losses = data.losses_solo ?? 0;
    this.winstreak = data.winstreak_solo ?? 0;
    this.dailyWinstreak = data.winstreak_solo_daily ?? 0;
    this.monthlyWinstreak = data.winstreak_solo_monthly ?? 0;
    this.weeklyWinstreak = data.winstreak_solo_weekly ?? 0;
    this.gamesPlayed = data.games_played_solo ?? 0;
    this.maxWinstreak = data.max_winstreak_solo ?? 0;

    this.getKitStats = function getKitStats(kit: SkyWarsKit) {
      const wins = data[`wins_solo_kit_${kit}`] ?? 0;
      const losses = data[`losses_solo_kit_${kit}`] ?? 0;
      const kills = data[`kills_solo_kit_${kit}`] ?? 0;
      const deaths = data[`deaths_solo_kit_${kit}`] ?? 0;
      const gamesPlayed = data[`games_played_solo_kit_${kit}`] ?? 0;

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
