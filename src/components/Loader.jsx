import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../App.css";
import file from "../assets/file.svg";
const Loader = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const myInterval = setInterval(function () {
      if (count === 100) {
        clearInterval(myInterval);
        return;
      }
      setCount((prev) => prev + 1);
    }, 15);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <div className="main_container ">
      <motion.div
        layout
        className="content_box shad"
        initial={{ scale: 1 }}
        animate={{
          scale: 1.25,
          borderRadius: ["25px", "20px", "20px", "10px", "0px"],
        }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span className="loading">
          <motion.div
            className="logo"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 2 },
            }}
          >
            <img src={file} alt="logo" className="loader-image" />
          </motion.div>
        </span>
        <div className="progress_bar">
          <div
            className={`filled_progress `}
            style={{ width: count * 2.5 }}
          ></div>
        </div>
        <span className="percentage">{count}%</span>
      </motion.div>
    </div>
  );
};

export default Loader;
