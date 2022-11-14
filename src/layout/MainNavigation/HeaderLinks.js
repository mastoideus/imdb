import React from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeaderLinks = () => {
  return (
    <div className="divide-x-2 divide-gray-800 flex justify-around gap-4 items-center">
      <p className=" font-bold p-1 font-oswald">
        IMDb<span className=" text-blue-400">Pro</span>
      </p>
      <ul className="flex items-center gap-2">
        <button className="flex items-center p-2 rounded-sm gap-1 ml-2 text-sm font-bold hover:bg-slate-800">
          <BsBookmarkPlusFill />
          Watchlist
        </button>
        <a
          href="/sign_in"
          className="p-2 rounded-sm text-sm font-bold hover:bg-slate-800"
        >
          Sign in
        </a>
      </ul>
    </div>
  );
};

export default HeaderLinks;
