import Layout from "@/template/Layout";
import Link from "next/link";
import React from "react";
import { BrandLogo } from "../Icons";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg fixed bottom-0">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          <BrandLogo className="w-[30px] h-[30px]" />
          <div className="ml-2">
            <p className="uppercase text-[0.7rem] text-dark">
              make it beautiful
            </p>
          </div>
        </div>
        <Link href="mailto:viniciusassis.dev@hotmail.com" target="_blank">
          Send me a message
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
