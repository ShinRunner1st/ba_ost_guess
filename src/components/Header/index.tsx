import React from "react";
import { IoInformationCircleOutline, IoBarChart, IoHelpCircleOutline } from "react-icons/io5";

import * as Styled from "./index.styled";

interface Props {
  openInfoPopUp: () => void;
  openStatsPopUp: () => void;
  openHowToPopUp: () => void;
}

export function Header({ openInfoPopUp, openStatsPopUp, openHowToPopUp }: Props) {
  return (
    <Styled.Container>
      <Styled.Content>
        <div className="left-icons">
          <IoInformationCircleOutline
            onClick={openInfoPopUp}
            size={40}
          />
          <IoHelpCircleOutline
            onClick={openHowToPopUp}
            size={40}
          />
        </div>
        <Styled.Logo>Blue Archive OST</Styled.Logo>
        <div className="right-icon">
          <IoBarChart
            onClick={openStatsPopUp}
            size={30}
          />
        </div>
      </Styled.Content>
    </Styled.Container>
  );
}
