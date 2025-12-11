import React from "react";

import { GuessType } from "../../types/guess";
import { Song } from "../../types/song";
import { playTimes } from "../../constants";

import { Button, Guess, Player, Search, Result } from "../";

import * as Styled from "./index.styled";

interface Props {
  guesses: GuessType[];
  todaysSolution: Song;
  currentTry: number;
  didGuess: boolean;
  setSelectedSong: React.Dispatch<React.SetStateAction<Song | undefined>>;
  skip: () => void;
  guess: () => void;
  correctRecent: string;
  totalsGuesses: number;
  getStartTime: (time: number) => void;
  time: number;
  Stats: number[];
  selectedSong: Song | undefined;
}

export function Game({
  guesses,
  todaysSolution,
  currentTry,
  didGuess,
  setSelectedSong,
  skip,
  guess,
  correctRecent,
  totalsGuesses,
  getStartTime,
  time,
  Stats,
  selectedSong,
}: Props) {
  if (didGuess || currentTry === 6) {
    return (
      <Result
        didGuess={didGuess}
        currentTry={currentTry}
        todaysSolution={todaysSolution}
        guesses={guesses}
        correctRecent={correctRecent}
        totalsGuesses={totalsGuesses}
        time={time}
        Stats={Stats}
      />
    );
  }
  return (
    <>
      {guesses.map((guess: GuessType, index) => (
        <Guess
          key={index}
          guess={guess}
          isCorrect={guess.isCorrect}
          active={index === currentTry}
          todaysSolution={todaysSolution}
        />
      ))}
      <Player
        id={todaysSolution.youtubeId}
        currentTry={currentTry}
        getStartTime={getStartTime}
        time={time}
      />
      <Search currentTry={currentTry} setSelectedSong={setSelectedSong} selectedSong={selectedSong} />

      <Styled.Buttons>
        <Button onClick={skip}>
          {currentTry === 5
            ? "Give up?"
            : `Skip +${
                (playTimes[currentTry + 1] - playTimes[currentTry]) / 1000
              }s`}
        </Button>
        <Button variant="green" onClick={guess} disabled={!selectedSong}>
          Guess
        </Button>
      </Styled.Buttons>
    </>
  );
}
