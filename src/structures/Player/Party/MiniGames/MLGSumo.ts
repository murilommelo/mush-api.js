import type { APIPlayerPartyStats } from "@stats-types/party.js";

export interface PartyMLGSumoStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
}

export class PartyMLGSumoStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.gamesPlayed = data.mlg_sumo_played ?? 0;
    this.points = data.mlg_sumo_points ?? 0;
    this.dailyPoints = data.mlg_sumo_points_daily ?? 0;
    this.monthlyPoints = data.mlg_sumo_points_monthly ?? 0;
    this.weeklyPoints = data.mlg_sumo_points_weekly ?? 0;
    this.secondPlace = data.mlg_sumo_second_place ?? 0;
    this.thirdPlace = data.mlg_sumo_third_place ?? 0;
  }
}
