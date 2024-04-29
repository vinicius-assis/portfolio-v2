"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BrandLogo } from "../Icons";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{ scale: 1.1 }}
      >
        <BrandLogo />
      </MotionLink>
    </div>
  );
};

export default Logo;
