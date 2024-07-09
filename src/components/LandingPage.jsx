import React from "react";
import Typed from "typed.js";
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
        <h1 className="text-[5rem] font-['Baskervville_SC'] capitalize md:text-[3rem]">
          {" "}
          I&apos;m <span className="text-[rgb(255,1,79)]" ref={el}></span>
        </h1>
        <div className="flex flex-wrap w-[45vw] text-[1.3em] mt-5 leading-8 md:text-[1rem]">
          <span className="font-['Baskervville_SC']">
            I am a goal-oriented web developer who is committed to high
            standards of user experience, usability and speed for multiple
            users.
          </span>
        </div>
        <button className="bg-[rgb(255,1,79)] px-3 py-3 rounded-lg mt-10 text-[#f6f6f6] back">
          <a href="../assets/Resume.pdf" download="">
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
