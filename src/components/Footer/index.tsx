import React from "react";
import { IoHeart } from "react-icons/io5";

import * as Styled from "./index.styled";

export function Footer() {
  return (
    <Styled.Text>
      Made with <IoHeart /> by{" "}
        <Styled.Link href="https://github.com/ShinRunner1st/ba_ost_guess">
          ShinRunner1st
        </Styled.Link>
    </Styled.Text>
  );
}
