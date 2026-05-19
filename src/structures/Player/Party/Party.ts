import type { APIPlayerPartyStats } from "@stats-types/party";
import { PartyArenaPVPStats } from "./MiniGames/ArenaPvP.js";
import { PartyBarbarianStats } from "./MiniGames/Barbarian.js";
import { PartyBlockPartyStats } from "./MiniGames/BlockParty.js";
import { PartyFishermanStats } from "./MiniGames/Fisherman.js";
import { PartyGrapplerStats } from "./MiniGames/Grappler.js";
import { PartyHunterStats } from "./MiniGames/Hunter.js";
import { PartyKangarooStats } from "./MiniGames/Kangaroo.js";
import { PartyLavaStats } from "./MiniGames/Lava.js";
import { PartyMLGSumoStats } from "./MiniGames/MLGSumo.js";
import { PartyOITCStats } from "./MiniGames/OITC.js";
import { PartyQuakeStats } from "./MiniGames/Quake.js";
import { PartyRaceStats } from "./MiniGames/Race.js";
import { PartySpleefStats } from "./MiniGames/Spleef.js";
import { PartyStomperStats } from "./MiniGames/Stomper.js";
import { PartyTNTRunStats } from "./MiniGames/TNTRun.js";

export interface PartyStats {
  dailyPoints: number;
  gamesPlayed: number;
  monthlyPoints: number;
  points: number;
  secondPlace: number;
  thirdPlace: number;
  wins: number;
  weeklyPoints: number;
  arenaPVP: PartyArenaPVPStats;
  barbarian: PartyBarbarianStats;
  blockParty: PartyBlockPartyStats;
  fisherman: PartyFishermanStats;
  grappler: PartyGrapplerStats;
  hunter: PartyHunterStats;
  kangaroo: PartyKangarooStats;
  lava: PartyLavaStats;
  mlgSumo: PartyMLGSumoStats;
  oneInTheChamber: PartyOITCStats;
  quake: PartyQuakeStats;
  race: PartyRaceStats;
  spleef: PartySpleefStats;
  stomper: PartyStomperStats;
  tntRun: PartyTNTRunStats;
}

export class PartyStats {
  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.wins = data.first_place ?? 0;
    this.gamesPlayed = data.played ?? 0;
    this.points = data.points ?? 0;
    this.dailyPoints = data.points_daily ?? 0;
    this.weeklyPoints = data.points_weekly ?? 0;
    this.monthlyPoints = data.points_monthly ?? 0;
    this.secondPlace = data.second_place ?? 0;
    this.thirdPlace = data.third_place ?? 0;

    this.arenaPVP = new PartyArenaPVPStats(data);
    this.barbarian = new PartyBarbarianStats(data);
    this.blockParty = new PartyBlockPartyStats(data);
    this.fisherman = new PartyFishermanStats(data);
    this.grappler = new PartyGrapplerStats(data);
    this.hunter = new PartyHunterStats(data);
    this.kangaroo = new PartyKangarooStats(data);
    this.lava = new PartyLavaStats(data);
    this.mlgSumo = new PartyMLGSumoStats(data);
    this.oneInTheChamber = new PartyOITCStats(data);
    this.quake = new PartyQuakeStats(data);
    this.race = new PartyRaceStats(data);
    this.spleef = new PartySpleefStats(data);
    this.stomper = new PartyStomperStats(data);
    this.tntRun = new PartyTNTRunStats(data);
  }
}
