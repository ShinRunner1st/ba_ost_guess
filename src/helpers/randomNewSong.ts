import { songs } from "../constants";
import { GuessType } from "../types/guess";
import { Song } from "../types/song";

const initialGuess = {
  song: undefined,
  skipped: false,
  isCorrect: undefined,
} as GuessType;

const guesses = <GuessType[]>(
  (Array.from({ length: 6 }).fill(initialGuess) as GuessType[])
);

const operation = (list1: Song[], list2: Song[], isUnion = false) =>
  list1.filter(
    (
      (set) => (a) =>
        isUnion === set.has(a.themeNo)
    )(new Set(list2.map((b) => b.themeNo)))
  );

// Following functions are to be used:
const inFirstOnly = operation,
  inSecondOnly = (list1: Song[], list2: Song[]) => inFirstOnly(list2, list1);

export async function selectRandomElement() {
  const getItemS = localStorage.getItem("stats");
  let randomSolutionSolution = songs[0];
  // Find a random element not already selected
  if (getItemS) {
    const stats = JSON.parse(getItemS);

    // Check if all elements have been selected, reset if necessary
    //console.log(stats.length);
    if (stats.length >= songs.length) {
      console.log("reset");
      localStorage.removeItem("stats");
      return;
    }

    const solu = stats.map((x: { solution: Song }) => {
      return x.solution;
    });
    const inSecond = inSecondOnly(solu, songs);

    //console.log(inSecond.length);

    if (inSecond.length > 0) {
      const randomIndex = Math.floor(Math.random() * inSecond.length);
      randomSolutionSolution = inSecond[randomIndex];
    } else {
      const randomIndex = Math.floor(Math.random() * songs.length);
      randomSolutionSolution = songs[randomIndex];
    }

    stats.push({
      solution: randomSolutionSolution,
      currentTry: 0,
      didGuess: false,
      guesses: guesses,
    });

    localStorage.setItem("stats", JSON.stringify(stats));
  } else {
    //console.log("none");
    const randomIndex = Math.floor(Math.random() * songs.length);
    randomSolutionSolution = songs[randomIndex];
  }
}
