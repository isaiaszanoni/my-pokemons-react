import { ReactElement, useState } from "react";
import { IFooterProps } from "./types";
import Button from "../button";

import { Container } from "./styles";

const Footer = (props: IFooterProps): ReactElement => {
  

  return (
    <Container>
      <Button onClick={props.changeTheme} maxWidth={100} title={props.buttonName}></Button>
    </Container>
  )
}

export default Footer