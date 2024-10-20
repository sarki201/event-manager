import React from "react";
import { CloseBtnIcon, HamburgerMenuIcon } from "../assets/Icons";
import { useAside, useAsideToggle } from "./AsideContext";

const Header = () => {
  const asideOpen = useAside();
  const toggleAside = useAsideToggle();
  return (
    <header className="md:hidden sticky top-0 inset-x-0 z-10 p-4 flex items-center justify-between bg-[white] dark:bg-primaryselectdark border-t-0 border-r-0 border-l-0 border-b border-solid border-[#E2E8F0] dark:border-primarydark">
      <div className="w-[64px] h-[32px] text-[#2563EB] text-[12px] border-[#2563EB] border-dashed border bg-[#93C5FD] font-semibold flex items-center justify-center">
        Full Logo
      </div>
      <button onClick={toggleAside}>
        {asideOpen ? (
          <HamburgerMenuIcon className="stroke-[#64748B] dark:stroke-[#FCF7FF]" />
        ) : (
          <CloseBtnIcon />
        )}
      </button>
    </header>
  );
};

export default Header;
