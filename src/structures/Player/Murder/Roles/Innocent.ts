import type { APIPlayerMurderStats } from "@stats-types/murder";

export interface MurderInnocentRoleStats {
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

export class MurderInnocentRoleStats {
  constructor(data: Partial<APIPlayerMurderStats> = {}) {
    this.deaths = data.innocent_deaths ?? 0;
    this.murdererKills = data.innocent_killed_murderer ?? 0;
    this.dailyMurdererKills = data.innocent_killed_murderer_daily ?? 0;
    this.monthlyMurdererKills = data.innocent_killed_murderer_monthly ?? 0;
    this.weeklyMurdererKills = data.innocent_killed_murderer_weekly ?? 0;
    this.kills = data.innocent_kills ?? 0;
    this.lastPlayedBits = data.innocent_last_played_bits ?? 0;
    this.losses = data.innocent_losses ?? 0;
    this.gamesPlayed = data.innocent_played ?? 0;
    this.wins = data.innocent_wins ?? 0;
    this.dailyWins = data.innocent_wins_daily ?? 0;
    this.monthlyWins = data.innocent_wins_monthly ?? 0;
    this.weeklyWins = data.innocent_wins_weekly ?? 0;
    this.winstreak = data.innocent_winstreak ?? 0;
    this.dailyWinstreak = data.innocent_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.innocent_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.innocent_winstreak_weekly ?? 0;
  }
}
