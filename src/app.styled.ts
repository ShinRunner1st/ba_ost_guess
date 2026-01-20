import styled from "styled-components";
import img from "./image/image.png";
import "@fontsource-variable/nunito-sans";

export const Container = styled.div`
  font-family: "Nunito Sans Variable";

  width: 40%;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: fit-content;
  margin: auto;
  padding: 20px 0;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0 0;
  }
`;

export const BG = styled.div`
  background-image: url(${img});

  position: fixed; /* Stays full-screen */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: -10;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
