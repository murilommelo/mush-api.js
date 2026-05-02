import type { MapKeys, Period } from ".";

type HideAndSeekRole = "hider" | "seeker";

type HideAndSeekStatsPerRole = MapKeys<HideAndSeekRole, "", "_deaths"> &
  MapKeys<HideAndSeekRole, "", "_losses"> &
  MapKeys<HideAndSeekRole, "", "_max_winstreak"> &
  MapKeys<HideAndSeekRole, "", "_played"> &
  MapKeys<HideAndSeekRole, "", "_wins"> &
  MapKeys<HideAndSeekRole, "", "_winstreak">;

type HideAndSeekStatsPerPeriod = MapKeys<Period, "wins_"> &
  MapKeys<Period, "winstreak_"> &
  MapKeys<Period, `${HideAndSeekRole}_wins_`> &
  MapKeys<Period, `${HideAndSeekRole}_winstreak_`>;

export interface APIPlayerHideAndSeekStats
  extends HideAndSeekStatsPerRole,
    HideAndSeekStatsPerPeriod {
  deaths: number;
  hider_blocks_changed: number;
  hider_frozen: number;
  hider_stunned_seekers: number;
  kills: number;
  losses: number;
  max_winstreak: number;
  played: number;
  seeker_detected_hiders: number;
  seeker_kills: number;
  wins: number;
  winstreak: number;
}
