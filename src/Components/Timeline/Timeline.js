import React from "react";
import { useState, useEffect } from "react";
import AOS from "aos";
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs";
import "../global.css";
function Timeline() {
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="section hello -my-10 lg:-my-24 transform skew-y-3 w-full "
        id="education"
      >
        <div className="container transform -skew-y-3  mx-auto ">
          <div className="text py-16 px-20 items-center">
            <br />
            <br />
            <h2 className="lg:text-sm -my-8 text-center text-white md:text-3xl">
              My Education
            </h2>
            <hr className="my-8 w-10 bg-gray-200 border-0 dark:bg-gray-700" />
            <h2 className="text-4xl text-center font-bold text-white md:text-3xl">
              Academics
            </h2>
            <br />
            <br />
            <br />
            <br />
            <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
              <div className="col-span-4 w-full h-full ">
            <div data-aos="fade-up" data-aos-duration="1000">
                <div className="max-w-md h-full bg-black border border-gray-800 rounded-md p-2 md:pl-4">
                  <h1 className="text-gray-200 lg:text-xl text-md font-medium py-2">
                    Gurukul
                  </h1>
                  <h1 className="text-gray-400 text-sm font-medium py-2">
                    2016-2018
                  </h1>
                  <p className="text-gray-600 sm:text-sm text-xs">
                    Class X (GSEB-SSC) 99.78%tile
                  </p>
              </div>
                </div>
              </div>
                
              <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-black"></div>
                <div className="absolute w-6 h-6 rounded-full bg-black z-10 text-white text-center">
                  1
                </div>
              </div>
              <div className="col-span-4 w-full h-full"></div>

              <div className="col-span-4 w-full h-full"></div>
              <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-black"></div>
                <div className="absolute w-6 h-6 rounded-full bg-black z-10 text-white text-center">
                  2
                </div>
              </div>
              <div className="col-span-4 w-full h-full ">
              <div data-aos="fade-up" data-aos-duration="1500">
                <div className="w-full h-full bg-black border border-gray-800 float-right rounded-md p-2 md:pl-4">
                <h1 className="text-gray-200 lg:text-xl text-md font-medium py-2">
                    Gyanmanjari Vidyapith
                  </h1>
                  <h1 className="text-gray-400 text-sm font-medium py-2">
                    2018-2020
                  </h1>
                  <p className="text-gray-600 sm:text-sm text-xs">
                  Class XII(GSEB-HSC) 97.86%tile<br/> Class XII(Gujcet)
                    97.49%tile
                  </p>
                </div>
                </div>
              </div>

              <div className="col-span-4 w-full h-full ">
              <div data-aos="fade-up" data-aos-duration="2000">
                <div className="max-w-md h-full bg-black border border-gray-800 rounded-md p-2 md:pl-4">
                <h1 className="text-gray-200 lg:text-xl text-md font-medium py-2">
                    Dharmsinh Desai University
                  </h1>
                  <h1 className="text-gray-400 text-sm font-medium py-2">
                    2020-2024
                  </h1>
                  <p className="text-gray-600 sm:text-sm text-xs">
                    Bachelor of Technology
                    <br />
                    Pursuing B.tech in Computer Engineering ( CPI : 7.78 )
                  </p>
                </div>
                </div>
              </div>
              <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-black"></div>
                <div className="absolute w-6 h-6 rounded-full bg-black z-10 text-white text-center">
                  3
                </div>
              </div>
              <div className="col-span-4 w-full h-full"></div>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
