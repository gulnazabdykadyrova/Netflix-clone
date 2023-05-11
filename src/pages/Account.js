import React from "react";
import Savedshows from "../components/Savedshows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src={
            "https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/7d46b779-cf9e-4ffe-96be-6c47fb6d6dc4/TR-en-20230320-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          }
          alt="background"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
          </div>
        </div>
      </div>
      <Savedshows />
    </>
  );
};

export default Account;
