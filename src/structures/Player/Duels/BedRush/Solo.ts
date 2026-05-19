import type { APIPlayerDuelsStats } from "@stats-types/duels.js";

export interface DuelsBedRushSoloStats {
  bedsBroken: number;
  dailyKills: number;
  dailyWins: number;
  dailyWinstreak: number;
  deaths: number;
  gamesPlayed: number;
  kills: number;
  losses: number;
  monthlyKills: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  maxWinstreak: number;
  wins: number;
  winstreak: number;
  weeklyKills: number;
  weeklyWins: number;
  weeklyWinstreak: number;
}

export class DuelsBedRushSoloStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.bedsBroken = data.bed_rush_solo_beds_broken ?? 0;
    this.deaths = data.bed_rush_solo_deaths ?? 0;
    this.kills = data.bed_rush_solo_kills ?? 0;
    this.dailyKills = data.bed_rush_solo_kills_daily ?? 0;
    this.monthlyKills = data.bed_rush_solo_kills_monthly ?? 0;
    this.weeklyKills = data.bed_rush_solo_kills_weekly ?? 0;
    this.losses = data.bed_rush_solo_losses ?? 0;
    this.maxWinstreak = data.bed_rush_solo_max_winstreak ?? 0;
    this.gamesPlayed = data.bed_rush_solo_played ?? 0;
    this.wins = data.bed_rush_solo_wins ?? 0;
    this.dailyWins = data.bed_rush_solo_wins_daily ?? 0;
    this.monthlyWins = data.bed_rush_solo_wins_monthly ?? 0;
    this.weeklyWins = data.bed_rush_solo_wins_weekly ?? 0;
    this.winstreak = data.bed_rush_solo_winstreak ?? 0;
    this.dailyWinstreak = data.bed_rush_solo_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.bed_rush_solo_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.bed_rush_solo_winstreak_weekly ?? 0;
  }
}
