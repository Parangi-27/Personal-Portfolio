import React from "react";
import { FaMedal } from "react-icons/fa";

import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import "../global.css";

function index() {
  return (
    <>
      <div className="section hello -my-10 lg:-my-24 transform skew-y-3 w-full bg-white" id="about">
        <div className="container transform -skew-y-3  mx-auto ">
          <div className="text py-16 px-20 items-center">
            <br />
            <br />
            <h2 className="lg:text-sm -my-8 text-center text-white md:text-3xl">
              Get in know
            </h2>
            <hr class="my-8 w-10 bg-gray-200 border-0 dark:bg-gray-700" />
            <h2 className="text-4xl text-center font-bold text-white md:text-3xl">
              About Me
            </h2>
            {/* <hr class="h-px mt-2 justify-items-center w-10 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
            <div className="flex flex-col gap-y-8 lg:flex-row">
              <div className="flex flex-col gap-y-8 lg:flex-col">
                {/* <div class="w-64 h-40 p-6 bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <FaMedal style={{ color: "white", fontSize: "30px" }} />

                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">
                    Experience
                  </h5>
                  <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    Student
                  </p>
                </div>
                <div class="w-64 h-40 p-6 bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <FaMedal style={{ color: "white", fontSize: "30px" }} />

                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">
                    Experience
                  </h5>
                  <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    Student
                  </p>
                </div>
              </div> */}
              </div>
              <div className="flex-1 text-white text-[36px] py-20 lg:text-[60px] font-secondary font-semibold  leading-[1]">
                <p className="text-xs max-w-2xl mx-auto py-5 leading-10 lg:text-xl">
                  Welcome to my portfolio website! I'm [Your Name], a passionate
                  and dedicated computer engineering student. I have a strong
                  interest in the intersection of hardware and software, and I'm
                  constantly seeking opportunities to enhance my skills and
                  knowledge in this ever-evolving field.
                </p>
                <div className="grid grid-cols-2 my-5 mx-auto w-24 float-left justify-items-center">
                  <button
                    to="#"
                    className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group"
                  >
                    <BsGithub
                      style={{
                        color: "white",
                        fontSize: "30px",
                      }}
                      onMouseOut={({ target }) =>
                        (target.style.color = "white")
                      }
                      onMouseOver={({ target }) =>
                        (target.style.color = "#4fd1c5")
                      }
                    />
                  </button>
                  <button
                    to="#"
                    className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group"
                  >
                    <SiLinkedin
                      style={{
                        color: "white",
                        fontSize: "30px",
                      }}
                      onMouseOut={({ target }) =>
                        (target.style.color = "white")
                      }
                      onMouseOver={({ target }) =>
                        (target.style.color = "#4fd1c5")
                      }
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default index;
