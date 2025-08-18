import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuLaptop } from "react-icons/lu";
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
    title: "Freelance Frontend Developer",
    location: "Remote",
    description:
      "Worked on freelance projects where I built modern, responsive UIs from scratch using Next.js and Tailwind CSS. Translated Figma designs into production-ready components and optimized performance with SSR/SSG and lazy loading.",
    icon: React.createElement(LuLaptop),
    date: "2025",
},

{
  title: "B&IYA – Innovation & Legal Collaboration Platform",
  location: " Jaipur Rajasthan",
  description:
    "I designed and developed B&IYA, a platform aimed at bridging the gap between inventors, attorneys, and innovators. With a user-centric interface and intuitive features, it streamlines collaboration and enhances connection among legal professionals and creators. This project enhanced my skills in front-end development, UX/UI design, and real-world product implementation.",
  techStack: [
    "Next.js", 
    "Tailwind CSS", 
    "React", 
    "JavaScript", 
    "Framer Motion", 
    "Vercel (Deployment)"
  ],
  icon: React.createElement(CgWorkAlt),
  date: "2024 – 2025",
}
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
  title: "B&IYA – Innovation & Legal Collaboration Platform",
  description: `Built a user-centric platform to streamline collaboration between inventors, attorneys, and innovators. Focused on intuitive UI/UX, smooth interaction flow, and scalable front-end architecture to support legal and creative professionals.`,
  tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
  imageUrl: corpcommentImg, // Replace with your actual image import or file reference
}
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
