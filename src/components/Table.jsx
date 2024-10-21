import React, { useState } from "react";
import MaxWidthWrapper from "./utilities/MaxWidthWrapper";
import {
  ChevronLeftIcon,
  CloseBtnIcon,
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
  {
    eventName: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
  },
  {
    eventName: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: "John Lee",
    status: "Completed",
  },
  {
    eventName: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: "Reacheal Moore",
    status: "Completed",
  },
  {
    eventName: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: "Prof. Alan Green",
    status: "Completed",
  },
  {
    eventName: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: "Kevin Adams",
    status: "In Progress",
  },
  {
    eventName: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: "Emily Zhang",
    status: "Completed",
  },
  {
    eventName: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "In Progress",
  },
  {
    eventName: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Guest Panel",
    status: "In Progress",
  },
];

const Modal = ({ eventName, date, setModal, speaker }) => {
  return (
    <div className="w-[335px] md:w-[440px] fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[101] bg-[white]">
      <div className="pt-6 px-6 flex items-start justify-between">
        <div>
          <h3 className="text-[#334155] text-[18px] leading-7 font-semibold">
            {eventName}
          </h3>
          <h4 className="text-[#64748B] text-[14px] leading-5">{date}</h4>
        </div>
        <button onClick={() => setModal(false)}>
          <CloseBtnIcon />
        </button>
      </div>
      <p className="p-6 text-[#334155] text-[14px] leading-5">
        Event Description
      </p>
      <div className="p-6">
        <img className="w-20 h-8 mb-4" src="/avatar-group.png" alt="" />
        <p className="text-[#334155] text-[14px] leading-5">
          3 Guest Speakers: {speaker}, Speaker name B, Speaker name C. 300
          Attendees
        </p>
        <p className="text-[#334155] text-[14px] leading-5">300 Attendees</p>
      </div>
      <div className="p-6 bg-[#F8FAFC] flex items-center flex-wrap md:flex-nowrap gap-2">
        <button className="w-full md:w-auto rounded-[2px] border-[#E2E8F0] border-solid border text-[#334155] text-[14px] leading-5 px-4 mr-auto flex items-center justify-center md:justify-start h-9">
          Edit
        </button>
        <button className="w-full md:w-auto rounded-[2px] bg-[#F43F5E] text-[white] text-[14px] leading-5 px-4 flex items-center justify-center md:justify-start h-9">
          Delete
        </button>
        <button className="w-full md:w-auto rounded-[2px] bg-primary text-[white] text-[14px] leading-5 px-4 flex items-center justify-center md:justify-start h-9">
          Mark as completed
        </button>
      </div>
    </div>
  );
};

