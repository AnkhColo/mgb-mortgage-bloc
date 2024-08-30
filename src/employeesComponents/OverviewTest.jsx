import React from "react";

const OverviewTest = () => {
  return (
    <div className="absolute max-w-[1280px]  max-h-[480px] h-full top-[154px] mx-auto w-[95%]  grid lg:grid-cols-2 gap-4 ">
      <div className="bg-slate-800 rounded-md flex flex-col justify-between p-5">
        <div className="text-white w-full h-[25%] rounded-sm ">
          <div className="grid">
            <div className="flex mt-2">
              <div className="mx-2 py-2 px-4 text-sm  rounded-md border border-black">
                1 Nov, 1996
              </div>
              <div className="mx-2 py-2 px-4 text-sm  rounded-md border border-black">
                27 Y.O.
              </div>
            </div>
            <div className="mx-2 my-2 py-2 px-4  text-sm rounded-md border border-black">
              11 West 53 Street, Manhattan New York, New York, 10019
            </div>
          </div>
        </div>
        <div className="  w-full max-h-[35%] h-full text-xs rounded-sm grid grid-flow-col lg:grid-col-2 gap-2 ">
          {/* bottom-stuff */}
          <div className="text-white ˜">
            <div className="h-4 mb-2">DONE</div>
            <div className="grid gap-2 h-[80%]">
              <div className="w-full   rounded-lg  ">
                <div>Bank Account Name Match</div>
              </div>
              <div>Data</div>
              <div>Data</div>
            </div>
          </div>

          <div className="text-white  ">
            <div className="h-4 mb-2">PROGRESS</div>
            <div className="grid gap-2 h-[80%]">
              <div>Data</div>
              <div>Data</div>
              <div>Data</div>
            </div>
          </div>

          {/* bottom-stuff-left */}
        </div>
      </div>

      <div className="bg-slate-800 max-w-[640px] h-full w-full rounded-md grid  grid-row-5 gap-y-2 p-3">
        <Section title={"Number of Connected Bank Accounts"} value={2} />
        <Section title={"Total Transactions Uploaded"} value={137} />
        <Section title={"Balance Outstanding:"} value={0}></Section>
        <Section title={"Missed Payments"} value={0} />
        <Section title={"Total Current Balance"} value={"£4,409.49"} />
      </div>
    </div>
  );
};

function Section({ title, value }) {
  return (
    <>
      <div className="relative rounded-md mb-[1px] ml-1 bg-slate-800 w-[98%]  border-black border-[1px] ">
        <div className="absolute text-sm top-1 left-1 text-blue-600">
          {title}
        </div>
        <div className="text-6xl absolute right-1 top-4 items-center text-white ">
          {value}
        </div>
      </div>
    </>
  );
}

export default OverviewTest;
