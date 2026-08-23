import type { Color } from "@api-types/index";
import type { APIPlayerTag } from "@api-types/player/player";

export class Tag {
  public color: Color;
  public name: string;
  public declare customColor?: string;
  public declare plusSignColor?: string;

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
