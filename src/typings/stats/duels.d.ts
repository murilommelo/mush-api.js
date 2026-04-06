import type { TwoDigitMonth, Year } from "../";
import type { APIGameLevelBadge, MapKeys, Period } from "./";

type DuelsGameMode =
  | "bed_fight"
  | "bed_rush"
  | "boxing"
  | "bridge"
  | "combo"
  | "fireball_fight"
  | "gapple"
  | "gladiator"
  | "hgsim"
  | "lava"
  | "no_debuff"
  | "pearl_fight"
  | "soup"
  | "sumo"
  | "uhc";

type DuelsGameModeWithType =
  | "bed_fight_doubles"
  | "bed_fight_solo"
  | "bed_rush_solo"
  | "boxing_solo"
  | "bridge_1v1v1v1"
  | "bridge_doubles"
  | "bridge_four"
  | "bridge_solo"
  | "bridge_three"
  | "combo_solo"
  | "fireball_fight_doubles"
  | "fireball_fight_solo"
  | "gapple_solo"
  | "gladiator_doubles"
  | "gladiator_solo"
  | "hgsim_doubles"
  | "hgsim_solo"
  | "lava_solo"
  | "no_debuff_doubles"
  | "no_debuff_solo"
  | "pearl_fight_solo"
  | "soup_doubles"
  | "soup_solo"
  | "sumo_solo"
  | "uhc_doubles"
  | "uhc_four"
  | "uhc_solo";

type AllDuelsGameMode = DuelsGameMode | DuelsGameModeWithType;

type AllDuelsGameModeStats = MapKeys<AllDuelsGameMode, "", "_deaths"> &
  MapKeys<AllDuelsGameMode, "", "_kills"> &
  MapKeys<AllDuelsGameMode, "", `_kills_${Period}`> &
  MapKeys<AllDuelsGameMode, "", "_losses"> &
  MapKeys<AllDuelsGameMode, "", "_max_winstreak"> &
  MapKeys<AllDuelsGameMode, "", "_played"> &
  MapKeys<AllDuelsGameMode, "", "_wins"> &
  MapKeys<AllDuelsGameMode, "", `_wins_${Period}`> &
  MapKeys<AllDuelsGameMode, "", "_winstreak"> &
  MapKeys<AllDuelsGameMode, "", `_winstreak_${Period}`>;

type DuelsGameModeStats = MapKeys<DuelsGameMode, "", "_xp"> &
  MapKeys<DuelsGameMode, "", `_xp_${Period}`> &
  MapKeys<DuelsGameMode, "", "_level"> &
  MapKeys<DuelsGameMode, "", "_level_badge", APIGameLevelBadge>;

type BedBasedGameStats = MapKeys<
  | "bed_fight_doubles"
  | "bed_fight_solo"
  | "bed_rush_solo"
  | "bed_fight"
  | "bed_rush"
  | "fireball_fight_doubles"
  | "fireball_fight_solo"
  | "fireball_fight",
  "",
  "_beds_broken"
>;

type BridgeBasedGameStats = MapKeys<
  | "bridge"
  | "bridge_1v1v1v1"
  | "bridge_doubles"
  | "bridge_four"
  | "bridge_solo"
  | "bridge_three",
  "",
  "points"
>;

type SoupBasedGameStats = MapKeys<
  "soup" | "gladiator",
  "",
  `_exp_${Year}-${TwoDigitMonth}`
> &
  MapKeys<"soup" | "gladiator", "", `_rank_${Year}-${TwoDigitMonth}`>;

export interface APIPlayerDuelsStats
  extends AllDuelsGameModeStats,
    DuelsGameModeStats,
    BedBasedGameStats,
    BridgeBasedGameStats,
    SoupBasedGameStats {}
