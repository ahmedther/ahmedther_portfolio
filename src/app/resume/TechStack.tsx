import React from "react";
import techStack from "../data/techStack";

const TechStack: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h3
        className="text-3xl font-bold  text-center
      md:text-5xl"
      >
        Tech Stack
      </h3>

      {Object.entries(techStack).map(([category, items]) => (
        <div key={category} className="items-center ">
          <h3
            className="text-2xl font-bold mb-4 md:text-3xl
          "
          >
            {category}
          </h3>
          <div className="flex flex-col gap-4 md:flex-wrap md:flex-row ">
            {items.map((item) => (
              <div key={item.name} className="mr-6 mb-4 flex items-center ">
                <span className="mr-2 text-4xl md:text-5xl">{item.icon}</span>
                <span className="mr-2 text-2xl md:text-3xl">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
