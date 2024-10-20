import React from "react";
import MaxWidthWrapper from "../components/utilities/MaxWidthWrapper";
import { ArrowIcon, InfoIcon } from "../assets/Icons";
import Carousel from "../components/Carousel";
import Chart from "../components/Chart";
import Table from "../components/Table";

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
      } px-5 md:pl-7 md:pr-24 mb-16 md:mb-0 pt-2 md:pt-10 transition-all duration-300`}
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
                  className="p-4 border border-solid border-[#F2F2F7] dark:border-primaryselectdark dark:bg-primaryselectdark rounded-[2px]"
                >
                  <div className="flex items-center gap-1">
                    <h3 className="text-base text-[#64748B] dark:text-[#FFF] leading-6 font-semibold">
                      {welcomeElement.text}
                    </h3>
                    <InfoIcon className="stroke-[#64748B] dark:stroke-[#FFF]" />
                  </div>
                  <div className="flex items-center gap-1">
                    <h2 className="text-[20px] leading-8 font-semibold text-[#334155] dark:text-[white]">
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
      <section className="mb-7">
        <MaxWidthWrapper>
          <h3 className="text-[18px] leading-3 font-medium mb-[14px] dark:text-[white]">
            Event Registrations per month
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] grid-rows-[1fr,1.23fr] lg:grid-rows-1 gap-2">
            <Chart />
            <Carousel />
          </div>
        </MaxWidthWrapper>
      </section>
      <Table />
    </main>
  );
};

export default HomePage;
