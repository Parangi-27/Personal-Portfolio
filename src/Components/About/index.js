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
        className="section bg-black -my-10 lg:-my-24 transform skew-y-3 w-full" id="about">
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
            <h3 className="text-2xl text-center  text-gray-400 md:text-xl">
              I'm interested in MERN Stack Development and Frontend Development
            </h3>
            {/* <hr class="w-32 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/> */}
            <div className="flex flex-col gap-y-6 lg:-mt-20 lg:flex-row">
              <div className="flex flex-col gap-y-8 lg:flex-col">
                <img src={g1} alt='' className="h-64 my-1"></img>
              </div>
              <div className="flex-1 text-white text-[36px] py-20 lg:text-[60px] font-secondary font-semibold  leading-[1]">  
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000">
                  <p className="max-w-2xl lg:text-lg mx-auto font-hairline py-5 lg:mt-12 -mt-20 leading-10 lg:text-xl">
                   I always enjoy taking complex logics and integrate them and turning them into something simple and beautiful interface design.
                   I enjoy integrate logic to write elegant and efficient code, whether it be any programming languages.
                   <br/>
                   Fun Fact: I always love to playing with colors because Painting is my one of the hobby.
                             Hence, I will never disappoint you in terms of my designs!
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
      </div>
    </>
  );
}

export default About;
