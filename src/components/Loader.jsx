import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../App.css";
const Loader = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const myInterval = setInterval(function () {
      if (count === 100) {
        clearInterval(myInterval);
        return;
      }
      setCount((prev) => prev + 1);
    }, 20);
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <div className="main_container shad">
      <motion.div
        layout
        className="content_box"
        initial={{ scale: 1 }}
        animate={{ scale: 1.25 }}
        transition={{ duration: 0.5, delay: 2.3 }}
      >
        <span className="loading">Loading ...</span>
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
