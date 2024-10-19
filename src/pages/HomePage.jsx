import React from "react";
import MaxWidthWrapper from "../components/utilities/MaxWidthWrapper";
import { ArrowIcon, InfoIcon } from "../assets/Icons";

const welcomeElements = [
  {
    text: "Total Events",
    numbers: "100,000",
    isUp: true,
    rate: "5.0",
  },
  {
    text: "Active Speakers",
    numbers: "25",
    isUp: false,
    rate: "5.0",
  },
  {
    text: "Total Registrations",
    numbers: "30",
    isUp: true,
    rate: "5.0",
  },
  {
    text: "Total Revenue",
    numbers: "$500,000",
    isUp: true,
    rate: "5.0",
  },
];

const HomePage = ({ isAsideCollapsed, setIsAsideCollapsed }) => {
  return (
    <main
      className={`${
        isAsideCollapsed ? "md:ml-[64px]" : "md:ml-[240px]"
      } px-5 md:pl-7 md:pr-24 pt-2 md:pt-10 transition-all duration-300`}
    >
      <section className="mb-[34px]">
        <MaxWidthWrapper>
          <h2 className="text-[black] font-normal text-[17px] md:text-[22px] lg:leading-5 dark:text-[#FFF] mb-6">
            Welcome! here's your summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {welcomeElements.map((welcomeElement, index) => {
              return (
                <div
                  key={index}
                  className="p-4 border border-solid border-[#F2F2F7] dark:border-primaryselectdark dark:bg-primaryselectdark"
                >
                  <div className="flex items-center gap-1">
                    <h3 className="text-base text-[#64748B] dark:text-[#FFF] leading-6 font-semibold">
                      {welcomeElement.text}
                    </h3>
                    <InfoIcon className="stroke-[#64748B] dark:stroke-[#FFF]" />
                  </div>
                  <div className="flex items-center gap-1">
                    <h2 className="text-[20px] leading-8 font-semibold text-[#334155] dark:text-[#FFF]">
                      {welcomeElement.numbers}
                    </h2>
                    <ArrowIcon
                      className={
                        welcomeElement.isUp
                          ? "stroke-[#10B981]"
                          : "stroke-[#F43F5E] rotate-90"
                      }
                    />
                    <h6
                      className={`text-[10px] ${
                        welcomeElement.isUp
                          ? "text-[#10B981]"
                          : "text-[#F43F5E]"
                      }  font-semibold leading-3`}
                    >
                      +{welcomeElement.rate}%
                    </h6>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <h3 className="text-[18px] leading-3 font-medium mb-[14px] dark:text-[white]">
            Event Registrations per month
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="border border-solid border-gray6"></div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
    </main>
  );
};

export default HomePage;
