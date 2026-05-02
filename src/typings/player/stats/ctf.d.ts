import type { MapKeys, Period } from ".";

type CTFStatsPerPeriod = MapKeys<Period, "kills_"> &
  MapKeys<Period, "captures_"> &
  MapKeys<Period, "games_played_">;

export interface APIPlayerCTFStats extends CTFStatsPerPeriod {
  captures: number;
  coins: number;
  games_played: number;
  kills: number;
  returns: number;
}
