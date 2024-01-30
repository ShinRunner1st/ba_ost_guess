import styled from "styled-components";
import "@fontsource/noto-sans";

export const Container = styled.div`
  font-family: "Noto Sans";
  position: relative;

  width: 100%;

  margin-top: 5%;
`;

export const SearchContainer = styled.div`
  font-family: "Noto Sans";
  display: flex;
  align-items: center;

  width: 100%;
  height: 50px;

  border-color: ${({ theme }) => theme.border};
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;

  background-color: ${({ theme }) => theme.background1};

  color: ${({ theme }) => theme.text};
`;

export const SearchPadding = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  padding: 0 15px;
`;

export const Input = styled.input`
  font-family: "Noto Sans";
  width: 100%;
  height: 100%;
  margin: 0 10px;

  background-color: transparent;
  border: none;
  outline: none !important;

  color: ${({ theme }) => theme.text};
  font-size: 1rem;
`;

export const ResultsContainer = styled.div`
  font-family: "Noto Sans";
  position: absolute;
  bottom: 50px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;

  overflow-y: auto;
`;

export const Result = styled.div`
  font-family: "Noto Sans";
  padding: 1px 15px;

  background-color: ${({ theme }) => theme.background1};

  border-color: ${({ theme }) => theme.border};
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;

  color: ${({ theme }) => theme.text};

  cursor: pointer;
`;

export const ResultText = styled.p`
  font-family: "Noto Sans";
  width: 100%;

  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;

  user-select: none;

  &:hover {
    opacity: 0.8;
  }
`;
