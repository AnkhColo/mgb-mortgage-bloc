import React from "react";

const OverviewTest = () => {
  return (
    <div className="absolute max-w-[1280px]  h-[528px] top-[174px] mx-auto w-[95%]  grid lg:grid-cols-2 gap-4 ">
      <div className="bg-slate-400 rounded-[20px] flex flex-col justify-between p-5">
        <div className="bg-green-400 w-full h-[25%] rounded-sm ">
          <div className="grid">
            <div className="flex mt-2">
              <div className="mx-2 rounded-sm border border-black">
                1 Nov, 1996
              </div>
              <div className="mx-2 rounded-sm border border-black">27 Y.O.</div>
            </div>
            <div className="mx-2 my-2 rounded-sm border border-black">
              11 West 53 Street, Manhattan New York, New York, 10019
            </div>
          </div>
        </div>
        <div className="bg-green-400 w-full h-[35%] rounded-sm"></div>
      </div>

      <div className="bg-blue-500 rounded-[20px] flex justify-center items-center">
        Right
      </div>
    </div>
  );
};

export default OverviewTest;
