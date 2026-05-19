import type { APIPlayerBridgePracticeStats } from "@stats-types/bridgepractice";

export interface BridgePracticeNormalStats {
  bestTime: number;
  attempts: number;
  bridges: number;
  totalTime: number;
}

export class BridgePracticeNormalStats {
  constructor(data: Partial<APIPlayerBridgePracticeStats> = {}) {
    this.bestTime = data.normal_best_time ?? 0;
    this.attempts = data.normal_bridge_attempts ?? 0;
    this.bridges = data.normal_bridges ?? 0;
    this.totalTime = data.normal_total_time ?? 0;
  }
}
