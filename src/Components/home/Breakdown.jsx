import React, { useState } from "react";
import Heading from "../form/heading/Heading";

const Breakdown = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "The Role of Design",
      content: (
        <div className="grid grid-cols-2">
          <p className="mb-2 text-xl text-textColor ">
            As designers working within an industry that relies on production
            and powers global consumption, we must acknowledge that we have had
            a role in bringing us to where we are now, and that we have an
            important role in what comes next.
          </p>
          <p className="text-textColor text-xl ">
            Because designers are makers. We make ideas real. We generate
            solutions. We build the world - dreaming up new futures and bringing
            them to life in ways that are beautiful, vital and impossible to
            resist. It’s not quite magic, but it feels like it.
          </p>
        </div>
      ),
    },
    {
      title: "Time for Change",
      content: (
        <div className="grid grid-cols-2">
          <p className="mb-2 text-xl text-textColor ">
            Together with our clients, partners and colleagues across the supply
            chain, we are daring to reimagine the way we create every product,
            service, campaign and designed solution we put out into the world.
            This means measuring and actively reducing the greenhouse gas
            emissions and resource use linked to our designs.{" "}
          </p>
          <p className="text-textColor text-xl ">
            It means introducing principles of sustainability, circularity and -
            ultimately - regenerative design into our practice to recapture and
            repurpose resources and materials. And it means acting systemically
            - seeing the bigger picture and working with others to sharpen
            design’s incredible capacity to influence and accelerate climate
            repair and justice.{" "}
          </p>
        </div>
      ),
    },
    {
      title: "Act with Urgency",
      content: (
        <div className="grid grid-cols-2">
          <p className="mb-2 text-xl text-textColor ">
            We know all we need to make this a reality. The information, the
            guidance, the inspiration and solutions are there. What design needs
            now is action - meaningful steps that can begin to connect what we
            know to what we do.{" "}
          </p>
          <p className="text-textColor text-xl ">
            This is the most important brief of our lives. Join us as we begin
            to design a climate-positive future.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="grid md:grid-cols-2 mt-[17rem]">
    {/* Left column with sticky heading */}
    <div className="md:p-4">
      <div className="sticky top-7">
        <Heading title="This is Breakdown" />
      </div>
    </div>

    {/* Right column scrollable */}
    <div className="overflow-y-auto ">
      <div className="text-textColor text-3xl md:text-5xl my-4">
      The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...
      </div>

      <div className="mt-6 ">
        {accordionItems.map((item, index) => (
          <div key={index} className="border-t border-gray-200">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between text-2xl items-center w-full p-6 text-left font-medium text-textColor"
            >
              <span>{item.title}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "" : "rotate-180"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-5 text-sm">{item.content}</div>
            )}
          </div>
        ))}

        <div className="bg-textColor text-center px-5 py-4 cursor-pointer mt-5 text-xl font-semibold rounded-full hover:bg-primaryColor hover:text-black w-full md:w-fit">
          View our D! Into Video
        </div>
      </div>
    </div>
  </div>

  );
};

export default Breakdown;
