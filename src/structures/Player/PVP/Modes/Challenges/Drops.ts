import type { APIPlayerPVPStats } from "@stats-types/pvp";

export interface PVPChallengesDropsStats {
  maxDamageTaken: number;
  maxPlayTime: number;
  plays: number;
  soupsUsed: number;
  damageTaken: number;
  playTime: number;
}

export class PVPChallengesDropsStats {
  constructor(data: Partial<APIPlayerPVPStats> = {}) {
    this.maxDamageTaken = data.challenges_drops_max_damage_taken ?? 0;
    this.maxPlayTime = data.challenges_drops_max_play_time ?? 0;
    this.plays = data.challenges_drops_plays ?? 0;
    this.soupsUsed = data.challenges_drops_soups_used ?? 0;
    this.damageTaken = data.challenges_drops_total_damage_taken ?? 0;
    this.playTime = data.challenges_drops_total_play_time ?? 0;
  }
}
