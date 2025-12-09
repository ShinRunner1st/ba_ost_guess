import styled from "styled-components";
import "@fontsource-variable/nunito-sans";

export const Container = styled.header`
  font-family: "Nunito Sans Variable";
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  border-bottom: 0.5px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background100};

  margin-bottom: 15px;
`;

export const Content = styled.div`
  font-family: "Nunito Sans Variable";
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  width: 100%;
  max-width: 650px;
  padding: 0 16px;

  transition: transform 0.15s ease, opacity 0.15s ease;

  svg:hover {
    cursor: pointer;
    opacity: 0.8;
    transform: scale(1.08);
  }

  a {
    color: ${({ theme }) => theme.text};
  }

  .left-icons {
    display: flex;
    gap: 0px;
    justify-self: start;
  }

  .right-icon {
    display: flex;
    align-items: center;
    justify-self: end;
  }
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.text};
  font-family: "Nunito Sans Variable";
  justify-self: center;
  white-space: nowrap;

  -webkit-touch-callout: none;
  user-select: none;
`;
