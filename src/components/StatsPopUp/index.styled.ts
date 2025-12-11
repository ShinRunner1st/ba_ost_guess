import styled from "styled-components";

export const Container = styled.div`
  animation: op 0.25s ease-out;

  @keyframes op {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  position: absolute;
  top: 0;
  z-index: 2;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.75);
`;

export const PopUp = styled.div`
  animation: popup 0.25s ease-out;

  @keyframes popup {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  width: 90%;
  max-width: 420px;
  padding: 20px;
  
  @media (max-width: 768px) {
    width: 90%;
    padding: 16px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 14px;
  }

  background-color: ${({ theme }) => theme.background100};

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 0;
  }
`;

export const Spacer = styled.div`
  width: 80%;
  height: 0.2px;

  margin: 16px 0;

  background-color: ${({ theme }) => theme.text};
  opacity: 0.5;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Section = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  a {
    color: ${({ theme }) => theme.text};
  }
  margin: 8px;
  font-weight: bold;

  @media (max-width: 480px) {
    gap: 6px;
    font-size: 0.9rem;
    margin: 8px;
  }
`;

export const Contact = styled.p`
  a {
    color: ${({ theme }) => theme.text};
  }
  margin: 16px;

  font-size: 0.9rem;
  font-weight: bold;
  opacity: 0.5;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Progress = styled.div<{ value: number; maxValue: number; animate: boolean;}>`
  width: ${({ animate, value, maxValue }) =>
    animate ? Math.sqrt(value / maxValue) * 80 + "%" : "0%"};
  
  height: 18px;
  align-self: flex-start;
  background-color: ${({ theme }) => theme.green};
  border-radius: 2px;

  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const BadProgress = styled(Progress)`
  background-color: ${({ theme }) => theme.red};
`;
