import React, { useState } from "react";
import Heading from "../form/heading/Heading";
import { Images } from "../../Constant/images";

const ToolKitSection = () => {
  return (
    <div className="grid md:grid-cols-2 mt-[17rem]">
      {/* Left column with sticky heading */}
      <div className="md:p-4">
        <div className="sticky top-7">
          <Heading title="The Design Declares Newsletter and Toolkit" />
        </div>
      </div>

      {/* Right column scrollable */}
      <div className="overflow-y-auto flex flex-col gap-4 ">
        <img src={Images.toolKitIcon} alt="Image" />
        <div className="text-textColor text-xl md:text-xl my-4">
          Subscribe to the Design Declares UK newsletter to receive the latest
          news and updates. By signing up you will also gain access to The
          Design Declares Toolkit, a live and evolving Notion site co-created
          with our community. It is filled with the latest resources and methods
          to help you on your journey to climate-positive design.
        </div>
        <div className="text-textColor text-lg md:text-lg my-4">
          Every signatory to Design Declares will receive an access link to the
          Toolkit. If you are unable to declare emergency quite yet, you can
          still access the Toolkit - just register below.
        </div>
        <div className="relative flex items-center text-textColor bg-black border border-white p-2 placeholder-white">
            <label>email:*</label>
            <input
              type="email"
              placeholder=""
              className="w-full bg-black p-3 focus:outline-none"
            />
            </div>

            <div className="flex ">
            <div className="flex  text-textColor flex-col gap-3">
              <div>
                I would like to be added to the Design Declares! newsletter and
                receive further updates.
              </div>
              <div className="underline">view our Privacy Policy</div>
            </div>
            <div
  className="bg-textColor flex justify-center items-center text-center px-3 py-2 cursor-pointer mt-5 text-xl font-semibold rounded-full hover:bg-black hover:text-primaryColor w-full md:w-fit transition duration-300"
>
  Subscribe
</div>

          </div>
      </div>
    </div>
  );
};

export default ToolKitSection;
