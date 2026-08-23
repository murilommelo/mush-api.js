import type { MushMedal, MushRank } from "@api-types/index";
import type { APIPlayer } from "@api-types/player/player";
import { BedWarsStats } from "./BedWars/BedWars.js";
import { BlockPartyStats } from "./BlockParty/BlockParty";
import { BridgePracticeStats } from "./BridgePractice/BridgePractice.js";
import { BuildBattleStats } from "./BuildBattle/BuildBattle";
import { Clan } from "./Clan";
import { CaptureTheFlagStats } from "./CTF/CTF";
import { Discord } from "./Discord.js";
import { DuelsStats } from "./Duels/Duels.js";
import { HideAndSeekStats } from "./HideAndSeek/HideAndSeek";
import { HungerGamesStats } from "./HungerGames/HungerGames.js";
import { MurderStats } from "./Murder/Murder";
import { PartyStats } from "./Party/Party.js";
import { PVPStats } from "./PVP/PVP.js";
import { QuickBuildersStats } from "./QuickBuilders/QuickBuilders.js";
import { SkyWarsStats } from "./SkyWars/SkyWars.js";
import { Tag } from "./Tag";

export class Player {
  public profileId: number;
  public username: string;
  public uuid: string;
  public premium: boolean;
  public discord: Discord | null;
  public clan: Clan | null;
  public availableTags: MushRank[];
  public bestTag: Tag;
  public rank: Tag;
  public tag: Tag;
  public skinHash: string;
  public availableMedals: MushMedal[];
  public medal: MushMedal;
  public firstLogin: Date | null;
  public lastLogin: Date | null;
  public online: boolean;
  public muted: boolean;
  public muteCount: number;
  public banned: boolean;
  public banCount: number;
  public bedWars: BedWarsStats;
  public blockParty: BlockPartyStats;
  public bridgePractice: BridgePracticeStats;
  public buildBattle: BuildBattleStats;
  public captureTheFlag: CaptureTheFlagStats;
  public duels: DuelsStats;
  public hideAndSeek: HideAndSeekStats;
  public hungerGames: HungerGamesStats;
  public murder: MurderStats;
  public partyGames: PartyStats;
  public pvp: PVPStats;
  public quickBuilders: QuickBuildersStats;
  public skyWars: SkyWarsStats;

  constructor(data: APIPlayer) {
    this.profileId = data.account.profile_id;
    this.username = data.account.username;
    this.uuid = data.account.unique_id;
    this.premium = data.account.type === "premium";

    if (data.discord) {
      this.discord = new Discord(data.discord);
    } else {
      this.discord = null;
    }

    if (data.clan) {
      this.clan = new Clan(data.clan);
    } else {
      this.clan = null;
    }
    this.skinHash = data.skin.hash;

    this.bestTag = new Tag(data.best_tag);
    this.rank = new Tag(data.rank_tag);
    
    this.availableTags = data.tags;
    this.tag = new Tag(data.profile_tag);
    
    this.availableMedals = data.medals;
    this.medal = data.medal;

    if (data.first_login) {
      this.firstLogin = new Date(data.first_login);
    } else {
      this.firstLogin = null;
    }

    if (data.last_login) {
      this.lastLogin = new Date(data.last_login);
    } else {
      this.lastLogin = null;
    }

    this.online = data.connected;

    this.muted = !!data.muted;
    this.muteCount = data.mute_blacklist_count ?? 0;

    this.banned = !!data.banned;
    this.banCount = data.ban_blacklist_count ?? 0;

    this.bedWars = new BedWarsStats(data.stats?.bedwars ?? {});
    this.blockParty = new BlockPartyStats(data.stats?.blockparty ?? {});
    this.bridgePractice = new BridgePracticeStats(
      data.stats?.bridgepractice ?? {},
    );
    this.buildBattle = new BuildBattleStats(data.stats?.buildbattle ?? {});
    this.captureTheFlag = new CaptureTheFlagStats(data.stats?.ctf ?? {});
    this.duels = new DuelsStats(data.stats?.duels ?? {});
    this.hideAndSeek = new HideAndSeekStats(data.stats?.seek ?? {});
    this.hungerGames = new HungerGamesStats(data.stats?.hungergames ?? {});
    this.murder = new MurderStats(data.stats?.murder ?? {});
    this.partyGames = new PartyStats(data.stats?.party);
    this.pvp = new PVPStats(data.stats?.pvp ?? {});
    this.quickBuilders = new QuickBuildersStats(
      data.stats?.quickbuilders ?? {},
    );
    this.skyWars = new SkyWarsStats(data.stats?.skywars_r1 ?? {});
  }

  toString() {
    return this.username;
  }
}
