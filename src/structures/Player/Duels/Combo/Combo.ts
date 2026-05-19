import type { APIPlayerDuelsStats } from "@stats-types/duels.js";
import {
  DefaultGameLevelBadgeColorType,
  LevelBadge,
} from "../../LevelBadge.js";

export interface DuelsComboStats {
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

export class DuelsComboStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.combo_deaths ?? 0;
    this.kills = data.combo_kills ?? 0;
    this.dailyKills = data.combo_kills_daily ?? 0;
    this.monthlyKills = data.combo_kills_monthly ?? 0;
    this.weeklyKills = data.combo_kills_weekly ?? 0;
    this.losses = data.combo_losses ?? 0;
    this.level = data.combo_level ?? 0;
    this.levelBadge = new LevelBadge(
      data.combo_level_badge ?? DefaultGameLevelBadgeColorType,
    );
    this.maxWinstreak = data.combo_max_winstreak ?? 0;
    this.gamesPlayed = data.combo_played ?? 0;
    this.wins = data.combo_wins ?? 0;
    this.dailyWins = data.combo_wins_daily ?? 0;
    this.monthlyWins = data.combo_wins_monthly ?? 0;
    this.weeklyWins = data.combo_wins_weekly ?? 0;
    this.winstreak = data.combo_winstreak ?? 0;
    this.dailyWinstreak = data.combo_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.combo_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.combo_winstreak_weekly ?? 0;
    this.xp = data.combo_xp ?? 0;
    this.dailyXp = data.combo_xp_daily ?? 0;
    this.monthlyXp = data.combo_xp_monthly ?? 0;
    this.weeklyXp = data.combo_xp_weekly ?? 0;
  }
}
