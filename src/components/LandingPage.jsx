import React from "react";
import Typed from "typed.js";
import Resume from "../Downloads/Resume.pdf";
import { motion } from "framer-motion";
const LandingPage = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Pranav Bhalerao", "FrontEnd Developer"],
      typeSpeed: 100,
      backSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-full bg-[#121212] pt-1">
      <div className="textstructure mt-40 px-20 md:px-5">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-[5rem] font-['Baskervville_SC'] capitalize md:text-[3rem]"
        >
          {" "}
          I&apos;m <span className="text-[rgb(255,1,79)]" ref={el}></span>
        </motion.h1>
        <div className="flex flex-wrap w-[45vw] text-[1.3em] mt-5 leading-8 md:text-[1rem] md:w-[90%]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            viewport={{ once: true }}
            className="font-['Baskervville_SC']"
          >
            I am a goal-oriented web developer who is committed to high
            standards of user experience, usability and speed for multiple
            users.
          </motion.span>
        </div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="bg-[rgb(255,1,79)] px-3 py-3 rounded-lg mt-10 text-[#f6f6f6] back"
        >
          <a href={Resume} download type="application/pdf">
            Download CV
          </a>
        </motion.button>
      </div>
    </div>
  );
};

export default LandingPage;
