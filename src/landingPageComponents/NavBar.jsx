import React, { useState } from "react";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as TitleIcon } from "../icons/mgb-title.svg";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" fixed flex justify-center  h-[15%] w-[100%] text-white items-center">
      <div className=" absolute flex justify-between  mx-auto h-[66px] bg-custom-gray max-w-[95%] w-[90%] items-center ">
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
          <div className="block md:hidden mr-4" onClick={handleNav}>
            {nav ? <IoMenu size={25} /> : <IoMenu size={25} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
