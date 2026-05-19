import type { APIPlayerDuelsStats } from "@stats-types/duels.js";
import {
  DefaultGameLevelBadgeColorType,
  LevelBadge,
} from "../../LevelBadge.js";

export interface DuelsSumoStats {
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
  maxWinstreak: number;
  monthlyKills: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  monthlyXp: number;
  weeklyKills: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  weeklyXp: number;
  wins: number;
  winstreak: number;
  xp: number;
}

export class DuelsSumoStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.sumo_deaths ?? 0;
    this.kills = data.sumo_kills ?? 0;
    this.dailyKills = data.sumo_kills_daily ?? 0;
    this.monthlyKills = data.sumo_kills_monthly ?? 0;
    this.weeklyKills = data.sumo_kills_weekly ?? 0;
    this.level = data.sumo_level ?? 0;
    this.levelBadge = new LevelBadge(
      data.sumo_level_badge ?? DefaultGameLevelBadgeColorType,
    );
    this.losses = data.sumo_losses ?? 0;
    this.maxWinstreak = data.sumo_max_winstreak ?? 0;
    this.gamesPlayed = data.sumo_played ?? 0;
    this.wins = data.sumo_wins ?? 0;
    this.dailyWins = data.sumo_wins_daily ?? 0;
    this.monthlyWins = data.sumo_wins_monthly ?? 0;
    this.weeklyWins = data.sumo_wins_weekly ?? 0;
    this.winstreak = data.sumo_winstreak ?? 0;
    this.dailyWinstreak = data.sumo_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.sumo_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.sumo_winstreak_weekly ?? 0;
    this.xp = data.sumo_xp ?? 0;
    this.dailyXp = data.sumo_xp_daily ?? 0;
    this.monthlyXp = data.sumo_xp_monthly ?? 0;
    this.weeklyXp = data.sumo_xp_weekly ?? 0;
  }
}
