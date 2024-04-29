import React from "react";
import SkillBadge from "../SkillBadge";

const skillsData = [
  { name: "Web" },
  { name: "CSS", x: "-5vw", y: "-10vw" },
  { name: "HTML", x: "-20vw", y: "2vw" },
  { name: "Javascript", x: "20vw", y: "6vw" },
  { name: "ReactJS", x: "0vw", y: "12vw" },
  { name: "NextJS", x: "-20vw", y: "-15vw" },
  { name: "NodeJS", x: "15vw", y: "-12vw" },
  { name: "TailwindCSS", x: "32vw", y: "-5vw" },
  { name: "Material-UI", x: "0vw", y: "-20vw" },
  { name: "Jest", x: "-25vw", y: "18vw" },
  { name: "Cypress", x: "18vw", y: "18vw" },
];

const SkillSection = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        {skillsData.map(({ name, x, y }) => (
          <SkillBadge key={name} name={name} positionX={x} positionY={y} />
        ))}
      </div>
    </>
  );
};

export default SkillSection;
