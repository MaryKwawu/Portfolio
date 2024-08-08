"use client";

import { Description } from "@radix-ui/react-dialog";
import React from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFlask,
  FaDocker,
  FaAngular,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiKubernetes } from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    "Mary is a DevOps Software Engineer having experience in Python, Angular, Kubernetes, and Docker. Majorly she has been working as a DevOps Engineer with specialties in Docker and Kubernetes. She is very passionate about community Building, DevOps, Programming, and Infrastructure. She powerfully believes in the strength of community and spends her free time contributing toward advocating for girls and women in STEM, their reproductive health, and rights through an NGO foundation called GRAY (Gender and Reproductive Advocacy Youth Network) also she a proud member of Black Sisters in STEM.",
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
      fieldValue: "marykwawu3@gmail.com",
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
    "With three years of experience in web and backend development, I offer a well-rounded skill set to tackle complex projects. I excel in building scalable, high-performance applications using Flask, and I efficiently manage data with PostgreSQL and MongoDB. My approach to robust testing is supported by Jasmine and Karma, ensuring reliable and bug-free solutions. On the frontend, I create engaging and responsive user interfaces with JavaScript, ReactJS, Angular, and TailwindCSS. My DevOps expertise includes Docker and Kubernetes for seamless containerization and orchestration, complemented by AWS and Azure for scalable and secure cloud infrastructure. This diverse expertise enables me to deliver innovative, tailored solutions that drive success and exceed expectations.",
  items: [
    {
      company: "Pigeon Ulta",
      position: "Front-end Developer",
      duration: "2023 - Present",
    },
    {
      company: "Tia Cloud",
      position: "DevOps Engineer",
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
    "With a solid foundation in education from the University of Cape Coast, where I earned a Bachelor of Education in Social Studies, I transitioned into technology through intensive training at a MEST Africa bootcamp. There, I honed my skills in full stack development, mastering technologies such as React, MongoDB, and Node.js. My journey continued with ALX Africa, where I undertook a rigorous year-and-a-half program in programming fundamentals, culminating in an Associate Degree. Currently, I am further advancing my technical expertise on a prestigious scholarship from the Linux Foundation, focusing on achieving the Certified Kubernetes Administrator certification.",
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
    "I am a skilled software developer with a strong foundation in Python, Node.js, and JavaScript. My expertise spans DevOps practices with Kubernetes, Docker, AWS, and Azure, enabling me to efficiently manage and deploy scalable applications. I specialize in developing robust REST APIs using Flask and creating engaging, responsive frontends with Angular. My proficiency extends to working with both PostgreSQL and MongoDB databases, ensuring effective data management and performance. I leverage Git for version control to maintain code integrity and collaborate seamlessly. Additionally, I use Jasmine and Karma for test automation, guaranteeing the reliability and quality of applications. With experience in IDEs like PyCharm, VSCode, and IntelliJ, I apply Object-Oriented Programming (OOP), Test-Driven Development (TDD), and Agile methodologies to drive innovative solutions and deliver high-quality software that meets and exceeds client expectations.",
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
      icon: <SiKubernetes />,
      name: "kubernetes",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaAngular />,
      name: "angular",
    },
    {
      icon: <FaFlask />,
      name: "flask",
    },
    {
      icon: <FaDocker />,
      name: "docker",
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
      <div className="container mx-auto">
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
              <div className="flex flex-col  gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{Experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {Experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {Experience.items.map((item, index) => {
                      return (
                        <div key={index}>
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        </div>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col  gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <div key={index}>
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                              {item.Degree}
                              {item.Training}
                              {item.Certification}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                              <p className="text-white/60">
                                {item.Institution}
                              </p>
                            </div>
                          </li>
                        </div>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <div key={index}>
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-col-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <div key={index}>
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
