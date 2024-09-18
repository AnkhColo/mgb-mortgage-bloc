import React from "react";
import { ReactComponent as HomeIcon } from "../icons/home.svg";

const Footer = () => {
  return (
    <div className="h-[40vh] bg-custom-gray flex justify-center">
      <div className="max-w-[90%] w-full flex flex-col justify-between items-center h-[80%] top-0 border-t-[1px] border-gray-600">
        <HomeIcon width="4rem" height="4rem" className="mt-6" />
        <div className="flex justify-between underline text-white w-[33%] font-extrabold ">
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <p className="text-gray-400 text-center">
          MortgageBloc Limited is registered in England with Registered No.
          12844126. MortgageBloc LTD is an agent of Plaid Financial Ltd., an
          authorised payment institution regulated by the Financial Conduct
          Authority under the Payment Services Regulations 2017 (Firm Reference
          Number: 804718).
        </p>
        <p className="text-white font-extrabold">
          © 2024 MortgageBloc LTD. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
