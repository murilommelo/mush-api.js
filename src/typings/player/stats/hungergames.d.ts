import type { Color, Month, Year } from "../..";
import type { MapKeys, Period } from ".";

export interface HungerGamesRanking {
  hex_color: Color;
  id: string;
  name: string;
  symbol: string;
}

type HungerGamesMode =
  | "event"
  | "solo"
  | "doublekit"
  | "minimush"
  | "hg"
  | "avengers"
  | "insanehg"
  | "loot_mode"
  | "mega_fast"
  | "quarterquell"
  | "randomkit"
  | "singlekitevent"
  | "teamhg"
  | "clanxclan"
  | "arena_pvp"
  | "communityhg"
  | "gladiatorhg"
  | "triplekit"
  | "megamush"
  | "old";

type HungerGamesStatsPerMode = MapKeys<HungerGamesMode, "mode_", "_wins"> &
  MapKeys<HungerGamesMode, "mode_", "_deaths"> &
  MapKeys<HungerGamesMode, "mode_", "_kd"> &
  MapKeys<HungerGamesMode, "mode_", "_kills"> &
  MapKeys<HungerGamesMode, "mode_", "_assists"> &
  MapKeys<HungerGamesMode, "mode_", "_games_played"> &
  MapKeys<HungerGamesMode, "mode_", "_kills"> &
  MapKeys<HungerGamesMode, "mode_", "_max_kills">;

type PeriodicHungerGamesMode = "doublekit" | "hg" | "minimush";

type HungerGamesStatsPerPeriod = MapKeys<
  Period,
  `mode_${PeriodicHungerGamesMode}_kills_`
> &
  MapKeys<Period, `mode_${PeriodicHungerGamesMode}_wins_`>;

type HungerGamesModeRankStats = MapKeys<
  PeriodicHungerGamesMode,
  "mode_",
  "_rank"
> &
  MapKeys<PeriodicHungerGamesMode, "mode_", "_rank_exp"> &
  MapKeys<PeriodicHungerGamesMode, `mode_${Year}_${Month}_`, "_rank_exp"> &
  MapKeys<PeriodicHungerGamesMode, `mode_${Year}_${Month}_`, "_rank"> &
  MapKeys<
    Exclude<
      HungerGamesMode,
      "singlekitevent" | "clanxclan" | "arena_pvp" | "gladiatorhg" | "triplekit"
    >,
    `mode_${Year}_${Month}_`,
    "_max_kills"
  >;

type HungerGamesQQPoints = {
  [key in
    | `quarter_points_qq_${Year}_${Month}`
    | `qq_${Year}_${Month}_xp`]: number;
};

type HungerGamesModeStatsPerSeason = MapKeys<
  "minimush" | "triplekit" | "doublekit",
  `mode_s${number}_`,
  "_rank_exp"
>;

export interface APIPlayerHungerGamesStats
  extends HungerGamesStatsPerMode,
    HungerGamesStatsPerPeriod,
    HungerGamesModeRankStats,
    HungerGamesQQPoints,
    HungerGamesModeStatsPerSeason {
  coins: number;
  deaths: number;
  doublekit_ranking: HungerGamesRanking;
  games_played: number;
  kd: number;
  minimush_ranking: HungerGamesRanking;
  assists: number;
  kills: number;
  max_kills: number;
  wins: number;
  kills_daily: number;
  kills_monthly: number;
  kills_weekly: number;
  wins_daily: number;
  wins_monthly: number;
  wins_weekly: number;
  minimush_wins: number;
}
