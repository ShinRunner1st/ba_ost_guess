import styled from "styled-components";
import { theme } from "../../constants";
import "@fontsource-variable/nunito-sans";

export const Button = styled.button<{ variant?: keyof typeof theme }>`
  font-family: "Nunito Sans Variable";
  background-color: ${({ theme, variant }) =>
    variant ? theme[variant] : theme.background100};

  border-radius: 5px;
  border: none;

  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  font-weight: 800;

  width: max-content;
  padding: 12.5px 20px;

  transition: transform 0.15s ease, opacity 0.15s ease;
  &:hover {
    transform: scale(1.08);
    opacity: 0.8;
  }

  cursor: pointer;
`;
