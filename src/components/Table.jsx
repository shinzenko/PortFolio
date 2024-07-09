import "../App.css";
const Table = ({ item, handleSelect, selectedId }) => {
  return (
    <>
      <div
        className={`${
          selectedId === item.id
            ? "border-l-[rgba(255,1,79,1)] text-[rgba(255,1,79,1)] md:border-t-[rgba(255,1,79,1)]"
            : "border-[#d4d4d4]"
        } w-[20%] bg-[#121212] lg:border-l-[2px] flex flex-wrap border-[#d4d4d4] text-[#d4d4d4] flex flex-col transition-all duration-500 md:flex-row md:border-t-[2px] md:w-[90%]`}
      >
        <button
          className={`${
            selectedId === item.id ? "bg-[#242424]" : ""
          } w-[100%] h-[100%] hover:bg-[#242424] py-5 btn_xp md:py-3 flex flex-wrap justify-center items-center flex-wrap`}
          onClick={() => handleSelect(item)}
        >
          <span className="font-['Baskervville_SC'] md:text-[0.8rem]">
            {item.button}
          </span>
        </button>
      </div>
    </>
  );
};

export default Table;
