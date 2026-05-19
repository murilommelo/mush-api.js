import type {
  APIPlayerSkyWarsStats,
  SkyWarsKit,
} from "@stats-types/skywars_r1.js";

export interface SkyWarsTeamStats {
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

export class SkyWarsTeamStats {
  constructor(data: Partial<APIPlayerSkyWarsStats> = {}) {
    this.selectedKit = data.team_selected_kit ?? 0;
    this.wins = data.wins_team ?? 0;
    this.dailyWins = data.wins_team_daily ?? 0;
    this.monthlyWins = data.wins_team_monthly ?? 0;
    this.weeklyWins = data.wins_team_weekly ?? 0;
    this.kills = data.kills_team ?? 0;
    this.dailyKills = data.kills_team_daily ?? 0;
    this.monthlyKills = data.kills_team_monthly ?? 0;
    this.weeklyKills = data.kills_team_weekly ?? 0;
    this.deaths = data.deaths_team ?? 0;
    this.losses = data.losses_team ?? 0;
    this.winstreak = data.winstreak_team ?? 0;
    this.dailyWinstreak = data.winstreak_team_daily ?? 0;
    this.monthlyWinstreak = data.winstreak_team_monthly ?? 0;
    this.weeklyWinstreak = data.winstreak_team_weekly ?? 0;
    this.gamesPlayed = data.games_played_team ?? 0;
    this.maxWinstreak = data.max_winstreak_team ?? 0;

    this.getKitStats = function getKitStats(kit: SkyWarsKit) {
      const wins = data[`wins_team_kit_${kit}`] ?? 0;
      const losses = data[`losses_team_kit_${kit}`] ?? 0;
      const kills = data[`kills_team_kit_${kit}`] ?? 0;
      const deaths = data[`deaths_team_kit_${kit}`] ?? 0;
      const gamesPlayed = data[`games_played_team_kit_${kit}`] ?? 0;

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
