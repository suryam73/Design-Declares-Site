import React, { useState } from "react";
import Heading from "../form/heading/Heading";

const AboutDesignDeclares = () => {
  return (
    <div className="grid md:grid-cols-2  mt-[2rem]">
      {/* Left column */}
      <div className="md:p-4">
        <div className="sticky top-7">
          <Heading title="About Design Declares" />
        </div>
      </div>

      {/* Right column scrollable */}
      <div className="overflow-y-auto   ">
        <div className="text-textColor text-xl md:text-6xl my-4">
          Climate breakdown has begun. And business as usual is not an option.
        </div>
        <div className="text-textColor text-xl md:text-2xl my-4 ">
          That’s why we started Design Declares.
        </div>
        <div className="text-textColor text-xl md:text-2xl my-4 ">
          Inspired by a global declaration movement sounding the alarm in
          industries everywhere, we’re an industry-recognised initiative
          representing the fears, hopes and commitment to action of a growing
          group of designers, design studios, agencies and institutions.
        </div>

        <div className="flex flex-col text-center   md:flex-row items-center gap-4 ">
          <div className="bg-textColor md:px-5 md:py-4 px-2 py-3 cursor-pointer mt-5 text-base md:text-xl font-semibold rounded-full hover:bg-primaryColor hover:text-black w-full md:w-fit">
            See Global Declarations
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7 mt-5 ">
          <div className="text-textColor text-xl  my-4">
            Together, we sit at the very beginning of the creative process. The
            tools we use and the choices we make can influence society’s
            behaviour, change economies and challenge everything that’s come
            before.
          </div>
          <div className="text-textColor text-xl  my-4 ">
            Because design, whether it’s a product, a piece of packaging or an
            exhibition space, has impact. It’s up to us whether that impact is
            harmful or healing. We’re glad you’re here. Let’s get to work.
          </div>
          <div className="flex flex-col text-center   md:flex-row items-center gap-4">
            <div className="bg-textColor md:px-5 md:py-4 px-2 py-3 cursor-pointer mt-5 text-base md:text-xl font-semibold rounded-full hover:bg-primaryColor hover:text-black w-full md:w-fit">
              Declare Emergency Now
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5 ">
          <div className="text-textColor text-xl space-y-4">
            <ul className="list-disc list-inside space-y-2">
              <li>Design Declares is free.</li>
              <li>
                ‘Design’ to us means industrial, digital, graphic, communication
                and service design.
              </li>
              <li>
              Design Declares offers support to all its signatories through shared best practice, resources and insights, all found in the Toolkit.
              </li>
              <li>
              Our signatories use the clarity of the 8 Acts of Emergency as a way to start meaningful conversations and actions in collaboration with colleagues, collaborators and clients.
              </li>
            </ul>
          
          </div>

          <div className="text-textColor text-xl space-y-4 ">
          <ul className="list-disc list-inside space-y-2">
              
              <li>
              We welcome declarations from companies with an office and/or employing at least one full-time designer, and from practising freelance designers who are registered as self-employed in the UK. All signatories will be named and published on this site.
              </li>
              <li>
              As a collective voice, we will liaise with other industry organisations and networks, constructively engaging with government, clients and design media.              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDesignDeclares;
