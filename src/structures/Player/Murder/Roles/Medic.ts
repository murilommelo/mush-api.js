import type { APIPlayerMurderStats } from "@stats-types/murder";

export interface MurderMedicRoleStats {
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

export class MurderMedicRoleStats {
  constructor(data: Partial<APIPlayerMurderStats> = {}) {
    this.deaths = data.medic_deaths ?? 0;
    this.murdererKills = data.medic_killed_murderer ?? 0;
    this.dailyMurdererKills = data.medic_killed_murderer_daily ?? 0;
    this.monthlyMurdererKills = data.medic_killed_murderer_monthly ?? 0;
    this.weeklyMurdererKills = data.medic_killed_murderer_weekly ?? 0;
    this.kills = data.medic_kills ?? 0;
    this.lastPlayedBits = data.medic_last_played_bits ?? 0;
    this.losses = data.medic_losses ?? 0;
    this.gamesPlayed = data.medic_played ?? 0;
    this.wins = data.medic_wins ?? 0;
    this.dailyWins = data.medic_wins_daily ?? 0;
    this.monthlyWins = data.medic_wins_monthly ?? 0;
    this.weeklyWins = data.medic_wins_weekly ?? 0;
    this.winstreak = data.medic_winstreak ?? 0;
    this.dailyWinstreak = data.medic_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.medic_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.medic_winstreak_weekly ?? 0;
  }
}
