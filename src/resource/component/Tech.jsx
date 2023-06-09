import React from "react";
import * as icons from "../../assets/icon";

const Tech = () => {
  const techItems = [
    { icon: icons.figma, name: "Figma" },
    { icon: icons.sketch, name: "Sketch" },
    { icon: icons.html, name: "HTML" },
    { icon: icons.css, name: "CSS" },
    { icon: icons.js, name: "JavaScript" },
    { icon: icons.react, name: "React" },
  ];

  return (
    <section className="w-full text-lg px-5 py-10">
      <h1 className="title-font tracking-wide sm:text-xl md:text-2xl xl:text-4xl mb-4 font-bold pb-5">
        I Use the Latest Technology Available
      </h1>
      <div className="w-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {techItems.map((item, index) => (
            <div className="flex items-center" key={index}>
              <img className="w-12" src={item.icon} alt={item.name} />
              <p className="ml-2">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
