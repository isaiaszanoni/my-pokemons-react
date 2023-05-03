import { ReactNode, createContext } from "react";

interface IThemeContext {
  theme: string;
}

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as IThemeContext);

export function ThemeProvider({ children }: ThemeProviderProps) {}

export default ThemeContext;
