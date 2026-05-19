import type { Color } from "@api-types/index.js";
import type { HungerGamesRanking } from "@stats-types/hungergames.js";

export interface Ranking {
  color: Color;
  symbol: string;
  name: string;
  id: string;
}

export class Ranking {
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
