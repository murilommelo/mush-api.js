import type { APIPlayerDuelsStats } from "@stats-types/duels.js";
import {
  DefaultGameLevelBadgeColorType,
  LevelBadge,
} from "../../LevelBadge.js";

export interface DuelsGappleStats {
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

export class DuelsGappleStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.gapple_deaths ?? 0;
    this.kills = data.gapple_kills ?? 0;
    this.dailyKills = data.gapple_kills_daily ?? 0;
    this.monthlyKills = data.gapple_kills_monthly ?? 0;
    this.weeklyKills = data.gapple_kills_weekly ?? 0;
    this.losses = data.gapple_losses ?? 0;
    this.level = data.gapple_level ?? 0;
    this.levelBadge = new LevelBadge(
      data.gapple_level_badge ?? DefaultGameLevelBadgeColorType,
    );
    this.maxWinstreak = data.gapple_max_winstreak ?? 0;
    this.gamesPlayed = data.gapple_played ?? 0;
    this.wins = data.gapple_wins ?? 0;
    this.dailyWins = data.gapple_wins_daily ?? 0;
    this.monthlyWins = data.gapple_wins_monthly ?? 0;
    this.weeklyWins = data.gapple_wins_weekly ?? 0;
    this.winstreak = data.gapple_winstreak ?? 0;
    this.dailyWinstreak = data.gapple_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.gapple_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.gapple_winstreak_weekly ?? 0;
    this.xp = data.gapple_xp ?? 0;
    this.dailyXp = data.gapple_xp_daily ?? 0;
    this.monthlyXp = data.gapple_xp_monthly ?? 0;
    this.weeklyXp = data.gapple_xp_weekly ?? 0;
  }
}
