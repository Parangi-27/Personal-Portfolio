import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiCodeAlt } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import "../global.css";
function navbar() {
  return (
    <>
      {/* <div className='section mb-5 bg-white'>Navbar</div> */}
<div
      class="w-full h-20 bg-slate-100/20 sm:px-9 sticky top-0 z-50 backdrop-filter backdrop-blur-[20px]"
    >
      <div
        class="container h-20 flex justify-between items-center text-xl font-sans font-semibold sm:space-x-5"
      >
        <div class="h-4/5 w-4/12 flex justify-start items-center">
          <a href="#">Logo</a>
        </div>
        <div class="h-4/5 w-4/12 flex justify-center items-center space-x-10">
          <a href="#">link </a>
          <a href="#">link</a>
          <a href="#">link</a>
        </div>
        <div class="h-4/5 w-4/12 flex justify-end space-x-4 items-center">
          <a href="#">Cart</a>
          <a href="#">User</a>
        </div>
      </div>
    </div>
    
      {/* <nav className="fixed bottom-0 lg:bottom-8 w-full overflow-hidden z-50">
        <div className="container mx-auto mb-3">
          <div className="grid filter-backdrop backdrop-blur-sm bg-black grid-cols-6 w-auto h-12 rounded-full border-2 border-teal-400 max-w-lg mx-auto">
            <button
              to="#"
              className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group"
            >
              <AiFillHome
                style={{ color: "white", fontSize: "20px" }}
                onMouseOut={({ target }) => (target.style.color = "white")}
                onMouseOver={({ target }) => (target.style.color = "#4fd1c5")}
              />
            </button>
            <button
              to="#"
              className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group"
            >
              <CgProfile
                style={{ color: "white", fontSize: "20px" }}
                onMouseOut={({ target }) => (target.style.color = "white")}
                onMouseOver={({ target }) => (target.style.color = "#4fd1c5")}
              />
            </button>
            <button
              to="#"
              className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group"
            >
              <BiCodeAlt
                style={{ color: "white", fontSize: "20px" }}
                onMouseOut={({ target }) => (target.style.color = "white")}
                onMouseOver={({ target }) => (target.style.color = "#4fd1c5")}
              />
            </button>
            <button
              to="#"
              className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group"
            >
              <BiBookBookmark
                style={{ color: "white", fontSize: "20px" }}
                onMouseOut={({ target }) => (target.style.color = "white")}
                onMouseOver={({ target }) => (target.style.color = "#4fd1c5")}
              />
            </button>
            <button
              to="#"
              className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group"
            >
              <AiOutlineFundProjectionScreen
                style={{ color: "white", fontSize: "20px" }}
                onMouseOut={({ target }) => (target.style.color = "white")}
                onMouseOver={({ target }) => (target.style.color = "#4fd1c5")}
              />
            </button>
            <button
              to="#"
              className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group"
            >
              <BsFillChatLeftDotsFill
                style={{ color: "white", fontSize: "20px" }}
                onMouseOut={({ target }) => (target.style.color = "white")}
                onMouseOver={({ target }) => (target.style.color = "#4fd1c5")}
              />
            </button>
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default navbar;
