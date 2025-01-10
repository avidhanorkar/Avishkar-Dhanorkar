import React, { useRef } from "react";
import { HashLink } from "react-router-hash-link";
const Navbar = ({ scrollToAbout }) => {
  return (
    <>
      <div className="flex lg:h-[10vh] pt-[50px] navbar lg:justify-between lg:items-center">
        <div className="hidden lg:block">
          <p className="text-[30px] text-center">
            Avishkar <br /> Dhanorkar
          </p>
        </div>

        <div className="flex flex-row w-full justify-around lg:gap-[50px] overflow-hidden">
          <p
            className="text-[16px] lg:text-[24px] cursor-pointer lg:underline"
            onClick={scrollToAbout}
          >
            <HashLink smooth to={"#about"}>
              About
            </HashLink>
          </p>
          <p
            className="text-[16px] lg:text-[24px] cursor-pointer lg:underline"
            onClick={scrollToAbout}
          >
            <HashLink smooth to={"#projects"}>
              Projects
            </HashLink>
          </p>
          <p
            className="text-[16px] lg:text-[24px] cursor-pointer lg:underline"
            onClick={scrollToAbout}
          >
            <HashLink smooth to={"#contact-me"}>
              Contact
            </HashLink>
          </p>
          <a href="/AvishkarResume.pdf">
            <p className="text-[16px] lg:text-[24px] cursor-pointer lg:underline">Resume</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
