import React from "react";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as TitleIcon } from "../icons/mgb-title.svg";

const NavBar = () => {
  return (
    <div className=" fixed flex justify-center h-[90px] w-full bg-">
      <div className=" absolute flex justify-between bottom-0 mx-auto h-[66px] bg-custom-gray max-w-[1200px] w-[90%] items-center ">
        <div className="flex justify-between p-3 w-full">
          <div className="flex justify-between w-[178px] items-center ml-4">
            <HomeIcon className="h-4" />
            <TitleIcon />
          </div>
          <div className=" lg:flex font-bold text-sm  h-[70%] pr-3 hidden">
            <div className="text-white flex items-center  px-5">
              Schedule Demo
            </div>
            <div className="bg-[#fbff36] rounded-md text-black px-6 py-3">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
