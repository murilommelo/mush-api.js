import type { APIPlayerDuelsStats } from "@stats-types/duels.js";
import {
  DefaultGameLevelBadgeColorType,
  LevelBadge,
} from "../../LevelBadge.js";

export interface DuelsLavaStats {
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

export class DuelsLavaStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.lava_deaths ?? 0;
    this.losses = data.lava_losses ?? 0;
    this.level = data.lava_level ?? 0;
    this.levelBadge = new LevelBadge(
      data.lava_level_badge ?? DefaultGameLevelBadgeColorType,
    );
    this.maxWinstreak = data.lava_max_winstreak ?? 0;
    this.gamesPlayed = data.lava_played ?? 0;
    this.wins = data.lava_wins ?? 0;
    this.dailyWins = data.lava_wins_daily ?? 0;
    this.monthlyWins = data.lava_wins_monthly ?? 0;
    this.weeklyWins = data.lava_wins_weekly ?? 0;
    this.winstreak = data.lava_winstreak ?? 0;
    this.dailyWinstreak = data.lava_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.lava_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.lava_winstreak_weekly ?? 0;
    this.xp = data.lava_xp ?? 0;
    this.dailyXp = data.lava_xp_daily ?? 0;
    this.monthlyXp = data.lava_xp_monthly ?? 0;
    this.weeklyXp = data.lava_xp_weekly ?? 0;
  }
}
