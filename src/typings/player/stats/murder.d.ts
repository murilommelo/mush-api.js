import type { MapKeys, Period } from ".";

export type MurderRole =
  | "detective"
  | "innocent"
  | "medic"
  | "murderer"
  | "scout"
  | "bodyguard"
  | "engineer";

type MurderStatsPerRole = MapKeys<MurderRole, "", "_wins"> &
  MapKeys<MurderRole, "", "_deaths"> &
  MapKeys<MurderRole, "", "_winstreak"> &
  MapKeys<MurderRole, "", "_kills"> &
  MapKeys<MurderRole, "", "_losses"> &
  MapKeys<MurderRole, "", "_played"> &
  MapKeys<MurderRole, "", "_last_played_bits"> &
  MapKeys<MurderRole, "", "_killed_murderer">;

type MurderStatsPerPeriod = MapKeys<Period, "wins_"> &
  MapKeys<Period, "winstreak_"> &
  MapKeys<Period, "killed_murderer_"> &
  MapKeys<MurderRole, "", `_wins_${Period}`> &
  MapKeys<MurderRole, "", `_winstreak_${Period}`> &
  MapKeys<MurderRole, "", `_killed_murderer_${Period}`>;

export interface APIPlayerMurderStats
  extends MurderStatsPerRole,
    MurderStatsPerPeriod {
  coins_picked_up: number;
  deaths: number;
  killed_murderer: number;
  kills: number;
  losses: number;
  played: number;
  wins: number;
  winstreak: number;
}
