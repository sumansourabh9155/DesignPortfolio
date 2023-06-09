import React from "react";
import suman from "../../assets/images/suman.jpg";

const AboutMe = () => {
  return (
    <div className="container flex flex-col px-5 py-4 mx-auto md:py-16 md:flex-row md:items-center">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <img
          className="object-cover h-100px rounded-2xl shadow-md shadow-gray-200"
          src={suman}
          alt="Suman Sourabh"
        />
      </div>
      <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
        <div className="max-w-lg md:mx-12 md:order-2">
          <p className="leading-relaxed opacity-50">About Me</p>
          <h1 className="title-font tracking-wide sm:text-xl md:text-2xl xl:text-4xl font-bold">
            Suman Sourabh
          </h1>
          <p className="mb-8 leading-relaxed opacity-50">
            Currently a student of Graduation
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            My goal is to create a user experience that is both aesthetically pleasing and functionally efficient. I have an eye for detail and always strive to implement the latest design trends. I take the time to research the event and the target audience and create a design that meets the specific needs of the event and its users. I also work closely with the event organizers to ensure that the design I deliver is what they have in mind.
          </p>
          <div className="mt-6">
            <a
              href="#_"
              className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-black rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
            >
              Sign Up
            </a>
          </div>
        </div>
        <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
          <button className="w-3 h-3 mx-2 bg-black rounded-full md:mx-0 focus:outline-none"></button>
          <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-black"></button>
          <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-black"></button>
          <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:black"></button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
