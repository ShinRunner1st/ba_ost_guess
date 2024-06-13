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
}

export function Result({
  didGuess,
  todaysSolution,
  guesses,
  currentTry,
  correctRecent,
  totalsGuesses,
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
    "OMG! 😭",
    "Wow!",
    "Im impressed.",
    "Not bad.",
    "Phew.",
    "That was close...",
  ];

  const copyResult = React.useCallback(() => {
    navigator.clipboard.writeText(scoreToEmoji(guesses, correctRecent));
    setButtonText("Copied to your clipboard");
    setTimeout(() => {
      setButtonText("Copy Score");
    }, 2000);
  }, [guesses, correctRecent]);

  if (didGuess) {
    const triesConjugation = currentTry === 1 ? "guess" : "guesses";

    return (
      <>
        <Styled.CorrectResultTitle>
          {textForTry[currentTry - 1]}
        </Styled.CorrectResultTitle>
        <Styled.Tries>
          {songs.length == totalsGuesses && "This is last song and"} You got it
          right in {currentTry} {triesConjugation}.
        </Styled.Tries>
        <Styled.Score>Score : {correctRecent}</Styled.Score>
        <Styled.SongTitle>
          {todaysSolution.artist} - {todaysSolution.name}
        </Styled.SongTitle>
        <YouTube id={todaysSolution.youtubeId} />
        <Styled.Buttons>
          <Button onClick={copyResult} variant="green">
            {buttonText}
          </Button>
          <Button
            onClick={() => {
              selectRandomElement();
              window.location.reload();
            }}
            variant="red"
            style={{ marginLeft: "50px" }}
          >
            Next Song
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
        <Styled.FailResultTitle>Fail</Styled.FailResultTitle>
        <Styled.Tries>
          {songs.length == totalsGuesses && "This is last song and"} You are
          Noob.
        </Styled.Tries>
        <Styled.Score>Score : {correctRecent}</Styled.Score>
        <Styled.SongTitle>
          {todaysSolution.artist} - {todaysSolution.name}
        </Styled.SongTitle>
        <YouTube id={todaysSolution.youtubeId} />
        <Styled.Buttons>
          <Button onClick={copyResult} variant="green">
            {buttonText}
          </Button>
          <Button
            onClick={() => {
              selectRandomElement();
              window.location.reload();
            }}
            variant="red"
            style={{ marginLeft: "25px" }}
          >
            Continue?
          </Button>
        </Styled.Buttons>
        {/* <Styled.TimeToNext>
          Try again tomorrow - new song in {hoursToNextDay} hours!
        </Styled.TimeToNext> */}
      </>
    );
  }
}
