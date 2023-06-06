import React from "react";
import { useSpring, animated } from 'react-spring';
import Navbar from "../Navbar/index";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Button from "../Button/button";
import "../global.css";
// import styles from './styles.module.css'


function Home() {
  return (
    <>
    <Navbar/>
    {/* <animated.div style={styleprops} className="text-white">Hello World</animated.div> */}
      <div className="section mb-64"id="home">
        <div className="container mx-auto md:px-15 lg:px-30 items-center ">
          <div className="flex flex-col gap-y-8 lg:flex-row">
            {/* text */}
            <div className="text py-16 px-20 items-center lg:text-left">
              {/* <h1 className="flex-1 text-3xl py-20 text-black md:text-3xl font-bold leading-[0.8] lg:text-[110px]">Parangi Rathod</h1> */}
              <div className="flex-1 mb-6 text-white text-[36px] py-20 lg:text-[60px] font-secondary font-semibold  leading-[1]">
              <h2 className="text-4xl text-center text-white md:text-3xl">Hello, there!</h2>
              <h2 className="text-2xl text-center text-white md:text-xl">-- I am --</h2>
              {/* <Motion.h2 initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.7}} className='text-lg font-bold'> */}
                
              <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-4xl md:text-5xl">Parangi Rathod</h2>
              {/* </Motion.h2> */}
                <br />
                <p className="text-center text-lg max-w-xl mx-auto py-5 leading-7 md:text-2xl">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  
                </p>
              </div>
            </div>
          </div>
          <div className="relative -my-40 items-center justify-items-center mx-auto bg-black w-24 ">
          <button className="w-24 font-medium mx-auto text-white border border-teal-300 uppercase py-2 px-4 hover:text-black hover:bg-teal-300">
            Resume
          </button>
          <div className="grid grid-cols-2 my-12 items-center justify-items-center mx-auto  w-24 ">
          <button to="#" className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group">
                <AiFillGithub style={{ color: "white", backgroundColor: "#1a202c", fontSize: "20px"}} onMouseOut={({target})=>target.style.color="white"} onMouseOver={({target})=>target.style.color="#4fd1c5"}/>
            </button>
          <button to="#" className="cursor-pointer inline-flex flex-col items-center justify-center px-5 group">
                <AiFillLinkedin style={{ color: "white", backgroundColor: "#1a202c", fontSize: "20px"}} onMouseOut={({target})=>target.style.color="white"} onMouseOver={({target})=>target.style.color="#4fd1c5"}/>
            </button>
            </div>
      </div>
        </div>
      </div>

    </>
  );
}

export default Home;
