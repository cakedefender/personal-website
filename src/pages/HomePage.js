import React from "react";
import myself from "../myself.jpg";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center py-10 min-h-screen">
      <h1 className="text-6xl font-medium mb-5">Home Page</h1>
      <img src={myself} alt="image of myself" className="w-56 my-10"/>
      <div className="w-96">
        {/* <div className="justify-items-center gap-20 p-20 bg-gray-100 text-center"> */}
        <h1 className="font-bold">Hello</h1>
        <p>
          helo ehleooe
          
          Some background about me is that something something something
          something
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default HomePage;
