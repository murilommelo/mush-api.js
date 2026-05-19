import type { APIPlayerBridgePracticeStats } from "@stats-types/bridgepractice";

export interface BridgePracticeLongStats {
  bestTime: number;
  attempts: number;
  bridges: number;
  totalTime: number;
}

export class BridgePracticeLongStats {
  constructor(data: Partial<APIPlayerBridgePracticeStats> = {}) {
    this.bestTime = data.long_best_time ?? 0;
    this.attempts = data.long_bridge_attempts ?? 0;
    this.bridges = data.long_bridges ?? 0;
    this.totalTime = data.long_total_time ?? 0;
  }
}
