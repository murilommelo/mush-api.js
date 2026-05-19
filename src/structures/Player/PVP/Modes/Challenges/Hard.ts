import type { APIPlayerPVPStats } from "@stats-types/pvp";

export interface PVPChallengesHardStats {
  maxDamageTaken: number;
  maxPlayTime: number;
  plays: number;
  soupsUsed: number;
  damageTaken: number;
  playTime: number;
}

export class PVPChallengesHardStats {
  constructor(data: Partial<APIPlayerPVPStats> = {}) {
    this.maxDamageTaken = data.challenges_hard_max_damage_taken ?? 0;
    this.maxPlayTime = data.challenges_hard_max_play_time ?? 0;
    this.plays = data.challenges_hard_plays ?? 0;
    this.soupsUsed = data.challenges_hard_soups_used ?? 0;
    this.damageTaken = data.challenges_hard_total_damage_taken ?? 0;
    this.playTime = data.challenges_hard_total_play_time ?? 0;
  }
}
