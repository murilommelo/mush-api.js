import type { APIPlayerDuelsStats } from "@stats-types/duels.js";

export interface DuelsSoupSoloStats {
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
  wins: number;
  winstreak: number;
}

export class DuelsSoupSoloStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.soup_solo_deaths ?? 0;
    this.kills = data.soup_solo_kills ?? 0;
    this.dailyKills = data.soup_solo_kills_daily ?? 0;
    this.monthlyKills = data.soup_solo_kills_monthly ?? 0;
    this.weeklyKills = data.soup_solo_kills_weekly ?? 0;
    this.losses = data.soup_solo_losses ?? 0;
    this.maxWinstreak = data.soup_solo_max_winstreak ?? 0;
    this.gamesPlayed = data.soup_solo_played ?? 0;
    this.wins = data.soup_solo_wins ?? 0;
    this.dailyWins = data.soup_solo_wins_daily ?? 0;
    this.monthlyWins = data.soup_solo_wins_monthly ?? 0;
    this.weeklyWins = data.soup_solo_wins_weekly ?? 0;
    this.winstreak = data.soup_solo_winstreak ?? 0;
    this.dailyWinstreak = data.soup_solo_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.soup_solo_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.soup_solo_winstreak_weekly ?? 0;
  }
}
