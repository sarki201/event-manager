import React, { useEffect, useState } from "react";
import Aside from "./components/Aside";

const App = () => {
  const [theme, setTheme] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  });
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <header></header>
      <Aside />
      <main></main>
      <footer></footer>
    </div>
  );
};

export default App;
