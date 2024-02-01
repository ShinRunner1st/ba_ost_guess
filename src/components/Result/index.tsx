import React from "react";
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

  const textForTry = [
    "Wow!",
    "Im impressed.",
    "Not bad.",
    "Phew.",
    "That was close...",
  ];

  if (didGuess) {
    const copyResult = React.useCallback(() => {
      navigator.clipboard.writeText(scoreToEmoji(guesses));
    }, [guesses]);

    const triesConjugation = currentTry === 1 ? "guess" : "guesses";

    return (
      <>
        <Styled.ResultTitle>{textForTry[currentTry - 1]}</Styled.ResultTitle>
        <Styled.SongTitle>
          {todaysSolution.artist} - {todaysSolution.name}
        </Styled.SongTitle>
        <Styled.Tries>
          {songs.length == totalsGuesses && "This is last song and"} You got it
          right in {currentTry} {triesConjugation}.
        </Styled.Tries>
        <Styled.Score>Score : {correctRecent}</Styled.Score>
        <YouTube id={todaysSolution.youtubeId} />
        <Styled.Buttons>
          <Button onClick={copyResult} variant="green">
            Copy Result
          </Button>
          <Button
            onClick={() => {
              selectRandomElement();
              window.location.reload();
            }}
            variant="red"
            style={{ marginLeft: "25px" }}
          >
            Try Again
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
        <Styled.ResultTitle>Fail</Styled.ResultTitle>
        <Styled.SongTitle>
          {todaysSolution.artist} - {todaysSolution.name}
        </Styled.SongTitle>
        <Styled.Tries>
          {songs.length == totalsGuesses && "This is sast song and"} You are
          Noob.
        </Styled.Tries>
        <Styled.Score>Score : {correctRecent}</Styled.Score>
        <YouTube id={todaysSolution.youtubeId} />
        <Styled.Buttons>
          <Button
            onClick={() => {
              selectRandomElement();
              window.location.reload();
            }}
            variant="red"
            style={{ marginLeft: "25px" }}
          >
            Try Again
          </Button>
        </Styled.Buttons>
        {/* <Styled.TimeToNext>
          Try again tomorrow - new song in {hoursToNextDay} hours!
        </Styled.TimeToNext> */}
      </>
    );
  }
}
