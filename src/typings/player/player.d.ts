/** biome-ignore-all lint/suspicious/noExplicitAny: ... */
import type { Color, MushMedal, MushRank, UUID } from "../";
import type { APIPlayerStats } from "./stats";

export interface APIPlayer {
  /**
   * This player's account
   */
  account: APIPlayerAccount;
  /**
   * This player's best tag
   */
  best_tag: APIPlayerTag;
  /**
   * This player's clan, if any
   */
  clan?: APIPlayerClan;
  /**
   * This player's linked Discord account, if any
   */
  discord?: APIPlayerDiscord;
  /**
   * This player's friends statistics
   */
  friends: APIPlayerFriends;
  /**
   * This player's selected tag
   */
  profile_tag: APIPlayerTag;
  /**
   * This player's highest rank
   */
  rank_tag: APIPlayerTag;
  /**
   * This player's skin
   */
  skin: APIPlayerSkin;
  /**
   * This player's available tags
   */
  tags: MushRank[];
  /**
   * This player's currently selected medal
   */
  medal: MushMedal;
  /**
   * This player's medals
   */
  medals: MushMedal[];
  /**
   * Unix timestamp of this player's first login
   */
  first_login: number;
  /**
   * Unix timestamp of this player's last login
   */
  last_login?: number;
  /**
   * Whether this player is online or not
   */
  connected: boolean;
  /**
   * Whether this player is muted or not
   */
  muted?: boolean;
  /**
   * This player's mute count
   */
  mute_blacklist_count?: number;
  /**
   * Whether this player is banned or not
   */
  banned?: boolean;
  /**
   * This player's ban count
   */
  ban_blacklist_count?: number;
  /**
   * This player's statistics
   */
  stats?: APIPlayerStats;
}

export interface APIPlayerAccount {
  /**
   * This player's Mush profile ID
   */
  profile_id: number;
  /**
   * This player's account type
   */
  type: "premium" | "cracked";
  /**
   * This player's account UUID
   */
  unique_id: UUID;
  /**
   * This player's account name
   */
  username: string;
}

export interface APIPlayerTag {
  /**
   * This player's tag color
   */
  color: Color;
  /**
   * This player's tag name
   */
  name: MushRank;
  /**
   * This player's Ultra+ tag data
   */
  data?: {
    /**
     * This player's Ultra+ "+" symbol color
     */
    plus: string;
    /**
     * This player's tag custom color, overrides the tag color
     */
    custom_color?: string;
  };
}

export interface APIPlayerClan {
  /**
   * This player's clan name
   */
  name: string;
  /**
   * This player's clan tag
   */
  tag: string;
  /**
   * This player's clan tag color
   */
  tag_color: Color;
}

export interface APIPlayerDiscord {
  /**
   * This player's Discord avatar hash
   */
  avatar: string;
  /**
   * This player's Discord global display name
   */
  global_name: string;
  /**
   * This player's Discord ID
   */
  id: string;
  /**
   * This player's Discord username
   */
  name: string;
}

export interface APIPlayerFriends {
  /**
   * This player's friend count
   */
  count: number;
  /**
   * This player's friend limit
   */
  limit: number;
}

export interface APIPlayerSkin {
  /**
   * This player's skin texture hash
   */
  hash: string;
  /**
   * Whether this player's skin is slim or not
   */
  slim: boolean;
}

export interface APIPlayerBedWarsInfo {
  /**
   * This player's bedwars quick buy layout data
   */
  quick_buy_layout: {
    /**
     * The items in this player's quick buy layout
     */
    items: (string | null)[];
    /**
     * This player's quick buy layout code
     */
    code: string;
  };
  /**
   * This player's bedwars hotbar data
   */
  hotbar: {
    /**
     * The slots in this player's hotbar
     */
    slots: {
      /**
       * The slot number
       */
      slot: number;
      /**
       * The items in this slot
       */
      items: {
        /**
         * This slot's category
         *
         * - `item` for a specific item, e.g. Diamond Pickaxe
         * - `category` for a category of items, e.g. Combat Items
         */
        type: "item" | "category";
        /**
         * This slot's item or category ID
         */
        id: string;
      }[];
    }[];
  };
}

export interface APIPlayerQuickBuildersInfo {
  /**
   * The object representing this player's build records
   *
   * Each key is the build name and the value is the player's best time
   */
  records: Record<string, number>;
}

// We define the type as Record<string, any> because the missions change frequently
export interface APIPlayerMissionsInfo {
  /**
   * This player's bedwars missions
   */
  bedwars?: {
    date: string;
  } & Record<string, any>;
  /**
   * This player's buildbattle missions
   */
  buildbattle?: {
    date: string;
  } & Record<string, any>;
  /**
   * This player's duels missions
   */
  duels?: {
    date: string;
  } & Record<string, any>;
  /**
   * This player's lobby missions
   */
  lobby?: {
    date: string;
  } & Record<string, any>;
  /**
   * This player's nascó mandou missions
   */
  nascomandou?: {
    date: string;
  } & Record<string, any>;
  /**
   * This player's skywars missions
   */
  skywars?: {
    date: string;
  } & Record<string, any>;
}

export interface APIPlayerSkyWarsInfo {
  /**
   * This player's skywars selected perks per mode
   */
  perks: {
    /**
     * This player's skywars selected perks in duels mode
     */
    duels?: string[];
    /**
     * This player's skywars selected perks in normal mode
     */
    normal?: string[];
    /**
     * This player's skywars selected perks in solo mode
     */
    solo?: string[];
    /**
     * This player's skywars selected perks in team mode
     */
    team?: string[];
  };
}

/**
 * The player's parkour time record
 *
 * Each key is the lobby name and the value is the player's best time
 */
export type APIPlayerParkourInfo = {
  [lobby: string]: number;
};

/**
 * The player's selected cosmetics
 * 
 * Each key is a cosmetic category and the value is the selected cosmetic
 */
export type APIPlayerCosmeticsInfo = {
  [category: string]: string;
}