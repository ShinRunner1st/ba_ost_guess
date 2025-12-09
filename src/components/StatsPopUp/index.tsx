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

  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>Stats 📊</h1>
        <Styled.Spacer />
        <div style={{ width: 300 }}>
          <Styled.Section>
            1 | <Styled.Progress animate={animate} value={Stats[1]} maxValue={Stats[7]} />
            {Stats[1]}
          </Styled.Section>
          <Styled.Section>
            2 | <Styled.Progress animate={animate} value={Stats[2]} maxValue={Stats[7]} />
            {Stats[2]}
          </Styled.Section>
          <Styled.Section>
            3 | <Styled.Progress animate={animate} value={Stats[3]} maxValue={Stats[7]} />
            {Stats[3]}
          </Styled.Section>
          <Styled.Section>
            4 | <Styled.Progress animate={animate} value={Stats[4]} maxValue={Stats[7]} />
            {Stats[4]}
          </Styled.Section>
          <Styled.Section>
            5 | <Styled.Progress animate={animate} value={Stats[5]} maxValue={Stats[7]} />
            {Stats[5]}
          </Styled.Section>
          <Styled.Section>
            6 |
            <Styled.Progress animate={animate} value={Stats[6]} maxValue={Stats[7]} />
            {Stats[6]}
          </Styled.Section>
          <Styled.Section>
            X |
            <Styled.BadProgress animate={animate} value={Stats[0]} maxValue={Stats[7]} />
            {Stats[0]}
          </Styled.Section>
        </div>
        <Styled.Spacer />
        <h3>
          <Styled.Section>Score : {correctRecent}</Styled.Section>
          <Styled.Section>Total OST : {songs.length}</Styled.Section>
        </h3>
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
