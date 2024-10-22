import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import HomePage from "./pages/HomePage";
import { AsideProvider } from "./components/AsideContext";
import BottomNav from "./components/BottomNav";

const App = () => {
  const [isAsideCollapsed, setIsAsideCollapsed] = useState(false);
  const [appTheme, setAppTheme] = useState(null);

  const handleDarkToggle = () => {
    const newTheme = appTheme === "dark" ? "light" : "dark";
    document
      .querySelector("html")
      .classList.toggle("dark", newTheme === "dark");
    setAppTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      setAppTheme(theme);
      document.querySelector("html").classList.toggle("dark", theme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      document.querySelector("html").classList.toggle("dark", prefersDark);
      setAppTheme(defaultTheme);
      localStorage.setItem("theme", defaultTheme);
    }
  }, []);

  return (
    <AsideProvider>
      <div>
        <Header />
        <Aside
          isAsideCollapsed={isAsideCollapsed}
          setIsAsideCollapsed={setIsAsideCollapsed}
          handleDarkToggle={handleDarkToggle}
        />
        <HomePage
          isAsideCollapsed={isAsideCollapsed}
          setIsAsideCollapsed={setIsAsideCollapsed}
        />
        <BottomNav />
      </div>
    </AsideProvider>
  );
};

export default App;
