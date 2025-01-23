import React from "react";
import { default as YouTubePlayer } from "react-youtube";

interface Props {
  id: string;
  time: number;
}

export function YouTube({ id, time }: Props) {
  return (
    <div style={{ margin: "5% 0" }}>
      <YouTubePlayer
        videoId={id}
        opts={{
          width: "560",
          height: "315",
          playerVars: {
            autoplay: 1,
            playsinline: 1,
          },
        }}
        onReady={(event) => {
          event.target.seekTo(time);
          event.target.setVolume(20);
        }}
      />
    </div>
  );
}
