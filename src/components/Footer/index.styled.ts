import styled from "styled-components";
import "@fontsource/noto-sans";

export const Text = styled.p`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  font-family: "Noto Sans";
  text-align: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background100};
`;

export const Link = styled.a`
  font-family: "Noto Sans";
  color: ${({ theme }) => theme.text};
`;
