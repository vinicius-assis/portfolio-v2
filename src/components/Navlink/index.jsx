import Link from "next/link";
import React from "react";

const Navlink = ({ href, title, className = "" }) => {
  return (
    <Link className={className} href={href}>
      {title}
    </Link>
  );
};

export default Navlink;
