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
    gap: 6px;
    justify-self: start;
    align-items: center;
    font-size: 40px;
  }

  .right-icon {
    display: flex;
    align-items: center;
    justify-self: end;
    align-items: center;
    font-size: 34px;
  }

  @media (max-width: 768px) {
    .left-icons {
      display: flex;
      gap: 6px;
      justify-self: start;
      align-items: center;
      font-size: 32px;
    }

    .right-icon {
      display: flex;
      align-items: center;
      justify-self: end;
      align-items: center;
      font-size: 26px;
    }
  }
`;

export const Logo = styled.img`
  height: 70px;
  width: auto;
  justify-self: center;
  user-select: none;
  -webkit-touch-callout: none;

  filter: 
    drop-shadow(0 0 2px white)
    drop-shadow(0 0 2px white)
    drop-shadow(0 0 2px white);

  @media (max-width: 768px) {
    height: 60px;
  }
`;
