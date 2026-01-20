import React, { useState } from "react";
import { Song } from "../../types/song";
import { GuessType } from "../../types/guess";
import { scoreToEmoji } from "../../helpers";

import { Button } from "../Button";
import { YouTube } from "../YouTube";

import * as Styled from "./index.styled";
import { selectRandomElement } from "../../helpers/randomNewSong";
import { songs } from "../../constants";

interface Props {
  didGuess: boolean;
  currentTry: number;
  todaysSolution: Song;
  guesses: GuessType[];
  correctRecent: string;
  totalsGuesses: number;
  time: number;
  Stats: number[];
}

export function Result({
  didGuess,
  todaysSolution,
  guesses,
  currentTry,
  correctRecent,
  totalsGuesses,
  time,
  Stats,
}: Props) {
  // const hoursToNextDay = Math.floor(
  //   (new Date(new Date().setHours(24, 0, 0, 0)).getTime() -
  //     new Date().getTime()) /
  //     1000 /
  //     60 /
  //     60
  // );
  const [buttonText, setButtonText] = useState("Copy Score");
  const textForTry = [
    "EH?! FIRST TRY?! 😮",
    "Sensei is strong today 💪",
    "Not bad at all~ 👀",
    "Okay, getting intense 😤",
    "THAT WAS TOO CLOSE 😭",
    "WE SURVIVED, SENSEI 😭💥",
  ];

  const copyResult = React.useCallback(() => {
    navigator.clipboard.writeText(scoreToEmoji(guesses, correctRecent, Stats));
    setButtonText("Copied to your clipboard");
    setTimeout(() => {
      setButtonText("Copy Score");
    }, 2000);
  }, [guesses, correctRecent]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && didGuess) {
        e.preventDefault(); // Prevents accidental form submissions
        selectRandomElement();
        window.location.reload();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup: Remove listener when component unmounts or dependencies change
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [didGuess]);

  if (didGuess) {
    const triesConjugation = currentTry === 1 ? "guess" : "guesses";

    return (
      <>
        <Styled.CorrectResultTitle>
          {textForTry[Math.min(currentTry - 1, textForTry.length - 1)]}
        </Styled.CorrectResultTitle>
        <Styled.Tries>
          {songs.length == totalsGuesses && "This is last song and"} You got it
          right in {currentTry} {triesConjugation}.
        </Styled.Tries>
        <Styled.Score>Score : {correctRecent}</Styled.Score>
        <Styled.SongTitle>
          {todaysSolution.artist} - {todaysSolution.name}
        </Styled.SongTitle>
        <YouTube id={todaysSolution.youtubeId} time={time} />
        <Styled.Buttons>
          <Button onClick={copyResult} variant="background100">
            {buttonText}
          </Button>
          <Button
            onClick={() => {
              selectRandomElement();
              window.location.reload();
            }}
            variant={songs.length === totalsGuesses ? "red" : "green"}
            style={{ marginLeft: "50px" }}
          >
            {songs.length == totalsGuesses && "Reset Score"}
            {songs.length != totalsGuesses && "Next Song"}
          </Button>
        </Styled.Buttons>
        {/* <Styled.TimeToNext>
          Try again tomorrow - new song in {hoursToNextDay} hours!
        </Styled.TimeToNext> */}
      </>
    );
  } else {
    return (
      <>
        <Styled.FailResultTitle>Mission Failed… 💔</Styled.FailResultTitle>
        <Styled.Tries>
          {songs.length == totalsGuesses && "This is last song and"} Sensei
          needs more training 😭
        </Styled.Tries>
        <Styled.Score>Score : {correctRecent}</Styled.Score>
        <Styled.SongTitle>
          {todaysSolution.artist} - {todaysSolution.name}
        </Styled.SongTitle>
        <YouTube id={todaysSolution.youtubeId} time={time} />
        <Styled.Buttons>
          <Button onClick={copyResult} variant="background100">
            {buttonText}
          </Button>
          <Button
            onClick={() => {
              selectRandomElement();
              window.location.reload();
            }}
            variant={songs.length === totalsGuesses ? "red" : "green"}
            style={{ marginLeft: "25px" }}
          >
            {songs.length == totalsGuesses && "Reset Score"}
            {songs.length != totalsGuesses && "Continue?"}
          </Button>
        </Styled.Buttons>
        {/* <Styled.TimeToNext>
          Try again tomorrow - new song in {hoursToNextDay} hours!
        </Styled.TimeToNext> */}
      </>
    );
  }
}
