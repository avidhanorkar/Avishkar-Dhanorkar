import React from "react";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="h-[100vh]  flex flex-row ">
      <div className="h-full w-[100%] z-10">
       <Navbar />
        <div className="mt-[100px] flex flex-col gap-[20px]">
            <p className="text-2xl">Hello!  🍢</p>
            <p className="text-[70px] font-lora font-[700] leading-none"> I'm Avishkar Dhanorkar. <br />A design-minded Full Stack Developer.</p>
            <p className="text-2xl">I craft digital experiences that bridge gaps, connect people, and turn the world into a thriving web of possibilities!</p>
        </div>
        <SocialLinks/>
        
        <div className="mt-[50px]">
            <Button content={"Email Me"}/>
        </div>
        <div className="w-[40vw] bg-[#fbf2ba] h-[100%] absolute right-0 top-0 -z-10">
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
