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
  MapKeys<BedWarsMode, "", "_beds_broken"> &
  MapKeys<BedWarsMode, "", "_beds_lost"> &
  MapKeys<BedWarsMode, "", "_deaths"> &
  MapKeys<BedWarsMode, "", "_final_deaths"> &
  MapKeys<BedWarsMode, "", "_final_kills"> &
  MapKeys<BedWarsMode, "", "_fkdr"> &
  MapKeys<BedWarsMode, "", "_kills"> &
  MapKeys<BedWarsMode, "", "_losses"> &
  MapKeys<BedWarsMode, "", "_max_winstreak"> &
  MapKeys<BedWarsMode, "", "_wins"> &
  MapKeys<BedWarsMode, "", "_winstreak"> &
  MapKeys<BedWarsMode, "", "_assists"> &
  MapKeys<BedWarsMode, "", "_final_assists">;

type BedWarsModePeriodStats = MapKeys<BedWarsMode, "", `_kills_${Period}`> &
  MapKeys<BedWarsMode, "", `_wins_${Period}`> &
  MapKeys<BedWarsMode, "", `_beds_broken_${Period}`> &
  MapKeys<BedWarsMode, "", `_final_kills_${Period}`> &
  MapKeys<BedWarsMode, "", `_winstreak_${Period}`>;

type BedWarsPeriodStats = MapKeys<Period, "level_"> &
  MapKeys<Period, "xp_"> &
  MapKeys<Period, "_kills"> &
  MapKeys<Period, "_wins"> &
  MapKeys<Period, "_beds_broken"> &
  MapKeys<Period, "_final_kills"> &
  MapKeys<Period, "_winstreak">;

type ChampionYear = "2026";

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
