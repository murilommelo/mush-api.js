import type { APIPlayerPartyStats } from "@stats-types/party.js";

export interface PartyGrapplerStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
}

export class PartyGrapplerStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.gamesPlayed = data.grappler_race_played ?? 0;
    this.points = data.grappler_race_points ?? 0;
    this.dailyPoints = data.grappler_race_points_daily ?? 0;
    this.monthlyPoints = data.grappler_race_points_monthly ?? 0;
    this.weeklyPoints = data.grappler_race_points_weekly ?? 0;
    this.secondPlace = data.grappler_race_second_place ?? 0;
    this.thirdPlace = data.grappler_race_third_place ?? 0;
  }
}
