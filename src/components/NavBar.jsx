import file from "../assets/file.svg";
import "../App.css";
import { motion } from "framer-motion";
import { glitchText } from "../effect/glitch";
export const NavBar = () => {
  return (
    <div
      className={`z-[999] w-full px-20 py-5 -mb-8 font-['Neue_Montreal'] flex justify-between item-center md:justify-center bg-[#121212]`}
    >
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="logo"
      >
        <img src={file} alt="logo" className="image" />
      </motion.div>
      <div className="flex gap-5 md:hidden uppercase">
        {["Projects", "About Me", "Experience", "Contact Me"].map(
          (item, index) => {
            return (
              <motion.a
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                key={index}
                className={`text-md capitalize font-light hover:text-[rgb(255,1,79)] cursor-pointer hover:scale-[1.05] transition-all w-[12.5vw]`}
                href={`#${item}`}
                data-value={`${item.toUpperCase()}`}
                onMouseOver={(e) => glitchText(e)}
              >
                {item.toUpperCase()}
              </motion.a>
            );
          }
        )}
      </div>
    </div>
  );
};
