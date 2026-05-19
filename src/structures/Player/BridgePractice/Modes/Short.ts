import type { APIPlayerBridgePracticeStats } from "@stats-types/bridgepractice";

export interface BridgePracticeShortStats {
  bestTime: number;
  attempts: number;
  bridges: number;
  totalTime: number;
}

export class BridgePracticeShortStats {
  constructor(data: Partial<APIPlayerBridgePracticeStats> = {}) {
    this.bestTime = data.short_best_time ?? 0;
    this.attempts = data.short_bridge_attempts ?? 0;
    this.bridges = data.short_bridges ?? 0;
    this.totalTime = data.short_total_time ?? 0;
  }
}
