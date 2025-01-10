import React from "react";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="lg:h-[100vh] h-fit flex flex-row ">
      <div className="h-full w-full z-10">
        <Navbar />
        <div className="mt-[50px] lg:mt-[100px] flex flex-col gap-[20px]">
          <p className="text-2xl">Hello! 🍢</p>
          <p className="text-[50px] lg:text-[70px] font-lora font-[700] leading-none">
            {" "}
            I'm Avishkar Dhanorkar. <br />A design-minded Full Stack Developer.
          </p>
          <p className="lg:text-2xl text-[18px]">
            I craft digital experiences that bridge gaps, connect people, and
            turn the world into a thriving web of possibilities!
          </p>
        </div>
        <SocialLinks />

        <div className="mt-[20px] lg:mt-[50px]">
          <a href="mailto:avidhanorkar23@gmail.com">
            <Button content={"Mail Me"} />
          </a>
        </div>
        <div className="sm:hidden lg:block lg:w-[40vw] bg-[#fbf2ba] h-[100%] absolute right-0 top-0 -z-10"></div>
      </div>
    </div>
  );
};

export default Hero;
