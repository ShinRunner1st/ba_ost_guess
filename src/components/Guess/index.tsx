import React from "react";

import { GuessType } from "../../types/guess";

import * as Styled from "./index.styled";
import { Song } from "../../types/song";

interface Props {
  guess: GuessType;
  isCorrect: boolean | undefined;
  active: boolean;
  todaysSolution: Song;
}

export function Guess({ guess, isCorrect, active, todaysSolution }: Props) {
  const { song, skipped } = guess;
  const [text, setText] = React.useState<string>("");
  const [themeNo, setthemeNo] = React.useState<string>("");
  const [diff, setDiff] = React.useState<boolean>(false);
  const [diffH, setDiffH] = React.useState<boolean>(false);
  const [diffL, setDiffL] = React.useState<boolean>(false);

  function checkHint(songThemeNo: number, todayThemeNo: number) {
    const diff = songThemeNo - todayThemeNo;

    return {
      inRange: Math.abs(diff) <= 10,   // within ±10
      higher: diff > 0,               // song is higher
      lower: diff < 0,                // song is lower
      equal: diff === 0               // exact match
    };
  }

  React.useEffect(() => {
    if (song) {
      setText(`${song.artist} - ${song.name}`);
      setthemeNo(`[Theme ${song.themeNo}]`);
      const hint = checkHint(Number(song.themeNo), Number(todaysSolution.themeNo));
      setDiff(hint.inRange);
      setDiffH(hint.higher);
      setDiffL(hint.lower);
    } else if (skipped) {
      setText("Skipped");
    } else {
      setText("");
    }
  }, [guess]);

  return (
    <Styled.Container active={active} isCorrect={isCorrect} closeHint={diff}>
      <Styled.Text>{text}</Styled.Text>
      <Styled.ThemeNo>{themeNo} {diffH && '↓'} {diffL && '↑'}</Styled.ThemeNo>
    </Styled.Container>
  );
}
