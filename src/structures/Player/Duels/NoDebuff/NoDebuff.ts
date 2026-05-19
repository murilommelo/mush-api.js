import type { APIPlayerDuelsStats } from "@stats-types/duels.js";
import {
  DefaultGameLevelBadgeColorType,
  LevelBadge,
} from "../../LevelBadge.js";

export interface DuelsNoDebuffStats {
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

export class DuelsNoDebuffStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.no_debuff_deaths ?? 0;
    this.kills = data.no_debuff_kills ?? 0;
    this.dailyKills = data.no_debuff_kills_daily ?? 0;
    this.monthlyKills = data.no_debuff_kills_monthly ?? 0;
    this.weeklyKills = data.no_debuff_kills_weekly ?? 0;
    this.losses = data.no_debuff_losses ?? 0;
    this.level = data.no_debuff_level ?? 0;
    this.levelBadge = new LevelBadge(
      data.no_debuff_level_badge ?? DefaultGameLevelBadgeColorType,
    );
    this.maxWinstreak = data.no_debuff_max_winstreak ?? 0;
    this.gamesPlayed = data.no_debuff_played ?? 0;
    this.wins = data.no_debuff_wins ?? 0;
    this.dailyWins = data.no_debuff_wins_daily ?? 0;
    this.monthlyWins = data.no_debuff_wins_monthly ?? 0;
    this.weeklyWins = data.no_debuff_wins_weekly ?? 0;
    this.winstreak = data.no_debuff_winstreak ?? 0;
    this.dailyWinstreak = data.no_debuff_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.no_debuff_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.no_debuff_winstreak_weekly ?? 0;
    this.xp = data.no_debuff_xp ?? 0;
    this.dailyXp = data.no_debuff_xp_daily ?? 0;
    this.monthlyXp = data.no_debuff_xp_monthly ?? 0;
    this.weeklyXp = data.no_debuff_xp_weekly ?? 0;
  }
}
