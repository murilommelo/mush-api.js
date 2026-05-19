import type { APIPlayerMurderStats } from "@stats-types/murder";

export interface MurderEngineerRoleStats {
  dailyMurdererKills: number;
  dailyWins: number;
  dailyWinstreak: number;
  deaths: number;
  gamesPlayed: number;
  kills: number;
  lastPlayedBits: number;
  losses: number;
  monthlyMurdererKills: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  murdererKills: number;
  weeklyMurdererKills: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  wins: number;
  winstreak: number;
}

export class MurderEngineerRoleStats {
  constructor(data: Partial<APIPlayerMurderStats> = {}) {
    this.deaths = data.engineer_deaths ?? 0;
    this.murdererKills = data.engineer_killed_murderer ?? 0;
    this.dailyMurdererKills = data.engineer_killed_murderer_daily ?? 0;
    this.monthlyMurdererKills = data.engineer_killed_murderer_monthly ?? 0;
    this.weeklyMurdererKills = data.engineer_killed_murderer_weekly ?? 0;
    this.kills = data.engineer_kills ?? 0;
    this.lastPlayedBits = data.engineer_last_played_bits ?? 0;
    this.losses = data.engineer_losses ?? 0;
    this.gamesPlayed = data.engineer_played ?? 0;
    this.wins = data.engineer_wins ?? 0;
    this.dailyWins = data.engineer_wins_daily ?? 0;
    this.monthlyWins = data.engineer_wins_monthly ?? 0;
    this.weeklyWins = data.engineer_wins_weekly ?? 0;
    this.winstreak = data.engineer_winstreak ?? 0;
    this.dailyWinstreak = data.engineer_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.engineer_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.engineer_winstreak_weekly ?? 0;
  }
}
