import type { MapKeys, Period } from "./";

type HideAndSeekRole = "hider" | "seeker";

type HideAndSeekRoleDeaths = MapKeys<HideAndSeekRole, "", "_deaths">;

type HideAndSeekRoleLosses = MapKeys<HideAndSeekRole, "", "_losses">;

type HideAndSeekRoleMaxWinstreak = MapKeys<
  HideAndSeekRole,
  "",
  "_max_winstreak"
>;

type HideAndSeekRolePlayed = MapKeys<HideAndSeekRole, "", "_played">;

type HideAndSeekRoleWins = MapKeys<HideAndSeekRole, "", "_wins">;

type HideAndSeekRoleWinstreak = MapKeys<HideAndSeekRole, "", "_winstreak">;

type HideAndSeekStatsPerRole = HideAndSeekRoleDeaths &
  HideAndSeekRoleLosses &
  HideAndSeekRoleMaxWinstreak &
  HideAndSeekRolePlayed &
  HideAndSeekRoleWins &
  HideAndSeekRoleWinstreak;

type HideAndSeekRoleWinsPerPeriod = MapKeys<Period, `${HideAndSeekRole}_wins_`>;

type HideAndSeekRoleWinstreakPerPeriod = MapKeys<
  Period,
  `${HideAndSeekRole}_winstreak_`
>;

type HideAndSeekRoleStatsPerPeriod = HideAndSeekRoleWinsPerPeriod &
  HideAndSeekRoleWinstreakPerPeriod;

type HideAndSeekWinsPerPeriod = MapKeys<Period, "wins_">;

type HideAndSeekWinstreakPerPeriod = MapKeys<Period, "winstreak_">;

type HideAndSeekStatsPerPeriod = HideAndSeekWinsPerPeriod &
  HideAndSeekWinstreakPerPeriod;

export interface APIPlayerHideAndSeekStats
  extends HideAndSeekStatsPerRole,
    HideAndSeekRoleStatsPerPeriod,
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
