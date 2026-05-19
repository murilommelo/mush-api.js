import type { APIPlayerPartyStats } from "@stats-types/party.js";

export interface PartyStomperStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
}

export class PartyStomperStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.gamesPlayed = data.stomper_played ?? 0;
    this.points = data.stomper_points ?? 0;
    this.dailyPoints = data.stomper_points_daily ?? 0;
    this.monthlyPoints = data.stomper_points_monthly ?? 0;
    this.weeklyPoints = data.stomper_points_weekly ?? 0;
    this.secondPlace = data.stomper_second_place ?? 0;
    this.thirdPlace = data.stomper_third_place ?? 0;
  }
}
