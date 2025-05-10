import React from "react";

const Section = ({ title, products }) => {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-black">{title}</h2>
        <a href="#" className="text-sm text-blue-600 font-medium">View More &gt;</a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg border shadow-sm overflow-hidden p-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />
            <div className="mt-2 text-sm font-medium text-black">{product.name}</div>
            <div className="flex items-center gap-2 text-sm mt-1">
              <span className="text-black">${product.price}</span>
              {product.discount && (
                <span className="text-green-600 font-semibold">{product.discount}</span>
              )}
            </div>
            <button className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded mt-2 hover:bg-red-600">
              Shop The Drop
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const products1 = [
  {
    name: "StealthLayer Reflex Jacket",
    price: 210,
    discount: "25% off",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746861540/img_content_3_kj9e9f.png",
  },
  {
    name: "Midnight Circuit Cargo Pants",
    price: 210,
    discount: "15% off",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746861540/img_content_3_kj9e9f.png",
  },
  {
    name: "PulseRider Modular Hoodie",
    price: 210,
    discount: "20% off",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746861540/img_content_3_kj9e9f.png",
  },
  {
    name: "ShadowRun Urban Sneakers",
    price: 210,
    discount: "30% off",
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746861540/img_content_3_kj9e9f.png",
  },
];

const products2 = [
  {
    name: "Aromatherapy Diffuser",
    price: 210,
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746861725/img_content_4_uhexcd.png",
  },
  {
    name: "Aromatherapy Diffuser",
    price: 210,
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746861725/img_content_4_uhexcd.png",
  },
  {
    name: "SmartGlow Lighting Panel",
    price: 210,
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746861725/img_content_4_uhexcd.png",
  },
  {
    name: "Glass & Walnut Serving Set",
    price: 210,
    image: "https://res.cloudinary.com/dqggm4k7u/image/upload/v1746861725/img_content_4_uhexcd.png",
  },
];

const FeaturedAndEssentials = () => {
  return (
    <div className="bg-[#f5fafa]">
      <Section title="Featured Products" products={products1} />
      <Section title="Home Essentials" products={products2} />
    </div>
  );
};

export default FeaturedAndEssentials;
