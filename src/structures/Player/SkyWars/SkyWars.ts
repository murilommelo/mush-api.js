import type {
  APIPlayerSkyWarsStats,
  SkyWarsKit,
  SkyWarsMode,
} from "@stats-types/skywars_r1.js";
import { DefaultGameLevelBadgeFormatType, LevelBadge } from "../LevelBadge.js";

export class SkyWarsStats {
  public "1v1": SkyWarsModeStats;
  public "2v2": SkyWarsModeStats;
  public coins: number;
  public dailyKills: number;
  public dailyWins: number;
  public dailyWinstreak: number;
  public dailyXp: number;
  public deaths: number;
  public duels: SkyWarsModeStats;
  public gamesPlayed: number;
  public kills: number;
  public level: number;
  public levelBadge: LevelBadge;
  public losses: number;
  public maxWinstreak: number;
  public monthlyKills: number;
  public monthlyWins: number;
  public monthlyWinstreak: number;
  public monthlyXp: number;
  public normal: SkyWarsModeStats;
  public selectedCage: number;
  public souls: number;
  public solo: SkyWarsModeStats;
  public team: SkyWarsModeStats;
  public weeklyKills: number;
  public weeklyWins: number;
  public weeklyWinstreak: number;
  public weeklyXp: number;
  public wins: number;
  public winstreak: number;
  public xp: number;

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
    this["1v1"] = new SkyWarsModeStats("1v1", data);
    this["2v2"] = new SkyWarsModeStats("2v2", data);
    this.duels = new SkyWarsModeStats("duels", data);
    this.normal = new SkyWarsModeStats("normal", data);
    this.solo = new SkyWarsModeStats("solo", data);
    this.team = new SkyWarsModeStats("team", data);
  }
}

class SkyWarsModeStats {
  public mode: SkyWarsMode;
  public deaths: number;
  public dailyKills: number;
  public dailyWins: number;
  public dailyWinstreak: number;
  public gamesPlayed: number;
  public kills: number;
  public losses: number;
  public maxWinstreak: number;
  public monthlyKills: number;
  public monthlyWins: number;
  public monthlyWinstreak: number;
  public selectedKit: number;
  public weeklyKills: number;
  public weeklyWins: number;
  public weeklyWinstreak: number;
  public wins: number;
  public winstreak: number;
  public getKitStats: (kit: SkyWarsKit) => {
    kit: SkyWarsKit;
    wins: number;
    losses: number;
    kills: number;
    deaths: number;
    gamesPlayed: number;
  };

  constructor(mode: SkyWarsMode, data: Partial<APIPlayerSkyWarsStats> = {}) {
    this.mode = mode;
    this.selectedKit = data[`${mode}_selected_kit`] ?? 0;
    this.wins = data[`wins_${mode}`] ?? 0;
    this.dailyWins = data[`wins_${mode}_daily`] ?? 0;
    this.monthlyWins = data[`wins_${mode}_monthly`] ?? 0;
    this.weeklyWins = data[`wins_${mode}_weekly`] ?? 0;
    this.kills = data[`kills_${mode}`] ?? 0;
    this.dailyKills = data[`kills_${mode}_daily`] ?? 0;
    this.monthlyKills = data[`kills_${mode}_monthly`] ?? 0;
    this.weeklyKills = data[`kills_${mode}_weekly`] ?? 0;
    this.deaths = data[`deaths_${mode}`] ?? 0;
    this.losses = data[`losses_${mode}`] ?? 0;
    this.winstreak = data[`winstreak_${mode}`] ?? 0;
    this.dailyWinstreak = data[`winstreak_${mode}_daily`] ?? 0;
    this.monthlyWinstreak = data[`winstreak_${mode}_monthly`] ?? 0;
    this.weeklyWinstreak = data[`winstreak_${mode}_weekly`] ?? 0;
    this.gamesPlayed = data[`games_played_${mode}`] ?? 0;
    this.maxWinstreak = data[`max_winstreak_${mode}`] ?? 0;

    this.getKitStats = function getKitStats(kit: SkyWarsKit) {
      const wins = data[`wins_${mode}_kit_${kit}`] ?? 0;
      const losses = data[`losses_${mode}_kit_${kit}`] ?? 0;
      const kills = data[`kills_${mode}_kit_${kit}`] ?? 0;
      const deaths = data[`deaths_${mode}_kit_${kit}`] ?? 0;
      const gamesPlayed = data[`games_played_${mode}_kit_${kit}`] ?? 0;

      return {
        kit,
        wins,
        losses,
        kills,
        deaths,
        gamesPlayed,
      };
    };
  }
}
