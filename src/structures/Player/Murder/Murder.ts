import type { APIPlayerMurderStats, MurderRole } from "@stats-types/murder";

export class MurderStats {
  public coins: number;
  public dailyMurdererKills: number;
  public dailyWins: number;
  public dailyWinstreak: number;
  public deaths: number;
  public gamesPlayed: number;
  public kills: number;
  public losses: number;
  public monthlyMurdererKills: number;
  public monthlyWins: number;
  public monthlyWinstreak: number;
  public murdererKills: number;
  public weeklyMurdererKills: number;
  public weeklyWins: number;
  public weeklyWinstreak: number;
  public wins: number;
  public winstreak: number;
  public getRoleStats: (role: MurderRole) => {
    role: MurderRole;
    dailyMurdererKills: number;
    dailyWins: number;
    dailyWinstreak: number;
    deaths: number;
    gamesPlayed: number;
    kills: number;
    lastPlayedBits: number;
    losses: number;
    monthlyMurdererKills: number;
    monthlyWins: number;
    monthlyWinstreak: number;
    murdererKills: number;
    weeklyMurdererKills: number;
    weeklyWins: number;
    weeklyWinstreak: number;
    wins: number;
    winstreak: number;
  };

  constructor(data: Partial<APIPlayerMurderStats> = {}) {
    this.coins = data.coins_picked_up ?? 0;
    this.deaths = data.deaths ?? 0;
    this.kills = data.kills ?? 0;
    this.murdererKills = data.killed_murderer ?? 0;
    this.dailyMurdererKills = data.killed_murderer_daily ?? 0;
    this.monthlyMurdererKills = data.killed_murderer_monthly ?? 0;
    this.weeklyMurdererKills = data.killed_murderer_weekly ?? 0;
    this.losses = data.losses ?? 0;
    this.gamesPlayed = data.played ?? 0;
    this.wins = data.wins ?? 0;
    this.dailyWins = data.wins_daily ?? 0;
    this.monthlyWins = data.wins_monthly ?? 0;
    this.weeklyWins = data.wins_weekly ?? 0;
    this.winstreak = data.winstreak ?? 0;
    this.dailyWinstreak = data.winstreak_daily ?? 0;
    this.monthlyWinstreak = data.winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.winstreak_weekly ?? 0;

    this.getRoleStats = function getRoleStats(role: MurderRole) {
      const deaths = data[`${role}_deaths`] ?? 0;
      const murdererKills = data[`${role}_killed_murderer`] ?? 0;
      const dailyMurdererKills = data[`${role}_killed_murderer_daily`] ?? 0;
      const monthlyMurdererKills = data[`${role}_killed_murderer_monthly`] ?? 0;
      const weeklyMurdererKills = data[`${role}_killed_murderer_weekly`] ?? 0;
      const kills = data[`${role}_kills`] ?? 0;
      const lastPlayedBits = data[`${role}_last_played_bits`] ?? 0;
      const losses = data[`${role}_losses`] ?? 0;
      const gamesPlayed = data[`${role}_played`] ?? 0;
      const wins = data[`${role}_wins`] ?? 0;
      const dailyWins = data[`${role}_wins_daily`] ?? 0;
      const monthlyWins = data[`${role}_wins_monthly`] ?? 0;
      const weeklyWins = data[`${role}_wins_weekly`] ?? 0;
      const winstreak = data[`${role}_winstreak`] ?? 0;
      const dailyWinstreak = data[`${role}_winstreak_daily`] ?? 0;
      const monthlyWinstreak = data[`${role}_winstreak_monthly`] ?? 0;
      const weeklyWinstreak = data[`${role}_winstreak_weekly`] ?? 0;

      return {
        role,
        deaths,
        murdererKills,
        dailyMurdererKills,
        monthlyMurdererKills,
        weeklyMurdererKills,
        kills,
        lastPlayedBits,
        losses,
        gamesPlayed,
        wins,
        dailyWins,
        monthlyWins,
        weeklyWins,
        winstreak,
        dailyWinstreak,
        monthlyWinstreak,
        weeklyWinstreak,
      };
    };
  }
}
