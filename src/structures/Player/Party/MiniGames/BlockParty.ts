import type { APIPlayerPartyStats } from "@stats-types/party.js";

export interface PartyBlockPartyStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
}

export class PartyBlockPartyStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.gamesPlayed = data.block_party_played ?? 0;
    this.points = data.block_party_points ?? 0;
    this.dailyPoints = data.block_party_points_daily ?? 0;
    this.monthlyPoints = data.block_party_points_monthly ?? 0;
    this.weeklyPoints = data.block_party_points_weekly ?? 0;
    this.secondPlace = data.block_party_second_place ?? 0;
    this.thirdPlace = data.block_party_third_place ?? 0;
  }
}
