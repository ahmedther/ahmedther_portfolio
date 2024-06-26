import SharedLayout from "../components/shared/SharedLayout";
import { Metadata } from "next";

import { projects } from "../data/project";
import PageHeading from "../components/ui/PageHeading";

export const metadata: Metadata = {
  title: "Projects | Ahmed Qureshi - Full Stack Developer | Portfolio Showcase",
  description:
    "Explore the projects of Ahmed Qureshi, a Full Stack Developer based in Halifax, NS. Delve into a diverse portfolio showcasing his expertise in web development, including projects built with Python, JavaScript, Dart, SQL, Django, DjangoREST Framework, React, SvelteKit, Flutter, Next.js, and more. Discover innovative solutions and practical applications across various domains.",
  keywords:
    "Ahmed Qureshi, Full Stack Developer, Portfolio, Projects, Python, JavaScript, Dart, SQL, Django, DjangoREST Framework, React, SvelteKit, Flutter, Next.js",
  creator: "Ahmed Qureshi",
  publisher: "Ahmed Qureshi",
  openGraph: {
    title:
      "Projects | Ahmed Qureshi - Full Stack Developer | Portfolio Showcase",
    description:
      "Explore the impressive portfolio of Ahmed Qureshi, a skilled Full Stack Developer. Discover his latest projects, showcasing his expertise in technologies like Python, JavaScript, Dart, SQL, Django, DjangoREST Framework, React, SvelteKit, Flutter, Next.js, and more. Get inspired by his innovative solutions and creative problem-solving abilities.",
  },
};

const Projects: React.FunctionComponent = () => {
  return (
    <SharedLayout>
      <PageHeading text="Projects" />
      <div className="w-full h-1 bg-[#3a3a3a41]">&nbsp;</div>
      <div
        className="flex flex-col gap-8 w-full 
                md:grid md:grid-cols-2
                2xl:grid 2xl:grid-cols-6"
      >
        {projects.map((projs, index) => (
          <a
            key={projs.title}
            href={projs.url}
            className={`flex flex-col gap-10 bg-white bg-opacity-5 rounded-xl text-white p-8 md:col-span-1
              ${
                index === 0 ? "2xl:col-span-4 2xl:row-span-2" : "2xl:col-span-2"
              }
              ${index === 1 ? "2xl:row-span-2" : ""}
              ${index === 4 ? "2xl:row-span-2" : ""}
              hover:text-yellow-500 hover:bg-opacity-100 hover:font-semibold hover:-translate-y-6`}
          >
            <h3 className="p-0 m-0 text-4xl  text-center font-semibold ">
              {projs.title}
            </h3>
            <div className="w-full h-1 bg-[#3a3a3a41]">&nbsp;</div>

            <p
              className={`text-2xl flex-1 flex items-center  ${
                index === 4 ? "whitespace-pre-wrap" : ""
              }`}
            >
              {projs.description}{" "}
            </p>
          </a>
        ))}
      </div>
    </SharedLayout>
  );
};

export default Projects;
