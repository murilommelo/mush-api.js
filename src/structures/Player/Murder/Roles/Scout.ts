import type { APIPlayerMurderStats } from "@stats-types/murder";

export interface MurderScoutRoleStats {
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

export class MurderScoutRoleStats {
  constructor(data: Partial<APIPlayerMurderStats> = {}) {
    this.deaths = data.scout_deaths ?? 0;
    this.murdererKills = data.scout_killed_murderer ?? 0;
    this.dailyMurdererKills = data.scout_killed_murderer_daily ?? 0;
    this.monthlyMurdererKills = data.scout_killed_murderer_monthly ?? 0;
    this.weeklyMurdererKills = data.scout_killed_murderer_weekly ?? 0;
    this.kills = data.scout_kills ?? 0;
    this.lastPlayedBits = data.scout_last_played_bits ?? 0;
    this.losses = data.scout_losses ?? 0;
    this.gamesPlayed = data.scout_played ?? 0;
    this.wins = data.scout_wins ?? 0;
    this.dailyWins = data.scout_wins_daily ?? 0;
    this.monthlyWins = data.scout_wins_monthly ?? 0;
    this.weeklyWins = data.scout_wins_weekly ?? 0;
    this.winstreak = data.scout_winstreak ?? 0;
    this.dailyWinstreak = data.scout_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.scout_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.scout_winstreak_weekly ?? 0;
  }
}
