import React from "react";
import { IoMusicalNoteOutline, IoHelpCircleOutline } from "react-icons/io5";
import { Button } from "..";

import * as Styled from "./index.styled";

interface Props {
  onClose: () => void;
}

export function InfoPopUp({ onClose }: Props) {
  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>Welcome 👋</h1>
        <Styled.Spacer />
        <Styled.Section>
          <IoMusicalNoteOutline size={70} />
          <p>Blue Archive OST</p>
        </Styled.Section>
        <Styled.Section>
          <IoHelpCircleOutline size={50} />
          <p>Check back for a new song every day!</p>
        </Styled.Section>
        <Styled.Section>
          <Button variant="green" style={{ marginTop: 20 }} onClick={onClose}>
            Close
          </Button>
          {localStorage.getItem("stats") !== null && (
            <Button
              variant="red"
              style={{ marginTop: 20 }}
              onClick={() => {
                localStorage.removeItem("stats");
                window.location.reload();
              }}
            >
              Reset Score
            </Button>
          )}
        </Styled.Section>
      </Styled.PopUp>
    </Styled.Container>
  );
}
