import React from "react";

function SkillCard({ skill }) {
  return (
    <>
      {/* <div className="container w-screen bg-gray-500"> */}
        {/* <div clasxsName="container mx-auto bg-gray-500"> */}
          {/* <div className="grid  grid-cols-6 w-auto h-12 max-w-lg mx-auto "> */}
            <div>
            <div className="container justify-items-center items-center">{skill.icon}</div>
            <label className="text text-white text-center">{skill.name}</label>
            </div>
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default SkillCard;
