"use client";
import React from "react";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { title } from "process";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Looking to boost your online presence with modern web technology? I offer expert web development services using ReactJS, NextJS, NodeJS and TailwindCSS. From building fast, interactive interfaces to creating stylish, responsive designs, I provide solutions that are both powerful and user-friendly. ReactJS and Angular let me craft dynamic, scalable applications, while NextJS ensures top-notch performance and SEO. With TailwindCSS, I design beautiful and adaptable websites that fit your needs. Let’s create something amazing together",
    href: "",
  },
  {
    num: "02",
    title: "Front-end Development",
    description:
      "I specialize in crafting stunning, high-performance user interfaces using JavaScript, React, Angular, and TailwindCSS. With JavaScript, I create interactive features that engage users. React and Angular ensure dynamic, scalable applications that adapt to your needs, while TailwindCSS delivers sleek, responsive designs that look great on any device. Let’s work together to transform your vision into a seamless, captivating web experience that stands out and performs flawlessly.",
    href: "",
  },
  {
    num: "03",
    title: "Developmnet Operation Engineer",
    description:
      "I offer top-notch DevOps services to optimize your development and deployment processes using Docker, Kubernetes, and AWS. With Docker, I package your applications for consistent and efficient deployment across environments. Kubernetes orchestrates these containers, ensuring scalability and reliability for your applications. AWS provides the cloud infrastructure to support robust, scalable, and secure solutions. Together, these tools enhance your workflow, improve efficiency, and accelerate your time-to-market. Let’s streamline your operations and take your infrastructure to the next level!",
    href: "",
  },
  {
    num: "04",
    title: "Back-end",
    description:
      "I specialize in creating powerful backends using Flask, PostgreSQL, MongoDB, Jasmine, and Karma. Flask provides a flexible framework for rapid development, while PostgreSQL and MongoDB offer efficient and scalable data management solutions tailored to your needs. Jasmine and Karma ensure your backend is thoroughly tested for reliability and performance. By integrating these technologies, I deliver a robust, scalable, and well-tested backend that drives your application's success and adapts as your business grows.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between item-center ">
                  <div
                    className="text-5xl 
                  font-extrabold text-outline
                   text-transparent group-hover:text-outline-hover
                    transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px]
                     rounded-full bg-white
                      group-hover:bg-accent
                       transition-all duration-500 
                       flex justify-center items-center 
                       hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2
                  className="text-[42px] 
                font-bold leading-none 
                text-white group-hover:text-accent
                 transition-all duration-500"
                >
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60 text-left">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
