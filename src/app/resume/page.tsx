"use client";

import { Description } from "@radix-ui/react-dialog";
import React from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nisi deleniti. Recusandae repellendus alias minus tempore neque nobis earum eaque distinctio reprehenderit quis! At in obcaecati deleniti ipsam temporibus? Quidem!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mary Kwawu",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+233) 5533665379",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ghanaian",
    },
    {
      fieldName: "Email",
      fieldValue: "kwawumary@gmail.com",
    },

    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English",
    },
  ],
};

// experience data
const Experience = {
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nisi deleniti. Recusandae repellendus alias minus tempore neque nobis earum eaque distinctio reprehenderit quis! At in obcaecati deleniti ipsam temporibus? Quidem!",
  items: [
    {
      company: "Pigeon Ulta",
      position: "Front-end Developer",
      duration: "2023 - Present",
    },
    {
      company: "Tia Cloud",
      position: "Development Operation Engineer",
      duration: "2024 - Present",
    },
    {
      company: "Turnntabl",
      position: "Software Engineer",
      duration: "2021 - 2022",
    },
  ],
};

//educational data
const education = {
  icon: "",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nisi deleniti. Recusandae repellendus alias minus tempore neque nobis earum eaque distinctio reprehenderit quis! At in obcaecati deleniti ipsam temporibus? Quidem!",
  items: [
    {
      Institution: "Linux Foundation",
      Certification: "Certified Kubernetes Administrator",
      duration: "June/2024 - June/2025",
    },

    {
      Institution: "ALX Africa",
      Degree: "Associate Degree in Software Engineering",
      duration: "November/2022 - February/2024",
    },

    {
      Institution: "PreMest",
      Training: "Full Stack Development Bootcamp",
      duration: "February/2021 - April/2021",
    },

    {
      Institution: "University of Cape Coast",
      Degree: "Bachelor of Education in Social Stuies",
      duration: "August/2015 - September/2019",
    },
  ],
};

//skills
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nisi deleniti. Recusandae repellendus alias minus tempore neque nobis earum eaque distinctio reprehenderit quis! At in obcaecati deleniti ipsam temporibus? Quidem!",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "nextjs",
    },

    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figman",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center jstify-center py-12 xl:py-0"
    >
      <div className="contain mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList
            className="flex
          flex-col
           w-full
            max-w-[380px]
             mx-auto
              xl:mx-0 gap-6"
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70] w-full">
            {/* expeirence */}
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
