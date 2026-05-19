import type { APIPlayerBlockPartyStats } from "@stats-types/blockparty";

export interface BlockPartyStats {
  played: number;
  rounds: number;
  wins: number;
}

export class BlockPartyStats {
  constructor(data: Partial<APIPlayerBlockPartyStats> = {}) {
    this.played = data.played ?? 0;
    this.rounds = data.rounds ?? 0;
    this.wins = data.wins ?? 0;
  }
}
