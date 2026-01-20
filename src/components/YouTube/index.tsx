import React from "react";
import { default as YouTubePlayer } from "react-youtube";

interface Props {
  id: string;
  time: number;
}

export function YouTube({ id, time }: Props) {
  const isMobile = window.innerWidth < 768;
  const opts = {
    width: isMobile ? "320" : "560",
    height: isMobile ? "180" : "315",
    playerVars: {
      autoplay: 1 as 0 | 1,
      playsinline: 1 as 0 | 1,
    },
  };
  return (
    <div style={{ margin: "5% 0" }}>
      <YouTubePlayer
        videoId={id}
        opts={opts}
        onReady={(event) => {
          event.target.seekTo(time);
          event.target.setVolume(20);
        }}
      />
    </div>
  );
}
