import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-16 py-4 border-b bolder-gray-700">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex gap-8 text-gray-300">
          <li>Home</li>
          <li>About</li>
          <li>Education</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
