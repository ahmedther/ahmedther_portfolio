import { memo } from "react";
import { ProjectsTypes } from "../../data/project";
import BulletPoints from "./BulletPoints";

const ProjectCard = memo(({ project }: { project: ProjectsTypes }) => (
  <div
    key={project.title}
    className="flex flex-col gap-10 bg-white bg-opacity-5 rounded-xl text-white p-10 md:col-span-1 md:p-20 "
  >
    <h3 className="p-0 m-0 text-4xl text-center font-semibold">
      {project.title}
    </h3>
    <div className="w-full h-1 bg-[#3a3a3a41]">&nbsp;</div>
    <p className="text-2xl flex-1 flex items-center">{project.description}</p>
    <BulletPoints features={project.keyFeatures} title="Key Features" />
    <BulletPoints
      features={project.technologiesUsed}
      title="Technologies Used"
    />
    <a
      href={project.url}
      className="flex justify-center pt-8 text-2xl hover:text-yellow-500 hover:bg-opacity-100 hover:font-semibold hover:underline  "
    >
      <p className=" px-8 py-4 rounded-xl  w-fit hover:bg-white hover:-translate-y-6">
        GitHub : {project.url}
      </p>
    </a>
  </div>
));

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
