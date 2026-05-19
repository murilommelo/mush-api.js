import type { APIPlayerPVPStats } from "@stats-types/pvp";

export interface PVPChallengesMediumStats {
  maxDamageTaken: number;
  maxPlayTime: number;
  plays: number;
  soupsUsed: number;
  damageTaken: number;
  playTime: number;
}

export class PVPChallengesMediumStats {
  constructor(data: Partial<APIPlayerPVPStats> = {}) {
    this.maxDamageTaken = data.challenges_medium_max_damage_taken ?? 0;
    this.maxPlayTime = data.challenges_medium_max_play_time ?? 0;
    this.plays = data.challenges_medium_plays ?? 0;
    this.soupsUsed = data.challenges_medium_soups_used ?? 0;
    this.damageTaken = data.challenges_medium_total_damage_taken ?? 0;
    this.playTime = data.challenges_medium_total_play_time ?? 0;
  }
}
