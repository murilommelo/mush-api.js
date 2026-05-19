import type { APIPlayerMurderStats } from "@stats-types/murder";

export interface MurderMurdererRoleStats {
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

export class MurderMurdererRoleStats {
  constructor(data: Partial<APIPlayerMurderStats> = {}) {
    this.deaths = data.murderer_deaths ?? 0;
    this.murdererKills = data.murderer_killed_murderer ?? 0;
    this.dailyMurdererKills = data.murderer_killed_murderer_daily ?? 0;
    this.monthlyMurdererKills = data.murderer_killed_murderer_monthly ?? 0;
    this.weeklyMurdererKills = data.murderer_killed_murderer_weekly ?? 0;
    this.kills = data.murderer_kills ?? 0;
    this.lastPlayedBits = data.murderer_last_played_bits ?? 0;
    this.losses = data.murderer_losses ?? 0;
    this.gamesPlayed = data.murderer_played ?? 0;
    this.wins = data.murderer_wins ?? 0;
    this.dailyWins = data.murderer_wins_daily ?? 0;
    this.monthlyWins = data.murderer_wins_monthly ?? 0;
    this.weeklyWins = data.murderer_wins_weekly ?? 0;
    this.winstreak = data.murderer_winstreak ?? 0;
    this.dailyWinstreak = data.murderer_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.murderer_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.murderer_winstreak_weekly ?? 0;
  }
}
