import { projects } from "../Project";

import "../App.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Project = () => {
  const { scrollYProgress } = useScroll();
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const Project = useRef();
  return (
    <motion.div
      ref={Project}
      style={{ opacity: scaleTransform }}
      viewport={{ once: true }}
      className="mx-auto w-full mt-[15rem] bg-[#121212] px-20"
    >
      <div className="flex items-center">
        <h1 className="text-[3rem] text-[#e1e1e1] font-['Baskervville_SC'] md:text-[2rem]">
          Projects
        </h1>
        <div className="w-[20rem] bg-[rgba(255,1,79,0.8)] h-[1px] mt-4 ml-4 md:w-[10rem]"></div>
      </div>
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className="mx-auto mt-10 flex justify-center md:flex-col md:items-center bg-red"
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
                className="w-[80rem] mb-5 md:w-[90rem]"
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
                  <h1 className="text-[rgba(255,1,79,1)] text-[3rem] transition-all duration-500 -mt-3 mb-3">
                    <a
                      href="https://movixwebsite.netlify.app/"
                      className="hover:underline"
                      target="_blank"
                    >
                      {project.title}
                    </a>
                  </h1>
                  <div className="bg-[#242424] py-6 px-3 shad">
                    <span>{project.description}</span>
                  </div>
                </div>
                <div className="flex item-center gap-5 text-[rgba(255,1,79,1)] mt-4 lg:mx-6">
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
