
import React, { useState } from "react";
import Heading from "../form/heading/Heading";
import { Images } from "../../Constant/images";

const Designers = () => {
  return (
    <div className="grid md:grid-cols-2  mt-[8rem] ">
      {/* Left column */}
      <div className="md:p-4">
        <div className="sticky top-7">
          <Heading title="The Designers Behind Design Declares UK" />
        </div>
      </div>

      {/* Right column scrollable */}
      <div className="overflow-y-auto  ">
        <div className="text-textColor text-xl md:text-3xl my-4">
        Inspired by the global emergency declaration movement demanding accountability and action across industries, Design Declares is the initiative of a multidisciplinary group of design professionals and agencies who all believe in the power of design to change things.

</div>

        <div className="grid grid-cols-2 items-center gap-7 mt-5">
               <img src={Images.logo1}  />
            <img src={Images.logo2}  />
            <img src={Images.logo3}  />
            <img src={Images.logo4}  />
            <img src={Images.logo5}  />
        
          
          
        </div>
   
      </div>
    </div>
  );
};

export default Designers;
