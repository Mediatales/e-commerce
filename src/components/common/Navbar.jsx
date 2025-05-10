"use client"
import { useState } from "react";
import { FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Blue Bar */}
      <div className="w-full h-4 bg-cyan-800" />

      {/* Main Navbar */}
      <div className="px-4 py-3 shadow flex items-center justify-between bg-white">
        {/* Logo */}
        <div className="text-lg font-semibold text-black">Swiftbuy</div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-4 max-w-2xl text-black">
          <input
            type="text"
            placeholder="Search for products, categories..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5">
          <button className="flex items-center gap-2 px-3 py-1 bg-cyan-100 text-sm rounded-full border text-gray-700">
            <FaUser />
            <span>Sign in</span>
          </button>
          <a href="#" className="text-sm text-gray-700">Home</a>
          <a href="#" className="text-sm text-gray-700">Category</a>
          <FaHeart className="text-lg text-gray-700 cursor-pointer" />
          <FaShoppingBag className="text-lg text-gray-700 cursor-pointer" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-3 bg-white shadow-md flex flex-col gap-3">
          <input
            type="text"
            placeholder="Search for products, categories..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
          />
          <button className="flex items-center gap-2 px-3 py-1 bg-cyan-100 text-sm rounded-full border text-gray-700">
            <FaUser />
            <span>Sign in</span>
          </button>
          <a href="#" className="text-sm text-gray-700">Home</a>
          <a href="#" className="text-sm text-gray-700">Category</a>
          <div className="flex gap-4 mt-2">
            <FaHeart className="text-lg text-gray-700 cursor-pointer" />
            <FaShoppingBag className="text-lg text-gray-700 cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

