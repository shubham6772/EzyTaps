// theme.ts
export const toggleTheme = () => {
  const html = document.documentElement; // <html> element
  const currentTheme = html.getAttribute("data-theme");

  // Toggle between "light" and "dark"
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", nextTheme);

  // Optional: store preference in localStorage
  localStorage.setItem("theme", nextTheme);
};
