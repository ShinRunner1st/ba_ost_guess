import styled from "styled-components";
import "@fontsource-variable/nunito-sans";
import { IoPauseCircle, IoPlayCircle } from "react-icons/io5";

export const ProgressBackground = styled.div`
  position: relative;
  width: 100%;
  height: 18px;

  background-color: ${({ theme }) => theme.gray};
  border-radius: 6px;

  margin-top: 12px;
  overflow: hidden;
`;

export const Progress = styled.div<{ value: number }>`
  width: ${({ value }) => Math.min(value * 6.25, 100)}%;
  height: 100%;

  background-color: ${({ theme }) => theme.green};

  transition: width 0.5s ease;
`;

export const Separator = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 1px;

  background-color: ${({ theme }) => theme.border100};
`;

export const TimeStamps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 6px;

  text-shadow: #000000 1px 0 10px;
`;

export const TimeStamp = styled.p`
  font-family: "Nunito Sans Variable";
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
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

export const PlayButtonWrapper = styled.div`
  width: 60px;
  height: 60px;

  min-width: 20px;   /* ✅ Prevents flex collapse */
  min-height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;    /* ✅ CRITICAL: Stops resize collapsing */
`;

export const PlayIcon = styled(IoPlayCircle)`
  width: 100%;
  height: 100%;

  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
  will-change: transform;

  &:hover {
    transform: scale(1.08);
    opacity: 0.8;
  }
`;

export const PauseIcon = styled(IoPauseCircle)`
  width: 100%;
  height: 100%;

  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
  will-change: transform;

  &:hover {
    transform: scale(1.08);
    opacity: 0.8;
  }
`;

export const ProgressWrapper = styled.div`
  flex: 1;                 /* ✅ Takes remaining horizontal space */
  min-width: 100%;        /* ✅ Prevents collapse on resize */

  display: flex;
  align-items: center;

  margin: 0 12px;         /* ✅ Spacing between icons */
`;
