import { useState, useRef } from "react";
import Table from "./Table";
import { data } from "../data";
import ExperienceTable from "./ExperienceTable";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

const Experience = () => {
  const experience = useRef(null);
  const { scrollYProgress } = useScroll({
    target: experience,
    offset: ["0 1", "0.9 1"],
  });
  const [selectedId, setSelectedId] = useState(1);
  const [item, setItem] = useState(data[0]);
  const handleSelect = (val) => {
    setSelectedId(val.id);
    setItem(val);
  };
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  console.log(data);
  return (
    <section id="Experience" className="mt-[7rem]">
      <motion.div
        ref={experience}
        style={{ opacity: scaleTransform }}
        viewport={{ once: true }}
        className="mx-auto w-full mb-40 px-20 md:px-5"
      >
        <div className="flex items-center">
          <h1 className="text-[3rem] text-[#e1e1e1] font-['Baskervville_SC'] md:text-[2rem]">
            Experience
          </h1>
          <div className="w-[20rem] bg-[rgb(255,1,79)] h-[1px] mt-4 ml-4 md:w-[10rem]"></div>
        </div>
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 bg-[#121212] flex flex-col md:flex-row mx-4 md:w-[90%] "
        >
          {data.map((item) => {
            return (
              <Table
                key={item.id}
                item={item}
                handleSelect={handleSelect}
                selectedId={selectedId}
              />
            );
          })}
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-[75%] bg-[#1c1c1c] shad float-right -mt-[8rem] md:float-none md:mt-10 lg:z-[20]"
        >
          <ExperienceTable item={item} selectedId={selectedId} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
