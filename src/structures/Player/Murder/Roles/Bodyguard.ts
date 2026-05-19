import type { APIPlayerMurderStats } from "@stats-types/murder";

export interface MurderBodyguardRoleStats {
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

export class MurderBodyguardRoleStats {
  constructor(data: Partial<APIPlayerMurderStats> = {}) {
    this.deaths = data.bodyguard_deaths ?? 0;
    this.murdererKills = data.bodyguard_killed_murderer ?? 0;
    this.dailyMurdererKills = data.bodyguard_killed_murderer_daily ?? 0;
    this.monthlyMurdererKills = data.bodyguard_killed_murderer_monthly ?? 0;
    this.weeklyMurdererKills = data.bodyguard_killed_murderer_weekly ?? 0;
    this.kills = data.bodyguard_kills ?? 0;
    this.lastPlayedBits = data.bodyguard_last_played_bits ?? 0;
    this.losses = data.bodyguard_losses ?? 0;
    this.gamesPlayed = data.bodyguard_played ?? 0;
    this.wins = data.bodyguard_wins ?? 0;
    this.dailyWins = data.bodyguard_wins_daily ?? 0;
    this.monthlyWins = data.bodyguard_wins_monthly ?? 0;
    this.weeklyWins = data.bodyguard_wins_weekly ?? 0;
    this.winstreak = data.bodyguard_winstreak ?? 0;
    this.dailyWinstreak = data.bodyguard_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.bodyguard_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.bodyguard_winstreak_weekly ?? 0;
  }
}
