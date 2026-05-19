import type { APIPlayerDuelsStats } from "@stats-types/duels.js";
import {
  DefaultGameLevelBadgeColorType,
  LevelBadge,
} from "../../LevelBadge.js";

export interface DuelsPearlFightStats {
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

export class DuelsPearlFightStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.deaths = data.pearl_fight_deaths ?? 0;
    this.kills = data.pearl_fight_kills ?? 0;
    this.dailyKills = data.pearl_fight_kills_daily ?? 0;
    this.monthlyKills = data.pearl_fight_kills_monthly ?? 0;
    this.weeklyKills = data.pearl_fight_kills_weekly ?? 0;
    this.level = data.pearl_fight_level ?? 0;
    this.levelBadge = new LevelBadge(
      data.pearl_fight_level_badge ?? DefaultGameLevelBadgeColorType,
    );
    this.losses = data.pearl_fight_losses ?? 0;
    this.maxWinstreak = data.pearl_fight_max_winstreak ?? 0;
    this.gamesPlayed = data.pearl_fight_played ?? 0;
    this.wins = data.pearl_fight_wins ?? 0;
    this.dailyWins = data.pearl_fight_wins_daily ?? 0;
    this.monthlyWins = data.pearl_fight_wins_monthly ?? 0;
    this.weeklyWins = data.pearl_fight_wins_weekly ?? 0;
    this.winstreak = data.pearl_fight_winstreak ?? 0;
    this.dailyWinstreak = data.pearl_fight_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.pearl_fight_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.pearl_fight_winstreak_weekly ?? 0;
    this.xp = data.pearl_fight_xp ?? 0;
    this.dailyXp = data.pearl_fight_xp_daily ?? 0;
    this.monthlyXp = data.pearl_fight_xp_monthly ?? 0;
    this.weeklyXp = data.pearl_fight_xp_weekly ?? 0;
  }
}
