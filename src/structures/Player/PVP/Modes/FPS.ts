import type { APIPlayerPVPStats } from "@stats-types/pvp";

export interface PVPFPSStats {
  dailyKills: number;
  deaths: number;
  kills: number;
  killstreak: number;
  maxKillstreak: number;
  monthlyKills: number;
  weeklyKills: number;
}

export class PVPFPSStats {
  constructor(data: Partial<APIPlayerPVPStats> = {}) {
    this.deaths = data.fps_deaths ?? 0;
    this.kills = data.fps_kills ?? 0;
    this.dailyKills = data.fps_kills_daily ?? 0;
    this.monthlyKills = data.fps_kills_monthly ?? 0;
    this.weeklyKills = data.fps_kills_weekly ?? 0;
    this.killstreak = data.fps_killstreak ?? 0;
    this.maxKillstreak = data.fps_max_killstreak ?? 0;
  }
}
