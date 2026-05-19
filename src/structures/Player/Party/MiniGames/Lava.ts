import type { APIPlayerPartyStats } from "@stats-types/party.js";

export interface PartyLavaStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
}

export class PartyLavaStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.gamesPlayed = data.lava_played ?? 0;
    this.points = data.lava_points ?? 0;
    this.dailyPoints = data.lava_points_daily ?? 0;
    this.monthlyPoints = data.lava_points_monthly ?? 0;
    this.weeklyPoints = data.lava_points_weekly ?? 0;
    this.secondPlace = data.lava_second_place ?? 0;
    this.thirdPlace = data.lava_third_place ?? 0;
  }
}
