import type { MapKeys } from ".";

export type BridgePracticeMode =
  | "extra_short"
  | "diagonal_short"
  | "diagonal"
  | "long"
  | "normal"
  | "short"
  | "infinite";

type BridgePracticeStatsPerMode = MapKeys<BridgePracticeMode, "", "_bridges"> &
  MapKeys<BridgePracticeMode, "", "_bridge_attempts"> &
  MapKeys<BridgePracticeMode, "", "_total_time"> &
  MapKeys<BridgePracticeMode, "", "_best_time">;

export interface APIPlayerBridgePracticeStats
  extends BridgePracticeStatsPerMode {}
