"use client";

import React from "react";

import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaNodeJs,
	FaDocker
} from "react-icons/fa";
import { 
	FaPeopleGroup, 
	FaHeartPulse, 
	FaHandshakeAngle, 
	FaScaleBalanced, 
	FaPeopleRoof, 
	FaUserShield, 
	FaHandHoldingMedical
 } from "react-icons/fa6";

import {
	SiTailwindcss,
	SiSelenium,
	SiKubernetes,
} from "react-icons/si";

//about data
const about = {
	title: "About me",
	description:
		"Mary is a Quality Assurance professional and Social Worker with a strong background in process auditing, risk mitigation, and automated testing using Selenium. She leverages her rigorous evaluative frameworks to systematically design, monitor, and deliver highly effective community support programs. Deeply committed to social equity, Mary dedicates her expertise to community building and advocacy, collaborating with Women World of Health and the Gender and Reproductive Health Advocacy Youth Network (GRAY). Her unique blend of analytical precision and dedicated human-centered advocacy makes her an exceptional asset to both technical and community-driven initiatives.",
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
		"With 3 years of experience in the tech sector specializing in Quality Assurance and 7 years of dedicated experience in Social Work, I bring a versatile skill set for optimizing complex systems and delivering impactful community solutions. I ensure operational and regulatory compliance through rigorous process auditing, risk mitigation, and automated testing with Selenium. On the human services front, I leverage my deep field experience to systematically design, monitor, and deliver highly effective community support programs. My advocacy journey includes long-term strategic collaborations with Women World of Health and the Gender and Reproductive Health Advocacy Youth Network (GRAY) to drive public health equity and youth empowerment. This broad expertise allows me to bridge the gap between technical precision and senior human-centered excellence.",
	items: [
		{
			company: "Pigeonulta",
			position: "Quality Assurance Engineer",
			duration: "2023 - Present",
		},
		{
			company: "Women World of Health",
			position: "Women Health Advocate",
			duration: "2019 - Present",
		},
		{
			company: "Gender and Reproductive Health Advocacy Youth Network (GRAY)",
			position: "STEM & Health Advocate",
			duration: "2019 - Present",
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

type EducationItem = {
	Institution: string;
	duration: string;
	Degree?: string;
	Training?: string;
};

//educational data
const education: {
	icon: string;
	title: string;
	description: string;
	items: EducationItem[];
} = {
	icon: "",
	title: "My education",
	description:
		"Starting with a Bachelor of Education from the University of Cape Coast, I transitioned into tech through intensive programming bootcamps at MEST Africa and ALX Africa. This foundation launched my current dual path: 3 years of technical experience in Quality Assurance and 7 years of deep-rooted experience in Social Work. I focus on system workflow optimization, risk mitigation, and automated testing using Selenium, while simultaneously designing and delivering vital community support programs alongside Women World of Health and the GRAY network. This allows me to bridge the gap between systematic precision and human-centered excellence.",
	items: [
		{
			Institution: "Goethe Institute",
			Degree: "A1 German Language Certification",
			duration: "February/2025 - September/2025",
		},
		{
			Institution: "University of Cape Coast",
			Degree: "Bachelor of Education in Social Stuies",
			duration: "August/2015 - September/2019",
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

		
	],
};

//skills
const skills = {
	title: "My skills",
	description:
		"Leveraging 3 years of tech industry experience and a rich 7-year background in Social Work, I specialize in building reliable systems and driving impactful community change. As a Quality Assurance professional, I bring structural precision to workflows using process auditing, Object-Oriented Programming (OOP) fundamentals, and automated Selenium test scripts to eliminate bugs and protect data integrity. I translate these systematic processes directly into my social work advocacy to manage case logistics, mitigate organizational risks, and deliver secure, compliant public health initiatives",
	skilllist: [
		{
			icon: <SiSelenium />,
			name: "selinium",
		},
		{
			icon: <FaUserShield />,
			name: "community service",
		},
		{
			icon: <FaHandshakeAngle />,
			name: "community Service",
		},
		{
			icon: <FaPeopleRoof />,
			name: "people",
		},
		{
			icon: <FaScaleBalanced />,
			name: "community service",
		},
		{
			icon: <FaHeartPulse />,
			name: "care",
		},
		{
			icon: <FaPeopleGroup />,
			name: "social Work Advocacy",
		},
		{
			icon: < FaHandHoldingMedical/>,
			name: "social Work Advocacy",
		},
		{
			icon: <FaHtml5 />,
			name: "html 5",
		},
		{
			icon: <SiTailwindcss />,
			name: "tailwind.css",
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
			icon: <FaNodeJs />,
			name: "node.js",
		},		
		{
			icon: <SiKubernetes />,
			name: "kubernetes",
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

import { ScrollArea } from "@/components/ui/scroll-area";
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
					<div className="min-h-[70px] w-full">
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
															{item.Degree ?? item.Training}
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
												<li>
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
