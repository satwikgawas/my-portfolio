import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <section id="projects" className="px-16 py-20 border-t border-gray-700">
        <h2 className="text-2xl font-bold mb-6">My Projects</h2>
        <div className="grid grid-cols-3 gap-6">
          <ProjectCard
            title="E-Commerce Website"
            tech="React Js, Node Js & MongoDB"
          />
          <ProjectCard title="Food Recipe App" tech="React Js & Tailwind CSS" />
          <ProjectCard
            title="Portfolio Website"
            tech="React Js & Tailwind CSS"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
