import "./App.css";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import LandingPage from "./components/LandingPage";
import { NavBar } from "./components/NavBar";
import Project from "./components/Project";
import { Toaster } from "react-hot-toast";
import AboutMe from "./components/AboutMe";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full min-h-screen text-white bg-[#121212] overflow-x-hidden">
          <NavBar />
          <LandingPage />
          <AboutMe />
          <Experience />
          <Project />
          <Toaster position="top-right" />
          <ContactMe />
        </div>
      )}
    </>
  );
}

export default App;
