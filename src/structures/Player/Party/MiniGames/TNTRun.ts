import type { APIPlayerPartyStats } from "@stats-types/party.js";

export interface PartyTNTRunStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
}

export class PartyTNTRunStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.gamesPlayed = data.tnt_run_played ?? 0;
    this.points = data.tnt_run_points ?? 0;
    this.dailyPoints = data.tnt_run_points_daily ?? 0;
    this.monthlyPoints = data.tnt_run_points_monthly ?? 0;
    this.weeklyPoints = data.tnt_run_points_weekly ?? 0;
    this.secondPlace = data.tnt_run_second_place ?? 0;
    this.thirdPlace = data.tnt_run_third_place ?? 0;
  }
}
