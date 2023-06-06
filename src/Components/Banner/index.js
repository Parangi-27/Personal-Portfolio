import React from "react";
import bg from "../About/pcr.jpg";
import { useSpring, animated } from "react-spring";
import Navbar from "../Navbar/index";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import Button from "../Button/button";
import "../global.css";

function Banner() {
  return (
    <>
      <div className="section bg-black" id="home">
        <div className="container mx-auto  items-center ">
          <div className="flex flex-col gap-y-8 lg:flex-row">
            <div className="text py-3 px-20 lg:text-left">
              <div className="flex-1 mb-1 lg:text-left text-white text-[36px] py-20 lg:text-[60px] font-secondary font-semibold md:text-center leading-[1]">
                <h2 className="text-4xl lg:text-left text-white md:text-3xl md:text-center">
                  Hello, there! I am
                </h2>
                <h2 className=" lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-4xl md:text-center md:text-5xl">
                  Parangi Rathod
                </h2>
                <p className="float-left text-lg max-w-xl mx-auto py-5 leading-7 md:text-2xl">
                  Lorem Ipsum is simply dummy text of the printing and
                </p>
              </div>
              <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-black border border-teal-400 text-white hover:text-black hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >Download CV
              </a><br/><br/>
    
            </div><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="flex-1 lg:mt-32 -my-34">
              <img src={bg} className="w-64"></img>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* <div className="container -my-20 mx-auto md:px-20 md:py-56 lg:px-20 items-center "> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Banner;
