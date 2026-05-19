import type { APIPlayerDuelsStats } from "@stats-types/duels.js";
import {
  DefaultGameLevelBadgeColorType,
  LevelBadge,
} from "../../LevelBadge.js";

export interface DuelsBedRushStats {
  bedsBroken: number;
  dailyKills: number;
  dailyWins: number;
  dailyWinstreak: number;
  dailyXp: number;
  deaths: number;
  gamesPlayed: number;
  kills: number;
  level: number;
  levelBadge: LevelBadge;
  losses: number;
  monthlyKills: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  monthlyXp: number;
  maxWinstreak: number;
  wins: number;
  winstreak: number;
  weeklyKills: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  weeklyXp: number;
  xp: number;
}

export class DuelsBedRushStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.bedsBroken = data.bed_rush_beds_broken ?? 0;
    this.deaths = data.bed_rush_deaths ?? 0;
    this.kills = data.bed_rush_kills ?? 0;
    this.dailyKills = data.bed_rush_kills_daily ?? 0;
    this.monthlyKills = data.bed_rush_kills_monthly ?? 0;
    this.weeklyKills = data.bed_rush_kills_weekly ?? 0;
    this.level = data.bed_rush_level ?? 0;
    this.levelBadge = new LevelBadge(
      data.bed_rush_level_badge ?? DefaultGameLevelBadgeColorType,
    );
    this.losses = data.bed_rush_losses ?? 0;
    this.maxWinstreak = data.bed_rush_max_winstreak ?? 0;
    this.gamesPlayed = data.bed_rush_played ?? 0;
    this.wins = data.bed_rush_wins ?? 0;
    this.dailyWins = data.bed_rush_wins_daily ?? 0;
    this.monthlyWins = data.bed_rush_wins_monthly ?? 0;
    this.weeklyWins = data.bed_rush_wins_weekly ?? 0;
    this.winstreak = data.bed_rush_winstreak ?? 0;
    this.dailyWinstreak = data.bed_rush_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.bed_rush_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.bed_rush_winstreak_weekly ?? 0;
    this.xp = data.bed_rush_xp ?? 0;
    this.dailyXp = data.bed_rush_xp_daily ?? 0;
    this.monthlyXp = data.bed_rush_xp_monthly ?? 0;
    this.weeklyXp = data.bed_rush_xp_weekly ?? 0;
  }
}
