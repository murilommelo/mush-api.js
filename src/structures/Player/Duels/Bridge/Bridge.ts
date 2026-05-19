import type { APIPlayerDuelsStats } from "@stats-types/duels.js";
import {
  DefaultGameLevelBadgeColorType,
  LevelBadge,
} from "../../LevelBadge.js";

export interface DuelsBridgeStats {
  dailyKills: number;
  dailyWins: number;
  dailyWinstreak: number;
  dailyXp: number;
  deaths: number;
  gamesPlayed: number;
  kills: number;
  losses: number;
  level: number;
  levelBadge: LevelBadge;
  maxWinstreak: number;
  monthlyKills: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  monthlyXp: number;
  points: number;
  weeklyKills: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  weeklyXp: number;
  winstreak: number;
  wins: number;
  xp: number;
}

export class DuelsBridgeStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.bridge_deaths ?? 0;
    this.kills = data.bridge_kills ?? 0;
    this.dailyKills = data.bridge_kills_daily ?? 0;
    this.monthlyKills = data.bridge_kills_monthly ?? 0;
    this.weeklyKills = data.bridge_kills_weekly ?? 0;
    this.losses = data.bridge_losses ?? 0;
    this.level = data.bridge_level ?? 0;
    this.levelBadge = new LevelBadge(
      data.bridge_level_badge ?? DefaultGameLevelBadgeColorType,
    );
    this.maxWinstreak = data.bridge_max_winstreak ?? 0;
    this.gamesPlayed = data.bridge_played ?? 0;
    this.points = data.bridge_points ?? 0;
    this.wins = data.bridge_wins ?? 0;
    this.dailyWins = data.bridge_wins_daily ?? 0;
    this.monthlyWins = data.bridge_wins_monthly ?? 0;
    this.weeklyWins = data.bridge_wins_weekly ?? 0;
    this.winstreak = data.bridge_winstreak ?? 0;
    this.dailyWinstreak = data.bridge_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.bridge_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.bridge_winstreak_weekly ?? 0;
    this.xp = data.bridge_xp ?? 0;
    this.dailyXp = data.bridge_xp_daily ?? 0;
    this.monthlyXp = data.bridge_xp_monthly ?? 0;
    this.weeklyXp = data.bridge_xp_weekly ?? 0;
  }
}
