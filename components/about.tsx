"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        After graduating with a degree in
        <span className="font-medium"> Engineering</span>, I chose to move beyond
        traditional web development and focus on building
        <span className="font-medium"> intelligent systems</span>. I work on
        transforming modern web applications into
        <span className="italic"> AI-powered solutions</span> using
        <span className="font-medium"> Generative AI</span>.
      </p>

      <p className="mb-3">
        My core skill set includes
        <span className="font-medium">
          {" "}
          Next.js, React, Python, Node.js, and databases
        </span>
        . I enjoy working end-to-end—from crafting clean user interfaces to
        integrating intelligent backend logic. What excites me most is
        <span className="underline">
          {" "}
          solving real-world problems by combining software engineering with AI
        </span>
        .
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy reading,
        creating content, editing videos, and exploring new ideas. I&apos;m
        constantly learning about
        <span className="font-medium"> AI systems, LLMs, and emerging tech</span>,
        with the goal of building scalable, impactful products.
      </p>
    </motion.section>
  );
}
