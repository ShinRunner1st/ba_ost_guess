import { GuessType } from "./guess";
import { Song } from "./song";

export type StatsType = {
  solution: Song;
  currentTry: number;
  didGuess: boolean;
  guesses: GuessType[];
};
