import type { Year } from "../";
import type { MapKeys, Period } from "./";

type MissionPeriod = Exclude<Period, "monthly">;

type MissionYear = Exclude<
  Year,
  "2019" | "2020" | "2021" | "2022" | "2023" | "2024"
>;

type MissionType = "bedwars" | "buildbattle" | "duels" | "lobby" | "skywars";

type MissionEvent =
  | `anniversary_${MissionYear}`
  | `christmas_${MissionYear}`
  | `halloween_${MissionYear}`;

type MissionStatsPerPeriod = MapKeys<MissionPeriod, "", "_given"> &
  MapKeys<MissionPeriod, "", "_completed"> &
  MapKeys<MissionPeriod, "", "_completed_all">;

type MissionStatsPerEvent = MapKeys<MissionEvent, "", "_given"> &
  MapKeys<MissionEvent, "", "_completed"> &
  MapKeys<MissionEvent, "", "_completed_all">;

type MissionStatsPerType = MapKeys<MissionType, "", "_given"> &
  MapKeys<MissionType, "", "_completed"> &
  MapKeys<Exclude<MissionType, "lobby">, "", "_completed_all">;

type MissionPeriodStatsPerType = MapKeys<
  MissionPeriod,
  `${Exclude<MissionType, "lobby">}_`,
  "_given"
> &
  MapKeys<MissionPeriod, `${Exclude<MissionType, "lobby">}_`, "_completed"> &
  MapKeys<MissionPeriod, `${Exclude<MissionType, "lobby">}_`, "_completed_all">;

type MissionEventStatsPerType = MapKeys<
  Exclude<MissionType, "buildbattle">,
  "",
  `_${MissionEvent}_given`
> &
  MapKeys<
    Exclude<MissionType, "buildbattle">,
    "",
    `_${MissionEvent}_completed`
  > &
  MapKeys<
    Exclude<MissionType, "buildbattle">,
    "",
    `_${MissionEvent}_completed_all`
  >;

type MissionNascoMandouStats = MapKeys<
  `nascomandou_halloween_${MissionYear}`,
  "",
  "_given"
> &
  MapKeys<`nascomandou_halloween_${MissionYear}`, "", "_completed"> &
  MapKeys<`nascomandou_halloween_${MissionYear}`, "", "_completed_all">;

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
