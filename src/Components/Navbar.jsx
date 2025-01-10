import React, { useRef } from "react";
import { HashLink } from "react-router-hash-link";
const Navbar = ({ scrollToAbout }) => {
  return (
    <>
      <div className="h-[10vh] pt-[18px] navbar flex justify-between items-center">
        <div>
          <p className="text-[30px] text-center">
            Avishkar <br /> Dhanorkar
          </p>
        </div>

        <div className="flex gap-[50px]">
          <p
            className="text-[24px] cursor-pointer underline"
            onClick={scrollToAbout}
          >
            <HashLink smooth to={"#about"}>
              About Me
            </HashLink>
          </p>
          <p
            className="text-[24px] cursor-pointer underline"
            onClick={scrollToAbout}
          >
            <HashLink smooth to={"#projects"}>
              Projects
            </HashLink>
          </p>
          <p
            className="text-[24px] cursor-pointer underline"
            onClick={scrollToAbout}
          >
            <HashLink smooth to={"#contact-me"}>
              Contact Me
            </HashLink>
          </p>
          <a href="/AvishkarResume.pdf">
            <p className="text-[24px] cursor-pointer underline">Resume</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
