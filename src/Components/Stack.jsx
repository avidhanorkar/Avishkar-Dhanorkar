import React from "react";

const Stack = () => {
  const data = {
    technologies: [
      { icon: "a", Name: "JavaScript" },
      { icon: "", Name: "HTML/CSS" },
      { icon: "Java", Name: "Java" },
      { icon: "", Name: "TypeScript" },
      { icon: "", Name: "NodeJS" },
    ],
    "Libraries/Framework": [
      { icon: "", Name: "ReactJS" },
      { icon: "", Name: "TailwindCSS" },
    ],
    Tools: [
      { icon: "", Name: "Git/GitHub" },
      { icon: "", Name: "VS Code" },
      { icon: "Figma", Name: "Figma" },
      { icon: "Postman", Name: "Postman" },
    ],
    Database: [
      { icon: "", Name: "SQL" },
      { icon: "", Name: "MongoDB" },
    ],
  };

  return (
    <div className="lg:h-[60vh] ">
      <div>
        <h1 className="text-[50px] lg:text-[70px] font-lora font-[700] text-left">My Stack</h1>
      </div>
      <div className="flex lg:flex-row flex-col justify-between mt-[20px] lg:mt-[50px] gap-[20px]">
        {/* Technologies Section */}
        <div className="border-[2px] rounded-md border-[#de8f52] py-7 px-10 w-full lg:w-[300px] text-center">
          <h2 className="text-2xl font-bold mb-4 text-center w-full">Technologies</h2>
          <ul className="list-disc pl-6">
            {data.technologies.map((item, index) => (
              <li key={index} className="text-lg">
                {item.Name}
              </li>
            ))}
          </ul>
        </div>

        {/* Libraries/Framework Section */}
        <div className="border-[2px] rounded-md border-[#97b955] py-7 px-10 lg:w-[300px] w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-center w-full">Libraries</h2>
          <ul className="list-disc pl-6">
            {data["Libraries/Framework"].map((item, index) => (
              <li key={index} className="text-lg">
                {item.Name}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Section */}
        <div className="border-[2px] rounded-md border-[#f4dd52] py-7 px-10 lg:w-[300px] w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-center w-full">Tools</h2>
          <ul className="list-disc pl-6">
            {data.Tools.map((item, index) => (
              <li key={index} className="text-lg">
                {item.Name}
              </li>
            ))}
          </ul>
        </div>

        {/* Database Section */}
        <div className="border-[2px] rounded-md border-[#000] py-7 px-10 lg:w-[300px] w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-center w-full">Database</h2>
          <ul className="list-disc pl-6">
            {data.Database.map((item, index) => (
              <li key={index} className="text-lg">
                {item.Name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stack;
