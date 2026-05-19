import type { APIPlayerDuelsStats } from "@stats-types/duels.js";
import {
  DefaultGameLevelBadgeColorType,
  LevelBadge,
} from "../../LevelBadge.js";

export interface DuelsFireballFightStats {
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

export class DuelsFireballFightStats {
  constructor(data: Partial<APIPlayerDuelsStats> = {}) {
    this.bedsBroken = data.fireball_fight_beds_broken ?? 0;
    this.deaths = data.fireball_fight_deaths ?? 0;
    this.kills = data.fireball_fight_kills ?? 0;
    this.dailyKills = data.fireball_fight_kills_daily ?? 0;
    this.monthlyKills = data.fireball_fight_kills_monthly ?? 0;
    this.weeklyKills = data.fireball_fight_kills_weekly ?? 0;
    this.level = data.fireball_fight_level ?? 0;
    this.levelBadge = new LevelBadge(
      data.fireball_fight_level_badge ?? DefaultGameLevelBadgeColorType,
    );
    this.losses = data.fireball_fight_losses ?? 0;
    this.maxWinstreak = data.fireball_fight_max_winstreak ?? 0;
    this.gamesPlayed = data.fireball_fight_played ?? 0;
    this.wins = data.fireball_fight_wins ?? 0;
    this.dailyWins = data.fireball_fight_wins_daily ?? 0;
    this.monthlyWins = data.fireball_fight_wins_monthly ?? 0;
    this.weeklyWins = data.fireball_fight_wins_weekly ?? 0;
    this.winstreak = data.fireball_fight_winstreak ?? 0;
    this.dailyWinstreak = data.fireball_fight_winstreak_daily ?? 0;
    this.monthlyWinstreak = data.fireball_fight_winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.fireball_fight_winstreak_weekly ?? 0;
    this.xp = data.fireball_fight_xp ?? 0;
    this.dailyXp = data.fireball_fight_xp_daily ?? 0;
    this.monthlyXp = data.fireball_fight_xp_monthly ?? 0;
    this.weeklyXp = data.fireball_fight_xp_weekly ?? 0;
  }
}
