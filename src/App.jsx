import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import HomePage from "./pages/HomePage";
import { AsideProvider } from "./components/AsideContext";
import BottomNav from "./components/BottomNav";

const App = () => {
  const [appTheme, setAppTheme] = useState(null);
  const [isAsideCollapsed, setIsAsideCollapsed] = useState(false);

  const handleDarkToggle = () => {
    if (appTheme === "dark") {
      document.querySelector("html").classList.add("dark");
      setAppTheme("light");
    } else {
      document.querySelector("html").classList.remove("dark");
      setAppTheme("dark");
    }
    localStorage.setItem("theme", appTheme);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setAppTheme(theme);
    if (!theme) {
      if (window.matchMedia("prefers-color-scheme: dark").matches) {
        document.querySelector("html").classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.querySelector("html").classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } else {
      if (theme === "dark") {
        document.querySelector("html").classList.add("dark");
      } else {
        document.querySelector("html").classList.remove("dark");
      }
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
