import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  maxWidth?: number;
}

export interface IInputStylesProps {
  theme?: string;
  maxWidth?: number;
}
