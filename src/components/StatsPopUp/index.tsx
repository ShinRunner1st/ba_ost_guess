import React from "react";
import { Button } from "..";

import * as Styled from "./index.styled";
import { songs } from "../../constants";

interface Props {
  onClose: () => void;
  correctRecent: string;
  Stats: number[];
}

export function StatsPopUp({ onClose, correctRecent, Stats }: Props) {
  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>Stats</h1>
        <Styled.Spacer />
        <div style={{ width: 300 }}>
          <Styled.Section>
            1 | <Styled.Progress value={Stats[1]} maxValue={Stats[7]} />
            {Stats[1]}
          </Styled.Section>
          <Styled.Section>
            2 | <Styled.Progress value={Stats[2]} maxValue={Stats[7]} />
            {Stats[2]}
          </Styled.Section>
          <Styled.Section>
            3 | <Styled.Progress value={Stats[3]} maxValue={Stats[7]} />
            {Stats[3]}
          </Styled.Section>
          <Styled.Section>
            4 | <Styled.Progress value={Stats[4]} maxValue={Stats[7]} />
            {Stats[4]}
          </Styled.Section>
          <Styled.Section>
            5 | <Styled.Progress value={Stats[5]} maxValue={Stats[7]} />
            {Stats[5]}
          </Styled.Section>
          <Styled.Section>
            X |
            <Styled.BadProgress value={Stats[6]} maxValue={Stats[7]} />
            {Stats[6]}
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
