import React from "react";
import CuratedDrops from "./CuratedDrops";
import FeaturedAndEssentials from "./FeaturedAndEssentials";

const categories = [
  {
    name: "Fashion",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746860415/img_content_2_xe3vro.png",
  },
  {
    name: "Electronics",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746860415/img_content_2_xe3vro.png",
  },
  {
    name: "Home & Living",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746860415/img_content_2_xe3vro.png",
  },
  {
    name: "Footwear",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746860415/img_content_2_xe3vro.png",
  },
  {
    name: "Beauty Product",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746860415/img_content_2_xe3vro.png",
  },
  {
    name: "Gifts & Bundles",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746860415/img_content_2_xe3vro.png",
  },
];

const TopCategory = () => {
  return (
    <div>
        <div className="bg-white">
      {/* Banner */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <img
          src="https://res.cloudinary.com/dqggm4k7u/image/upload/v1746860366/bg_xlrlio.png"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Step Into the Future</h2>
          <p className="text-sm sm:text-base mb-4">
            Experience next-gen comfort & tech with our Spring 2025 sneaker collection.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full text-sm sm:text-base">
            Shop Now
          </button>
        </div>
      </div>

      {/* Top Category Section */}
      <div className="py-6 px-4">
        <h2 className="text-xl font-semibold mb-4 text-black">Top Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-30 h-20 rounded-none overflow-hidden shadow">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm text-black font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <CuratedDrops/>

    <FeaturedAndEssentials/>
    </div>
  );
};

export default TopCategory;
