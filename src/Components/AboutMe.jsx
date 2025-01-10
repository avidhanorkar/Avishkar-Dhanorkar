import React from "react";

const AboutMe = ({id}) => {
  return (
    <div className="min-h-[100vh] max-h-[120] w-full flex" id={id} >
      <div className="flex flex-col w-full lg:w-1/2  ">
        <h1 className="font-lora text-[50px] lg:text-[70px] mt-[30px] lg:mt-[50px] font-[700]">About Me</h1>

        <div className="w-full  h-[70vh] text-[16px] lg:text-[20px]">
          <p>
            I am a highly motivated and results-oriented{" "}
            <span className="font-bold">Full Stack Web Developer</span> with a
            passion for creating web solutions. I have a strong foundation in
            HTML, CSS, JS along with ReactJS, NodeJS, MongoDB and much more. I
            am a quick learner and a strong advocate for continuous improvement.
            I am always eager to explore new technologies, expand my skillset,
            and contribute to projects that have a positive impact. I am a
            highly collaborative team player with excellent communication and
            interpersonal skills. I am currently seeking opportunities to
            Software Developer Engineer Roles where I can use my expertise to
            create solutions for the real world problems. <br /> <br /><span className="lg:hidden block xl:block">I am excited to
            connect with you and discuss how my skills and experience can
            contribute to your team's success.</span>
          </p>
        </div>
      </div>
      <div className="hidden w-1/2 h-[100vh] lg:flex items-center justify-center">
        <img
          src="/ME.png"
          className="rounded-md bg-slate-700 h-[600px] w-[420px] object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutMe;
