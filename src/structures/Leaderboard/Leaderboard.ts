import type {
  APILeaderboardMode,
  ModeLeaderboardPlayer,
} from "@api-types/index.js";

export interface ModeLeaderboard<M extends APILeaderboardMode> {
  mode: M;
  players: ModeLeaderboardPlayer<M>[];
}

export class ModeLeaderboard<M extends APILeaderboardMode> {
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
