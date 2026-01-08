import React from "react";
import { Link } from "react-router";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-16 py-4 border-b bolder-gray-700">
        <h1 className="text-xl font-bold flex justify-between items-center">
          <User className="w-8 h-8 text-orange-500 mr-4 border-2 border-orange-500 rounded-full" />
          Royal Portfolio
        </h1>
        <ul className="flex gap-8 text-gray-300">
          <Link to="">Home</Link>
          <Link to="about">About</Link>
          <Link to="education">Education</Link>
          <Link to="projects">Projects</Link>
          <Link to="contact">Contact</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
