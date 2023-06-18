import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiCodeAlt } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import "../global.css";
function navbar() {
  return (
    <>
       <nav className="fixed bottom-0 mb-8 lg:bottom-8 w-full overflow-hidden z-50">
        <div className="container mx-auto mb-3">

          {/* <div className="grid filter-backdrop backdrop-blur-sm bg-black/20 grid-cols-6 w-auto h-12 rounded-full border-2 border-teal-400 max-w-lg mx-auto"> */}
            <div className="w-full bg-black bg-opacity-75 h-12 rounded-full max-w-md mx-auto px-5 flex justify-between text-2xl border border-teal-400">
              <a href="#home"
              className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group"
            >
              <AiFillHome
                style={{ color: "white", fontSize: "20px" }}
                onMouseOut={({ target }) => (target.style.color = "white")}
                onMouseOver={({ target }) => (target.style.color = "#4fd1c5")}
              />
            </a>
            <a
              href="#about"
              className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group"
            >
              <CgProfile
                style={{ color: "white", fontSize: "20px" }}
                onMouseOut={({ target }) => (target.style.color = "white")}
                onMouseOver={({ target }) => (target.style.color = "#4fd1c5")}
              />
            </a>
            <a
              href="#education"
              className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group"
            >
              <FaGraduationCap
                style={{ color: "white", fontSize: "20px" }}
                onMouseOut={({ target }) => (target.style.color = "white")}
                onMouseOver={({ target }) => (target.style.color = "#4fd1c5")}
              />
            </a>
            <a
             href="#skills"
              className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group"
            >
              <BiCodeAlt
                style={{ color: "white", fontSize: "20px" }}
                onMouseOut={({ target }) => (target.style.color = "white")}
                onMouseOver={({ target }) => (target.style.color = "#4fd1c5")}
              />
            </a>
            <a
              to="projects"
              className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group"
            >
              <AiOutlineFundProjectionScreen
                style={{ color: "white", fontSize: "20px" }}
                onMouseOut={({ target }) => (target.style.color = "white")}
                onMouseOver={({ target }) => (target.style.color = "#4fd1c5")}

              />
            </a>
            <a
              href="#contact"
              className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group"
            >
              <BsFillChatLeftDotsFill
                style={{ color: "white", fontSize: "20px" }}
                onMouseOut={({ target }) => (target.style.color = "white")}
                onMouseOver={({ target }) => (target.style.color = "#4fd1c5")}
              />
            </a>
          </div>
        </div>
      </nav> 
    </>
  );
}

export default navbar;
