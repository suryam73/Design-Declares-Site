import React, { useState } from "react";
import Heading from "../form/heading/Heading";

const EmergencyActs = () => {
  const EightStep = [
    {
      num: 1,
      title: "Sound the Alarm",
      discription:
        "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice.",
    },
    {
      num: 2,
      title: "Start the Journey",
      discription:
        "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.",
    },
    {
      num: 3,
      title: "Bring Clients with Us",
      discription:
        "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress.",
    },
    {
      num: 4,
      title: "Measure What We Make",
      discription:
        "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.",
    },
    {
      num: 5,
      title: "Redefine ‘Good’",
      discription:
        "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards.",
    },
    {
      num: 6,
      title: "Educate, Accelerate",
      discription:
        "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.",
    },
    {
      num: 7,
      title: "Design for Justice",
      discription:
        "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.",
    },
    {
      num: 8,
      title: "Amplify Voices for Change",
      discription:
        "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change.",
    },
  ];
  return (
    <div className="grid md:grid-cols-2  mt-[17rem]">
      {/* Left column */}
      <div className="md:p-4">
        <div className="sticky top-7">
          <Heading title="8 Acts of Emergency" />
        </div>
      </div>
      <div>
        <div className="text-textColor text-xl md:text-2xl my-4">
          What does it take to Declare? It’s accepting we are in an emergency of
          climate and nature, and a commitment to do something about it. Here
          are eight places to start:
        </div>

        <div className="bg-textColor">
          {EightStep.map((list) => (
            <div key={list.num}>
              <table className="w-full table-fixed">
                <tbody>
                  <tr className="border border-black font-semibold  text-center">
                    <td className="border border-black p-4 text-4xl w-[80px]">
                      {list.num}
                    </td>
                    <td className="text-start p-4 text-4xl">{list.title}</td>
                  </tr>
                  <tr className="border border-black">
                    <td colSpan="2" className="p-4 text-base md:text-lg">
                      {list.discription}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencyActs;
