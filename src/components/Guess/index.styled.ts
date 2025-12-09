import styled from "styled-components";
import "@fontsource-variable/nunito-sans";

export const Container = styled.div<{
  active: boolean;
  isCorrect: boolean | undefined;
}>`
  font-family: "Nunito Sans Variable";
  width: 100%;
  min-height: 54px;

  margin: 6px 0;

  display: flex;
  align-items: center;

  border: 1px solid
    ${({ theme, active, isCorrect }) => {
      if (active) return theme.border;
      if (isCorrect === false) return theme.red;
      return theme.border100;
    }};

  border-radius: 6px;
  background-color: ${({ theme }) => theme.background100};
  color: ${({ theme }) => theme.text};
`;

export const Text = styled.p`
  font-family: "Nunito Sans Variable";
  width: 100%;

  padding: 0 12px;

  font-size: 1rem;
  color: ${({ theme }) => theme.text};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
