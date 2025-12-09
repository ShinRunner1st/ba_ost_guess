import styled from "styled-components";
import "@fontsource-variable/nunito-sans";

export const Container = styled.header`
  font-family: "Nunito Sans Variable";
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
  font-family: "Nunito Sans Variable";
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;

  width: 40%;

  @media (max-width: 768px) {
    width: 95%;
  }

  max-width: 650px;

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
    gap: 12px;
  }

  .right-icon {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.text};
  font-family: "Nunito Sans Variable";
  width: max-content;

  -webkit-touch-callout: none;
  user-select: none;
`;
