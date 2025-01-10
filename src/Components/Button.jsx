import React from "react";

const Button = ({ coloured, content }) => {
  const backgroundColor = coloured ? "#d5e3bb" : "white";

  return (
    <button
      className={`px-3 py-2 ${
        coloured ? "bg-[#d5e3bb]" : "bg-white"
      } text-2xl border-[#a3c169] border-2 rounded-md text-[16px] drop-shadow-lg hover:text-white hover:bg-[#a3c169] duration-500`}
    >
      {content || "Button"}
    </button>
  );
};

export default Button;
