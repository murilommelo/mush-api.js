import type { Year } from "../";
import type { MapKeys, Period } from "./";

type MissionPeriod = Exclude<Period, "monthly">;

type MissionYear = Exclude<
  Year,
  "2019" | "2020" | "2021" | "2022" | "2023" | "2024" | "2026"
>;

type MissionType = "bedwars" | "buildbattle" | "duels" | "lobby" | "skywars";

type MissionEvent =
  | `anniversary_${MissionYear}`
  | `christmas_${MissionYear}`
  | `halloween_${MissionYear}`;

type MissionPeriodGiven = MapKeys<MissionPeriod, "", "_given">;

type MissionPeriodCompleted = MapKeys<MissionPeriod, "", "_completed">;

type MissionPeriodCompletedAll = MapKeys<MissionPeriod, "", "_completed_all">;

type MissionStatsPerPeriod = MissionPeriodGiven &
  MissionPeriodCompleted &
  MissionPeriodCompletedAll;

type MissionEventGiven = MapKeys<MissionEvent, "", "_given">;

type MissionEventCompleted = MapKeys<MissionEvent, "", "_completed">;

type MissionEventCompletedAll = MapKeys<MissionEvent, "", "_completed_all">;

type MissionStatsPerEvent = MissionEventGiven &
  MissionEventCompleted &
  MissionEventCompletedAll;

type MissionTypeGiven = MapKeys<MissionType, "", "_given">;

type MissionTypeCompleted = MapKeys<MissionType, "", "_completed">;

type MissionTypeCompletedAll = MapKeys<
  Exclude<MissionType, "lobby">,
  "",
  "_completed_all"
>;

type MissionStatsPerType = MissionTypeGiven &
  MissionTypeCompleted &
  MissionTypeCompletedAll;

type MissionTypePeriodGiven = MapKeys<
  MissionPeriod,
  `${Exclude<MissionType, "lobby">}_`,
  "_given"
>;

type MissionTypePeriodCompleted = MapKeys<
  MissionPeriod,
  `${Exclude<MissionType, "lobby">}_`,
  "_completed"
>;

type MissionTypePeriodCompletedAll = MapKeys<
  MissionPeriod,
  `${Exclude<MissionType, "lobby">}_`,
  "_completed_all"
>;

type MissionPeriodStatsPerType = MissionTypePeriodGiven &
  MissionTypePeriodCompleted &
  MissionTypePeriodCompletedAll;

type MissionTypeEventGiven = MapKeys<
  Exclude<MissionType, "buildbattle">,
  "",
  `_${MissionEvent}_given`
>;

type MissionTypeEventCompleted = MapKeys<
  Exclude<MissionType, "buildbattle">,
  "",
  `_${MissionEvent}_completed`
>;

type MissionTypeEventCompletedAll = MapKeys<
  Exclude<MissionType, "buildbattle">,
  "",
  `_${MissionEvent}_completed_all`
>;

type MissionEventStatsPerType = MissionTypeEventGiven &
  MissionTypeEventCompleted &
  MissionTypeEventCompletedAll;

type MissionNascoMandouYearGiven = MapKeys<
  `nascomandou_halloween_${MissionYear}`,
  "",
  "_given"
>;

type MissionNascoMandouYearCompleted = MapKeys<
  `nascomandou_halloween_${MissionYear}`,
  "",
  "_completed"
>;

type MissionNascoMandouYearCompletedAll = MapKeys<
  `nascomandou_halloween_${MissionYear}`,
  "",
  "_completed_all"
>;

type MissionNascoMandouStats = MissionNascoMandouYearGiven &
  MissionNascoMandouYearCompleted &
  MissionNascoMandouYearCompletedAll;

export interface APIPlayerMissionsStats
  extends MissionStatsPerPeriod,
    MissionStatsPerEvent,
    MissionStatsPerType,
    MissionPeriodStatsPerType,
    MissionEventStatsPerType,
    MissionNascoMandouStats {
  completed: number;
  given: number;
  nascomandou_completed: number;
  nascomandou_given: number;
}
