import type { APIPlayerPartyStats } from "@stats-types/party.js";

export interface PartyQuakeStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
}

export class PartyQuakeStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.gamesPlayed = data.quake_played ?? 0;
    this.points = data.quake_points ?? 0;
    this.dailyPoints = data.quake_points_daily ?? 0;
    this.monthlyPoints = data.quake_points_monthly ?? 0;
    this.weeklyPoints = data.quake_points_weekly ?? 0;
    this.secondPlace = data.quake_second_place ?? 0;
    this.thirdPlace = data.quake_third_place ?? 0;
  }
}
