import React from "react";
import { IoInformationCircleOutline, IoCellular } from "react-icons/io5";

import * as Styled from "./index.styled";

interface Props {
  openInfoPopUp: () => void;
  openStatsPopUp: () => void;
}

export function Header({ openInfoPopUp, openStatsPopUp }: Props) {
  return (
    <Styled.Container>
      <Styled.Content>
        <IoInformationCircleOutline
          onClick={openInfoPopUp}
          size={40}
          width={40}
          height={40}
        />
        <Styled.Logo>Blue Archive OST</Styled.Logo>
        <IoCellular onClick={openStatsPopUp} size={30} width={30} height={30} />
      </Styled.Content>
    </Styled.Container>
  );
}
