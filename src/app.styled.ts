import styled from "styled-components";
import "@fontsource/noto-sans";
import img from "./image/image.png";

export const Container = styled.div`
  font-family: "Noto Sans";
  width: 40%;
  height: 78vh;

  @media (max-width: 768px) {
    width: 90%;
  }

  max-width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
`;

export const BG = styled.div`
  background-image: url(${img});
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
`;
