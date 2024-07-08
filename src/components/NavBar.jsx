import file from "../assets/file.svg";
import "../App.css";
export const NavBar = () => {
  return (
    <div
      className={`z-[999] w-full px-20 py-5 -mb-8 font-['Neue_Montreal'] flex justify-between item-center md:justify-center`}
    >
      <div className="logo">
        <img src={file} alt="logo" className="image" />
      </div>
      <div className="flex gap-10 md:hidden">
        {["Projects", "About Me", "Experience", "Contact Me"].map(
          (item, index) => {
            return (
              <a
                key={index}
                className={`text-lg capitalize font-light hover:text-[rgb(255,1,79)] cursor-pointer hover:scale-[1.05] transition-all`}
                href={`#${item}`}
              >
                {item}
              </a>
            );
          }
        )}
      </div>
    </div>
  );
};
