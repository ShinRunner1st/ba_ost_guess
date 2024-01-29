import styled from "styled-components";
import "@fontsource/noto-sans";

export const Container = styled.header`
  font-family: "Noto Sans";
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  border-color: ${({ theme }) => theme.border};
  border-bottom-width: 0.5px;
  border-bottom-style: solid;

  background-color: ${({ theme }) => theme.background100};

  margin-bottom: 15px;
`;

export const Content = styled.div`
  font-family: "Noto Sans";
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;

  width: 40%;

  @media (max-width: 768px) {
    width: 95%;
  }

  max-width: 650px;

  svg:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.text};
  font-family: "Noto Sans";
  text-transform: uppercase;
  width: max-content;

  -webkit-touch-callout: none;
  user-select: none;
`;
