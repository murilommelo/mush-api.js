import type { APIPlayerMurderStats } from "@stats-types/murder";
import { MurderBodyguardRoleStats } from "./Roles/Bodyguard";
import { MurderDetectiveRoleStats } from "./Roles/Detective";
import { MurderEngineerRoleStats } from "./Roles/Engineer";
import { MurderInnocentRoleStats } from "./Roles/Innocent";
import { MurderMedicRoleStats } from "./Roles/Medic";
import { MurderMurdererRoleStats } from "./Roles/Murderer";
import { MurderScoutRoleStats } from "./Roles/Scout";

export interface MurderStats {
  bodyguardRole: MurderBodyguardRoleStats;
  coins: number;
  dailyMurdererKills: number;
  dailyWins: number;
  dailyWinstreak: number;
  deaths: number;
  detectiveRole: MurderDetectiveRoleStats;
  engineerRole: MurderEngineerRoleStats;
  gamesPlayed: number;
  innocentRole: MurderInnocentRoleStats;
  kills: number;
  losses: number;
  medicRole: MurderMedicRoleStats;
  monthlyMurdererKills: number;
  monthlyWins: number;
  monthlyWinstreak: number;
  murdererRole: MurderMurdererRoleStats;
  murdererKills: number;
  scoutRole: MurderScoutRoleStats;
  weeklyMurdererKills: number;
  weeklyWins: number;
  weeklyWinstreak: number;
  wins: number;
  winstreak: number;
}

export class MurderStats {
  constructor(data: Partial<APIPlayerMurderStats> = {}) {
    this.coins = data.coins_picked_up ?? 0;
    this.deaths = data.deaths ?? 0;
    this.kills = data.kills ?? 0;
    this.murdererKills = data.killed_murderer ?? 0;
    this.dailyMurdererKills = data.killed_murderer_daily ?? 0;
    this.monthlyMurdererKills = data.killed_murderer_monthly ?? 0;
    this.weeklyMurdererKills = data.killed_murderer_weekly ?? 0;
    this.losses = data.losses ?? 0;
    this.gamesPlayed = data.played ?? 0;
    this.wins = data.wins ?? 0;
    this.dailyWins = data.wins_daily ?? 0;
    this.monthlyWins = data.wins_monthly ?? 0;
    this.weeklyWins = data.wins_weekly ?? 0;
    this.winstreak = data.winstreak ?? 0;
    this.dailyWinstreak = data.winstreak_daily ?? 0;
    this.monthlyWinstreak = data.winstreak_monthly ?? 0;
    this.weeklyWinstreak = data.winstreak_weekly ?? 0;
    this.bodyguardRole = new MurderBodyguardRoleStats(data);
    this.detectiveRole = new MurderDetectiveRoleStats(data);
    this.engineerRole = new MurderEngineerRoleStats(data);
    this.innocentRole = new MurderInnocentRoleStats(data);
    this.medicRole = new MurderMedicRoleStats(data);
    this.murdererRole = new MurderMurdererRoleStats(data);
    this.scoutRole = new MurderScoutRoleStats(data);
  }
}
