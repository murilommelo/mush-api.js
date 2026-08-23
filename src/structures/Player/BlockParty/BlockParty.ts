import type { APIPlayerBlockPartyStats } from "@stats-types/blockparty";

export class BlockPartyStats {
  public played: number;
  public rounds: number;
  public wins: number;

  constructor(data: Partial<APIPlayerBlockPartyStats> = {}) {
    this.played = data.played ?? 0;
    this.rounds = data.rounds ?? 0;
    this.wins = data.wins ?? 0;
  }
}
