import React from "react";
import MaxWidthWrapper from "./utilities/MaxWidthWrapper";
import {
  CalenderIcon,
  HomeIcon,
  ReportsIcon,
  SpeakerIcon,
  UserCircleIcon,
} from "../assets/Icons";

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
  },
  {
    name: "Speakers",
    link: "/",
    isActive: false,
    icon: <SpeakerIcon />,
  },
  {
    name: "Reports",
    link: "/",
    isActive: false,
    icon: <ReportsIcon />,
  },
  {
    name: "Profile",
    link: "/",
    isActive: false,
    icon: <UserCircleIcon />,
  },
];

const NavElementComponent = ({ name, link, isActive, icon }) => {
  return (
    <li className="">
      <a
        href={link}
        className={`${
          isActive ? "stroke-[#64748B]" : "stroke-primarydark"
        } h-full flex flex-col gap-2 items-center justify-between`}
      >
        <div
          className={`w-full h-1 ${
            isActive ? "bg-primary" : "bg-[transparent]"
          }`}
        ></div>
        {icon}
        <span
          className={`text-[14px] leading-5 ${
            isActive ? "text-primary" : "text-[#64748B] dark:text-[white]"
          }  `}
        >
          {name}
        </span>
      </a>
    </li>
  );
};

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 md:hidden z-[2] border-t border-r-0 border-l-0 border-b-0 bg-[white] border-[#F3F4F6] h-16 px-5">
      <ul className="flex justify-between gap-2 h-full">
        {navElements.map((navElement, index) => {
          return (
            <NavElementComponent
              key={index}
              name={navElement.name}
              link={navElement.link}
              isActive={navElement.isActive}
              icon={navElement.icon}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default BottomNav;
