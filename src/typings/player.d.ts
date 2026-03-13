/** biome-ignore-all lint/suspicious/noExplicitAny: TODO */
import type { Color, MushMedal, MushRank, UUID } from "./index.js";

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
  stats?: Record<string, any>
}

export interface APIPlayerAccount {
  /**
   * This player's MushMC profile ID
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
   * This player's clan color
   */
  color: Color;
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
