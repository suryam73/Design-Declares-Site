import React from "react";

const Footer = () => {
  return (
    <div className="bg-primaryColor text-white px-6 md:px-12 py-12">
 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="text-4xl text-black md:text-5xl uppercase font-anton flex flex-col">
          <div>Design</div>
          <div>Declares</div>
        </div>

        
        <div className="flex  text-black flex-col gap-3 text-lg md:text-xl">
          <div className="hover:underline cursor-pointer">Contact</div>
          <div className="hover:underline cursor-pointer">Instagram</div>
          <div className="hover:underline cursor-pointer">LinkedIn</div>
          <div className="hover:underline cursor-pointer">Privacy Policy</div>
        </div>

        
        <div className="flex text-black flex-col gap-4 text-sm md:text-base">
          <div className="font-semibold">Sign up to the D! Newsletter</div>
          <div className="relative flex items-center bg-primaryColor border border-white p-2 placeholder-white">
            <label>email:*</label>
            <input
              type="email"
              placeholder=""
              className="w-full bg-primaryColor p-3 focus:outline-none"
            />
            </div>
          <div className="text-xs">
            I would like to be added to the Design Declares! newsletter and
            receive further updates.
          </div>
          <div className="underline text-xs cursor-pointer">
            View our Privacy Policy
          </div>
          <div className="bg-textColor text-black w-full md:w-fit px-5 py-2 text-center rounded-full font-semibold cursor-pointer hover:bg-black hover:text-white transition duration-300">
            Subscribe
          </div>
        </div>
      </div>

     
      <div className="mt-10 border-t text-black border-white pt-6 text-sm md:text-base flex flex-col md:flex-row justify-between gap-4">
        <div className="max-w-xl">
          This website has been built following low-carbon principles of web
          development and hosted using serverless computing, by only allocating
          energy when needed and on demand. Learn more about our carbon
          footprint.
        </div>
        <div className="font-semibold text-right">Empowered by Driftime®</div>
      </div>
    </div>
  );
};

export default Footer;
