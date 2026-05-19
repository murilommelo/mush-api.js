import type { APIPlayerPVPStats } from "@stats-types/pvp";

export interface PVPArenaStats {
    dailyKills: number;
  deaths: number;
  kills: number;
  killstreak: number;
  maxKillstreak: number;
  monthlyKills: number;
  weeklyKills: number;
}

export class PVPArenaStats {
  constructor(data: Partial<APIPlayerPVPStats> = {}) {
    this.deaths = data.arena_deaths ?? 0;
    this.kills = data.arena_kills ?? 0;
    this.dailyKills = data.arena_kills_daily ?? 0;
    this.monthlyKills = data.arena_kills_monthly ?? 0;
    this.weeklyKills = data.arena_kills_weekly ?? 0;
    this.killstreak = data.arena_killstreak ?? 0;
    this.maxKillstreak = data.arena_max_killstreak ?? 0;
  }
}
