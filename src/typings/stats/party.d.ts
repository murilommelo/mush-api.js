import type { GamePlace, MapKeys, Period } from "./";

type PartyGame =
  | "block_party"
  | "fisherman"
  | "grappler_race"
  | "kangaroo_race"
  | "lava"
  | "mlg_sumo"
  | "oitc"
  | "race"
  | "stomper"
  | "tnt_run"
  | "hunter"
  | "arena_pvp"
  | "barbarian"
  | "quake"
  | "spleef";

type PartyGamePlayed = MapKeys<PartyGame, "", "_played">;

type PartyGamePoints = MapKeys<PartyGame, "", "_points">;

type PartyGamePlaced = MapKeys<
  "grappler_race" | "kangaroo_race" | "stomper" | "race",
  "",
  "_placed"
>;

type PartyGamePlace = MapKeys<PartyGame, "", `_${GamePlace}`>;

type PartyStatsPerGame = PartyGamePlayed &
  PartyGamePoints &
  PartyGamePlaced &
  PartyGamePlace;

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
