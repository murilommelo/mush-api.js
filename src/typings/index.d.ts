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
