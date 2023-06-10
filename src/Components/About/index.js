import React, { useEffect } from "react";
import { animated, config, useSpring } from "react-spring";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import g1 from './g1.png'
import "../global.css";
import AOS from "aos";

function About() {
  // const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        className="section hello -my-10 lg:-my-24 transform skew-y-3 w-full bg-white"
        id="about"
        >
        <div className="container transform -skew-y-3 -mb-10">
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
            <hr class="w-32 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
            <div className="flex flex-col gap-y-8 lg:flex-row">
              <div className="flex flex-col gap-y-8 lg:flex-col">
                <img src={g1} alt='' className="h-64 my-1"></img>
              </div>
              <div className="flex-1 text-white text-[36px] py-20 lg:text-[60px] font-secondary font-semibold  leading-[1]">  
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000">
                  <p className="text-xl max-w-2xl mx-auto py-5 leading-10 lg:text-xl">
                    Welcome to my portfolio website! I'm [Your Name], a
                    passionate and dedicated computer engineering student. I
                    have a strong interest in the intersection of hardware and
                    software, and I'm constantly seeking opportunities to
                    enhance my skills and knowledge in this ever-evolving field.
                  </p>
                </div>
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

export default About;
