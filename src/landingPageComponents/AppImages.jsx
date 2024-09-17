import React from "react";
import { ReactComponent as AppOne } from "../AppImagesSVGs/app1.svg";
import { ReactComponent as AppTwo } from "../AppImagesSVGs/app2.svg";
import { ReactComponent as AppThree } from "../AppImagesSVGs/app3.svg";

const AppImages = () => {
  return (
    <div className=" h-[300vh] bg-custom-gray flex justify-center   ">
      <div className="max-w-[95%] bg-custom-gray  w-[90%] h-[90%] flex justify-center ">
        <div className="relative w-[87%] bg-custom-gray  to-black h-screen  justify-center items-center">
          <div className="relative h-[200vh]">
            <AppOne className="w-full h-screen sticky z-99" />
            <AppTwo className="w-full h-screen sticky z-99" />
            <AppThree className="w-full h-screen sticky z-99" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppImages;
