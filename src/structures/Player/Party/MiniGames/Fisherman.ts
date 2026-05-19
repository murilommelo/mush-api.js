import type { APIPlayerPartyStats } from "@stats-types/party.js";

export interface PartyFishermanStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
}

export class PartyFishermanStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.gamesPlayed = data.fisherman_played ?? 0;
    this.points = data.fisherman_points ?? 0;
    this.dailyPoints = data.fisherman_points_daily ?? 0;
    this.monthlyPoints = data.fisherman_points_monthly ?? 0;
    this.weeklyPoints = data.fisherman_points_weekly ?? 0;
    this.secondPlace = data.fisherman_second_place ?? 0;
    this.thirdPlace = data.fisherman_third_place ?? 0;
  }
}
