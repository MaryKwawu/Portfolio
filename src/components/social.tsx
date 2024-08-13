import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";
import { icons } from "lucide-react";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/MaryKwawu" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mary-kwawu-b51693148/" },
  { icon: <FaMedium />, path: "https://medium.com/@Marietechie" },
  { icon: <FaTwitter />, path: "https://x.com/marietechie" },
];

const Social = ({ containerStyles, iconStyles }: any) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
