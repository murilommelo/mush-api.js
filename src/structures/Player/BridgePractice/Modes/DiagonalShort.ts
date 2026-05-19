import type { APIPlayerBridgePracticeStats } from "@stats-types/bridgepractice";

export interface BridgePracticeDiagonalShortStats {
  bestTime: number;
  attempts: number;
  bridges: number;
  totalTime: number;
}

export class BridgePracticeDiagonalShortStats {
  constructor(data: Partial<APIPlayerBridgePracticeStats> = {}) {
    this.bestTime = data.diagonal_short_best_time ?? 0;
    this.attempts = data.diagonal_short_bridge_attempts ?? 0;
    this.bridges = data.diagonal_short_bridges ?? 0;
    this.totalTime = data.diagonal_short_total_time ?? 0;
  }
}
