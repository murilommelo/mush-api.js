import type { Color } from "@api-types/index";
import type { APIPlayerTag } from "@api-types/player/player";

export interface Tag {
  color: Color;
  name: string;
  customColor?: string;
  plusSignColor?: string;
}

export class Tag {
  constructor(data: APIPlayerTag) {
    this.name = data.name;

    this.color = data.color;

    if (data.data?.custom_color) {
      this.customColor = data.data.custom_color;
    }

    if (data.data?.plus) {
      this.plusSignColor = data.data.plus;
    }
  }

  toString() {
    return this.name;
  }
}
