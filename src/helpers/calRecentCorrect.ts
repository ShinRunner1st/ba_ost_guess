import { StatsType } from "../types/stats";

export function calRecentCorrect(stats: StatsType[]) {
  let currect = [];

  if (Array.isArray(stats)) {
    currect = stats.filter((x) => {
      return x.didGuess == true;
    });
  } else currect = [];
  if (
    Array.isArray(stats) &&
    !stats[stats.length - 1].didGuess &&
    stats[stats.length - 1].currentTry < 6
  )
    return currect.length.toString() + "/" + (stats.length - 1).toString();
  else return currect.length.toString() + "/" + stats.length.toString();
}
