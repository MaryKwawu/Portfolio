/** @format */

"use client";

import React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/social";
import Photo from "@/components/photo";
import Stats from "@/components/stats";

const Home = () => {
	const handleDownload = () => {
		const cvUrl = "/Mary_Kwawu_CV (2).pdf";
		const link = document.createElement("a");
		link.href = cvUrl;
		link.download = "Mary_Kwawu_CV.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
		<section className="h-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
					{/* text */}
					<div className="text-center xl:text-left ordeer-2 xl:order-none">
						<span className="text-xl">
							Software Developer & DevOps Engineer
						</span>
						<h1 className="h1 mb-6 ">
							Hello I am <br /> <span className="text-accent">Mary Kwawu </span>
						</h1>
						<p className="max-w[500px] mb-9 text-white/80">
							I excel at crafting elegant digital experiences and I am
							proficient in Nextjs, Angular, Docker, Kubernetes and flask.
						</p>
						{/* btn and socials */}
						<div className="flex flex-col xl:flex-row items-center gap-8">
							<Button
								onClick={handleDownload}
								variant="outline"
								size="lg"
								className="uppercase flex items-center gap-2 "
							>
								<span>Download CV</span>
								<FiDownload className="text-xl" />
							</Button>
							<div className="mb-8 xl:mb-0">
								<Social
									containerStyles="flex gap-6"
									iconStyles="w-9 h-9 border border-accent rounded-full 
                flex justify-center items-center text-accent text-base
                 hover:bg-accent hover:text-primary hover:transition-all 
                 duration-500"
								/>
							</div>
						</div>
					</div>
					{/* photo */}
					<div className="order-1 xl:order-none mb-8  ">
						<Photo />
					</div>
				</div>
			</div>
			<Stats />
		</section>
	);
};

export default Home;
