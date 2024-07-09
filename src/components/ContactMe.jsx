import "../App.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const ContactMe = () => {
  const { scrollYProgress } = useScroll();
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const Project = useRef();
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_b4ffrxr", "template_bzaskn4", form.current, {
        publicKey: "AqeW286mQB4TyukUx",
      })
      .then(
        () => {
          toast.success("Email Sent Successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <>
      <motion.div
        ref={Project}
        style={{ opacity: scaleTransform }}
        className="mx-auto w-full mt-[7rem] bg-[#121212] px-20 md:px-5"
        id="Contact Me"
      >
        <div className="flex items-center">
          <h1 className="text-[3rem] text-[#e1e1e1] font-['Baskervville_SC'] md:text-[2rem]">
            Contact Me
          </h1>
          <div className="w-[30%] mr-10 bg-[rgb(255,1,79)] h-[1px] mt-4 ml-4 md:w-[10rem]"></div>
        </div>

        <section className="dark:bg-[#121212] mx-auto mt-5">
          <form ref={form} className="space-y-8" onSubmit={sendEmail}>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-[rgb(255,1,79)]"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-[#242424] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:shadow-sm-light"
                placeholder="<Your Name>"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-[rgb(255,1,79)]"
              >
                Email
              </label>
              <input
                type="text"
                id="subject"
                name="email"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#242424] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="test@email.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-[rgb(255,1,79)]"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                name="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#242424] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="w-full flex end">
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-[rgba(255,1,79,1)] mr-3 mb-10"
              >
                Send message
              </button>
            </div>
          </form>
        </section>
      </motion.div>
    </>
  );
};

export default ContactMe;
