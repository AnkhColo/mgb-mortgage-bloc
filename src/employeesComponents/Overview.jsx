import React from "react";
import { ReactComponent as CheckIcon } from "../icons/check.svg";

const Overview = () => {
  return (
    <div>
      <div
        className="absolute top-[18%] flex flex-col rounded-md bg-gray-900 text-white w-[48%]  
      pr-[100px]  py-[255px] mr-2 ml-1 left-0"
      >
        <div className="absolute top-4 left-0 flex text-sm">
          <div className="mx-2 border-2 border-gray-600 rounded-lg bg-transparent px-6 py-2 ">
            1 Nov, 1996
          </div>
          <div className=" border-2 border-gray-600 rounded-lg bg-transparent px-6 py-2 ">
            27 Y.O.
          </div>
        </div>
        <div className=" absolute top-16 left-3 border-2 border-gray-600 rounded-lg bg-transparent w-[440px] px-2 py-2 ">
          11 West 53 Street, Manhattan New York, New York, 10019
        </div>

        {/* bottom-stuff */}
        <div className=" absolute left-1 bottom-1 flex text-sm">
          {/* bottom-stuff-left */}
          <div className=" right-1 mx-4 ">
            DONE
            <div className="flex mx-2 border-2 border-blue-600 rounded-lg bg-transparent px-6 py-1  my-4 ">
              <div className="mx-1">
                <CheckIcon />
              </div>
              <div>Bank Account Name Match</div>
            </div>
            <div className="flex mx-2 border-2 border-blue-600 rounded-lg bg-transparent px-6 py-1  my-4 ">
              <div className="mx-1">
                <CheckIcon />
              </div>
              <div>Bank Account Connected</div>
            </div>
            <div className="flex mr-24 ml-2 border-2 border-blue-600 rounded-lg bg-transparent px-4 py-1  my-4 ">
              <div className="mx-1">
                <CheckIcon />
              </div>
              <div>Data Categorised</div>
            </div>
          </div>

          {/* bottom-stuff-right */}
          <div className=" left-1 mx-4 ">
            IN PROGRESS
            <div className="mx-2 border-2 border-gray-600 rounded-lg bg-custom-red overflow-visible px-4 py-2  my-1 ">
              Document Verification
            </div>
            <div className="flex">
              <div className="mx-0 border-2 border-gray-600 rounded-lg bg-custom-red px-2 py-2 my-1 ">
                KYC Check
              </div>
              <div className="mx-0 border-2 border-gray-600 rounded-lg bg-custom-red px-2 py-2 my-1 ">
                AML Check
              </div>
            </div>
            <div className="mx-2 border-2 border-gray-600 rounded-lg bg-custom-red px-4 py-2 my-1 ">
              Selfie Check
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Grid elements RIGHT */}
      <div className="w-full grid grid-flow-col grid-cols-3 px-4 object-cover">
        <div className="absolute top-[18%] rounded-md  text-white w-[49%] px-[70px] py-[240px] mr-2 ml-2 right-2">
          <div className="absolute top-0 left-0  flex flex-col ">
            <Section title={"Number of Connected Bank Accounts"} value={2} />
            <Section title={"Total Transactions Uploaded"} value={137} />
            <Section title={"Balance Outstanding:"} value={0}></Section>
            <Section title={"Missed Payments"} value={0} />
            <Section title={"Total Current Balance"} value={"£4,409.49"} />
          </div>
        </div>
      </div>
    </div>
  );
};

function Section({ title, value }) {
  return (
    <>
      <div className="relative rounded-md mb-2 ml-1 bg-slate-800 w-[570px]  h-[95px]">
        <div className="absolute top-2 left-2 text-blue-600">{title}</div>
        <div className="text-7xl absolute right-2 top-2 ">{value}</div>
      </div>
    </>
  );
}

export default Overview;
