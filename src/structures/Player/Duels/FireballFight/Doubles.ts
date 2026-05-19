import type { APIPlayerDuelsStats } from "@stats-types/duels.js";

export interface DuelsFireballFightDoublesStats {
  bedsBroken: number;
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

export class DuelsFireballFightDoublesStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.bedsBroken = data.fireball_fight_doubles_beds_broken ?? 0;
    this.deaths = data.fireball_fight_doubles_deaths ?? 0;
    this.kills = data.fireball_fight_doubles_kills ?? 0;
    this.dailyKills = data.fireball_fight_doubles_kills_daily ?? 0;
    this.monthlyKills = data.fireball_fight_doubles_kills_monthly ?? 0;
    this.weeklyKills = data.fireball_fight_doubles_kills_weekly ?? 0;
    this.losses = data.fireball_fight_doubles_losses ?? 0;
    this.maxWinstreak = data.fireball_fight_doubles_max_winstreak ?? 0;
    this.gamesPlayed = data.fireball_fight_doubles_played ?? 0;
    this.wins = data.fireball_fight_doubles_wins ?? 0;
    this.dailyWins = data.fireball_fight_doubles_wins_daily ?? 0;
    this.monthlyWins = data.fireball_fight_doubles_wins_monthly ?? 0;
    this.weeklyWins = data.fireball_fight_doubles_wins_weekly ?? 0;
    this.winstreak = data.fireball_fight_doubles_winstreak ?? 0;
    this.dailyWinstreak = data.fireball_fight_doubles_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.fireball_fight_doubles_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.fireball_fight_doubles_winstreak_weekly ?? 0;
  }
}
