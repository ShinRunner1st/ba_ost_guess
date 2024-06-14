import { StatsType } from "../types/stats";

export function calStats(stats: StatsType[]) {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0];

  stats.forEach((stat) => {
    if (stat.didGuess) arr[stat.currentTry] += 1;
    else arr[0] += 1;
    arr[7] += 1;
  });

  return arr;
}
