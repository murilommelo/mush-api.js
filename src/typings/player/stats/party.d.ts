import type { GamePlace, MapKeys, Period } from ".";

export type PartyGame =
  | "block_party"
  | "fisherman"
  | "grappler_race"
  | "kangaroo_race"
  | "lava"
  | "mlg_sumo"
  | "oitc"
  | "race"
  | "stomper"
  | "tnt_run";

type PartyStatsPerGame = MapKeys<PartyGame, "", "_played"> &
  MapKeys<PartyGame, "", "_points"> &
  MapKeys<PartyGame, "", `_${GamePlace}`> &
  MapKeys<
    "grappler_race" | "kangaroo_race" | "stomper" | "race",
    "",
    "_placed"
  >;

type PartyGamePeriodPoints = MapKeys<PartyGame, "", `_points_${Period}`>;

export interface APIPlayerPartyStats
  extends PartyStatsPerGame,
    PartyGamePeriodPoints {
  first_place: number;
  played: number;
  points: number;
  points_monthly: number;
  points_weekly: number;
  points_daily: number;
  second_place: number;
  third_place: number;
}
