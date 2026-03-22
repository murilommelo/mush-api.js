import type { MapKeys, Period } from "./";

type ChallengesMode =
  | "easy"
  | "medium"
  | "hard"
  | "extreme"
  | "wither"
  | "varying"
  | "drops";

type ChallengesModeMaxDamageTaken = MapKeys<
  ChallengesMode,
  "challenges_",
  "_max_damage_taken"
>;

type ChallengesModeTotalDamageTaken = MapKeys<
  ChallengesMode,
  "challenges_",
  "_total_damage_taken"
>;

type ChallengesModeMaxPlayTime = MapKeys<
  ChallengesMode,
  "challenges_",
  "_max_play_time"
>;

type ChallengesModeTotalPlayTime = MapKeys<
  ChallengesMode,
  "challenges_",
  "_total_play_time"
>;

type ChallengesModePlays = MapKeys<ChallengesMode, "challenges_", "_plays">;

type ChallengesModeSoupsUsed = MapKeys<
  ChallengesMode,
  "challenges_",
  "_soups_used"
>;

type ChallengesModeStats = ChallengesModeMaxDamageTaken &
  ChallengesModeTotalDamageTaken &
  ChallengesModeMaxPlayTime &
  ChallengesModeTotalPlayTime &
  ChallengesModePlays &
  ChallengesModeSoupsUsed;

type MLGLevel = "1" | "2" | "3" | "4";

type MLGLevelPeriodStats = MapKeys<Period, `mlg_streak_${MLGLevel}_`>;

type MLGLevelStats = MapKeys<MLGLevel, "mlg_streak_">;

type MLGStats = MLGLevelPeriodStats & MLGLevelStats;

type ArenaAndFps = "arena" | "fps";

type ArenaAndFpsDeaths = MapKeys<ArenaAndFps, "", "_deaths">;

type ArenaAndFpsKills = MapKeys<ArenaAndFps, "", "_kills">;

type ArenaAndFpsKillstreak = MapKeys<ArenaAndFps, "", "_killstreak">;

type ArenaAndFpsMaxKillstreak = MapKeys<ArenaAndFps, "", "_max_killstreak">;

type ArenaAndFpsPeriodKills = MapKeys<Period, `${ArenaAndFps}_kills_`>;

type ArenaAndFpsStats = ArenaAndFpsDeaths &
  ArenaAndFpsKills &
  ArenaAndFpsKillstreak &
  ArenaAndFpsMaxKillstreak &
  ArenaAndFpsPeriodKills;

export interface APIPlayerPVPStats
  extends ChallengesModeStats,
    MLGStats,
    ArenaAndFpsStats {
  [key: `1v1_exp_s${number}`]: number;
  [key: `1v1_rank_s${number}`]: number;
  "1v1_losses": number;
  "1v1_wins": number;
  coins: number;
  mlg_hits: number;
  mlg_misses: number;
  fisherman_deaths: number;
  fisherman_kills: number;
  highest_killstreak: number;
  highest_winstreak: number;
  deaths: number;
  kills: number;
}
