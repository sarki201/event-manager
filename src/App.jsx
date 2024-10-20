import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import HomePage from "./pages/HomePage";
import { AsideProvider } from "./components/AsideContext";
import BottomNav from "./components/BottomNav";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [isAsideCollapsed, setIsAsideCollapsed] = useState(false);

  return (
    <AsideProvider>
      <div>
        <Header />
        <Aside
          isAsideCollapsed={isAsideCollapsed}
          setIsAsideCollapsed={setIsAsideCollapsed}
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
