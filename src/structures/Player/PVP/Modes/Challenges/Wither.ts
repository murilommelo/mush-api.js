import type { APIPlayerPVPStats } from "@stats-types/pvp";

export interface PVPChallengesWitherStats {
  maxDamageTaken: number;
  maxPlayTime: number;
  plays: number;
  soupsUsed: number;
  damageTaken: number;
  playTime: number;
}

export class PVPChallengesWitherStats {
  constructor(data: Partial<APIPlayerPVPStats> = {}) {
    this.maxDamageTaken = data.challenges_wither_max_damage_taken ?? 0;
    this.maxPlayTime = data.challenges_wither_max_play_time ?? 0;
    this.plays = data.challenges_wither_plays ?? 0;
    this.soupsUsed = data.challenges_wither_soups_used ?? 0;
    this.damageTaken = data.challenges_wither_total_damage_taken ?? 0;
    this.playTime = data.challenges_wither_total_play_time ?? 0;
  }
}
