import React from "react";
import { Song } from "../../types/song";
import { GuessType } from "../../types/guess";
import { scoreToEmoji } from "../../helpers";

import { Button } from "../Button";
import { YouTube } from "../YouTube";

import * as Styled from "./index.styled";

interface Props {
  didGuess: boolean;
  currentTry: number;
  todaysSolution: Song;
  guesses: GuessType[];
}

export function Result({
  didGuess,
  todaysSolution,
  guesses,
  currentTry,
}: Props) {
  const hoursToNextDay = Math.floor(
    (new Date(new Date().setHours(24, 0, 0, 0)).getTime() -
      new Date().getTime()) /
      1000 /
      60 /
      60
  );

  const textForTry = [
    "Wow!",
    "Im impressed.",
    "Not bad.",
    "Phew.",
    "That was close...",
  ];

  const stats = JSON.parse(localStorage.getItem("stats") || "{}");
  let Currect;
  if (Array.isArray(stats)) {
    Currect = stats.filter((x) => {
      return x.didGuess == true;
    });
  } else Currect = [];

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
          You got it right in {currentTry} {triesConjugation}. Score :{" "}
          {Currect.length}/{stats.length}
        </Styled.Tries>
        <YouTube id={todaysSolution.youtubeId} />
        <Styled.Buttons>
          <Button onClick={copyResult} variant="green">
            Copy Result
          </Button>
          <Button
            onClick={() => window.location.reload()}
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
          You are Noob. Score : {Currect.length}/{stats.length}
        </Styled.Tries>
        <YouTube id={todaysSolution.youtubeId} />
        <Styled.Buttons>
          <Button onClick={() => window.location.reload()} variant="red">
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
