import styled from "styled-components";
import "@fontsource/noto-sans";

export const CorrectResultTitle = styled.h1`
  font-family: "Noto Sans";
  color: lightgreen;
  text-shadow: #000000 1px 0 10px;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
  margin-top: 10%;
`;

export const FailResultTitle = styled.h1`
  font-family: "Noto Sans";
  color: red;
  text-shadow: #000000 1px 0 10px;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
  margin-top: 10%;
`;

export const Tries = styled.h4`
  font-family: "Noto Sans";
  text-shadow: #000000 1px 0 10px;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }

  margin-top: 0;
`;

export const SongTitle = styled.h2`
  font-family: "Noto Sans";
  color: lightblue;
  text-shadow: #000000 1px 0 10px;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }

  margin-bottom: 0;
`;

export const Score = styled.h4`
  font-family: "Noto Sans";
  text-shadow: #000000 1px 0 10px;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }

  margin-top: 0;
`;

export const TimeToNext = styled.h4`
  font-family: "Noto Sans";
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

export const Buttons = styled.div`
  font-family: "Noto Sans";

  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`;
