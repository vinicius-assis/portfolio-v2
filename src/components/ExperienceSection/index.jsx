import React, { useRef } from "react";
import experienceData from "./experienceData";
import { motion, useScroll } from "framer-motion";
import ExperienceItem from "../ExperienceItem";

const ExperienceSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-9xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div
          ref={ref}
          className="absolute left-9 top-0.5 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {experienceData.map((experience) => (
            <ExperienceItem
              key={`${experience.company}_${experience.time}`}
              {...experience}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceSection;
