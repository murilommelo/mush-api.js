import type {
  APIPlayerBridgePracticeStats,
  BridgePracticeMode,
} from "@stats-types/bridgepractice.js";

export class BridgePracticeStats {
  public getModeStats: (mode: BridgePracticeMode) => {
    mode: BridgePracticeMode;
    bestTime: number;
    attempts: number;
    bridges: number;
    totalTime: number;
  };

  constructor(data: Partial<APIPlayerBridgePracticeStats> = {}) {
    this.getModeStats = function getModeStats(mode: BridgePracticeMode) {
      const bestTime = data[`${mode}_best_time`] ?? 0;
      const attempts = data[`${mode}_bridge_attempts`] ?? 0;
      const bridges = data[`${mode}_bridges`] ?? 0;
      const totalTime = data[`${mode}_total_time`] ?? 0;

      return {
        mode,
        bestTime,
        attempts,
        bridges,
        totalTime,
      };
    };
  }
}
