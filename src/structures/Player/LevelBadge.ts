import type { Color } from "@api-types/index";
import type {
  APIGameLevelBadge,
  APIGameLevelBadgeColorType,
  APIGameLevelBadgeFormatType,
} from "@stats-types/index";

export interface LevelBadge {
  color: Color | null;
  symbol: string | null;
  minLevel: number;
  format: string;
}

export class LevelBadge {
  constructor(data: APIGameLevelBadge) {
    this.minLevel = data.min_level;
    this.format = data.format;

    if (data.type === "color") {
      this.color = data.hex_color;
      this.symbol = data.symbol;
    } else {
      this.color = null;
      this.symbol = null;
    }
  }
}

export const DefaultGameLevelBadgeColorType: APIGameLevelBadgeColorType = {
  format: "&7[0&l✫&7]",
  hex_color: "#aaaaaa",
  min_level: 0,
  symbol: "✫",
  type: "color",
};

export const DefaultGameLevelBadgeFormatType: APIGameLevelBadgeFormatType = {
  format: "&7[0&l✫&7]",
  min_level: 0,
  type: "format",
};
