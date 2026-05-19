import type { TwoDigitMonth } from "../..";
import type { APIGameLevelBadge, MapKeys, Period } from ".";

type BedWarsMode =
  | "1v1"
  | "2v2"
  | "3v3"
  | "4v4"
  | "solo"
  | "doubles"
  | "3v3v3v3"
  | "4v4v4v4"
  | "4s"
  | "mega";

type BedWarsEventMode =
  | "boost_solo"
  | "boost_doubles"
  | "classic_solo"
  | "hardcore_solo"
  | "hardcore_4v4v4v4"
  | "hook_solo"
  | "hook_doubles"
  | "infection_solo"
  | "infection_doubles"
  | "champions";

type AllBedWarsMode = BedWarsMode | BedWarsEventMode;

type BedWarsModeStats = MapKeys<AllBedWarsMode, "", "_games_played"> &
  MapKeys<AllBedWarsMode, "", "_beds_broken"> &
  MapKeys<AllBedWarsMode, "", "_beds_lost"> &
  MapKeys<AllBedWarsMode, "", "_deaths"> &
  MapKeys<AllBedWarsMode, "", "_final_deaths"> &
  MapKeys<AllBedWarsMode, "", "_final_kills"> &
  MapKeys<AllBedWarsMode, "", "_fkdr"> &
  MapKeys<AllBedWarsMode, "", "_kills"> &
  MapKeys<AllBedWarsMode, "", "_losses"> &
  MapKeys<AllBedWarsMode, "", "_max_winstreak"> &
  MapKeys<AllBedWarsMode, "", "_wins"> &
  MapKeys<AllBedWarsMode, "", "_winstreak"> &
  MapKeys<AllBedWarsMode, "", "_assists"> &
  MapKeys<AllBedWarsMode, "", "_final_assists">;

type BedWarsModePeriodStats = MapKeys<BedWarsMode, "", `_kills_${Period}`> &
  MapKeys<BedWarsMode, "", `_wins_${Period}`> &
  MapKeys<BedWarsMode, "", `_beds_broken_${Period}`> &
  MapKeys<BedWarsMode, "", `_final_kills_${Period}`> &
  MapKeys<BedWarsMode, "", `_winstreak_${Period}`>;

type BedWarsPeriodStats = MapKeys<Period, "level_"> &
  MapKeys<Period, "xp_"> &
  MapKeys<Period, "kills_"> &
  MapKeys<Period, "wins_"> &
  MapKeys<Period, "beds_broken_"> &
  MapKeys<Period, "final_kills_"> &
  MapKeys<Period, "winstreak_">;

export type ChampionYear = "2026";

type BedWarsChampionsStats = MapKeys<
  "final_points" | "final_rank" | "last_league" | "removed_points",
  `champions_${ChampionYear}_${TwoDigitMonth}_`
>;

export interface APIPlayerBedWarsStats
  extends BedWarsModeStats,
    BedWarsModePeriodStats,
    BedWarsPeriodStats,
    BedWarsChampionsStats {
  assists: number;
  beds_broken: number;
  beds_lost: number;
  deaths: number;
  final_assists: number;
  final_deaths: number;
  final_kills: number;
  fkdr: number;
  games_played: number;
  kills: number;
  level: number;
  level_badge: APIGameLevelBadge;
  losses: number;
  max_winstreak: number;
  wins: number;
  winstreak: number;
  xp: number;
}
