import type { APIPlayerPartyStats } from "@stats-types/party.js";

export interface PartySpleefStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
}

export class PartySpleefStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.gamesPlayed = data.spleef_played ?? 0;
    this.points = data.spleef_points ?? 0;
    this.dailyPoints = data.spleef_points_daily ?? 0;
    this.monthlyPoints = data.spleef_points_monthly ?? 0;
    this.weeklyPoints = data.spleef_points_weekly ?? 0;
    this.secondPlace = data.spleef_second_place ?? 0;
    this.thirdPlace = data.spleef_third_place ?? 0;
  }
}
