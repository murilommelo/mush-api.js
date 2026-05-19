import type { APIPlayerPVPStats } from "@stats-types/pvp";

export interface PVPChallengesVaryingStats {
  maxDamageTaken: number;
  maxPlayTime: number;
  plays: number;
  soupsUsed: number;
  damageTaken: number;
  playTime: number;
}

export class PVPChallengesVaryingStats {
  constructor(data: Partial<APIPlayerPVPStats> = {}) {
    this.maxDamageTaken = data.challenges_varying_max_damage_taken ?? 0;
    this.maxPlayTime = data.challenges_varying_max_play_time ?? 0;
    this.plays = data.challenges_varying_plays ?? 0;
    this.soupsUsed = data.challenges_varying_soups_used ?? 0;
    this.damageTaken = data.challenges_varying_total_damage_taken ?? 0;
    this.playTime = data.challenges_varying_total_play_time ?? 0;
  }
}
