import React, { useEffect, useState } from "react";
import {
  HomeIcon,
  CalenderIcon,
  SpeakerIcon,
  ReportsIcon,
  BellIcon,
  ChatBubbleIcon,
  DoubleChevronLeftIcon,
  SettingsIcon,
  EventIcon,
  ReceivingMoneyIcon,
  CalenderIcon2,
} from "../assets/Icons";
import avatar from "../assets/icons/avatar.svg";
import { useAside, useAsideToggle } from "./AsideContext";

const navElements = [
  {
    name: "Home",
    link: "/",
    isActive: true,
    icon: <HomeIcon />,
  },
  {
    name: "Events",
    link: "/",
    isActive: false,
    icon: <CalenderIcon />,
    icon2: <EventIcon />,
  },
  {
    name: "Speakers",
    link: "/",
    isActive: false,
    icon: <SpeakerIcon />,
    icon2: <ReceivingMoneyIcon />,
  },
  {
    name: "Reports",
    link: "/",
    isActive: false,
    icon: <ReportsIcon />,
    icon2: <CalenderIcon2 />,
  },
];

const navElements2 = [
  {
    name: "Notifications",
    link: "/",
    isActive: false,
    icon: <BellIcon />,
    notification: 3,
  },
  {
    name: "Messages",
    link: "/",
    isActive: false,
    icon: <ChatBubbleIcon />,
  },
  {
    name: "Settings",
    link: "/",
    isActive: false,
    icon: <SettingsIcon />,
  },
];
const NavElementComponent = ({
  name,
  link,
  isActive,
  icon,
  icon2,
  index,
  notification,
  isNavElCollapsed,
}) => {
  return (
    <li className={navElements.length - index !== 1 ? "mb-2" : undefined}>
      <a
        href={link}
        className={`flex items-center relative gap-4 p-2 dark:text-select dark:rounded-sm h-9 ${
          isNavElCollapsed && "justify-center"
        } ${
          isActive
            ? "text-primary bg-select dark:bg-primary dark:stroke-select stroke-primary"
            : "text-[#334155] stroke-primaryselect hover:bg-select hover:dark:stroke-[#FFF] hover:dark:bg-primary hover:dark:text-[#FFF]"
        }    `}
      >
        {icon2 && isNavElCollapsed ? icon2 : icon}
        {!isNavElCollapsed && <span className="text-sm">{name}</span>}

        {notification && !isNavElCollapsed && (
          <div className="w-6 h-6 absolute right-2 top-[50%] translate-y-[-50%] rounded-full bg-[#F43F5E] text-[12px] text-[#FFF] flex items-center justify-center">
            {notification}
          </div>
        )}
        {notification && isNavElCollapsed && (
          <div className=" absolute w-1.5 h-1.5 rounded-full bg-[#F43F5E] top-2 right-3"></div>
        )}
      </a>
    </li>
  );
};

const Aside = ({ isAsideCollapsed, setIsAsideCollapsed, handleDarkToggle }) => {
  const asideOpen = useAside();
  const [isNavElCollapsed, setIsNavElCollapsed] = useState(false);

  const handleResize = () => {
    const currentWidth = window.innerWidth;
    if (currentWidth < 768) {
      setIsAsideCollapsed(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isAsideCollapsed) {
      setTimeout(() => {
        setIsNavElCollapsed(isAsideCollapsed);
      }, [150]);
    } else {
      setTimeout(() => {
        setIsNavElCollapsed(isAsideCollapsed);
      }, [50]);
    }
  }, [isAsideCollapsed]);
  return (
    <aside
      className={`md:block fixed top-[64px] ${
        asideOpen ? "left-[-100%]" : "left-0"
      } md:left-0 md:top-0 bottom-0 transition-all duration-300 ease w-full z-10 ${
        isAsideCollapsed ? "md:w-[64px]" : "md:w-[240px]"
      }  bg-[white] dark:bg-primarydark p-2 border-t-0 border-l-0 border-b-0 border-r-0 md:border-r border border-[#F1F5F9] dark:border-primarydark`}
    >
      <div className="hidden md:block p-2 mb-4">
        <div
          className={`${
            isAsideCollapsed ? "w-[32px]" : "w-[64px]"
          } h-[32px] transition-all duration-200 ease text-[#2563EB] text-[12px] border-[#2563EB] border-dashed border bg-[#93C5FD] font-semibold flex items-center justify-center`}
        >
          {isNavElCollapsed ? "L" : "Full Logo"}
        </div>
      </div>
      <ul className="mx-2.5 md:mx-0 mb-2 pt-2">
        {navElements.map((navElement, index) => {
          return (
            <NavElementComponent
              name={navElement.name}
              link={navElement.link}
              isActive={navElement.isActive}
              key={index}
              index={index}
              icon={navElement.icon}
              isNavElCollapsed={isNavElCollapsed}
              icon2={navElement.icon2}
            />
          );
        })}
      </ul>
      <ul className="mx-2.5 md:mx-0 pb-2">
        {navElements2.map((navElement, index) => {
          return (
            <NavElementComponent
              name={navElement.name}
              link={navElement.link}
              isActive={navElement.isActive}
              key={index}
              icon={navElement.icon}
              notification={navElement.notification}
              isNavElCollapsed={isNavElCollapsed}
            />
          );
        })}
        <li className="hidden md:block mb-2">
          <button
            onClick={() => setIsAsideCollapsed(!isAsideCollapsed)}
            className={`flex items-center gap-4 p-2 w-full dark:text-select dark:rounded-sm transition-all duration-300 stroke-[#64748B] dark:stroke-[#FFF] text-[#334155] hover:stroke-primary hover:text-primary hover:bg-select hover:dark:stroke-[#FFF] hover:dark:bg-primary hover:dark:text-[#FFF] ${
              isNavElCollapsed && "justify-center"
            }`}
          >
            <DoubleChevronLeftIcon
              className={`transition-all 300ms ease ${
                isAsideCollapsed && "rotate-180"
              }`}
            />
            {!isNavElCollapsed && <span className="text-sm">Collapse</span>}
          </button>
        </li>
        {!isNavElCollapsed && (
          <li className="mb-2">
            <button
              onClick={handleDarkToggle}
              className={`flex items-center gap-2 px-1 h-4 w-full ${
                isNavElCollapsed && "justify-center"
              }`}
            >
              <div className="h-4 w-6 p-[2px] rounded-full bg-[#E2E8F0] dark:bg-primary transition-all duration-300 ease-out">
                <div className="relative w-3 h-3 rounded-full bg-[#FFF] transition-all duration-300 ease-out dark:translate-x-2"></div>
              </div>
              {!isNavElCollapsed && (
                <span className="text-[#334155] dark:text-[#FFF] text-[12px]">
                  Dark Mode
                </span>
              )}
            </button>
          </li>
        )}

        <li className="">
          <a
            href=""
            className={`flex items-center gap-2 p-2 h-12 ${
              isNavElCollapsed && "justify-center"
            }`}
          >
            <img src={avatar} alt="" className="w-8 h-8" />
            {!isNavElCollapsed && (
              <div>
                <p className="text-[#334155] dark:text-[#FFF] font-normal text-sm">
                  Rudra Devi
                </p>
                <p className="text-[#64748B] dark:text-[#FFF] font-normal text-sm">
                  rudra.devi@gmail.com
                </p>
              </div>
            )}
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
