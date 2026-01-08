import React from "react";

const ProjectCard = ({ title, tech }) => {
  return (
    <>
      <div className="bg-[#111827] p-6 rounded">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-400">{tech}</p>
        <button className="mt-4 bg-blue-600 px-4 py-1 rounded">
          View Detail
        </button>
      </div>
    </>
  );
};

export default ProjectCard;
