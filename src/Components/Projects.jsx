import React from "react";
import Button from "./Button";

const Projects = ({id}) => {
  const projects = {
    StoryGrid: {
      name: "StoryGrid",
      desc: "A blog platform with CRUD features, user authentication, and interactive engagement.",
      img: "/StoryGrid.png",
      tags: ["ReactJS", "TailwindCSS", "MongoDB"],
      github: "https://github.com/yourusername/storygrid", // Replace with your actual GitHub link
      liveLink: "", // Replace with your actual live project link
    },
    LocalDukaan: {
      name: "Local Dukaan",
      desc: "An e-commerce platform for empowering local businesses with online presence.",
      img: "/LocalDukaan.png",
      tags: ["ReactJS", "TailwindCSS", "HTML", "CSS"],
      github: "https://github.com/yourusername/localdukaan", // Replace with your actual GitHub link
      liveLink: "https://local-dukaan.vercel.app/", // No live link indicates it's in development
    },
    DevClash: {
      name: "DevClash",
      desc: "A coding competition platform with real-time tracking and responsive design.",
      img: "/devclash.png",
      tags: ["ReactJS", "HTML", "CSS"],
      github: "https://github.com/yourusername/devclash", // Replace with your actual GitHub link
      liveLink: "https://www.devclash.tech",
    },
  };

  return (
    <div className="flex flex-col" id={id}>
      <h1 className="font-lora text-[70px] mt-[50px] font-[700]">
        Some Projects
      </h1>

      <div className="flex flex-col items-center my-[50px] space-y-[50px]">
        {Object.entries(projects).map(([key, project]) => (
          <div
            key={key}
            className="w-[70vw] h-[50vh] rounded-md border-2 border-[#f4dd52] p-[30px] flex flex-row justify-between"
          >
            <div className="w-[40%] flex flex-col gap-[20px]">
              <h1 className="font-lora text-[40px] font-[700]">
                {project.name}
              </h1>
              <div className="flex flex-row justify-start items-center gap-[25px]">
                <Button
                  content={
                    project["liveLink"]
                      ? "See It in Action"
                      : "In Development"
                  }
                  coloured
                />
                <a href={`${project.github}`} target="_blank" rel="noopener noreferrer">
                  <img src="/GitHub.svg" alt="" />
                </a>
              </div>
              <p className="mt-[10px] text-[16px]">{project.desc}</p>
              <div className="flex flex-wrap mt-[10px] gap-[5px]">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-[10px] py-[5px] bg-gray-200 text-gray-800 rounded-full text-[14px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
              <img
                src={project.img}
                className="h-full w-full object-contain"
                alt={project.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
