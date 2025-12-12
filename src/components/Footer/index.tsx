import React from "react";
import { IoHeart, IoLogoGithub } from "react-icons/io5";

import * as Styled from "./index.styled";

export function Footer() {
  return (
    <Styled.Text>
      Made with <IoHeart /> by{" "}
        <Styled.Link tabIndex={-1} href="https://github.com/ShinRunner1st/ba_ost_guess">
          <IoLogoGithub />ShinRunner1st
        </Styled.Link>
    </Styled.Text>
  );
}
