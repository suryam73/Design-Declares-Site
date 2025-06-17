import React, { useState } from 'react';
import { Images } from '../../Constant/images';

const FilterInterface = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedChapter, setSelectedChapter] = useState('All');

  const content = [
    {
      id: 1,
      title: "Sasha Titchkosky Interview",
      subtitle: "An Interview with Koskela Founder and Design Declares Australia Board Member - Sasha Titchkosky",
      category: "Perspective",
      chapter: "D! Australia",
      date: "18.12.2024, 09:38",
      image: Images.latest1
    },
    {
      id: 2,
      title: "Andrew Simpson Interview",
      subtitle: "An Interview with Vert Design and Design Declares Australia CEO - Andrew Simpson",
      category: "Perspective",
      chapter: "D! Australia",
      date: "10.12.2024, 08:37",
      image: Images.latest2
    },
    {
      id: 3,
      title: "Design Workshop Event",
      subtitle: "Community workshop on sustainable design practices",
      category: "Events",
      chapter: "D! UK",
      date: "05.12.2024, 14:30",
      image: Images.latest3
    },
    {
      id: 4,
      title: "Climate Action Case Study",
      subtitle: "How design studios are implementing climate action",
      category: "Case Studies",
      chapter: "D! Ireland",
      date: "28.11.2024, 16:45",
      image: Images.latest4
    },
    {
      id: 5,
      title: "Platform Updates Q4",
      subtitle: "Latest updates and improvements to the platform",
      category: "Updates",
      chapter: "D! UK",
      date: "15.11.2024, 11:20",
      image: Images.latest5
    },
    {
        id: 5,
        title: "Platform Q4",
        subtitle: "Latest  and improvements to the platform",
        category: "Updates",
        chapter: "D! UK",
        date: "15.11.2024, 11:20",
        image: Images.latest6
      }
  ];

  const categories = ['All', 'Events', 'Case Studies', 'Updates', 'Perspective'];
  const chapters = ['All', 'D! UK', 'D! Ireland', 'D! Australia'];


  const filteredContent = content.filter(item => {
    const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
    const chapterMatch = selectedChapter === 'All' || item.chapter === selectedChapter;
    return categoryMatch && chapterMatch;
  });

  const FilterButton = ({ active, onClick, children, type = 'category' }) => (
    <button
      onClick={onClick}
      className={`px-4 rounded-full text-sm font-medium transition-all duration-200 ${
        active 
          ? type === 'category' 
            ? 'bg-primaryColor text-white shadow-lg' 
            : 'bg-primaryColor text-white shadow-lg'
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-black grid md:grid-cols-2 text-white p-6">
      {/* Header */}
      <div className="mb-8">
       
        
   
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <FilterButton
                key={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                type="category"
              >
                {category}
              </FilterButton>
            ))}
          </div>
        </div>

   
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">View by Chapter</h2>
          <div className="flex flex-wrap gap-3">
            {chapters.map(chapter => (
              <FilterButton
                key={chapter}
                active={selectedChapter === chapter}
                onClick={() => setSelectedChapter(chapter)}
                type="chapter"
              >
                {chapter}
              </FilterButton>
            ))}
          </div>
        </div>
      </div>

     
      <div className="grid grid-cols-1  gap-6">
        {filteredContent.length > 0 ? (
          filteredContent.map(item => (
            <div key={item.id} className="group cursor-pointer">
              <div className="flex flex-col  md:flex-row  overflow-hidden  transition-all duration-300 fade-in-once ">
             
                <div className="w-64  flex-shrink-0 overflow-hidden">
                  <img src={item?.image} />
                </div>
                
              
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1  bg-gray-900 text-textColor text-xs rounded-full">
                        {item.category}
                      </span>
                      <span className="px-3 py-1 bg-gray-900 text-textColor text-xs rounded-full">
                        {item.chapter}
                      </span>
                      <span className="bg-gray-900 text-textColor text-xs ml-auto">
                        {item.date}
                      </span>
                    </div>
                   
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                 
                    <p className="text-textColor leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-textColor text-lg">No content matches the selected filters.</p>
          </div>
        )}
      </div>

      
    </div>
  );
};

export default FilterInterface;