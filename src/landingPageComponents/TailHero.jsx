import React from "react";

const TailHero = () => {
  return (
    <div className="h-[70vh] flex justify-center bg-custom-gray">
      <div className="w-[90%] h-[80%] top-0 bg-custom-gray flex flex-col justify-between">
        <div className="flex justify-center">
          <p className="text-white text-center text-6xl w-[50%] ">
            Verify: Identity + Income + Credit
          </p>
        </div>
        <div className="flex justify-center text-xl text-gray-400">
          <p className="text-center w-[50%]">
            We automate ID, Income and Credit verification allowing you to make
            informed lending decisions without requiring any bank statements.
          </p>
        </div>
        <div className="flex flex-col">
          <button className="bg-[#fbff36] rounded-md text-black px-6  w-[200px] mx-auto  py-3 mb-5  font-bold hover:bg-gray-600">
            Schedule Demo
          </button>
          <button className="underline text-white font-extrabold">Login</button>
        </div>
      </div>
    </div>
  );
};

export default TailHero;
