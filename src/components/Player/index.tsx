import React from "react";
import YouTube from "react-youtube";
import { IoPauseCircle, IoPlayCircle } from "react-icons/io5";
import { event } from "react-ga";

import { playTimes } from "../../constants";

import * as Styled from "./index.styled";

interface Props {
  id: string;
  currentTry: number;
  getStartTime: (time: number) => void;
  time: number;
}

export function Player({ id, currentTry, getStartTime, time }: Props) {
  const opts = {
    width: "0", // Set width to 0
    height: "0", // Set height to 0
    playerVars: {
      controls: 0, // Hide the controls
      modestbranding: 1, // Minimize branding
      rel: 0, // Disable related videos
    },
  };

  // react-youtube doesn't export types for this
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = React.useRef<any>(null);

  const currentPlayTime = playTimes[currentTry];

  const [play, setPlay] = React.useState<boolean>(false);

  const [currentTime, setCurrentTime] = React.useState<number>(0);

  const [isReady, setIsReady] = React.useState<boolean>(false);

  const [startTime, setStartTime] = React.useState<number>(0);

  React.useEffect(() => {
    setInterval(() => {
      playerRef.current?.internalPlayer
        .getCurrentTime()
        .then((time: number) => {
          setCurrentTime(time);
        });
    }, 250);
  }, []);

  React.useEffect(() => {
    if (play) {
      if ((currentTime - startTime) * 1000 >= currentPlayTime) {
        playerRef.current?.internalPlayer.pauseVideo();
        playerRef.current?.internalPlayer.seekTo(startTime);
        setCurrentTime(startTime);
        setPlay(false);
      }
    }
  }, [play, currentTime, startTime]);

  // don't call play video each time currentTime changes
  const startPlayback = React.useCallback(() => {
    if (!play) {
      playerRef.current?.internalPlayer.playVideo();
      setPlay(true);
      event({
        category: "Player",
        action: "Played song",
      });
    }
  }, []);

  const pasuePlayback = React.useCallback(() => {
    if (play) {
      playerRef.current?.internalPlayer.pauseVideo();
      playerRef.current?.internalPlayer.seekTo(startTime);
      setCurrentTime(startTime);
      setPlay(false);
    }
  }, [play, currentTime, startTime]);

  // const setReady = React.useCallback((event) => {
  //   const duration = event.target.getDuration(); // Get video duration in seconds
  //   if (duration > 0) {
  //     let randomTime = Math.floor(Math.random() * duration); // Generate a random time in seconds
  //     if (randomTime + playTimes[5] / 1000 > duration) {
  //       randomTime = duration - playTimes[5] / 1000;
  //     }
  //     playerRef.current?.internalPlayer.seekTo(randomTime);
  //     setStartTime(randomTime);
  //   }
  //   playerRef.current?.internalPlayer.pauseVideo();
  //   playerRef.current?.internalPlayer.setVolume(20);
  //   setIsReady(true);
  // }, []);

  return (
    <>
      <Styled.StyledYouTube>
        <YouTube
          opts={{
            width: "1",
            height: "1",
            playerVars: {
              controls: 0, // Hide the controls
              modestbranding: 1, // Minimize branding
              rel: 0, // Disable related videos
            },
          }}
          videoId={id}
          onReady={(event) => {
            const duration = event.target.getDuration(); // Get video duration in seconds
            if (duration > 0) {
              const randomTime = Math.floor(
                Math.random() * (duration - playTimes[5] / 1000)
              ); // Generate a random time in seconds
              if (time == 0) {
                playerRef.current?.internalPlayer.seekTo(randomTime);
                setStartTime(randomTime);
                getStartTime(randomTime);
              } else {
                playerRef.current?.internalPlayer.seekTo(time);
                setStartTime(time);
                getStartTime(time);
              }
            }
            playerRef.current?.internalPlayer.pauseVideo();
            event.target.setVolume(20);
            setIsReady(true);
          }}
          ref={playerRef}
        />
      </Styled.StyledYouTube>
      {isReady ? (
        <>
          <Styled.ProgressBackground>
            {currentTime !== 0 && (
              <Styled.Progress value={currentTime - startTime} />
            )}
            {playTimes.map((playTime) => (
              <Styled.Separator
                style={{ left: `${(playTime / 16000) * 100}%` }}
                key={playTime}
              />
            ))}
          </Styled.ProgressBackground>
          <Styled.TimeStamps>
            <Styled.TimeStamp>0s</Styled.TimeStamp>
            <Styled.TimeStamp />
            <Styled.TimeStamp>2s</Styled.TimeStamp>
            <Styled.TimeStamp />
            <Styled.TimeStamp>4s</Styled.TimeStamp>
            <Styled.TimeStamp />
            <Styled.TimeStamp />
            <Styled.TimeStamp />
            <Styled.TimeStamp>7s</Styled.TimeStamp>
            <Styled.TimeStamp />
            <Styled.TimeStamp />
            <Styled.TimeStamp />
            <Styled.TimeStamp />
            <Styled.TimeStamp>11s</Styled.TimeStamp>
            <Styled.TimeStamp />
            <Styled.TimeStamp />
            <Styled.TimeStamp />
            <Styled.TimeStamp />
            <Styled.TimeStamp>16s</Styled.TimeStamp>
          </Styled.TimeStamps>
          {!play ? (
            <Styled.PlayIcon
              size={70}
              color="#fff"
              onClick={startPlayback}
            />
          ) : (
            <Styled.PauseIcon
              style={{ cursor: "pointer" }}
              size={70}
              color="#fff"
              onClick={pasuePlayback}
            />
          )}
        </>
      ) : (
        <p>Loading player...</p>
      )}
    </>
  );
}
