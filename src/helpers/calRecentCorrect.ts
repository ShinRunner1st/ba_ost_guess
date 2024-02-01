import { StatsType } from "../types/stats";

export function calRecentCorrect(stats: StatsType[]) {
  let currect = [];

  if (Array.isArray(stats)) {
    currect = stats.filter((x) => {
      return x.didGuess == true;
    });
  } else currect = [];
  return currect.length.toString() + "/" + stats.length.toString();
}
