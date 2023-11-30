import { useContext } from "react";
import { AppContext } from "../context";

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeContextProvider");
  }
  return context;

  // return useContext(AppContext);
};
