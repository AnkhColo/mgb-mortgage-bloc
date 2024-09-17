import React from "react";
import { Link } from "react-router-dom";

const HeadHero = () => {
  return (
    <div className="text-white h-[89vh] w-[100%] bg-gradient-to-b from-custom-purple to-black flex justify-center ">
      <div className=" absolute h-[55%] w-[90%] top-40 mx-auto text-center text-white flex flex-col  items-center   ">
        <div className="max-w-[100%] h-[100%] md:w-[700px] flex  flex-col justify-between items-center ">
          <p className="text-6xl md:text-7xl font-medium ">
            Banking Data Automated
          </p>
          <p className="text-2xl">
            MortgageBloc provides you with secure automated access to your
            customers banking data using Open Banking APIs
          </p>
          <div className="w-[200px] bottom-0">
            <Link to="/">
              <div className="bg-[#fbff36] rounded-md text-black px-6  w-[200px] mx-auto  py-3 mb-5  font-bold hover:bg-gray-600">
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
