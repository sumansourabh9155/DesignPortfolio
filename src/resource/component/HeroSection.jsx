import React from "react";
import heroImage1 from "./images/hero-image-1.jpg";
import heroImage2 from "./images/hero-image-2.jpg";
import heroImage3 from "./images/hero-image-3.jpg";

const HeroSection = () => {
  return (
    <section className="text-black body-font justify-center">
      <div className="container mx-auto flex px-5 py-28 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-8 leading-relaxed opacity-50">
            Hello There I am,{" "}
          </p>
          <h1 className="title-font tracking-wide sm:text-3xl md:text-6xl xl:text-7xl mb-4 font-bold">
            Product Designer
          </h1>
          <p className="mb-8 leading-relaxed opacity-50">
            I am a UI/UX Designer and Full-Stack Web developer. My goal is to
            create a user experience that is both aesthetically pleasing and
            functionally efficient. I have an eye for detail and always strive
            to implement the latest design trends.
          </p>
          <div className="flex justify-center">
            <a
              href="#_"
              className={`px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-[url(${heroImage1})] brightness-50 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease`}
            >
              Sign Up
            </a>
          </div>
        </div>
        <div
          id="pattern"
          className="w-full sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16"
        >
          <div className="w-full justify-center">
            <div className="relative">
              <img
                className="object-cover object-center rounded-xl h-40 w-full my-4"
                alt="hero"
                src={heroImage2}
              />
              <div className="bg-white rounded-full absolute">
                <svg
                  width="32"
                  height="28"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9864 2.6644C16.0772 2.11963 15.7092 1.6044 15.1644 1.51361L6.28685 0.0340151C5.74208 -0.0567802 5.22686 0.31124 5.13606 0.85601C5.04527 1.40078 5.41329 1.91601 5.95806 2.0068L13.8492 3.32199L12.534 11.2131C12.4432 11.7579 12.8112 12.2731 13.356 12.3639C13.9008 12.4547 14.416 12.0867 14.5068 11.5419L15.9864 2.6644ZM1.58124 13.3137L15.5812 3.31373L14.4188 1.68627L0.418762 11.6863L1.58124 13.3137Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <div>
              <img
                className="object-cover object-center rounded-xl h-40 w-full my-4"
                alt="hero"
                src={heroImage1}
              />
            </div>
            <div>
              <img
                className="object-cover object-center rounded-xl h-40 w-full my-4"
                alt="hero"
                src={heroImage3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
