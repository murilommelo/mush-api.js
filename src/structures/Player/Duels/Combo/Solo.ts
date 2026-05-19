import type { APIPlayerDuelsStats } from "@stats-types/duels.js";

export interface DuelsComboSoloStats {
  dailyKills: number;
  dailyWins: number;
  dailyWinstreak: number;
  deaths: number;
  gamesPlayed: number;
  kills: number;
  losses: number;
  maxWinstreak: number;
  monthlyKills: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  weeklyKills: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  winstreak: number;
  wins: number;
}

export class DuelsComboSoloStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.combo_solo_deaths ?? 0;
    this.kills = data.combo_solo_kills ?? 0;
    this.dailyKills = data.combo_solo_kills_daily ?? 0;
    this.monthlyKills = data.combo_solo_kills_monthly ?? 0;
    this.weeklyKills = data.combo_solo_kills_weekly ?? 0;
    this.losses = data.combo_solo_losses ?? 0;
    this.maxWinstreak = data.combo_solo_max_winstreak ?? 0;
    this.gamesPlayed = data.combo_solo_played ?? 0;
    this.wins = data.combo_solo_wins ?? 0;
    this.dailyWins = data.combo_solo_wins_daily ?? 0;
    this.monthlyWins = data.combo_solo_wins_monthly ?? 0;
    this.weeklyWins = data.combo_solo_wins_weekly ?? 0;
    this.winstreak = data.combo_solo_winstreak ?? 0;
    this.dailyWinstreak = data.combo_solo_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.combo_solo_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.combo_solo_winstreak_weekly ?? 0;
  }
}
