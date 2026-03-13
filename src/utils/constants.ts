export const MUSH_API_URL = "https://mush.com.br/api";

export const Routes = {
  Player<P extends string>(player: P) {
    return `/player/${player}` as const;
  },
};
