import type { APIPlayerAccount } from "./player/player.js";

export type CurrentYear = "2026";

// Years that appear in the keys of the API objects
export type Year =
  | "2019"
  | "2020"
  | "2021"
  | "2022"
  | "2023"
  | "2024"
  | "2025"
  | "2026";

// Exporting this since it's what the API currently uses
export type TwoDigitMonth =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";

// Some older accounts do not have statistics for months with double digits
type OneDigitMonth =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export type Month = TwoDigitMonth | OneDigitMonth;

interface MushAPISuccessResponse<T> {
  success: true;
  error_code: -1;
  response: T;
}

interface MushAPIErrorResponse {
  success: false;
  error_code: number;
  response?: {
    status: number;
    message: string;
    details: unknown;
  };
}

export type MushAPIResponse<T> =
  | MushAPISuccessResponse<T>
  | MushAPIErrorResponse;

export type APILeaderboardMode =
  | "bedwars"
  | "skywars"
  | "bridge"
  | "hg"
  | "minimush"
  | "pvp"
  | "soup"
  | "gladiator"
  | "party"
  | "ctf"
  | "quickbuilders"
  | "murder";

export type UUID = `${string}-${string}-${string}-${string}`;

export type Color = `#${string}`;

export type MushMedal =
  | "air"
  | "airplane_mode"
  | "ajudante_nasco"
  | "alert"
  | "aluno"
  | "anniversary_2022"
  | "anniversary_2023"
  | "artist"
  | "arzim"
  | "atom"
  | "battery"
  | "bedwars_champions_diamond"
  | "bedwars_champions_gold"
  | "bedwars_champions_master"
  | "bedwars_champions_platinum"
  | "bedwars_champions_silver"
  | "bgs"
  | "biscoito_de_gengibre"
  | "caca_pato"
  | "card"
  | "carnaval"
  | "check"
  | "clan_clash"
  | "clan_clash_2"
  | "coffee"
  | "contributor"
  | "cxc"
  | "desenhista"
  | "empty"
  | "estacio"
  | "event_promoter"
  | "face"
  | "feijao"
  | "feiticeiro_amador"
  | "feiticeiro_aprendiz"
  | "feiticeiro_mestre"
  | "fire"
  | "flag"
  | "flash"
  | "flower"
  | "gamescom"
  | "gay_medal"
  | "general"
  | "general_season_10"
  | "gingerbread_house"
  | "grana"
  | "halloween"
  | "helper"
  | "imperial"
  | "knife_fight"
  | "level_100"
  | "love"
  | "love_and_peace"
  | "lucky"
  | "master"
  | "megamush"
  | "mod"
  | "mod_plus"
  | "mush"
  | "mush_league"
  | "mush_rimas"
  | "musician"
  | "nicoolass"
  | "nitro"
  | "partner"
  | "phone"
  | "pix"
  | "quarterquell"
  | "quarterquell_2"
  | "quarterquell_3"
  | "ring"
  | "ruby"
  | "santa_helper"
  | "show_de_fogos_2024"
  | "show_de_fogos_2025"
  | "show_de_fogos_2026"
  | "snowflake"
  | "snowman"
  | "sorcerer"
  | "staff"
  | "star"
  | "top"
  | "top_cyan"
  | "top_dark_blue"
  | "top_dark_red"
  | "toxic"
  | "water"
  | "wg"
  | "witch_hunter"
  | "wrong"
  | "xmas"
  | "yin_yang"
  | "youtube_spotlight";

export type MushRank =
  | "2019"
  | "2020"
  | "2021"
  | "2022"
  | "2023"
  | "2024"
  | "2025"
  | "2026"
  | "admin"
  | "beta"
  | "builder"
  | "carnaval"
  | "champion"
  | "enderlore"
  | "ferias_aqua"
  | "ferias_blue"
  | "ferias_dark_aqua"
  | "ferias_dark_green"
  | "helper"
  | "master"
  | "member"
  | "moderator"
  | "moderator_plus"
  | "mvp"
  | "natal"
  | "nitro"
  | "partner"
  | "partner_plus"
  | "pink"
  | "pro"
  | "stream"
  | "trial"
  | "ultra"
  | "ultra_plus"
  | "ultra_plus_tier_0"
  | "ultra_plus_tier_1"
  | "ultra_plus_tier_2"
  | "vacation0"
  | "vip"
  | "year_2017"
  | "youtuber";

/**
 * The XP table object
 *
 * Each key is the level and the value is the required XP amount
 */
export type APIGameModeXPTable = {
  [level: string]: number;
};

/**
 * The game mode leaderboard object
 *
 * The keys vary depending on the game mode
 *
 *  Examples:
 * - `bedwars:wins`
 * - `quickbuilders:perfect_builds`
 *
 * Format: `<game>:<stat>`
 */
export interface ParsedAPIGameModeLeaderboard {
  records: ({
    pos: 1;
    color: Color;
    account: APIPlayerAccount;
    avatar_url: string;
  } & { [key: string]: number })[];
}

export type ModeLeaderboardPlayer<
  M extends APILeaderboardMode = APILeaderboardMode,
> = {
  pos: 1;
  color: Color;
  account: APIPlayerAccount;
  avatar_url: string;
} & {
  [K in ModeLeaderboardStatKeyMap[M][number]]: number;
};

interface ModeLeaderboardStatKeyMap {
  bedwars: [
    "bedwars:level",
    "bedwars:wins",
    "bedwars:kills",
    "bedwars:final_kills",
  ];
  skywars: [
    "skywars_r1:level",
    "skywars_r1:wins",
    "skywars_r1:kills",
    "skywars_r1:losses",
    "skywars_r1:coins",
  ];
  bridge: ["duels:bridge_wins", "duels:bridge_losses", "duels:bridge_points"];
  hg: [
    `hungergames:mode_${CurrentYear}_${TwoDigitMonth}_doublekit_rank_exp`,
    "hungergames:wins",
    "hungergames:kills",
    "hungergames:deaths",
    "hungergames:kd",
  ];
  minimush: [
    `hungergames:mode_${CurrentYear}_${TwoDigitMonth}_minimush_rank_exp`,
    "hungergames:mode_minimush_wins",
    "hungergames:mode_minimush_kills",
    "hungergames:mode_minimush_deaths",
  ];
  pvp: ["pvp:arena_kills", "pvp:arena_deaths", "pvp:arena_kdr"];
  soup: [
    `duels:soup_exp_${CurrentYear}-${TwoDigitMonth}`,
    "duels:soup_wins",
    "duels:soup_deaths",
    "duels:soup_winstreak",
  ];
  gladiator: [
    `duels:gladiator_exp_${CurrentYear}-${TwoDigitMonth}`,
    "duels:gladiator_wins",
    "duels:gladiator_deaths",
    "duels:gladiator_winstreak",
  ];
  party: [
    "party:points",
    "party:first_place",
    "party:second_place",
    "party:third_place",
  ];
  ctf: ["ctf:captures", "ctf:kills", "ctf:coins"];
  quickbuilders: [
    "quickbuilders:wins",
    "quickbuilders:losses",
    "quickbuilders:perfect_builds",
    "quickbuilders:builds",
  ];
  murder: ["murder:wins", "murder:losses"];
}
