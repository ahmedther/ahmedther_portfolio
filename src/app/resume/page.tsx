import React from "react";
import { Metadata } from "next";

import TechStack from "./TechStack";
import SharedLayout from "../components/shared/layout";

export const metadata: Metadata = {
  title: "Resume | Ahmed Qureshi - Full Stack Developer",
  description:
    "Ahmed Qureshi is a Full Stack Developer based in Halifax, NS. Skilled in Python, JavaScript, Typescript, Dart, HTML, SQL, and more. Experienced in working with frameworks and libraries like Django, DjangoREST Framework, React, SvelteKit, Flutter, and Next.js. Proficient in DevOps tools like Docker and Kubernetes. Check out the portfolio to learn more about Ahmed's skills, experience, and projects.",
  creator: "Ahmed Qureshi",
  publisher: "Ahmed Qureshi",
};

const technologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  // Add or remove technologies as needed
];

const Resume: React.FunctionComponent = () => {
  return (
    <SharedLayout>
      <h2 className="text-6xl font-semibold m-0">Resume</h2>

      <section className=" w-full flex flex-col items-center gap-4">
        <div className="w-full h-1 bg-[#3a3a3a41]">&nbsp;</div>
        <a
          href="mailto:aa10980@gmail.com?subject=Request for Resume&body=Hello,%0D%0A%0D%0ACould you please send me a copy of your resume?%0D%0A%0D%0AThank you."
          className=" p-4 text-2xl text-white opacity-20 rounded-xl  hover:opacity-100  hover:underline hover:bg-white hover:text-yellow-400 boxShadow"
        >
          <p>Click here to email me and request a copy of my Resume</p>
        </a>
        <div className="w-full h-1 bg-[#3a3a3a41]">&nbsp;</div>
      </section>

      {/* <div className="flex flex-wrap">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div> */}

      <TechStack />
    </SharedLayout>
  );
};

export default Resume;
