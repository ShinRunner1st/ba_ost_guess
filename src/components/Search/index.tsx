import React from "react";
import { event } from "react-ga";
import { IoSearch, IoCloseCircleOutline } from "react-icons/io5";
import { searchSong } from "../../helpers";
import { Song } from "../../types/song";

import * as Styled from "./index.styled";

interface Props {
  currentTry: number;
  setSelectedSong: React.Dispatch<React.SetStateAction<Song | undefined>>;
  selectedSong: Song | undefined;
  inputRef: React.RefObject<HTMLInputElement>;
}

export function Search({
  currentTry,
  setSelectedSong,
  selectedSong,
  inputRef,
}: Props) {
  const [value, setValue] = React.useState<string>("");
  const [results, setResults] = React.useState<Song[]>([]);
  const [focusedIndex, setFocusedIndex] = React.useState<number>(-1);

  React.useEffect(() => {
    if (value == results[0]?.artist + " - " + results[0]?.name) {
      setSelectedSong(results[0]);
      setResults([]);
      setFocusedIndex(-1);
    } else if (
      selectedSong &&
      value !== `${selectedSong.artist} - ${selectedSong.name}`
    ) {
      setResults(searchSong(value));
      setSelectedSong(undefined);
      setFocusedIndex(-1);
    } else if (
      selectedSong &&
      value == `${selectedSong.artist} - ${selectedSong.name}`
    ) {
      setResults([]);
      setFocusedIndex(-1);
    } else if (value) {
      setResults(searchSong(value));
      setFocusedIndex(-1);
    } else if (value === "") {
      setValue("");
      setResults([]);
      setFocusedIndex(-1);
      setSelectedSong(undefined);
    }
  }, [value, selectedSong]);

  // clear value on selection
  React.useEffect(() => {
    setValue("");
    setResults([]);
    setSelectedSong(undefined);
  }, [currentTry]);

  const selectSong = (song: Song) => {
    setSelectedSong(song);
    setValue(`${song.artist} - ${song.name}`);
    setResults([]);
    setFocusedIndex(-1);
    inputRef.current?.focus();

    event({
      category: "Player",
      action: "Chose song",
      label: `${song.artist} - ${song.name}`,
    });
  };

  const handleClear = () => {
    setValue("");
    setResults([]);
    setSelectedSong(undefined);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      handleClear();
    }

    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => {
        // If at the bottom, loop back to the Search Input (-1)
        if (prev === results.length - 1) return 0;
        return prev + 1;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) => {
        // If at Search Input (-1), jump to the LAST item (Bottom)
        if (prev === -1) return results.length - 1;
        if (prev === 0) return results.length - 1;
        // Otherwise move up one step
        return prev - 1;
      });
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (focusedIndex !== -1 && results[focusedIndex]) {
        const song = results[focusedIndex];
        setSelectedSong(song);
        setValue(`${song.artist} - ${song.name}`);
        setResults([]);
        setFocusedIndex(-1);
      }
    }
  };

  return (
    <Styled.Container>
      <Styled.ResultsContainer>
        {results.map((song, index) => (
          <Styled.Result
            key={song.youtubeId}
            $isFocused={index === focusedIndex}
            onClick={() => selectSong(song)}
          >
            <Styled.ResultText>
              {song.artist} - {song.name}
            </Styled.ResultText>
            <Styled.ThemeNo>
              {song.name !== `Theme ${song.themeNo}` &&
                ` [Theme ${song.themeNo}]`}
            </Styled.ThemeNo>
          </Styled.Result>
        ))}
      </Styled.ResultsContainer>
      <Styled.SearchContainer>
        <Styled.SearchPadding>
          <IoSearch size={20} />
          <Styled.Input
            ref={inputRef}
            onChange={(e) => setValue(e.currentTarget.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search"
            value={value}
          />
          {value && (
            <IoCloseCircleOutline
              size={20}
              onClick={handleClear}
              style={{ cursor: "pointer", marginLeft: "8px" }}
            />
          )}
        </Styled.SearchPadding>
      </Styled.SearchContainer>
    </Styled.Container>
  );
}
