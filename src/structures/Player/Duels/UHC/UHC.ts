import type { APIPlayerDuelsStats } from "@stats-types/duels.js";
import {
  DefaultGameLevelBadgeColorType,
  LevelBadge,
} from "../../LevelBadge.js";

export interface DuelsUHCStats {
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

export class DuelsUHCStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.uhc_deaths ?? 0;
    this.kills = data.uhc_kills ?? 0;
    this.dailyKills = data.uhc_kills_daily ?? 0;
    this.monthlyKills = data.uhc_kills_monthly ?? 0;
    this.weeklyKills = data.uhc_kills_weekly ?? 0;
    this.level = data.uhc_level ?? 0;
    this.levelBadge = new LevelBadge(
      data.uhc_level_badge ?? DefaultGameLevelBadgeColorType,
    );
    this.losses = data.uhc_losses ?? 0;
    this.maxWinstreak = data.uhc_max_winstreak ?? 0;
    this.gamesPlayed = data.uhc_played ?? 0;
    this.wins = data.uhc_wins ?? 0;
    this.dailyWins = data.uhc_wins_daily ?? 0;
    this.monthlyWins = data.uhc_wins_monthly ?? 0;
    this.weeklyWins = data.uhc_wins_weekly ?? 0;
    this.winstreak = data.uhc_winstreak ?? 0;
    this.dailyWinstreak = data.uhc_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.uhc_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.uhc_winstreak_weekly ?? 0;
    this.xp = data.uhc_xp ?? 0;
    this.dailyXp = data.uhc_xp_daily ?? 0;
    this.monthlyXp = data.uhc_xp_monthly ?? 0;
    this.weeklyXp = data.uhc_xp_weekly ?? 0;
  }
}
