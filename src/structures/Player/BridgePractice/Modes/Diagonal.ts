import type { APIPlayerBridgePracticeStats } from "@stats-types/bridgepractice";

export interface BridgePracticeDiagonalStats {
  bestTime: number;
  attempts: number;
  bridges: number;
  totalTime: number;
}

export class BridgePracticeDiagonalStats {
  constructor(data: Partial<APIPlayerBridgePracticeStats> = {}) {
    this.bestTime = data.diagonal_best_time ?? 0;
    this.attempts = data.diagonal_bridge_attempts ?? 0;
    this.bridges = data.diagonal_bridges ?? 0;
    this.totalTime = data.diagonal_total_time ?? 0;
  }
}
