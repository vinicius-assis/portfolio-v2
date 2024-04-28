import React from "react";
import Logo from "../Logo";
import Navlink from "../Navlink";
import { GithubIcon, LinkedInIcon } from "../Icons";
import SocialLink from "../SocialLink";

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav className="flex gap-5">
        <Navlink href="/" title="Home" />
        <Navlink href="/about" title="About" />
        <Navlink href="/projects" title="Projects" />
        <Navlink href="/articles" title="Articles" />
      </nav>
      <nav className="flex gap-5">
        <SocialLink href="https://github.com/vinicius-assis">
          <GithubIcon />
        </SocialLink>
        <SocialLink href="/https://www.linkedin.com/in/vinicius-assis">
          <LinkedInIcon />
        </SocialLink>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
