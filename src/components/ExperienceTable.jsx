import "../App.css";
const ExperienceTable = ({ item, selectedId }) => {
  console.log("select", item);
  return (
    <div
      className={`${
        selectedId !== item.id ? "hidden" : ""
      } mx-4 flex flex-col ml-4 my-2`}
    >
      <div className="flex">
        <h4 className="font-['Baskervville_SC']">{item.role}</h4>
        <span className="text-[rgba(255,1,79,1)] font-bold ml-2">
          <a href={item.url} className="hover:underline ">
            @{item.company}
          </a>
        </span>
      </div>
      <div className="flex">
        <span className="text-[#d4d4d4] font-['Baskervville_SC']">
          {item.from} - {item.to}
        </span>
      </div>
      <ul role="list" className="marker:text-[rgba(255,1,79,1)] list-decimal">
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
