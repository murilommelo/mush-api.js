import type { APIPlayerPartyStats } from "@stats-types/party.js";

export interface PartyHunterStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
}

export class PartyHunterStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.gamesPlayed = data.hunter_played ?? 0;
    this.points = data.hunter_points ?? 0;
    this.dailyPoints = data.hunter_points_daily ?? 0;
    this.monthlyPoints = data.hunter_points_monthly ?? 0;
    this.weeklyPoints = data.hunter_points_weekly ?? 0;
    this.secondPlace = data.hunter_second_place ?? 0;
    this.thirdPlace = data.hunter_third_place ?? 0;
  }
}
