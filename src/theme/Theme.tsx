// theme/Theme.ts
import { useAppDispatch } from "../Redux/Hooks/hooks";
import { setDarkTheme, setLightTheme } from "../Redux/Slices/ThemeSlice/ThemeSlice";
import { useEffect } from "react";

export const useToggleTheme = () => {
  const dispatch = useAppDispatch();

  const toggle = () => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);

    next === "dark" ? dispatch(setDarkTheme()) : dispatch(setLightTheme());
  };

  // Initialize theme from localStorage
  useEffect(() => {
    const html = document.documentElement;
    const saved = localStorage.getItem("theme") || "light";
    html.setAttribute("data-theme", saved);
    saved === "dark" ? dispatch(setDarkTheme()) : dispatch(setLightTheme());
  }, [dispatch]);

  return toggle;
};
