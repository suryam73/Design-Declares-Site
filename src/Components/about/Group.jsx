import React from 'react';
import { Images } from '../../Constant/images';
import Heading from '../form/heading/Heading';

const Group = () => {
  const listGroup = [
    {
      id: 1,
      name: 'John Doe',
      group: 'Driftime®',
      image: Images.group2,
    },
    {
      id: 2,
      name: 'Alexie Sommer',
      group: 'URGE Collective',
      image: Images.group1,
    },
    {
      id: 3,
      name: 'Aurelie Lionet',
      group: 'Design for Life',
      image: Images.group3,
    },
    {
        id: 4,
        name: 'Jo Barnard',
        group: 'Morrama',
        image: Images.group4,
      },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 mt-[8rem] pb-[12rem] px-4 ">
      {/* Left: Sticky Heading */}
      <div className="md:p-4">
        <div className="sticky top-7">
          <Heading title="Steering Group" />
        </div>
      </div>

      {/* Right: Profile Cards */}
      <div className="flex flex-col md:flex-row items-center text-textColor     gap-6">
        {listGroup.map((member) => (
          <div
            key={member.id}
            className=" shadow-md r  flex flex-col items-center text-center"
          >
            {member.image ? (
              <img 
                src={member.image}
                alt={member.name}
                className="w- object-cover mb-4"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold mb-4">
                {member.name.charAt(0)}
              </div>
            )}
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm ">{member.group}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Group;
