import type { APIPlayerBridgePracticeStats } from "@stats-types/bridgepractice";

export interface BridgePracticeExtraShortStats {
  bestTime: number;
  attempts: number;
  bridges: number;
  totalTime: number;
}

export class BridgePracticeExtraShortStats {
  constructor(data: Partial<APIPlayerBridgePracticeStats> = {}) {
    this.bestTime = data.extra_short_best_time ?? 0;
    this.attempts = data.extra_short_bridge_attempts ?? 0;
    this.bridges = data.extra_short_bridges ?? 0;
    this.totalTime = data.extra_short_total_time ?? 0;
  }
}
