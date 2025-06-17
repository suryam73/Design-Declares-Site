
import React from "react";
import Heading from "../form/heading/Heading";

const ContactForm = () => {
  return (
    <div className="grid md:grid-cols-2 mt-5 pb-[20rem] text-white">
      {/* Left column */}
      <div className="md:p-4">
        <div className="sticky top-7">
          <Heading title="Contact" />
        </div>
      </div>

      {/* Form Section */}
      <div>
        

        <div className="border border-textColor p-6 space-y-6  fade-in-once  ">
          <div className="text-3xl font-bold">Send Us A Message</div>

       

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
          Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
