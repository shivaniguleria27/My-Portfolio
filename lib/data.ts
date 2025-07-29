import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import portfImg from "@/public/portf.png";
import corpcommentImg from "@/public/corpcomment.png";
import gamingImg from "@/public/gaming.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from RTU Kota",
    location: "Rajasthan, India",
    description:
      "I will graduate in April 2025 after completing my engineering degree. I'm excited to pursue a career as a front-end developer and bring my skills to the industry.",
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },
  {
    title: "Student Activity Center (SAC) Framework Creator",
    location: "Kota, Rajasthan",
    description:
      "I designed and developed the SAC framework , enabling the creation and management of clubs, activities, and ensuring data privacy between different club admins. This project honed my skills in front-end development and project management.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "gaming- Website",
    description: `An award-winning interactive design brought to live website featuring engaging animations and responsive design.`,
    tags: ["React", "Next.js", "MongoDB", "Tailwind", ],
    imageUrl: gamingImg,
  },
  {
    title: "Portfolio -Website",
    description:
      "Developed a fully responsive and customizable personal portfolio website with the latest technologies and responsive design.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", ],
    imageUrl: portfImg,
  },
  {
    title: "SAC framework",
    description: `Developed a scalable, multi-user platform for managing student clubs and tracking their activities, incorporating
robust data security measures.`,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Django",
  "Django REST framework",
  "Express",
  "Framer Motion",
  "Figma",
  "SCSS",
] as const;
