import { projects } from "../Project";

import "../App.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
const Project = () => {
  const { scrollYProgress } = useScroll();
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const Project = useRef();
  return (
    <motion.div
      ref={Project}
      style={{ opacity: scaleTransform }}
      viewport={{ once: true }}
      className="mx-auto w-full mt-[15rem] bg-[#121212] px-20 md:px-5"
      id="Projects"
    >
      <div className="flex items-center">
        <h1 className="text-[3rem] font-['Baskervville_SC'] md:text-[2rem]">
          Projects
        </h1>
        <div className="w-[20rem] bg-[rgb(255,1,79)] h-[1px] mt-4 ml-4 md:w-[10rem]"></div>
      </div>
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className="mt-10 flex justify-center md:flex-col md:items-center "
          >
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt="Movix"
                className="w-[80rem] mb-5 md:w-[140rem]"
              />
            </motion.div>
            <motion.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex direction-col ml-10"
            >
              <div className="bg[#242424] -ml-[2.5rem]">
                <div className="lg:mx-6">
                  <div className="flex items-center ">
                    <h1 className="text-[rgb(255,1,79)] text-[3rem] transition-all duration-500 -mt-3 mb-3 md:text-[2rem]">
                      {project.title}
                    </h1>
                    <div className="flex items-center justify-center ml-20 md:-mt-1">
                      <a
                        href="https://github.com/shinzenko/Movix/"
                        className="hover:underline mb-3 "
                        target="_blank"
                      >
                        <FaGithub size={18} color="rgb(255,1,79)" />
                      </a>
                      <a
                        href="https://movixwebsite.netlify.app/"
                        className="hover:underline ml-6 mb-3"
                        target="_blank"
                      >
                        <FaExternalLinkAlt size={18} color="rgb(255,1,79)" />
                      </a>
                    </div>
                  </div>
                  <div className="bg-[#242424] py-6 px-3 shad font-['Neue_Montreal']">
                    <span>{project.description}</span>
                  </div>
                </div>
                <div className="flex item-center gap-5 text-[rgb(255,1,79)] mt-4 lg:mx-6">
                  {project.technology.map((content, index) => {
                    return (
                      <div
                        key={index}
                        className="py-1 px-2 cursor-pointer bg-[#141414]"
                      >
                        <span>{content}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Project;
