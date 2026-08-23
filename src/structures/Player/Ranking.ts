import type { Color } from "@api-types/index.js";
import type { HungerGamesRanking } from "@stats-types/hungergames.js";

export class Ranking {
  public color: Color;
  public symbol: string;
  public name: string;
  public id: string;

  constructor(data: HungerGamesRanking) {
    this.color = data.hex_color;
    this.symbol = data.symbol;
    this.name = data.name;
    this.id = data.id;
  }

  toString() {
    return `${this.name} ${this.symbol}`;
  }
}
