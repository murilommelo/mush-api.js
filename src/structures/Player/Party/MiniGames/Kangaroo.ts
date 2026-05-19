import type { APIPlayerPartyStats } from "@stats-types/party.js";

export interface PartyKangarooStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
}

export class PartyKangarooStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.gamesPlayed = data.kangaroo_race_played ?? 0;
    this.points = data.kangaroo_race_points ?? 0;
    this.dailyPoints = data.kangaroo_race_points_daily ?? 0;
    this.monthlyPoints = data.kangaroo_race_points_monthly ?? 0;
    this.weeklyPoints = data.kangaroo_race_points_weekly ?? 0;
    this.secondPlace = data.kangaroo_race_second_place ?? 0;
    this.thirdPlace = data.kangaroo_race_third_place ?? 0;
  }
}
