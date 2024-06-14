import { StatsType } from "../types/stats";

export function calStats(stats: StatsType[]) {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0];

  stats.forEach((stat) => {
    arr[stat.currentTry] += 1;
    arr[7] += 1;
  });

  return arr;
}
