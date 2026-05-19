import type { APIPlayerPartyStats } from "@stats-types/party.js";

export interface PartyBarbarianStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
}

export class PartyBarbarianStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.gamesPlayed = data.barbarian_played ?? 0;
    this.points = data.barbarian_points ?? 0;
    this.dailyPoints = data.barbarian_points_daily ?? 0;
    this.monthlyPoints = data.barbarian_points_monthly ?? 0;
    this.weeklyPoints = data.barbarian_points_weekly ?? 0;
    this.secondPlace = data.barbarian_second_place ?? 0;
    this.thirdPlace = data.barbarian_third_place ?? 0;
  }
}
