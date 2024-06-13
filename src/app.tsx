import { event } from "react-ga";

import React from "react";
import _ from "lodash";

import { Song } from "./types/song";
import { GuessType } from "./types/guess";

import { todaysSolution, calRecentCorrect, calStats } from "./helpers";

import { Header, InfoPopUp, Game, Footer, StatsPopUp } from "./components";

import * as Styled from "./app.styled";

function App() {
  const initialGuess = {
    song: undefined,
    skipped: false,
    isCorrect: undefined,
  } as GuessType;

  const [guesses, setGuesses] = React.useState<GuessType[]>(
    Array.from({ length: 6 }).fill(initialGuess) as GuessType[]
  );
  const [currentTry, setCurrentTry] = React.useState<number>(0);
  const [selectedSong, setSelectedSong] = React.useState<Song>();
  const [didGuess, setDidGuess] = React.useState<boolean>(false);
  const [correctRecent, setCorrectRecent] = React.useState<string>("");
  const [totalsGuesses, setTotalsGuesses] = React.useState<number>(0);
  const [calStat, setCalStat] = React.useState([0, 0, 0, 0, 0, 0, 0]);

  const firstRun = localStorage.getItem("firstRun") === null;
  let stats = JSON.parse(localStorage.getItem("stats") || "{}");

  React.useEffect(() => {
    if (Array.isArray(stats)) {
      const visitedToday = _.isEqual(
        todaysSolution,
        stats[stats.length - 1].solution
      );

      if (!visitedToday) {
        stats.push({
          solution: todaysSolution,
          currentTry: 0,
          didGuess: 0,
        });
      } else {
        const { currentTry, guesses, didGuess } = stats[stats.length - 1];
        setCurrentTry(currentTry);
        setGuesses(guesses);
        setDidGuess(didGuess);
      }
    } else {
      // initialize stats
      // useEffect below does rest
      stats = [];
      stats.push({
        solution: todaysSolution,
      });
    }
  }, []);
  //set stats to current
  React.useEffect(() => {
    if (Array.isArray(stats)) {
      stats[stats.length - 1].currentTry = currentTry;
      stats[stats.length - 1].didGuess = didGuess;
      stats[stats.length - 1].guesses = guesses;
    }
  }),
    [guesses, currentTry, didGuess];

  React.useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats));
    setCorrectRecent(calRecentCorrect(stats));
    setTotalsGuesses(stats.length);
  }, [stats]);

  React.useEffect(() => {
    setCalStat(calStats(stats));
  }, [currentTry]);

  const [isInfoPopUpOpen, setIsInfoPopUpOpen] =
    React.useState<boolean>(firstRun);

  const openInfoPopUp = React.useCallback(() => {
    setIsInfoPopUpOpen(true);
  }, []);
  const closeInfoPopUp = React.useCallback(() => {
    if (firstRun) {
      localStorage.setItem("firstRun", "false");
      setIsInfoPopUpOpen(false);
    } else {
      setIsInfoPopUpOpen(false);
    }
  }, [localStorage.getItem("firstRun")]);

  //idk
  const [isStatsPopUpOpen, setIsStatsPopUpOpen] =
    React.useState<boolean>(false);

  const openStatsPopUp = React.useCallback(() => {
    setIsStatsPopUpOpen(true);
  }, []);
  const closeStatsPopUp = React.useCallback(() => {
    setIsStatsPopUpOpen(false);
  }, []);

  const skip = React.useCallback(() => {
    setGuesses((guesses: GuessType[]) => {
      const newGuesses = [...guesses];
      newGuesses[currentTry] = {
        song: undefined,
        skipped: true,
        isCorrect: undefined,
      };

      return newGuesses;
    });

    setCurrentTry((currentTry) => currentTry + 1);

    event({
      category: "Game",
      action: "Skip",
    });
  }, [currentTry]);

  const guess = React.useCallback(() => {
    setCalStat(calStats(stats));
    const isCorrect = selectedSong === todaysSolution;

    if (!selectedSong) {
      alert("Not Found");
      return;
    }

    setGuesses((guesses: GuessType[]) => {
      const newGuesses = [...guesses];
      newGuesses[currentTry] = {
        song: selectedSong,
        skipped: false,
        isCorrect: isCorrect,
      };

      return newGuesses;
    });

    setCurrentTry((currentTry) => currentTry + 1);
    setSelectedSong(undefined);

    if (isCorrect) {
      setDidGuess(true);
    }

    event({
      category: "Game",
      action: "Guess",
      label: `${selectedSong.artist} - ${selectedSong.name}`,
      value: isCorrect ? 1 : 0,
    });
  }, [guesses, selectedSong]);
  return (
    <Styled.BG>
      <Header openInfoPopUp={openInfoPopUp} openStatsPopUp={openStatsPopUp} />
      {isStatsPopUpOpen && (
        <StatsPopUp
          onClose={closeStatsPopUp}
          correctRecent={correctRecent}
          Stats={calStat}
        />
      )}
      {isInfoPopUpOpen && <InfoPopUp onClose={closeInfoPopUp} />}
      <Styled.Container>
        <Game
          guesses={guesses}
          didGuess={didGuess}
          todaysSolution={todaysSolution}
          currentTry={currentTry}
          setSelectedSong={setSelectedSong}
          skip={skip}
          guess={guess}
          correctRecent={correctRecent}
          totalsGuesses={totalsGuesses}
        />
      </Styled.Container>
      <Footer />
    </Styled.BG>
  );
}

export default App;
