import type { Color } from "@api-types/index";
import type { APIPlayerClan } from "@api-types/player/player";

export interface Clan {
  name: string;
  tag: string;
  tagColor: Color;
}

export class Clan {
  constructor(data: APIPlayerClan) {
    this.name = data.name;
    this.tag = data.tag;
    this.tagColor = data.tag_color;
  }

  toString(includeTag = false) {
    return includeTag ? `[${this.tag}] ${this.name}` : this.name;
  }
}
