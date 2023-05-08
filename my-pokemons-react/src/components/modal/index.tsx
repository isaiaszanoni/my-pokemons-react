import { ReactElement, useState } from "react";
import { Container } from "./styles";
import { IModalProps } from "./types";
import Button from "../button";
import useModal from "../../hooks/useModal";

const Modal = (props: IModalProps ): ReactElement => {

  return (
    <Container>
      {props.isOpen && (
      <div className="modal-overlay" onClick={() => {props.toggle()}}>
        {/* <button onClick={() => {props.toggle()}}>close</button> */}
        <div className="modal-area">
          {props.children}
        </div>
      </div>
      )}
    </Container>
  )
}

export default Modal