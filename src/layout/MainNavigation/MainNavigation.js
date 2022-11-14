import React, { useState } from "react";
import SearchBar from "./SearchBar";
import HeaderLinks from "./HeaderLinks";
import MenuModal from "./MenuModal";
import hambMenuIcon from "../../assets/images/hamb-icon.png";
import imdbLogo from "../../assets/images/imdbLogo1.png";

const MainNavigation = () => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const pageSlug = window.location.pathname;

  const showMenuHandler = () => {
    setShowMenuModal(true);
  };
  const closeMenuHandler = () => {
    setShowMenuModal(false);
  };
  return (
    <React.Fragment>
      <MenuModal showMenu={showMenuModal} closeMenu={closeMenuHandler} />
      {pageSlug !== "/sign_in" && (
        <header
          className={`flex space-x-3 
        } p-5 pl-28 pr-28 w-[100%] h-16 fixed z-[100] left-0 top-0 bg-gray-900 justify-between items-center text-white `}
        >
          <img src={imdbLogo} alt="" className=" h-[35px]" />
          <button
            onClick={showMenuHandler}
            className="flex items-center hover:bg-gray-800 pr-3 rounded-sm cursor-pointer pt-1 pb-1"
          >
            <img src={hambMenuIcon} alt="" className=" w-14 h-8" />
            <h3 className="text-white font-medium">Menu</h3>
          </button>
          <SearchBar />
          <HeaderLinks />
        </header>
      )}
    </React.Fragment>
  );
};

export default MainNavigation;
