import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navlink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <Link className={`${className} relative group`} href={href}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          currentPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default Navlink;
