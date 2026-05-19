import type { APIPlayerPartyStats } from "@stats-types/party.js";

export interface PartyArenaPVPStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
}

export class PartyArenaPVPStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.gamesPlayed = data.arena_pvp_played ?? 0;
    this.points = data.arena_pvp_points ?? 0;
    this.dailyPoints = data.arena_pvp_points_daily ?? 0;
    this.monthlyPoints = data.arena_pvp_points_monthly ?? 0;
    this.weeklyPoints = data.arena_pvp_points_weekly ?? 0;
    this.secondPlace = data.arena_pvp_second_place ?? 0;
    this.thirdPlace = data.arena_pvp_third_place ?? 0;
  }
}
