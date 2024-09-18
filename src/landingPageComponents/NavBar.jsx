import React, { useState } from "react";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as TitleIcon } from "../icons/mgb-title.svg";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className=" fixed flex justify-center  h-[15%] w-[100%] text-white items-center z-[100]">
      <div className=" absolute flex justify-between  mx-auto h-[66px] bg-slate-900 bg-opacity-80 backdrop-blur-sm max-w-[95%] w-[90%] items-center ">
        <div className="flex justify-between p-3 w-full">
          <div className="flex justify-between w-[178px] items-center ml-4">
            <HomeIcon className="h-4" />
            <TitleIcon />
          </div>
          <div className=" md:flex font-bold text-sm  h-[70%] pr-3 hidden">
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
          {/* Dropdown Menu for mobile view */}
          <div
            className={`${
              dropdownOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
            } md:hidden transition-all duration-[400ms] ease-in-out overflow-hidden bg-slate-900 bg-opacity-90 backdrop-blur-sm w-full absolute top-[66px] left-0 z-[99] flex flex-col items-center justify-center`}
          >
            <div className="text-white p-4 w-full text-center ">
              Schedule Demo
            </div>
            <div className="bg-[#fbff36] rounded-md text-black px-6 py-3 mb-6 w-[150px] flex justify-center font-bold">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
