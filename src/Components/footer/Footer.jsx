import React from "react";

const Footer = () => {
  return (
    <div className="bg-primaryColor  px-7 py-14 ">
      <div className=" grid grid-cols-3">
        <div className="text-5xl uppercase flex flex-col font-anton">
          <div> Design </div>
          <div>Declares</div>
        </div>

        <div className="flex flex-col gap-3 text-xl">
          <div className="hover:underline cursor-pointer">Contact</div>
          <div className="hover:underline cursor-pointer">Instagram</div>
          <div className="hover:underline cursor-pointer">LinkedIn</div>
          <div className="hover:underline cursor-pointer">Privacy Policy</div>
        </div>

        <div className="flex flex-col gap-3">
          <div>Sign up to the D! Newsletter</div>
          <div className="relative flex items-center  border border-white p-2 placeholder-white">
            <label>email:*</label>
            <input
              type="email"
              placeholder=""
              className="w-full bg-primaryColor p-3 focus:outline-none"
            />
          </div>
          <div className="flex ">
            <div className="flex flex-col gap-3">
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

      <div className="fflex flex-col gap-5 items-end w-1/2   justify-end">
        <div>
          This website has been built following low-carbon principles of web
          development and hosted using serverless computing, by only allocating
          energy when needed and on demand. Learn more about our carbon
          footprint.
        </div>
        <div>Empowered by Driftime®</div>
      </div>
    </div>
  );
};

export default Footer;
