import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import HomePage from "./pages/HomePage";
import { AsideProvider } from "./components/AsideContext";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [isAsideCollapsed, setIsAsideCollpased] = useState(false);

  return (
    <AsideProvider>
      <div>
        <Header />
        <Aside
          isAsideCollapsed={isAsideCollapsed}
          setIsAsideCollpased={setIsAsideCollpased}
        />
        <HomePage
          isAsideCollapsed={isAsideCollapsed}
          setIsAsideCollpased={setIsAsideCollpased}
        />
        <footer></footer>
      </div>
    </AsideProvider>
  );
};

export default App;
