import styled from "styled-components";
import "@fontsource-variable/nunito-sans";

export const Text = styled.p`
  z-index: -1;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: auto;
  font-family: "Nunito Sans Variable";
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background100};
`;

export const Link = styled.a`
  font-family: "Nunito Sans Variable";
  color: ${({ theme }) => theme.text};
`;
