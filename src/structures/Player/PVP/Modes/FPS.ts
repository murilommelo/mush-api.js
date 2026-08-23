import type { APIPlayerPVPStats } from "@stats-types/pvp";

export class PVPFPSStats {
  public dailyKills: number;
  public deaths: number;
  public kills: number;
  public killstreak: number;
  public maxKillstreak: number;
  public monthlyKills: number;
  public weeklyKills: number;

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
