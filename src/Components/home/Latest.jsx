import React, { useState } from "react";
import Heading from "../form/heading/Heading";

const Latest = () => {
  return (
    <div className="grid md:grid-cols-2  mt-[17rem]">
      {/* Left column */}
      <div className="md:p-4">
        <div className="sticky top-7">
          <Heading title="Latest" />
        </div>
      </div>

      {/* Right column scrollable */}
      <div className="overflow-y-auto  mt-10 md:mt-0 flex flex-col gap-7 ">
        <div className="grid md:grid-cols-2 items-start gap-7 justify-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-base text-textColor">
              <div className="bg-gray-700  rounded-full px-2 py-1">Events</div>
              <div className="bg-gray-700  rounded-full px-2 py-1">D! UK</div>
              <div>24.04.2025, 15:30</div>
            </div>

            <div className="flex items-center gap-3 text-2xl text-textColor">
              SD4P Collective: How can Service Design drive meaningful
              sustainability impact
            </div>
          </div>

          <div className="text-textColor flex flex-col gap-5">
            <div className="flex items-center gap-3 text-base text-textColor">
              Recap: SD4P Collective working session – 28th March 2025{" "}
            </div>
            <div className="underline">
            Read story
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 items-start gap-7 justify-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-base text-textColor">
              <div className="bg-gray-700  rounded-full px-2 py-1">Events</div>
              <div className="bg-gray-700  rounded-full px-2 py-1">D! UK</div>
              <div>24.04.2025, 15:30</div>
            </div>

            <div className="flex items-center gap-3 text-2xl text-textColor">
            Designing Tomorrow: Speculative Thinking Shapes Our Present
            </div>
          </div>

          <div className="text-textColor flex flex-col gap-5">
            <div className="flex items-center gap-3 text-base ">
            Design Declares' November Event Challenges Perspectives on Sustainability and Innovation
            </div>
            <div className="underline">
            Read story
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center   md:flex-row items-center gap-4">
          <div className="bg-textColor md:px-5 md:py-4 px-2 py-3 cursor-pointer mt-5 text-base md:text-xl font-semibold rounded-full hover:bg-primaryColor hover:text-black w-full md:w-fit">
            See all the latest
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Latest;
