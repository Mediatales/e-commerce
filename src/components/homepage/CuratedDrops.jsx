import React from "react";
import { FaHeart } from "react-icons/fa";

const curatedDrops = [
  {
    title: "Formal Wear",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746860487/bg_1_wv3bbf.png",
  },
  {
    title: "Men's Wear",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746860487/bg_1_wv3bbf.png",
  },
  {
    title: "Traditional",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746860487/bg_1_wv3bbf.png",
  },
  {
    title: "Kid's Wear",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746860487/bg_1_wv3bbf.png",
  },
];

const CuratedDrops = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-500 py-6 px-4">
      <div className="flex justify-between items-center mb-4 text-white">
        <h2 className="text-lg sm:text-xl font-semibold">This Week's Curated Drops</h2>
        <a href="#" className="text-sm underline">View All</a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {curatedDrops.map((item, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow relative group">
            <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
            <button className="absolute top-2 right-2 bg-white rounded-full p-1 text-gray-600 hover:text-red-500">
              <FaHeart size={16} />
            </button>
            <div className="p-2 text-center text-black font-medium">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuratedDrops;
