import type { APIPlayerBridgePracticeStats } from "@stats-types/bridgepractice";

export interface BridgePracticeInfiniteStats {
  bestTime: number;
  attempts: number;
  bridges: number;
  totalTime: number;
}

export class BridgePracticeInfiniteStats {
  constructor(data: Partial<APIPlayerBridgePracticeStats> = {}) {
    this.bestTime = data.infinite_best_time ?? 0;
    this.attempts = data.infinite_bridge_attempts ?? 0;
    this.bridges = data.infinite_bridges ?? 0;
    this.totalTime = data.infinite_total_time ?? 0;
  }
}
