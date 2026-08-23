import type { APIPlayerPVPStats, ChallengesMode } from "@stats-types/pvp";

export class PVPChallengesStats {
  public getLevelStats: (level: ChallengesMode) => {
    level: ChallengesMode;
    maxDamageTaken: number;
    maxPlayTime: number;
    plays: number;
    soupsUsed: number;
    damageTaken: number;
    playTime: number;
  };

  constructor(data: Partial<APIPlayerPVPStats> = {}) {
    this.getLevelStats = function getLevelStats(level: ChallengesMode) {
      const maxDamageTaken = data[`challenges_${level}_max_damage_taken`] ?? 0;
      const maxPlayTime = data[`challenges_${level}_max_play_time`] ?? 0;
      const plays = data[`challenges_${level}_plays`] ?? 0;
      const soupsUsed = data[`challenges_${level}_soups_used`] ?? 0;
      const damageTaken = data[`challenges_${level}_total_damage_taken`] ?? 0;
      const playTime = data[`challenges_${level}_total_play_time`] ?? 0;

      return {
        level,
        maxDamageTaken,
        maxPlayTime,
        plays,
        soupsUsed,
        damageTaken,
        playTime,
      };
    };
  }
}
