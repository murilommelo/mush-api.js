/** biome-ignore-all lint/correctness/noUnusedVariables: <explnation> */
/** biome-ignore-all lint/suspicious/noUnsafeDeclarationMerging: < */
import { API } from "./API.js";

export interface MushClient {
  api: API;
}

export class MushClient {
  constructor() {
    this.api = new API();
  }
}
