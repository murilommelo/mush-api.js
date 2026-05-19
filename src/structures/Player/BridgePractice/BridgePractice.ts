import type { APIPlayerBridgePracticeStats } from "@stats-types/bridgepractice";
import { BridgePracticeDiagonalStats } from "./Modes/Diagonal.js";
import { BridgePracticeDiagonalShortStats } from "./Modes/DiagonalShort.js";
import { BridgePracticeExtraShortStats } from "./Modes/ExtraShort.js";
import { BridgePracticeInfiniteStats } from "./Modes/Infinite.js";
import { BridgePracticeLongStats } from "./Modes/Long.js";
import { BridgePracticeNormalStats } from "./Modes/Normal.js";
import { BridgePracticeShortStats } from "./Modes/Short.js";

export interface BridgePracticeStats {
  diagonal: BridgePracticeDiagonalStats;
  diagonalShort: BridgePracticeDiagonalShortStats;
  extraShort: BridgePracticeExtraShortStats;
  infinite: BridgePracticeInfiniteStats;
  long: BridgePracticeLongStats;
  normal: BridgePracticeNormalStats;
  short: BridgePracticeShortStats;
}

export class BridgePracticeStats {
  constructor(data: Partial<APIPlayerBridgePracticeStats> = {}) {
    this.diagonal = new BridgePracticeDiagonalStats(data);
    this.diagonalShort = new BridgePracticeDiagonalShortStats(data);
    this.extraShort = new BridgePracticeExtraShortStats(data);
    this.infinite = new BridgePracticeInfiniteStats(data);
    this.long = new BridgePracticeLongStats(data);
    this.normal = new BridgePracticeNormalStats(data);
    this.short = new BridgePracticeShortStats(data);
  }
}
