import { GuessType } from "../types/guess";

export function scoreToEmoji(
  guesses: GuessType[],
  correctRecent: string
): string {
  const emojis = {
    incorrect: "🟥",
    correct: "🟩",
    skip: "⬜",
    empty: "⬛️",
  };
  const todaysDate = new Date();
  const prefix = `Blue Archive OST - ${todaysDate.toLocaleDateString()}`;
  const urlLink = "https://ba-ost-guess.vercel.app/";
  const scoreStats = correctRecent;

  let scoreEmoji = "";

  guesses.forEach((guess: GuessType) => {
    if (guess.isCorrect === true) {
      scoreEmoji += emojis.correct;
    } else if (guess.skipped === true) {
      scoreEmoji += emojis.skip;
    } else if (guess.isCorrect === false) {
      scoreEmoji += emojis.incorrect;
    } else {
      scoreEmoji += emojis.empty;
    }
  });

  return `${prefix}\nScore : ${scoreStats}\n🎧${scoreEmoji}\n${urlLink}`;
}
