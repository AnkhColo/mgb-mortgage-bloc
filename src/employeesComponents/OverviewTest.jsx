import React from "react";
import { ReactComponent as CheckIcon } from "../icons/check.svg";
import { ReactComponent as AlertIcon } from "../icons/alert-circle.svg";

const OverviewTest = () => {
  return (
    <div className="absolute max-w-[1280px]  max-h-[480px] h-full top-[154px] mx-auto w-[95%]  grid lg:grid-cols-2 gap-4 ">
      <div className="bg-slate-800 rounded-md flex flex-col justify-between p-5">
        <div className="text-white w-full h-[25%] rounded-sm ">
          <div className="grid">
            <div className="flex mt-2">
              <div className="mx-2 py-2 px-4 text-sm  rounded-md border border-[rgba(255, 255, 255, 0.2)]">
                1 Nov, 1996
              </div>
              <div className="mx-2 py-2 px-4 text-sm  rounded-md border border-[rgba(255, 255, 255, 0.2)]">
                27 Y.O.
              </div>
            </div>
            <div className="mx-2 my-2 py-2 px-4  text-sm rounded-md border border-[rgba(255, 255, 255, 0.2)]">
              11 West 53 Street, Manhattan New York, New York, 10019
            </div>
          </div>
        </div>
        <div className="  w-full max-h-[35%] h-full text-xs rounded-sm grid grid-flow-col lg:grid-col-2 gap-2 ">
          {/* bottom-stuff */}
          <div className="text-white ˜">
            <div className="h-4 mb-2">DONE</div>
            <div className="grid gap-2 h-[80%]">
              <div className="w-[85%] h-7 justify-between items-center flex rounded-lg border border-custom-purple p-[6px]  ">
                <div>
                  <CheckIcon />
                </div>
                <div>Bank Account Name Match</div>
              </div>
              <div className="w-[85%] h-7 justify-between items-center flex rounded-lg border border-custom-purple p-[6px]  ">
                <div>
                  <CheckIcon />
                </div>
                <div>Bank Account Name Match</div>
              </div>
              <div className="w-[65%] h-7 justify-start items-center flex rounded-lg border border-custom-purple p-[6px]  ">
                <div className="mr-2">
                  <CheckIcon />
                </div>
                <div>Date Categorised</div>
              </div>
            </div>
          </div>

          <div className="text-white  ">
            <div className="h-4 mb-2">PROGRESS</div>
            <div className="grid gap-2 h-[80%]">
              <div className="w-[85%] h-7 justify-start items-center flex rounded-lg  bg-custom-red text-custom-purple p-[6px]  ">
                <div className="mr-2">
                  <AlertIcon />
                </div>
                <div>Document Verification</div>
              </div>
              <div className="flex justify-between">
                <div className="w-[45%] h-7 justify-start items-center flex rounded-lg bg-custom-red text-custom-purple p-[6px]  ">
                  <div className="mr-2">
                    <AlertIcon />
                  </div>
                  <div>KYC Check</div>
                </div>
                <div className="w-[45%] h-7 justify-start items-center flex rounded-lg  bg-custom-red text-custom-purple p-[6px] mr-2  ">
                  <div className="mr-2">
                    <AlertIcon />
                  </div>
                  <div>AML Check</div>
                </div>
              </div>
              <div className="w-[50%] h-7 justify-start items-center flex rounded-lg  bg-custom-red text-custom-purple p-[6px]  ">
                <div className="mr-2">
                  <AlertIcon />
                </div>
                <div>Selfie Check</div>
              </div>
            </div>
          </div>

          {/* bottom-stuff-left */}
        </div>
      </div>

      <div className=" max-w-[640px] h-full w-full rounded-md grid  grid-row-5 gap-y-2">
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
      <div className="relative rounded-md mb-[1px]  bg-slate-800 w-full ">
        <div className="absolute text-sm top-3 left-3 text-blue-600">
          {title}
        </div>
        <div className="text-6xl absolute right-3 top-4 items-center text-white ">
          {value}
        </div>
      </div>
    </>
  );
}

export default OverviewTest;
