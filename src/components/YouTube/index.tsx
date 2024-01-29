import React from "react";
import { default as YouTubePlayer } from "react-youtube";

interface Props {
  id: string;
}

export function YouTube({ id }: Props) {
  return (
    <div style={{ margin: "5% 0" }}>
      <YouTubePlayer
        videoId={id}
        opts={{
          width: "512",
          height: "288",
          playerVars: {
            autoplay: 1,
            playsinline: 1,
          },
        }}
      />
    </div>
  );
}
