

import React, { useState } from "react";
import Heading from "../form/heading/Heading";

const Partnerships = () => {
  return (
    <div className="grid md:grid-cols-2  mt-[8rem]">
      {/* Left column */}
      <div className="md:p-4">
        <div className="sticky top-7">
          <Heading title="Global Partnerships" />
        </div>
      </div>

      {/* Right column scrollable */}
      <div className="overflow-y-auto  ">
        <div className="text-textColor text-xl md:text-3xl my-4 ">
        We invite our colleagues from across the design industry to join us in declaring an emergency, and starting to take urgent action.*  </div>

        <div className="grid grid-cols-2 gap-7 mt-5 ">
          <div className="text-textColor text-xl  my-4">
          The acts of emergency above are the first (big) steps. As we all commit to this work, we must also commit to doing it in a way that is genuinely inclusive and equitable.

It doesn’t matter where on the journey you are. What matters is that you’re here, and you’re ready to do the work. Because there is no design on a dead planet.
          </div>
          <div className="text-textColor text-xl  my-4">
          *We are actively seeking partnerships to expand Design Declares around the world. If that sounds like something you’re interested in, please get in touch.

Join our list of global partners...

UK, Ireland, Brazil, Australia
          </div>
          <div className="flex flex-col text-center    md:flex-row items-center gap-4">
            <div className="bg-textColor md:px-5 md:py-4 px-2 py-3 cursor-pointer mt-5 text-base md:text-xl font-semibold rounded-full hover:bg-primaryColor hover:text-black w-full md:w-fit">
            Get in Touch
            </div>
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default Partnerships;
