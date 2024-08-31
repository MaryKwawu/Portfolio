import React from "react";
import { motion } from "framer-motion";

const StairAnimation = {
	initial: {
		top: "0%",
	},
	animate: {
		top: "100%",
	},
	exit: {
		top: ["100%", "0%"],
	},
};

//calculate the reverse index for staggered delay
const reverseIndex = (index: number) => {
	const totalSteps = 6; // number of steps
	return totalSteps - index - 1;
};

const Stairs = () => {
	return (
		<>
			{/* render 6 motion dive, each representing a step of the stairs 
            Each div will have the same animationdefined by staisAnimation object
            The delay for each div is calculated simulataneously based on it's recovery index
            creating a staggered effect with decreacing delay for each subsequent step 
        */}
			{[...Array(6)].map((_, index) => {
				return (
					<motion.div
						key={index}
						variants={StairAnimation}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={{
							duration: 0.4,
							ease: "easeInOut",
							delay: reverseIndex(index) * 0.1,
						}}
						className="h-full w-full bg-white relative"
					/>
				);
			})}
		</>
	);
};

export default Stairs;
