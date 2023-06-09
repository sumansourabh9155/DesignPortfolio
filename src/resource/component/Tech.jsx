import React from "react";
import figma from "../../assets/icon/figma.png";
import sketch from "../../assets/icon/sketch.png";
import html from "../../assets/icon/html.png";
import css from "../../assets/icon/css.png";
import js from "../../assets/icon/js.png";
import react from "../../assets/icon/science.png";

const Tech = () => {
  return (
    <section className="w-full text-lg px-5 py-10 scroll-smooth">
      <h1 className="title-font tracking-wide sm:text-xl md:text-2xl xl:text-4xl mb-4 font-bold pb-5">
        I Use the Latest Technology Available
      </h1>
      <div className="w-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="flex items-center">
            <img className="w-12" src={figma} alt="Figma" />
            <p className="ml-2">Figma</p>
          </div>
          <div className="flex items-center">
            <img className="w-12" src={sketch} alt="Sketch" />
            <p className="ml-2">Sketch</p>
          </div>
          <div className="flex items-center">
            <img className="w-12" src={sketch} alt="Sketch" />
            <p className="ml-2">Sketch</p>
          </div>
          <div className="flex items-center">
            <img className="w-12" src={sketch} alt="Sketch" />
            <p className="ml-2">Sketch</p>
          </div>
          <div className="flex items-center">
            <img className="w-12" src={html} alt="HTML" />
            <p className="ml-2">HTML</p>
          </div>
          <div className="flex items-center">
            <img className="w-12" src={css} alt="CSS" />
            <p className="ml-2">CSS</p>
          </div>
          <div className="flex items-center">
            <img className="w-12" src={js} alt="JavaScript" />
            <p className="ml-2">JavaScript</p>
          </div>
          <div className="flex items-center">
            <img className="w-12" src={react} alt="React" />
            <p className="ml-2">React</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
