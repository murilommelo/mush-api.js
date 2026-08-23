import type {
  APILeaderboardMode,
  ModeLeaderboardPlayer,
} from "@api-types/index.js";

export class ModeLeaderboard<M extends APILeaderboardMode> {
  public mode: M;
  public players: ModeLeaderboardPlayer<M>[];

  constructor(mode: M, players: ModeLeaderboardPlayer<M>[]) {
    this.mode = mode;
    this.players = players;
  }

  *[Symbol.iterator]() {
    for (const player of this.players) {
      yield player;
    }
  }
}
