import styled from "styled-components";
import "@fontsource-variable/nunito-sans";

export const CorrectResultTitle = styled.h1`
  font-family: "Nunito Sans Variable";
  color: lightgreen;
  text-shadow: #000000 1px 0 10px;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
  margin-top: 10%;
`;

export const FailResultTitle = styled.h1`
  font-family: "Nunito Sans Variable";
  color: red;
  text-shadow: #000000 1px 0 10px;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
  margin-top: 10%;
`;

export const Tries = styled.h4`
  font-family: "Nunito Sans Variable";
  text-shadow: #000000 1px 0 10px;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }

  margin-top: 0;
`;

export const SongTitle = styled.h2`
  font-family: "Nunito Sans Variable";
  color: lightblue;
  text-shadow: #000000 1px 0 10px;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }

  margin-bottom: 0;
`;

export const Score = styled.h2`
  font-family: "Nunito Sans Variable";
  text-shadow: #000000 1px 0 10px;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }

  margin-top: 0;
  margin-bottom: 0;
`;

export const TimeToNext = styled.h4`
  font-family: "Nunito Sans Variable";
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

export const Buttons = styled.div`
  font-family: "Nunito Sans Variable";

  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  position: relative;
`;
