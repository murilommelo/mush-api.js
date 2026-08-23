import type { Color } from "@api-types/index";
import type {
  APIGameLevelBadge,
  APIGameLevelBadgeColorType,
  APIGameLevelBadgeFormatType,
} from "@stats-types/index";

export class LevelBadge {
  public color: Color | null;
  public symbol: string | null;
  public minLevel: number;
  public format: string;

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
