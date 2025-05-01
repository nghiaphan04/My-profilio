'use client'
import React, { useState } from "react";
import { motion } from "framer-motion"; 
import Sidebar from "../../../components/Sidebar";
import ExperienceCard from "../../../components/ExperienceCard";
import SkillItem from "../../../components/SkillItem";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function ResumePage() {
  const [selectedTab, setSelectedTab] = useState("Experience");

  const experiences = [
    { year: "2020 - 2021", title: "Freelance Web Developer", company: "E-commerce Startup" },
    { year: "2019 - 2020", title: "Teaching Assistant", company: "Tech Academy" },
    { year: "2018 - 2019", title: "UI/UX Designer", company: "Digital Agency" },
    { year: "2017 - 2018", title: "Junior Developer", company: "Software Development Firm" },
  ];

  const skills = [
    { icon: <FaHtml5 size={40} color="#fff" />, name: "HTML5" },
    { icon: <FaCss3Alt size={40} color="#fff" />, name: "CSS3" },
    { icon: <FaJs size={40} color="#fff" />, name: "JavaScript" },
    { icon: <FaReact size={40} color="#fff" />, name: "React" },
    { icon: <FaFigma size={40} color="#fff" />, name: "Figma" },
    { icon: <SiNextdotjs size={40} color="#fff" />, name: "Next.js" },
    { icon: <SiTailwindcss size={40} color="#fff" />, name: "Tailwind CSS" },
    { icon: <FaNodeJs size={40} color="#fff" />, name: "Node.js" },
  ];

  return (
    <section className="min-h-screen  bg-black px-4 pt-28 pb-12 md:px-12 md:pt-8 lg:px-24 text-white flex flex-col items-center justify-center">

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12 items-start">

        <Sidebar selected={selectedTab} onSelect={setSelectedTab} />
        <div className=" custom-scrollbar flex flex-col h-full min-h-[400px]">
          <div className="overflow-y-hiden  custom-scrollbar">
            {selectedTab === "Experience" && (
              <>
                <h2 className="text-3xl font-bold mb-4">My experience</h2>
                <p className="text-gray-400 mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <ExperienceCard {...exp} />
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {selectedTab === "Education" && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4">My education</h2>
                <p className="text-gray-400 mb-6">
                  Studied at Tech University, Bachelor of Computer Science, GPA 3.8/4.0. Learned full-stack development, algorithms, and UI design.
                </p>
              </motion.div>
            )}

            {selectedTab === "Skills" && (
              <>
                <h2 className="text-3xl font-bold mb-4">My skills</h2>
                <p className="text-gray-400 mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 overflow-y-hiden">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <SkillItem {...skill} />
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {selectedTab === "About me" && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5}}
              >
                <h2 className="text-3xl font-bold mb-4">About me</h2>
                <p className="text-gray-400 mb-6 leading-relaxed ">
                  I am a passionate full-stack developer based in Vietnam. I love building modern, responsive, and intuitive web experiences using React, Tailwind, and Node.js. I&apos;m also into blockchain and enjoy solving real-world problems with technology.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
