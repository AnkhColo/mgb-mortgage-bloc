import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    //Logic comes here...Email retrival with  Firebase Logic;
    // AuthContext used here as well, so firebase must be
    // configured accordingly.

    //Flow: Captures Email & Password with input fields for each.
    //--> Routes to Homepage with per Account page rendering...Yeah thazz it.

    <div className=" text-white fixed top-[40px] h-full left-[96px] max-w-[71rem] w-full max-h-[630px] bg-custom-gray rounded-[14px] m-3  py-5  justify-center items-center">
      Sign Up Page
      <div className="text-white">
        <Link to="landing">Homepage</Link>
      </div>
      <div className="text-white">
        <Link to="/">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
