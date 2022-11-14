import React from "react";
import { ImSearch } from "react-icons/im";

const SearchBar = () => {
  return (
    <div className="flex bg-white  flex-1 rounded-sm items-center ">
      <button className=" font-semibold text-sm text-black border-r-[1px] border-black px-2 hover:bg-slate-50 rounded-l-sm">
        All
      </button>

      <input
        type="text"
        className="p-1 ml-2 outline-none border-none flex-1 text-black"
        placeholder="Search Moviemania"
      />
      <ImSearch className="mr-2 text-black" />
    </div>
  );
};

export default SearchBar;
