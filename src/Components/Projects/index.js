import React from "react";
import { useState, useEffect } from "react";
import p1 from "./1.png";
import p2 from "./2.png";
import p3 from "./3.png";
import p4 from "./4.png";
import p5 from "./5.png";
import p6 from "./6.png";

import AOS from "aos";
import { BsArrowDownCircleFill, BsArrowUpCircleFill } from "react-icons/bs";
import "../global.css";
function Projects() {
  const [readMore, setReadMore] = useState(false);

  const extraContent = (
    <div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        This application that allows students to book medical appointments
        across India for their visa application process. Streamlined the
        document upload process by integrating a user-friendly interface and
        also reducing segregating all major and well formatted documents from 5
        days to 1 day. Among 15 approved hospitals, Geo-location API used to
        track user location and display hospitals nearest to them for medical
        appointment booking. Therefore, our application simplifies searching of
        medical testing hospitals for visas with better user experience.
      </p>
    </div>
  );

  const linkName = readMore ? (
    <BsArrowUpCircleFill style={{ color: "white", fontSize: "40px" }} />
  ) : (
    <BsArrowDownCircleFill style={{ color: "white", fontSize: "40px" }} />
  );
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="section hello -my-10 lg:-my-24 transform skew-y-3 w-full "
        id="about"
      >
        <div className="container transform -skew-y-3  mx-auto ">
          <div className="text py-16 px-20 items-center">
            <br />
            <br />
            <h2 className="lg:text-sm -my-8 text-center text-white md:text-3xl">
              My Works
            </h2>
            <hr class="my-8 w-10 bg-gray-200 border-0 dark:bg-gray-700" />
            <h2 className="text-4xl text-center font-bold text-white md:text-3xl">
              Projects
            </h2>
            {/* <hr class="h-px mt-2 justify-items-center w-10 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
            <div className="grid my-32 grid-row gap-16 lg:grid-cols-2">
              <div data-aos="fade-up-right" data-aos-duration="1000">
                <div class="max-w-md bg-black border border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img class="-mb-10" src={p1} alt="" />

                  <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white">
                      MediVisa | MERN Stack
                    </h5>
                    <p class="mb-3 font-normal text-gray-700 text-sm dark:text-gray-400">
                      Our application streamlines medical appointment booking
                      for visa applications in India, reducing document
                      processing time and providing a user-friendly experience
                      with nearest hospital recommendations.
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-black border border-teal-400 text-white hover:text-black hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Github
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    {/* <a
                      className="read-more-link"
                      onClick={() => {
                        setReadMore(!readMore);
                      }}
                    >
                      <h2>{linkName}</h2>
                    </a> 

                    {readMore && extraContent}*/}
                    <br />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up-left" data-aos-duration="1000">
                <div class="max-w-md bg-black border border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img class="-my-10" src={p2} alt="" />

                  <div class="p-5">
                    <h5 class="text-2xl font-bold tracking-tight mb-1 text-gray-400 dark:text-white">
                      Event RegistO | Flutter, Firebase
                    </h5>

                    <p class="mb-3 font-normal text-gray-700 text-sm dark:text-gray-400">
                      Our platform allows students to view and sign up for
                      college club events, provide feedback for improvements,
                      and receive event updates in one place, saving time and
                      hassle. It aims to enhance student knowledge and
                      participation in club activities.
                    </p>
                    <br />
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-black border border-teal-400 text-white hover:text-black hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Github
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up-right" data-aos-duration="1000">
                <div class="max-w-md bg-black border border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img class="-my-10" src={p4} alt="" />

                  <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white">
                      Complaint Management System | React, ASP.NET WebAPI
                    </h5>

                    <p class="mb-3 font-normal text-gray-700 text-sm dark:text-gray-400">
                      Our complaint management system facilitates effective
                      reporting and resolution of complaints related to
                      university services, policies, and personnel. It empowers
                      students, faculty, and staff to voice their concerns and
                      provide feedback for improved communication and
                      problem-solving.
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-black border border-teal-400 text-white hover:text-black hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Github
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up-left" data-aos-duration="1000">
                <div class="max-w-md bg-black border border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img class="-my-10" src={p6} alt="" />

                  <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white">
                      Khatabook | MERN Stack
                    </h5>

                     <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                      The web-based application you described aims to provide
                      users with a comprehensive tool to manage their credit
                      accounts and expenses effectively while working towards
                      their monthly goals.
                      Additionally, this is also expense tracker.
                    </p> 
                    <br />
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-black border border-teal-400 text-white hover:text-black hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Github
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up-right" data-aos-duration="1000">
                <div class="max-w-md bg-black border border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img class="-my-12" src={p5} alt="" />

                  <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white">
                      Simple Games | JavaScript, HTML, CSS
                    </h5>

                    <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                      "Simple Games" contains easy 4 games. We have made unique
                      and attractive UI with help of CSS and BootStrap for
                      better user experience.
                    </p>
                    <br />
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-black border border-teal-400 text-white hover:text-black hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Github
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
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

export default Projects;
