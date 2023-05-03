import { useState } from "react";

export const useChangeTheme = () => {
  const [theme, setTheme] = useState<string>('dark')

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return [theme, toggleTheme] as const
}