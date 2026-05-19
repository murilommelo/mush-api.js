import type { APIPlayerPVPStats } from "@stats-types/pvp";

export interface PVPChallengesExtremeStats {
  maxDamageTaken: number;
  maxPlayTime: number;
  plays: number;
  soupsUsed: number;
  damageTaken: number;
  playTime: number;
}

export class PVPChallengesExtremeStats {
  constructor(data: Partial<APIPlayerPVPStats> = {}) {
    this.maxDamageTaken = data.challenges_extreme_max_damage_taken ?? 0;
    this.maxPlayTime = data.challenges_extreme_max_play_time ?? 0;
    this.plays = data.challenges_extreme_plays ?? 0;
    this.soupsUsed = data.challenges_extreme_soups_used ?? 0;
    this.damageTaken = data.challenges_extreme_total_damage_taken ?? 0;
    this.playTime = data.challenges_extreme_total_play_time ?? 0;
  }
}
