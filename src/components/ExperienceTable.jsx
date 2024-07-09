import "../App.css";
const ExperienceTable = ({ item, selectedId }) => {
  console.log("select", item);
  return (
    <div
      className={`${
        selectedId !== item.id ? "hidden" : ""
      } mx-4 flex flex-col ml-4 my-2 md:mx-2 md:w-[130%] md:mx-0 bg-[#242424] py-3 px-2 shad`}
    >
      <div className="flex md:w-[100%] ">
        <h4 className="font-['Baskervville_SC'] md:ml-2">{item.role}</h4>
        <span className="text-[rgb(255,1,79)] font-bold ml-2">
          <a href={item.url} className="hover:underline md:text-[0.9rem]">
            @{item.company}
          </a>
        </span>
      </div>
      <div className="flex">
        <span className="text-[#d4d4d4] font-['Baskervville_SC'] md:m-2">
          {item.from} - {item.to}
        </span>
      </div>
      <ul
        role="list"
        className="marker:text-[rgb(255,1,79)] list-decimal list-inside"
      >
        {item.task.map((content) => {
          return (
            <div key={content.id} className="mt-3">
              <li className="ml-3 font-['Baskervville_SC']  marker:font-bold font-medium">
                {content.work}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ExperienceTable;
