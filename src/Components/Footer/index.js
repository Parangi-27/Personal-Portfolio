import React, { useEffect } from "react";
import "../global.css";
import AOS from "aos";

function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {/* <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:0.75, ease:"easeOut"}} exit={{opacity:0}}> */}

      <div
        className="section hello -my-10 lg:-my-24 w-full "
        id="education"
      >
        <div className="container h-32 m-3 align-items-center lg:text-sm text-center text-white md:text-3xl"><br/>
            {/* <h2 className="lg:text-sm text-center text-white md:text-3xl"> */}
              Made with ❤ by Parangi
            {/* </h2> */}
            <br/>
        </div>
      </div>
    </>
  );
}

export default Footer;
