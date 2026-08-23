import type { APIPlayerPartyStats, PartyGame } from "@stats-types/party";

export class PartyStats {
  public dailyPoints: number;
  public gamesPlayed: number;
  public monthlyPoints: number;
  public points: number;
  public secondPlace: number;
  public thirdPlace: number;
  public wins: number;
  public weeklyPoints: number;
  public getMiniGameStats: (minigame: PartyGame) => {
    minigame: PartyGame;
    dailyPoints: number;
    gamesPlayed: number;
    monthlyPoints: number;
    points: number;
    firstPlace: number;
    secondPlace: number;
    thirdPlace: number;
    weeklyPoints: number;
  };

  constructor(data: Partial<APIPlayerPartyStats> = {}) {
    this.wins = data.first_place ?? 0;
    this.gamesPlayed = data.played ?? 0;
    this.points = data.points ?? 0;
    this.dailyPoints = data.points_daily ?? 0;
    this.weeklyPoints = data.points_weekly ?? 0;
    this.monthlyPoints = data.points_monthly ?? 0;
    this.secondPlace = data.second_place ?? 0;
    this.thirdPlace = data.third_place ?? 0;

    this.getMiniGameStats = function getMiniGameStats(minigame: PartyGame) {
      const gamesPlayed = data[`${minigame}_played`] ?? 0;
      const points = data[`${minigame}_points`] ?? 0;
      const dailyPoints = data[`${minigame}_points_daily`] ?? 0;
      const monthlyPoints = data[`${minigame}_points_monthly`] ?? 0;
      const weeklyPoints = data[`${minigame}_points_weekly`] ?? 0;
      const firstPlace = data[`${minigame}_first_place`] ?? 0;
      const secondPlace = data[`${minigame}_second_place`] ?? 0;
      const thirdPlace = data[`${minigame}_third_place`] ?? 0;

      return {
        minigame,
        gamesPlayed,
        points,
        dailyPoints,
        monthlyPoints,
        weeklyPoints,
        firstPlace,
        secondPlace,
        thirdPlace,
      };
    };
  }
}
