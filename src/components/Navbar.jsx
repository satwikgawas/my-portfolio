import React from "react";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-16 py-4 border-b border-gray-700 fixed top-0 w-full z-50 h-20 bg-[#0b1120]">
        <h1 className="text-xl font-bold flex items-center">
          <User className="w-8 h-8 text-orange-500 mr-4 border-2 border-orange-500 rounded-full" />
          Royal Portfolio
        </h1>

        <ul className="flex gap-8 text-gray-300">
          <a href="#home" className="hover:text-orange-500">
            Home
          </a>
          <a href="#about" className="hover:text-orange-500">
            About
          </a>
          <a href="#education" className="hover:text-orange-500">
            Education
          </a>
          <a href="#projects" className="hover:text-orange-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
