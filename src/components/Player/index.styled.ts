import styled from "styled-components";
import "@fontsource-variable/nunito-sans";
import { IoPauseCircle, IoPlayCircle } from "react-icons/io5";

export const ProgressBackground = styled.div`
  position: relative;

  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.gray};
  border-radius: 2px;

  margin-top: 5%;
`;

export const Progress = styled.div<{ value: number }>`
  width: ${({ value }) => value * 6.25}%;
  height: 20px;

  align-self: flex-start;

  background-color: ${({ theme }) => theme.green};

  border-radius: 2px;

  transition: width 0.5s;
`;

export const Separator = styled.div`
  position: absolute;
  top: 0;

  width: 0.8px;
  height: 100%;

  background-color: ${({ theme }) => theme.border100};
`;

export const TimeStamps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-shadow: #000000 1px 0 10px;

  width: 100%;
`;

export const TimeStamp = styled.p`
  font-family: "Nunito Sans Variable";
  color: ${({ theme }) => theme.text};
`;

export const StyledYouTube = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensures it's behind other content */
`;

export const Overlay = styled.div`
  position: relative;
  z-index: 1; /* Keeps it in front of the YouTube player */
  /* Add your overlay styling here */
`;

export const PlayIcon = styled(IoPlayCircle)`
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;

  &:hover {
    transform: scale(1.08);
    opacity: 0.8;
  }
`;

export const PauseIcon = styled(IoPauseCircle)`
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;

  &:hover {
    transform: scale(1.08);
    opacity: 0.8;
  }
`;