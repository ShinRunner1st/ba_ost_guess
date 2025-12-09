import styled from "styled-components";
import "@fontsource-variable/nunito-sans";

export const Container = styled.div`
  font-family: "Nunito Sans Variable";
  position: relative;
  width: 100%;
  margin-top: 12px;
`;

export const SearchContainer = styled.div`
  font-family: "Nunito Sans Variable";
  display: flex;
  align-items: center;

  width: 100%;
  height: 50px;

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.background1};
  color: ${({ theme }) => theme.text};
`;

export const SearchPadding = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 12px;
`;

export const Input = styled.input`
  font-family: "Nunito Sans Variable";
  width: 100%;
  height: 100%;
  margin: 0 8px;

  background-color: transparent;
  border: none;
  outline: none;

  color: ${({ theme }) => theme.text};
  font-size: 1rem;
`;

export const ResultsContainer = styled.div`
  font-family: "Nunito Sans Variable";
  position: absolute;
  bottom: 50px;
  z-index: 1;

  margin-top: 6px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;

  overflow-y: auto;
`;

export const Result = styled.div`
  font-family: "Nunito Sans Variable";
  padding: 0px 12px;

  background-color: ${({ theme }) => theme.background1};
  border: 1px solid ${({ theme }) => theme.border};

  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.background100};
  }
`;

export const ResultText = styled.p`
  font-family: "Nunito Sans Variable";
  width: 100%;

  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;

  user-select: none;
`;
