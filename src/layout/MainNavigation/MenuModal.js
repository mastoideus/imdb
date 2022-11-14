import React from "react";
import ReactDOM from "react-dom";
import { AiTwotoneCloseCircle, AiFillCloseCircle } from "react-icons/ai";
import imdbLogo from "../../assets/images/imdbLogo1.png";

const ModalOverlay = (props) => {
  return (
    <div
      className={` w-[100%] h-screen fixed z-[150] px-[250px] pt-10 left-0 top-0 bg-gray-800  transition duration-500 ease-out ${
        !props.show ? "-translate-y-[100%]" : "translate-y-0"
      }`}
    >
      <div className="flex justify-between items-center">
        <img src={imdbLogo} alt="" width={100} />
        <button onClick={props.onClose}>
          <AiFillCloseCircle className="text-yellow-400 text-5xl" />
        </button>
      </div>
    </div>
  );
};

const MenuModal = (props) => {
  return ReactDOM.createPortal(
    <ModalOverlay show={props.showMenu} onClose={props.closeMenu} />,
    document.getElementById("menu-modal")
  );
};

export default MenuModal;
