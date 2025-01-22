import React from "react";
import {
  IoMusicalNoteOutline,
  IoHelpCircleOutline,
  IoCafe,
} from "react-icons/io5";
import { Button } from "..";

import * as Styled from "./index.styled";

interface Props {
  onClose: () => void;
}
const stats = JSON.parse(localStorage.getItem("stats") || "{}");

export function InfoPopUp({ onClose }: Props) {
  return (
    <Styled.Container>
      <Styled.PopUp>
        <h1>Welcome 👋</h1>
        <Styled.Spacer />
        <Styled.Section>
          <IoMusicalNoteOutline size={50} />
          <p>Blue Archive OST Heardle</p>
        </Styled.Section>
        <Styled.Section>
          <IoHelpCircleOutline size={50} />
          <p>A clone of Heardle for Blue Archive OST.</p>
        </Styled.Section>
        <Styled.Section>
          <IoCafe size={50} />
          <p>Most Blue Archive OST are from</p>
          <a
            href="https://www.youtube.com/@mo2bluearchive"
            target="_blank"
            rel="noopener noreferrer"
          >
            MO2
          </a>
        </Styled.Section>
        <Styled.Section>
          <p>Last Update 22/1/2025</p>
        </Styled.Section>
        <Styled.Section>
          <Button variant="green" style={{ marginTop: 20 }} onClick={onClose}>
            Close
          </Button>
          {stats.length > 1 && (
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
