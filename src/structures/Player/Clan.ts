import type { Color } from "@api-types/index";
import type { APIPlayerClan } from "@api-types/player/player";

export class Clan {
  public name: string;
  public tag: string;
  public color: Color;

  constructor(data: APIPlayerClan) {
    this.name = data.name;
    this.tag = data.tag;
    this.color = data.tag_color;
  }

  toString() {
    return `[${this.tag}] ${this.name}`;
  }
}
