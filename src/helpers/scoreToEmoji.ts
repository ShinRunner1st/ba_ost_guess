import { GuessType } from "../types/guess";

export function scoreToEmoji(
  guesses: GuessType[],
  correctRecent: string,
  Stats: number[],
): string {
  const emojis = {
    incorrect: "🟥",
    correct: "🟩",
    skip: "⬜",
    empty: "⬛️",
  };
  const todaysDate = new Date();
  const prefix = `Blue Archive Heardle - ${todaysDate.toLocaleDateString()}`;
  const urlLink = "https://bluearchive-heardle.xyz/";
  const scoreStats = correctRecent;
  const divider = "--------------------------------";

  function percentToGreenBlocks(value: number, total: number, maxBlocks = 10) {
    if (total === 0 || value === 0) return "⬜"; // ✅ PLACEHOLDER

    const percent = value / total;
    const blocks = Math.round(percent * maxBlocks);

    return "🟩".repeat(Math.max(blocks, 1)); // ✅ Always at least 1 if value > 0
  }
  function redBlocks(value: number, total: number, maxBlocks = 10) {
    if (total === 0 || value === 0) return "⬜"; // placeholder
    const percent = value / total;
    const blocks = Math.round(percent * maxBlocks);
    return "🟥".repeat(Math.max(blocks, 1));
  }
  const total = Stats[7];
  const guessIn =
    "Guessed in\n" +
    "1: " + percentToGreenBlocks(Stats[1], total) + " " + Stats[1] + "\n" +
    "2: " + percentToGreenBlocks(Stats[2], total) + " " + Stats[2] + "\n" +
    "3: " + percentToGreenBlocks(Stats[3], total) + " " + Stats[3] + "\n" +
    "4: " + percentToGreenBlocks(Stats[4], total) + " " + Stats[4] + "\n" +
    "5: " + percentToGreenBlocks(Stats[5], total) + " " + Stats[5] + "\n" +
    "6: " + percentToGreenBlocks(Stats[6], total) + " " + Stats[6] + "\n" +
    "X: " + redBlocks(Stats[0], total) + " " + Stats[0];

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

  //return `${prefix}\nScore : ${scoreStats}\n🎧${scoreEmoji}\n${urlLink}`;
  //return `${prefix}\nScore : ${scoreStats}\n🎧${urlLink}`;
  return `${prefix}\n${divider}\n${guessIn}\n${divider}\nScore : ${scoreStats}\n🎵${urlLink}`;
}
