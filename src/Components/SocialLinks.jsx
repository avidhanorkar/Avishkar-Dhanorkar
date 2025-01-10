import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex gap-[20px] lg:gap-[50px] mt-[20px] lg:mt-[50px]">
      <a href="https://www.linkedin.com/in/avishkar23/">
        <img src="/LinkedIn.svg" alt="" />
      </a>

      <a href="http://www.instagram.com/this.avishkar">
        <img src="/Instagram.svg" alt="" />
      </a>

      <a href="https://github.com/avidhanorkar">
        <img src="/GitHub.svg" alt="" />
      </a>

      <a href="https://x.com/avidhanorkar23">
        <img src="/Twitter.svg" alt="" />
      </a>
    </div>
  );
};

export default SocialLinks;
