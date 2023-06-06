import React from "react";
import { SkillsetData } from "./SkillsetData";
import SkillCard from "./SkillCard";
import { SkillWebTech } from "./SkilldsWebTech";
import { Database } from "./Database";
import bg from "../Home/g4.png";
import DevIcon from "devicon-react-svg";
import { useSpring, animated } from "react-spring";
import IconReact from "react-devicon/react/original";
import Navbar from "../Navbar/index";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Button from "../Button/button";
import "../global.css";

function Skills() {
  const data = SkillsetData;
  const data1 = SkillWebTech;
  const data2 = Database;

  return (
    <>
      <div className="section bg-black" id="home">
        <div className="container mx-auto  ">
          <div className="text py-48 px-20">
            <h2 className="lg:text-sm -my-8 text-center text-white md:text-3xl">
              The skills that I know
            </h2>
            <hr class="my-8 w-10 bg-gray-200 border-0 dark:bg-gray-700" />
            <h2 className="text-4xl text-center font-bold text-white md:text-3xl">
              Tech Stack
            </h2>
          </div>
          
          <div className="flex mb-48 lg:flex-row flex-col">
            <div>
              {data.map((item) => {
                return (
                  <>
                    {/* <div className="container mx-auto bg-black"> */}
                    <div className="container mb-64 flex flex-col max-w-sm ">
                      <label className="text-2xl font-semibold text-white text-center">
                        {item.type}
                      </label>
                      <br />
                      <div className="grid gap-6 grid-cols-3 w-auto h-12 max-w-lg mx-auto ">
                        {item.list.map((skill) => {
                          return <SkillCard skill={skill} />;
                        })}
                      </div>
                    </div>
                    {/* </div> */}
                  </>
                );
              })}
            </div>
            <div>
              {data1.map((item) => {
                return (
                  <>
                    {/* <div className="container mx-auto bg-black"> */}
                    <div className="flex mb-64 flex-col max-w-sm ">
                      <label className="text-xl font-semibold text-white text-center">
                        {item.type}
                      </label><br/>
                      <div className="grid gap-6 grid-cols-3 w-auto h-12 max-w-lg mx-auto ">
                        {item.list.map((skill) => {
                          return <SkillCard skill={skill} />;
                        })}
                      </div>
                    </div>
                    {/* </div> */}
                  </>
                );
              })}
            </div>
            
            <div>
              {data2.map((item) => {
                return (
                  <>
                    {/* <div className="container mx-auto bg-black"> */}
                    <div className="container mb-64  flex flex-col max-w-sm ">
                      <label className="text-2xl font-semibold text-white text-center">
                        {item.type}
                      </label>
                      <br />
                      <div className="grid gap-6 grid-cols-3 w-auto h-12 max-w-lg mx-auto ">
                        {item.list.map((skill) => {
                          return <SkillCard skill={skill} />;
                        })}
                      </div>
                    </div>
                    {/* </div> */}
                  </>
                );
              })}
            </div>
          </div>
          <br/><br/>
          {/* <div className="container -my-20 mx-auto md:px-20 md:py-56 lg:px-20 items-center "> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Skills;
