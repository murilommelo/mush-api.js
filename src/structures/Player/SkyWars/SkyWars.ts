import type { APIPlayerSkyWarsStats } from "@stats-types/skywars_r1.js";
import { DefaultGameLevelBadgeFormatType, LevelBadge } from "../LevelBadge.js";
import { SkyWars1v1Stats } from "./Modes/1v1.js";
import { SkyWars2v2Stats } from "./Modes/2v2.js";
import { SkyWarsDuelsStats } from "./Modes/Duels.js";
import { SkyWarsNormalStats } from "./Modes/Normal.js";
import { SkyWarsSoloStats } from "./Modes/Solo.js";
import { SkyWarsTeamStats } from "./Modes/Team.js";

export interface SkyWarsStats {
  "1v1": SkyWars1v1Stats;
  "2v2": SkyWars2v2Stats;
  coins: number;
  dailyKills: number;
  dailyWins: number;
  dailyWinstreak: number;
  dailyXp: number;
  deaths: number;
  duels: SkyWarsDuelsStats;
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
  normal: SkyWarsNormalStats;
  selectedCage: number;
  souls: number;
  solo: SkyWarsSoloStats;
  team: SkyWarsTeamStats;
  weeklyKills: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  weeklyXp: number;
  wins: number;
  winstreak: number;
  xp: number;
}

export class SkyWarsStats {
  constructor(data: Partial<APIPlayerSkyWarsStats> = {}) {
    this.coins = data.coins ?? 0;
    this.deaths = data.deaths ?? 0;
    this.gamesPlayed = data.games_played ?? 0;
    this.kills = data.kills ?? 0;
    this.dailyKills = data.kills_daily ?? 0;
    this.monthlyKills = data.kills_monthly ?? 0;
    this.weeklyKills = data.kills_weekly ?? 0;
    this.level = data.level ?? 0;
    this.levelBadge = new LevelBadge(
      data.level_badge ?? DefaultGameLevelBadgeFormatType,
    );
    this.losses = data.losses ?? 0;
    this.maxWinstreak = data.max_winstreak ?? 0;
    this.selectedCage = data.selected_cage ?? 0;
    this.souls = data.souls ?? 0;
    this.wins = data.wins ?? 0;
    this.dailyWins = data.wins_daily ?? 0;
    this.monthlyWins = data.wins_monthly ?? 0;
    this.weeklyWins = data.wins_weekly ?? 0;
    this.winstreak = data.winstreak ?? 0;
    this.dailyWinstreak = data.winstreak_daily ?? 0;
    this.monthlyWinstreak = data.winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.winstreak_weekly ?? 0;
    this.xp = data.xp ?? 0;
    this.dailyXp = data.xp_daily ?? 0;
    this.monthlyXp = data.xp_monthly ?? 0;
    this.weeklyXp = data.xp_weekly ?? 0;

    this["1v1"] = new SkyWars1v1Stats(data);
    this["2v2"] = new SkyWars2v2Stats(data);
    this.duels = new SkyWarsDuelsStats(data);
    this.normal = new SkyWarsNormalStats(data);
    this.solo = new SkyWarsSoloStats(data);
    this.team = new SkyWarsTeamStats(data);
  }
}
