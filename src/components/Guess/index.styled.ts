import styled from "styled-components";
import "@fontsource-variable/nunito-sans";

export const Container = styled.div<{
  active: boolean;
  isCorrect: boolean | undefined;
}>`
  font-family: "Nunito Sans Variable";
  width: 100%;
  height: 45px;

  margin: 5px auto;

  display: flex;
  align-items: center;

  border-color: ${({ theme, active, isCorrect }) => {
    if (active) {
      return theme.border;
    } else if (isCorrect === false) {
      return theme.red;
    } else {
      return theme.border100;
    }
  }};
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  background-color: ${({ theme }) => theme.background100};

  color: ${({ theme }) => theme.text};
`;

export const Text = styled.p`
  font-family: "Nunito Sans Variable";
  width: 100%;
  height: max-content;

  padding: 0px 10px;

  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;
