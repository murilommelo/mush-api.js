import type { APIPlayerPVPStats } from "@stats-types/pvp";
import { PVPChallengesDropsStats } from "./Challenges/Drops.js";
import { PVPChallengesEasyStats } from "./Challenges/Easy.js";
import { PVPChallengesExtremeStats } from "./Challenges/Extreme.js";
import { PVPChallengesHardStats } from "./Challenges/Hard.js";
import { PVPChallengesMediumStats } from "./Challenges/Medium.js";
import { PVPChallengesVaryingStats } from "./Challenges/Varying.js";
import { PVPChallengesWitherStats } from "./Challenges/Wither.js";

export interface PVPChallengesStats {
  easy: PVPChallengesEasyStats;
  medium: PVPChallengesMediumStats;
  hard: PVPChallengesHardStats;
  extreme: PVPChallengesExtremeStats;
  varying: PVPChallengesVaryingStats;
  drops: PVPChallengesDropsStats;
  wither: PVPChallengesWitherStats;
}

export class PVPChallengesStats {
  constructor(data: Partial<APIPlayerPVPStats> = {}) {
    this.easy = new PVPChallengesEasyStats(data);
    this.medium = new PVPChallengesMediumStats(data);
    this.hard = new PVPChallengesHardStats(data);
    this.extreme = new PVPChallengesExtremeStats(data);
    this.varying = new PVPChallengesVaryingStats(data);
    this.drops = new PVPChallengesDropsStats(data);
    this.wither = new PVPChallengesWitherStats(data);
  }
}
