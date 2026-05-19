import type { APIPlayerPartyStats } from "@stats-types/party.js";

export interface PartyOITCStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
}

export class PartyOITCStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.gamesPlayed = data.oitc_played ?? 0;
    this.points = data.oitc_points ?? 0;
    this.dailyPoints = data.oitc_points_daily ?? 0;
    this.monthlyPoints = data.oitc_points_monthly ?? 0;
    this.weeklyPoints = data.oitc_points_weekly ?? 0;
    this.secondPlace = data.oitc_second_place ?? 0;
    this.thirdPlace = data.oitc_third_place ?? 0;
  }
}
