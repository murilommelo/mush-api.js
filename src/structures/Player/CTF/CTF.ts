import type { APIPlayerCTFStats } from "@stats-types/ctf";

export interface CaptureTheFlagStats {
  captures: number;
  coins: number;
  dailyCaptures: number;
  dailyGames: number;
  dailyKills: number;
  gamesPlayed: number;
  kills: number;
  monthlyCaptures: number;
  monthlyGames: number;
  monthlyKills: number;
  returnedFlags: number;
  weeklyCaptures: number;
  weeklyGames: number;
  weeklyKills: number;
}

export class CaptureTheFlagStats {
  constructor(data: Partial<APIPlayerCTFStats> = {}) {
    this.captures = data.captures ?? 0;
    this.coins = data.coins ?? 0;
    this.dailyCaptures = data.captures_daily ?? 0;
    this.dailyGames = data.games_played_daily ?? 0;
    this.dailyKills = data.kills_daily ?? 0;
    this.gamesPlayed = data.games_played ?? 0;
    this.kills = data.kills ?? 0;
    this.monthlyCaptures = data.captures_monthly ?? 0;
    this.monthlyGames = data.games_played_monthly ?? 0;
    this.monthlyKills = data.kills_monthly ?? 0;
    this.returnedFlags = data.returns ?? 0;
    this.weeklyCaptures = data.captures_weekly ?? 0;
    this.weeklyGames = data.games_played_weekly ?? 0;
    this.weeklyKills = data.kills_weekly ?? 0;
  }
}
