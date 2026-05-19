import type { APIPlayerDuelsStats } from "@stats-types/duels.js";
import {
  DefaultGameLevelBadgeColorType,
  LevelBadge,
} from "../../LevelBadge.js";

export interface DuelsHGSimStats {
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

export class DuelsHGSimStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.hgsim_deaths ?? 0;
    this.kills = data.hgsim_kills ?? 0;
    this.dailyKills = data.hgsim_kills_daily ?? 0;
    this.monthlyKills = data.hgsim_kills_monthly ?? 0;
    this.weeklyKills = data.hgsim_kills_weekly ?? 0;
    this.losses = data.hgsim_losses ?? 0;
    this.level = data.hgsim_level ?? 0;
    this.levelBadge = new LevelBadge(
      data.hgsim_level_badge ?? DefaultGameLevelBadgeColorType,
    );
    this.maxWinstreak = data.hgsim_max_winstreak ?? 0;
    this.gamesPlayed = data.hgsim_played ?? 0;
    this.wins = data.hgsim_wins ?? 0;
    this.dailyWins = data.hgsim_wins_daily ?? 0;
    this.monthlyWins = data.hgsim_wins_monthly ?? 0;
    this.weeklyWins = data.hgsim_wins_weekly ?? 0;
    this.winstreak = data.hgsim_winstreak ?? 0;
    this.dailyWinstreak = data.hgsim_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.hgsim_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.hgsim_winstreak_weekly ?? 0;
    this.xp = data.hgsim_xp ?? 0;
    this.dailyXp = data.hgsim_xp_daily ?? 0;
    this.monthlyXp = data.hgsim_xp_monthly ?? 0;
    this.weeklyXp = data.hgsim_xp_weekly ?? 0;
  }
}
