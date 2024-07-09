import profile from "../assets/profile.jfif";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <div
      className="mx-auto w-full mt-[7rem] bg-[#121212] px-20 md:px-5"
      id="About Me"
    >
      <div className="flex items-center">
        <h1 className="text-[3rem] text-[#e1e1e1] font-['Baskervville_SC'] md:text-[2rem]">
          About Me
        </h1>
        <div className="w-[20rem] bg-[rgb(255,1,79)] h-[1px] mt-4 ml-4 md:w-[10rem]"></div>
      </div>
      <div className="flex mr-5 md:flex-col md:justify-center md:items-center ">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <div className="mr-11 mt-5 text-[#d4d4d4] w-[90%] md:w-[100%] md:mr-3 font-['Neue_Montreal']">
            Hello! My name is Pranav and I enjoy creating things that live on
            the internet. I thrive in problem-solving, prioritizing user-centric
            needs, and delivering high-quality websites that elevate user
            satisfaction.
          </div>
          <div className="mt-4 text-[#d4d4d4] font-['Neue_Montreal']">
            Here are a few technologies I’ve been working with recently:
            <ul
              role="list"
              className="marker:text-[rgb(255,1,79)] list-decimal ml-6 flex flex-col gap-4 w-[100%]  flex-wrap h-[120px] mt-5"
            >
              <li className="mr-4">React js</li>
              <li className="mr-4">Javascript (ES6+)</li>
              <li className="mr-4">HTML</li>
              <li className="mr-4">SQL</li>
              <li className="mr-4">CSS</li>
              <li className="mr-4">Next js</li>
              <li className="mr-4">Node js</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" md:mr-0 mt-5"
        >
          <img
            src={profile}
            alt="profile"
            className="lg:w-[40rem]  md:w-[25rem]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
