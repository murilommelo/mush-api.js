import type { APIPlayerDiscord } from "@api-types/player/player";

export interface Discord {
  id: string;
  globalName: string;
  username: string;
  avatarHash: string;
}

interface DiscordAvatarURLOptions {
  extension?: "webp" | "png" | "jpg" | "jpeg" | "gif";
  size?: 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;
}

export class Discord {
  constructor(data: APIPlayerDiscord) {
    this.id = data.id;
    this.globalName = data.global_name;
    this.username = data.name;
    this.avatarHash = data.avatar;
  }

  avatarURL(options: DiscordAvatarURLOptions = {}) {
    const ext = options.extension ?? "webp";
    const size = options.size ?? 256;

    return `https://cdn.discordapp.com/avatars/${this.id}/${this.avatarHash}.${ext}?size=${size}`;
  }

  toString() {
    return this.username;
  }
}
