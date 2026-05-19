import type { APIPlayerDuelsStats } from "@stats-types/duels.js";

export interface DuelsLavaSoloStats {
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

export class DuelsLavaSoloStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.lava_solo_deaths ?? 0;
    this.losses = data.lava_solo_losses ?? 0;
    this.maxWinstreak = data.lava_solo_max_winstreak ?? 0;
    this.gamesPlayed = data.lava_solo_played ?? 0;
    this.wins = data.lava_solo_wins ?? 0;
    this.dailyWins = data.lava_solo_wins_daily ?? 0;
    this.monthlyWins = data.lava_solo_wins_monthly ?? 0;
    this.weeklyWins = data.lava_solo_wins_weekly ?? 0;
    this.winstreak = data.lava_solo_winstreak ?? 0;
    this.dailyWinstreak = data.lava_solo_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.lava_solo_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.lava_solo_winstreak_weekly ?? 0;
  }
}
