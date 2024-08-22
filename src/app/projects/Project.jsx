"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
export default function Project({ name, description, date, demoLink }) {
  return (
    <ProjectLink
    variants={item}
    href={demoLink}
    target={"_blank"}
      style={{
        background: "#7851a9B3",
        height: "150px",
        width: "90vw",
        border: "2px solid rgba(183, 110, 121, .8)",
        padding: "24px",
        color: "#FFFFF4",
        borderRadius: "10px",
      }}
      className="flex flex-row items-center justify-between w-full relative rounded-lg overflow-hidden p-12 backdrop-blur-[12px] shadow-glass-inset hover:shadow-glass-sm"
    >
      <div
        className="flex flex-col items-left justify-between"
        style={{
          width: "600px",
        }}
      >
        <h1>{name}</h1>
        <p className="hidden sm:inline-block">{description}</p>
      </div>
      <div
        className="self-end flex-1 mx-2 mb-1 flex flex-col items-center justify-center"
        style={{
          height: "140px",
          width: "100px",
        }}
      >
        <p>{new Date(date).toDateString().slice(4)}</p>
      </div>
    </ProjectLink>
  );
}
