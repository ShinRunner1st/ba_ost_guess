import styled from "styled-components";
import { theme } from "../../constants";
import "@fontsource/noto-sans";

export const Button = styled.button<{ variant?: keyof typeof theme }>`
  font-family: "Noto Sans";
  background-color: ${({ theme, variant }) =>
    variant ? theme[variant] : theme.background100};

  border-radius: 5px;
  border: none;

  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  font-weight: 800;

  width: max-content;
  padding: 12.5px 20px;

  &:hover {
    opacity: 0.8;
  }

  cursor: pointer;
`;
