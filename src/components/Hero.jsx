import React from "react";

const Hero = () => {
  return (
    <>
      <section className="flex items-center justify-center h-100 px-16 gap-4">
        <img
          src="/profile.jpg"
          alt="profile photo"
          className="w-70 h-90 rounded-full object-cover border-4 border-green-500"
        />
        <div>
          <h1 className="text-4xl font-bold">Hello, I'm</h1>
          <h2 className="text-5xl font-bold text-blue-500 mt-2">
            Satwik Rajendra Gawas
          </h2>
          <p className="text-gray-400 mt-4">
            Full Stack Developer | Tech Enthusiast
          </p>
          <button className="mt-6 bg-blue-600 px-6 py-2 rounded">
            Download CV
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
