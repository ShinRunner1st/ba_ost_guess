import React, { useEffect, useState } from "react";
import { Button } from "..";

import * as Styled from "./index.styled";
import { songs } from "../../constants";

interface Props {
  onClose: () => void;
  correctRecent: string;
  Stats: number[];
}

export function StatsPopUp({ onClose, correctRecent, Stats }: Props) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Reset then trigger animation every open
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  function useCountUp(target: number, animate: boolean, duration = 500) {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
      if (!animate) {
        setValue(0);
        return;
      }

      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(progress * target);
        setValue(current);

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    }, [target, animate, duration]);

    return value;
  }

  const v1 = useCountUp(Stats[1], animate);
  const v2 = useCountUp(Stats[2], animate);
  const v3 = useCountUp(Stats[3], animate);
  const v4 = useCountUp(Stats[4], animate);
  const v5 = useCountUp(Stats[5], animate);
  const v6 = useCountUp(Stats[6], animate);
  const vX = useCountUp(Stats[0], animate);

  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1 style={{ margin: 0 }}>Stats 📊</h1>
        <Styled.Spacer />
        <div style={{ width: 300 }}>
          <Styled.Section>
            1 |{" "}
            <Styled.Progress
              animate={animate}
              value={Stats[1]}
              maxValue={Stats[7]}
            />
            {v1}
          </Styled.Section>
          <Styled.Section>
            2 |{" "}
            <Styled.Progress
              animate={animate}
              value={Stats[2]}
              maxValue={Stats[7]}
            />
            {v2}
          </Styled.Section>
          <Styled.Section>
            3 |{" "}
            <Styled.Progress
              animate={animate}
              value={Stats[3]}
              maxValue={Stats[7]}
            />
            {v3}
          </Styled.Section>
          <Styled.Section>
            4 |{" "}
            <Styled.Progress
              animate={animate}
              value={Stats[4]}
              maxValue={Stats[7]}
            />
            {v4}
          </Styled.Section>
          <Styled.Section>
            5 |{" "}
            <Styled.Progress
              animate={animate}
              value={Stats[5]}
              maxValue={Stats[7]}
            />
            {v5}
          </Styled.Section>
          <Styled.Section>
            6 |
            <Styled.Progress
              animate={animate}
              value={Stats[6]}
              maxValue={Stats[7]}
            />
            {v6}
          </Styled.Section>
          <Styled.Section>
            X |
            <Styled.BadProgress
              animate={animate}
              value={Stats[0]}
              maxValue={Stats[7]}
            />
            {vX}
          </Styled.Section>
        </div>
        <Styled.Spacer />
        <Styled.Section>Score : {correctRecent}</Styled.Section>
        <Styled.Section>Total OST : {songs.length}</Styled.Section>
        <Styled.Spacer />
        <Styled.Section>
          <Button variant="green" style={{ marginTop: 20 }} onClick={onClose}>
            Close
          </Button>
        </Styled.Section>
      </Styled.PopUp>
    </Styled.Container>
  );
}
