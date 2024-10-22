import React from "react";

const chartData = [
  {
    month: "Jan",
    percentage: 67,
  },
  {
    month: "Feb",
    percentage: 92,
  },
  {
    month: "Mar",
    percentage: 78,
  },
  {
    month: "Apr",
    percentage: 42,
  },
  {
    month: "May",
    percentage: 100,
  },
  {
    month: "Jun",
    percentage: 58,
  },
  {
    month: "Jul",
    percentage: 84,
  },
  {
    month: "Aug",
    percentage: 37,
  },
  {
    month: "Sep",
    percentage: 83,
  },
  {
    month: "Oct",
    percentage: 66,
  },
  {
    month: "Nov",
    percentage: 96,
  },
  {
    month: "Dec",
    percentage: 60,
  },
];

const Chart = () => {
  return (
    <article className="p-2 lg:p-10 min-h-[300px] border border-solid border-gray6 dark:border-primarydark dark:bg-primarydark rounded-[2px] lg:rounded-[5px]">
      <div className="h-full flex justify-between gap-1 relative z-[1]">
        <div className="h-full flex flex-col-reverse justify-between pb-5">
          <div className="text-[#64748B] text-end text-[10px] font-normal dark:text-[white]">
            0
          </div>
          <div className="text-[#64748B] text-end text-[10px] font-normal dark:text-[white]">
            200
          </div>
          <div className="text-[#64748B] text-end text-[10px] font-normal dark:text-[white]">
            400
          </div>
          <div className="text-[#64748B] text-end text-[10px] font-normal dark:text-[white]">
            600
          </div>
          <div className="text-[#64748B] text-end text-[10px] font-normal dark:text-[white]">
            800
          </div>
          <div className="text-[#64748B] text-end text-[10px] font-normal dark:text-[white]">
            1,000
          </div>
        </div>
        {chartData.map((month, index) => {
          return (
            <div
              key={index}
              className="mt-3 flex flex-col-reverse items-center gap-2"
            >
              <div className="text-[#64748B] text-[10px] font-normal dark:text-[white]">
                {month.month}
              </div>
              <div className="flex flex-col-reverse w-[15.9px] lg:w-[25.66px] flex-1">
                <div
                  style={{ height: `${month.percentage}%` }}
                  className={`bg-primary rounded-[1px]`}
                ></div>
              </div>
            </div>
          );
        })}
        <div className="absolute left-7 right-0 bottom-[22px] top-3 z-[-1]">
          <div className="relative w-full h-full">
            <div className="absolute border border-dashed border-gray6 border-r-0 border-l-0 border-b-0 w-full  bottom-[0%]"></div>
            <div className="absolute border border-dashed border-gray6 border-r-0 border-l-0 border-b-0 w-full  bottom-[20%]"></div>
            <div className="absolute border border-dashed border-gray6 border-r-0 border-l-0 border-b-0 w-full  bottom-[40%]"></div>
            <div className="absolute border border-dashed border-gray6 border-r-0 border-l-0 border-b-0 w-full  bottom-[60%]"></div>
            <div className="absolute border border-dashed border-gray6 border-r-0 border-l-0 border-b-0 w-full  bottom-[80%]"></div>
            <div className="absolute border border-dashed border-gray6 border-r-0 border-l-0 border-b-0 w-full  bottom-[100%]"></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Chart;
