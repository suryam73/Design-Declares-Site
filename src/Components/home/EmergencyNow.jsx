import React from "react";
import Heading from "../form/heading/Heading";

const EmergencyNow = () => {
  return (
    <div className="grid md:grid-cols-2 mt-[17rem] text-white">
      {/* Left column */}
      <div className="md:p-4">
        <div className="sticky top-7">
          <Heading title="Declare Emergency Now" />
        </div>
      </div>

      {/* Form Section */}
      <div>
        <div className="text-textColor text-xl md:text-2xl my-4">
          Design Declares is open to individuals and institutions working in
          industrial, digital, graphic, communication and service design. To
          declare here, you must be a company with an office in the UK employing
          at least one full-time designer...
        </div>

        <div className="border border-textColor p-6 space-y-6">
          <div className="text-3xl font-bold">I am Declaring Emergency</div>

          {/* Checkbox Options */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-xl">
            {[
              "As a business",
              "As an individual",
              "As a public institution",
              "As a team or department",
            ].map((label, index) => (
              <label key={index} className="flex items-center text-textColor gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox w-5 h-5 border-white border accent-white"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>

          {/* Input Fields */}
          <div className="space-y-4 text-sm ">
            <div className="relative flex items-center bg-black border border-white p-2 placeholder-white">
            <label>Website:*</label>
            <input
              type="text"
              placeholder=""
              className="w-full bg-black p-3 focus:outline-none"
            />
            </div>

            <div className="relative flex items-center  bg-black border border-white p-2 placeholder-white">
            <label>Country:*</label>
            <select className="w-full bg-black focus:outline-none p-3 text-white">
              <option> United Kingdom</option>
            </select>
            </div>

            <div className="relative flex items-center  bg-black border border-white p-2 placeholder-white">
            <label>Discipline:*</label>
            <select className="w-full bg-black focus:outline-none p-3 text-white">
              <option> Digital Desig</option>
            </select>
            </div>



            <div className="relative flex items-center bg-black border border-white p-2 placeholder-white">
            <label>email:*</label>
            <input
              type="email"
              placeholder=""
              className="w-full bg-black p-3 focus:outline-none"
            />
            </div>
            
            <textarea
              placeholder="Why are you declaring? In a sentence or two, tell us why you’re joining Design Declares."
              className="w-full text-textColor text-xl focus:outline-none bg-black border border-white p-3 h-32 placeholder-white"
            ></textarea>
          </div>

          {/* Consent Checkboxes */}
          <div className="space-y-3 text-sm">
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 form-checkbox accent-white" />
              <span className="text-lg text-textColor">
                I consent for my data to be used for the purpose of the Declaration, and
                for my name and reason for joining to be used in the promotion of the
                Declaration on this site and across our social channels.
              </span>
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" className="form-checkbox accent-white" />
              <span className="text-lg text-textColor">
                I would like to be added to the Design Declares! newsletter and receive
                further updates.
              </span>
            </label>
          </div>

          <div>
            <a href="#" className="text-sm underline text-white">
              View our Privacy Policy
            </a>
          </div>

          <button className="bg-white hover:bg-primaryColor hover:text-black text-xl text-black font-semibold px-6 py-3 rounded-full mt-4 ">
            Declare Emergency Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyNow;
