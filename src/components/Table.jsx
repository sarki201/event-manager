import React, { useState } from "react";
import MaxWidthWrapper from "./utilities/MaxWidthWrapper";
import {
  ChevronLeftIcon,
  DotsVerticalIcon,
  DownloadIcon,
  SearchIcon,
} from "../assets/Icons";

const tableData = [
  {
    eventName: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
  },
  {
    eventName: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
  },
];

const TableRow = ({ eventName, date, speaker, status }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowDetails(!showDetails)}
        className="py-3 w-full grid grid-cols-[1fr,99px] lg:grid-cols-4"
      >
        <div className="text-[14px] leading-5 text-[#334155] dark:text-[white] font-normal flex items-center px-4">
          <ChevronLeftIcon
            className={`mr-4 lg:hidden shrink-0 ${
              showDetails ? "rotate-90" : undefined
            }`}
          />{" "}
          {eventName}
        </div>
        <div className="hidden text-[14px] leading-5 text-[#334155] dark:text-[white] font-normal lg:flex items-center px-4">
          {date}
        </div>
        <div className="hidden text-[14px] leading-5 text-[#334155] dark:text-[white] font-normal lg:flex items-center px-4">
          {speaker}
        </div>
        <div className="flex items-center lg:px-4">
          <div
            className={`h-6 ${
              status === "Completed"
                ? "bg-[#10B981] lg:bg-[#D1FAE5]"
                : "bg-[#3B82F6] lg:bg-[#DBEAFE]"
            }  rounded-full flex items-center px-3 gap-2`}
          >
            <div
              className={`hidden lg:block w-[6px] h-[6px] rounded-full ${
                status === "Completed" ? "bg-[#10B981]" : "bg-[#3B82F6]"
              }`}
            ></div>
            <span
              className={`text-[white] ${
                status === "Completed"
                  ? "lg:text-[#10B981]"
                  : "lg:text-[#3B82F6]"
              } text-[12px] leading-4`}
            >
              {status}
            </span>
          </div>
        </div>
      </div>
      {showDetails && (
        <div className="w-full py-4 px-6 text-[#334155] dark:text-[white] text-[14px] leading-5 flex lg:hidden items-center justify-between gap-2 bg-gray6">
          <span>{speaker}</span>
          <span>{date}</span>
        </div>
      )}
    </>
  );
};

const Table = () => {
  return (
    <section>
      <MaxWidthWrapper>
        <h3 className="text-[18px] leading-3 font-medium mb-2 dark:text-[white]">
          Event History
        </h3>
        <div className="mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="w-full lg:w-auto flex items-center gap-2 p-2 h-9 border border-solid border-[#E2E8F0] rounded-[2px]">
              <SearchIcon />
              <input type="text" placeholder="Search..." className="" />
            </div>
            <button className="w-full lg:w-auto flex items-center gap-2 p-2 h-9 border border-solid border-[#E2E8F0] rounded-[2px]">
              <span className="text-[14px] leading-5 text-[#334155] dark:text-[white]">
                Date
              </span>
              <ChevronLeftIcon className="rotate-90" />
            </button>
            <button className="w-full lg:w-auto flex items-center gap-2 p-2 h-9 border border-solid border-[#E2E8F0] rounded-[2px]">
              <span className="text-[14px] leading-5 text-[#334155] dark:text-[white]">
                Status
              </span>
              <ChevronLeftIcon className="rotate-90" />
            </button>
            <button className="w-full lg:w-auto flex items-center gap-2 p-2 h-9 border border-solid border-[#E2E8F0] rounded-[2px]">
              <span className="text-[14px] leading-5 text-[#334155] dark:text-[white]">
                Name
              </span>
              <ChevronLeftIcon className="rotate-90" />
            </button>
            <p className="w-full lg:w-auto flex items-center lg:p-2 text-[14px] leading-5 text-[#334155] font-semibold dark:text-[white]">
              Displaying 100 results
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="w-full lg:w-auto flex items-center justify-between gap-2 h-9 text-[14px] text-[#334155] leading-5 dark:text-[white]">
              <span className="">Sort:</span>
              <button className="flex items-center border border-solid border-[#E2E8F0] px-2 h-9 gap-2 rounded-[2px]">
                <span>Most Recent</span>
                <ChevronLeftIcon className="rotate-90" />
              </button>
            </div>
            <div className="w-full lg:w-auto flex items-center justify-between gap-2 text-[14px] leading-5 text-[#334155] dark:text-[white]">
              <button className="flex items-center border border-solid border-[#E2E8F0] p-2 gap-2 rounded-[2px]">
                <DotsVerticalIcon className="" />
              </button>
              <button className="flex items-center border border-solid border-[#E2E8F0] p-2 gap-2 rounded-[2px]">
                <DownloadIcon className="" />
                <span>export</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="h-12 bg-[#F1F5F9] w-full grid grid-cols-[1fr,99px] lg:grid-cols-4">
            <div className="text-[12px] leading-4 text-[#64748B] dark:text-[white] font-semibold flex items-center px-4">
              Event Name
            </div>
            <div className="text-[12px] leading-4 text-[#64748B] dark:text-[white] font-semibold hidden lg:flex items-center px-4">
              Date
            </div>
            <div className="text-[12px] leading-4 text-[#64748B] dark:text-[white] font-semibold hidden lg:flex items-center px-4">
              Speaker
            </div>
            <div className="text-[12px] leading-4 text-[#64748B] dark:text-[white] font-semibold flex items-center px-4">
              Status
            </div>
          </div>
          {tableData.map((entry, index) => {
            return (
              <TableRow
                key={index}
                eventName={entry.eventName}
                date={entry.date}
                speaker={entry.speaker}
                status={entry.status}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-4">
            <button className="p-2 bg-[#E2E8F0] rounded-[2px]">
              <ChevronLeftIcon className="rotate-180" />
            </button>
            <button className="rounded-full w-6 h-6 flex items-center justify-center text-[14px] leading-5 bg-primary text-[white]">
              1
            </button>
            <button className="rounded-full w-6 h-6 flex items-center justify-center text-[14px] leading-5 text-[#334155]">
              2
            </button>
            <button className="rounded-full w-6 h-6 flex items-center justify-center text-[14px] leading-5 text-[#334155]">
              3
            </button>
            <button className="p-2 border border-solid border-[#E2E8F0] rounded-[2px]">
              <ChevronLeftIcon className="" />
            </button>
          </div>
          <div className="flex items-center gap-2 text-[14px] text-[#334155] leading-5 dark:text-[white]">
            <span className="hidden lg:block">Show:</span>
            <button className="flex items-center border border-solid border-[#E2E8F0] p-2 gap-2 rounded-[2px]">
              <span>10 Rows</span>
              <ChevronLeftIcon className="rotate-90" />
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Table;
