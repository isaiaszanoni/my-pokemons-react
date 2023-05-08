import styled from "styled-components";
import { IInputStylesProps } from "./types";
import { colors } from "../../styles/settings/theme";

export const Container = styled.div<IInputStylesProps>`
  width: 100%;
`;

export const Input = styled.input<IInputStylesProps>`
  max-width: ${({ maxWidth }) => maxWidth}px;
  width: 80%;
  height: 4vh;
  font-size: 1.2rem;
  text-align: center;
  color: ${colors.colors.black};
  padding: 5px;

  border: none;
  border-radius: 8px;
`;
