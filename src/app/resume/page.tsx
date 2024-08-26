"use client";

import { Description } from "@radix-ui/react-dialog";
import React from "react";

import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaNodeJs,
	FaDocker,
	FaAngular,
} from "react-icons/fa";

import {
	SiTailwindcss,
	SiNextdotjs,
	SiKubernetes,
	SiFlask,
} from "react-icons/si";

//about data
const about = {
	title: "About me",
	description:
		"Mary is a DevOps Software Engineer with strong expertise in Python, Angular, Kubernetes, and Docker. She has a deep passion for DevOps and programming, specializing in Docker and Kubernetes. Mary is committed to community building and advocacy, dedicating her free time to supporting girls and women in STEM through GRAY (Gender and Reproductive Advocacy Youth Network) and proudly contributing to Black Sisters in STEM. Her dedication to both technical excellence and community impact makes her a valuable asset to any team",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Mary Kwawu",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+233) 055 366 5379",
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
		"With three years in web and backend development, I bring a versatile skill set for complex projects. I build scalable applications with Flask, manage data using PostgreSQL and MongoDB, and ensure reliability through Jasmine and Karma testing. On the frontend, I design engaging interfaces with JavaScript, ReactJS, Angular, and TailwindCSS. My DevOps experience includes Docker and Kubernetes for efficient containerization, along with AWS and Azure for secure, scalable cloud solutions. This broad expertise allows me to deliver innovative and tailored solutions that exceed expectations.",
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
		"Starting with a Bachelor of Education in Social Studies from the University of Cape Coast, I pivoted to tech through MEST Africa’s bootcamp, mastering React, MongoDB, and Node.js. My journey continued with a rigorous program at ALX Africa, earning an Associate Degree in programming fundamentals. Now, I’m enhancing my skills with a Linux Foundation scholarship, pursuing the Certified Kubernetes Administrator certification.",
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
		"I’m a skilled software developer proficient in Python, Node.js, and JavaScript, with deep expertise in DevOps tools like Kubernetes, Docker, AWS, and Azure. I build robust REST APIs with Flask and craft dynamic frontends using Angular. My experience with PostgreSQL and MongoDB ensures top-notch data management. I maintain code integrity with Git, automate testing with Jasmine and Karma, and utilize IDEs like PyCharm, VSCode, and IntelliJ. Applying OOP, TDD, and Agile methodologies, I deliver high-quality, innovative solutions that exceed expectations.",
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
			icon: <SiFlask />,
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
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
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
								<p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
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
								<p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
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
									<p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
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
								<p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
									{about.description}
								</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-[620px] mx-auto xl:mx-0">
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
