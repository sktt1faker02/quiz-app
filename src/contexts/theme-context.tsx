import React, { createContext, useState, useContext, useEffect } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type Theme = "dark" | "light";

type ThemeContext = {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  handleThemeSwitch: () => void;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  // const [theme, setTheme] = useState<Theme>("light");

  const [theme, setTheme] = useState<Theme>("light");
  // const [quizData, setQuizData] = useState<>

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        handleThemeSwitch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeContextProvider");
  }
  return context;
}
