import React, { ReactElement, useState } from "react"
import * as Styles from './styles'
import { IInputProps } from "./types"

const Input = (props: IInputProps): ReactElement => {
  const [inputValue, setInputValue] = useState('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event?.target.value)
  }

  return (
    <Styles.Container>
      <label>{props?.label}</label>
      <Styles.Input type="text" placeholder={props.name} maxWidth={380} value={inputValue} onChange={handleInputChange}/>
    </Styles.Container>
  )
}

export default Input