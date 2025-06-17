import React, { useState } from "react";
import Heading from "../form/heading/Heading";

const Donate = () => {
  return (
    <div className="grid md:grid-cols-2  mt-[17rem]">
      {/* Left column */}
      <div className="md:p-4">
        <div className="sticky top-7">
          <Heading title="Donate to D!" />
        </div>
      </div>

      {/* Right column scrollable */}
      <div className="overflow-y-auto  scroll-animate ">
        <div className="text-textColor text-xl md:text-2xl my-4   ">
          Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community working towards change in the creative industry. Your support can go a long way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.
        </div>

        <div className="flex flex-col text-center     md:flex-row items-center gap-4">
        <div className="bg-textColor md:px-5 md:py-4 px-2 py-3 cursor-pointer mt-5 text-base md:text-xl font-semibold rounded-full hover:bg-primaryColor hover:text-black w-full md:w-fit">
        Donate £10
        </div>
        <div className="bg-textColor md:px-5 md:py-4 px-2 py-3 cursor-pointer mt-5 text-base md:text-xl font-semibold rounded-full hover:bg-primaryColor hover:text-black w-full md:w-fit">
        Donate £20
        </div>
        <div className="bg-textColor md:px-5 md:py-4 px-2 py-3 cursor-pointer mt-5 text-base md:text-xl font-semibold rounded-full hover:bg-primaryColor hover:text-black w-full md:w-fit">
        Donate £30
        </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;