const TableRow = ({ eventName, date, speaker, status }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      <div
        className={`py-2.5 lg:py-3 w-full grid grid-cols-[1fr,99px] lg:grid-cols-4 ${
          showDetails ? "bg-gray6 dark:bg-[#514E5D]" : "dark:bg-primarydark"
        }`}
      >
        <div className="text-[14px] leading-5 text-[#334155] dark:text-[white] font-normal flex items-center px-4">
          <button onClick={() => setShowDetails(!showDetails)}>
            <ChevronLeftIcon
              className={`mr-4 lg:hidden shrink-0 stroke-[#334155] dark:stroke-[white] ${
                showDetails ? "rotate-90" : undefined
              }`}
            />
          </button>
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
            onClick={() => setModal(true)}
            className={`h-5 lg:h-6 ${
              status === "Completed"
                ? "bg-[#10B981] lg:bg-[#D1FAE5] lg:dark:border-[#10B981]"
                : "bg-[#3B82F6] lg:bg-[#DBEAFE] lg:dark:border-[#3B82F6]"
            } lg:dark:bg-[transparent] dark:lg:border dark:lg:border-solid rounded-full flex items-center px-3 gap-2 cursor-pointer`}
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
        {modal && (
          <Modal
            eventName={eventName}
            date={date}
            speaker={speaker}
            setModal={setModal}
          />
        )}
      </div>

      <div
        onClick={() => setModal(false)}
        className={`fixed inset-x-0 inset-y-0 z-[100] ${
          modal
            ? "bg-[rgba(0,0,0,0.3)] pointer-events-auto"
            : "pointer-events-none"
        } `}
      ></div>
      {showDetails && (
        <div className="w-full py-4 px-6 text-[#334155] dark:text-[white] text-[14px] leading-5 flex lg:hidden items-center justify-between gap-2 bg-select dark:bg-[#383544]">
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
        <h3 className="px-5 lg:px-0 text-[18px] leading-3 font-medium mb-2 dark:text-[white]">
          Event History
        </h3>
        <div className="px-5 lg:px-0 mb-4 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap w-full lg:w-auto">
            <div className="w-full lg:w-auto flex items-center gap-2 p-2 h-9 border border-solid border-[#E2E8F0] dark:border-primarydark dark:bg-primarydark rounded-[2px]">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search..."
                className="bg-[transparent] outline-0 dark:text-[white]"
              />
            </div>
            <button className="w-full lg:w-auto flex items-center justify-center lg:justify-start gap-2 p-2 h-9 border border-solid border-[#E2E8F0] dark:border-primarydark dark:bg-primarydark rounded-[2px]">
              <span className="text-[14px] leading-5 text-[#334155] dark:text-[white]">
                Date
              </span>
              <ChevronLeftIcon className="rotate-90 stroke-[#334155] dark:stroke-[white]" />
            </button>
            <button className="w-full lg:w-auto flex items-center justify-center lg:justify-start gap-2 p-2 h-9 border border-solid border-[#E2E8F0] dark:border-primarydark dark:bg-primarydark rounded-[2px]">
              <span className="text-[14px] leading-5 text-[#334155] dark:text-[white]">
                Status
              </span>
              <ChevronLeftIcon className="rotate-90 stroke-[#334155] dark:stroke-[white]" />
            </button>
            <button className="w-full lg:w-auto flex items-center justify-center lg:justify-start gap-2 p-2 h-9 border border-solid border-[#E2E8F0] dark:border-primarydark dark:bg-primarydark rounded-[2px]">
              <span className="text-[14px] leading-5 text-[#334155] dark:text-[white]">
                Name
              </span>
              <ChevronLeftIcon className="rotate-90 stroke-[#334155] dark:stroke-[white]" />
            </button>
            <p className="w-full lg:w-auto flex items-center lg:p-2 text-[14px] leading-5 text-[#334155] font-semibold dark:text-[white]">
              Displaying 100 results
            </p>
          </div>
          <div className="w-full lg:w-auto flex items-center gap-2 flex-wrap">
            <div className="w-full lg:w-auto flex items-center justify-between gap-2 h-9 text-[14px] text-[#334155] leading-5 dark:text-[white]">
              <span className="">Sort:</span>
              <button className="flex items-center border border-solid border-[#E2E8F0] dark:border-primarydark dark:bg-primarydark px-2 h-9 gap-2 rounded-[2px]">
                <span>Most Recent</span>
                <ChevronLeftIcon className="rotate-90 stroke-[#334155] dark:stroke-[white]" />
              </button>
            </div>
            <div className="w-full lg:w-auto flex items-center justify-between gap-2 text-[14px] leading-5 text-[#334155] dark:text-[white]">
              <button className="flex items-center border border-solid border-[#E2E8F0] dark:border-primarydark dark:bg-primarydark p-2 gap-2 rounded-[2px]">
                <DotsVerticalIcon className="stroke-[#141414] dark:stroke-[white]" />
              </button>
              <button className="flex items-center border border-solid border-[#E2E8F0] dark:border-primarydark dark:bg-primarydark p-2 gap-2 rounded-[2px]">
                <DownloadIcon className="stroke-[#141414] dark:stroke-[white]" />
                <span>export</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="h-12 bg-[#F1F5F9] dark:bg-primaryselectdark w-full grid grid-cols-[1fr,99px] lg:grid-cols-4">
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
        <div className="px-5 lg:px-0 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-4">
            <button className="p-2 bg-[#E2E8F0] dark:bg-primarydark rounded-[2px]">
              <ChevronLeftIcon className="rotate-180 stroke-[#334155] dark:stroke-[white]" />
            </button>
            <button className="rounded-full w-6 h-6 flex items-center justify-center text-[14px] leading-5 bg-primary text-[white]">
              1
            </button>
            <button className="rounded-full w-6 h-6 flex items-center justify-center text-[14px] leading-5 text-[#334155] dark:text-[white]">
              2
            </button>
            <button className="rounded-full w-6 h-6 flex items-center justify-center text-[14px] leading-5 text-[#334155] dark:text-[white]">
              3
            </button>
            <button className="p-2 border border-solid border-[#E2E8F0] dark:border-primarydark dark:bg-primarydark rounded-[2px]">
              <ChevronLeftIcon className="stroke-[#334155] dark:stroke-[white]" />
            </button>
          </div>
          <div className="flex items-center gap-2 text-[14px] text-[#334155] leading-5 dark:text-[white]">
            <span className="hidden lg:block">Show:</span>
            <button className="flex items-center border border-solid border-[#E2E8F0] dark:border-primarydark dark:bg-primarydark p-2 gap-2 rounded-[2px]">
              <span>10 Rows</span>
              <ChevronLeftIcon className="rotate-90 stroke-[#334155] dark:stroke-[white]" />
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Table;
