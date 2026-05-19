import type { APIPlayerPVPStats } from "@stats-types/pvp";

export interface PVPChallengesEasyStats {
  maxDamageTaken: number;
  maxPlayTime: number;
  plays: number;
  soupsUsed: number;
  damageTaken: number;
  playTime: number;
}

export class PVPChallengesEasyStats {
  constructor(data: Partial<APIPlayerPVPStats> = {}) {
    this.maxDamageTaken = data.challenges_easy_max_damage_taken ?? 0;
    this.maxPlayTime = data.challenges_easy_max_play_time ?? 0;
    this.plays = data.challenges_easy_plays ?? 0;
    this.soupsUsed = data.challenges_easy_soups_used ?? 0;
    this.damageTaken = data.challenges_easy_total_damage_taken ?? 0;
    this.playTime = data.challenges_easy_total_play_time ?? 0;
  }
}
