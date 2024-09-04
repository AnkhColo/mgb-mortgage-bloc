import React from "react";
import { Link } from "react-router-dom";

const HeadHero = () => {
  return (
    <div className="text-white">
      <div className="h-screen w-full bg-gradient-to-b from-custom-purple mx-auto text-center text-white flex flex-col justify-center items-center   ">
        <div className="max-w-[800px]">
          <p className=" text-5xl md:text-7xl my-2">Banking Data Automated</p>
          <div>
            MortgageBloc provides you with secure automated access to your
            customers banking data using Open Banking APIs
          </div>
          <div>
            <Link to="/">
              <div className="bg-[#fbff36] rounded-md text-black px-6  my-3 w-[200px] mx-auto  py-2  font-bold hover:bg-gray-600">
                Schedule Demo
              </div>
            </Link>
            <div>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadHero;
