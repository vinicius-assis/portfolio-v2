import React, { useRef } from "react";
import { motion } from "framer-motion";
import ExperienceStepIcon from "../ExperienceSection/ExperienceStepIcon";

const ExperienceItem = ({
  position,
  company,
  companyLink,
  time,
  address,
  description,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <ExperienceStepIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            className="text-primary capitalize"
            href={companyLink}
            target="_blank"
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{description}</p>
      </motion.div>
    </li>
  );
};

export default ExperienceItem;
