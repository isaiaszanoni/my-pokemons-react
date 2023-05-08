import styled from "styled-components";
import { IButtonProps } from "./types";

export const Container = styled.button<IButtonProps>`
  display: block;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth}px;

  font-size: 1.1rem;
  background-color: ${(props) => props.theme.colors.buttonPrimary};
  padding: 5px;

  border-radius: 8px;

  :hover {
    background-color: ${(props) => props.theme.colors.buttonPrimaryLight};
  }
`;
