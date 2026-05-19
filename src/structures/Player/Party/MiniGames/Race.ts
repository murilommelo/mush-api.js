import type { APIPlayerPartyStats } from "@stats-types/party.js";

export interface PartyRaceStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
}

export class PartyRaceStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.gamesPlayed = data.race_played ?? 0;
    this.points = data.race_points ?? 0;
    this.dailyPoints = data.race_points_daily ?? 0;
    this.monthlyPoints = data.race_points_monthly ?? 0;
    this.weeklyPoints = data.race_points_weekly ?? 0;
    this.secondPlace = data.race_second_place ?? 0;
    this.thirdPlace = data.race_third_place ?? 0;
  }
}
