import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="h-[15vh] lg:h-[10vh] bg-[#fbf2ba] flex items-center justify-center">
      <p className="text-center">
        Copyright © Avishkar Dhanorkar {year} - designed and developed by me
      </p>
    </div>
  );
};

export default Footer;
