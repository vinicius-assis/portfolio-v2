"use client";
import React from "react";
import { motion } from "framer-motion";

const SocialLink = ({ children, href }) => {
  return (
    <motion.a
      className="w-7"
      href={href}
      target="_blank"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};

export default SocialLink;
