import type { APIPlayerPVPStats } from "@stats-types/pvp";
import { PVPArenaStats } from "./Modes/Arena.js";
import { PVPChallengesStats } from "./Modes/Challenges.js";
import { PVPFPSStats } from "./Modes/FPS.js";
import { PVPMLGStats } from "./Modes/MLG.js";

export interface PVPStats {
  arena: PVPArenaStats;
  challenges: PVPChallengesStats;
  fps: PVPFPSStats;
  mlg: PVPMLGStats;
}

export class PVPStats {
  constructor(data: Partial<APIPlayerPVPStats> = {}) {
    this.arena = new PVPArenaStats(data);
    this.challenges = new PVPChallengesStats(data);
    this.fps = new PVPFPSStats(data);
    this.mlg = new PVPMLGStats(data);
  }
}
