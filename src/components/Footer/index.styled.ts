import styled from "styled-components";
import "@fontsource/noto-sans";

export const Text = styled.p`
  font-family: "Noto Sans";
  text-align: center;
  color: ${({ theme }) => theme.text};
  margin-top: 50px;
  background-color: ${({ theme }) => theme.background100};
`;

export const Link = styled.a`
  font-family: "Noto Sans";
  color: ${({ theme }) => theme.text};
`;
