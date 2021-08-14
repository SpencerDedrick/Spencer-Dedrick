import React from "react";
import ProjectSlider from "../components/ProjectSlider/ProjectSlider";

function Home() {
  return (
    /* HOME CONTAINER */
    <div className="container p-6">
      {/* HOME HEADING TEXT */}
      <h1 className=" font-light text-2xl">Hi, Hello!</h1>

      {/* HOME PARAGRAPH TEXT */}
      <p className="text-xl py-10">
        I am a software engineer and web developer with a focus on the React
        library. I have a passion for technology, and I love helping others. I
        like to be an active part of my community by working and volunteering
        with local non-profit organizations. I strive to make any team I'm a
        part of the best it can be. Above all else, I love to learn, and I look
        forward to working with you in the future.
      </p>

      {/* HOME PROJECT CAROUSEL */}
      <h1 className="font-bold text-xl uppercase py-5">Featured Projects</h1>
      <div className="container">
        <ProjectSlider />
      </div>
      {/* HOME BOTTOM TEXT */}
      <h1 className=" font-light text-xl my-10">
        Thanks for stopping by, I look forward to working with you some time.
      </h1>
      <h1 className=" font-light text-2xl my-5">
        You can contact me using the links below.
      </h1>
    </div>
  );
}

export default Home;
