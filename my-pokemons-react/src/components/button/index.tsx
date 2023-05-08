import { ReactElement } from "react";

import * as Styles from './styles'

import { IButtonProps } from "./types";

const Button = (props: IButtonProps): ReactElement => {
  return (
    <Styles.Container {...props}>
      {props.title}
    </Styles.Container>
  )
}

export default Button