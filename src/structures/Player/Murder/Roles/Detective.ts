import type { APIPlayerMurderStats } from "@stats-types/murder";

export interface MurderDetectiveRoleStats {
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

export class MurderDetectiveRoleStats {
  constructor(data: Partial<APIPlayerMurderStats> = {}) {
    this.deaths = data.detective_deaths ?? 0;
    this.murdererKills = data.detective_killed_murderer ?? 0;
    this.dailyMurdererKills = data.detective_killed_murderer_daily ?? 0;
    this.monthlyMurdererKills = data.detective_killed_murderer_monthly ?? 0;
    this.weeklyMurdererKills = data.detective_killed_murderer_weekly ?? 0;
    this.kills = data.detective_kills ?? 0;
    this.lastPlayedBits = data.detective_last_played_bits ?? 0;
    this.losses = data.detective_losses ?? 0;
    this.gamesPlayed = data.detective_played ?? 0;
    this.wins = data.detective_wins ?? 0;
    this.dailyWins = data.detective_wins_daily ?? 0;
    this.monthlyWins = data.detective_wins_monthly ?? 0;
    this.weeklyWins = data.detective_wins_weekly ?? 0;
    this.winstreak = data.detective_winstreak ?? 0;
    this.dailyWinstreak = data.detective_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.detective_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.detective_winstreak_weekly ?? 0;
  }
}
