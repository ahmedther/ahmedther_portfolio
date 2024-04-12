import React from "react";

import { PiFileSqlFill } from "react-icons/pi";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { PiChartScatterFill } from "react-icons/pi";
import { GrStatusUnknownSmall } from "react-icons/gr";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiHtml5,
  SiDjango,
  SiReact,
  SiSvelte,
  SiFlutter,
  SiExpress,
  SiPug,
  SiNextdotjs,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiReactquery,
  SiNextdotjs as SiNextAuth,
  SiWebpack,
  SiSass,
  SiCss3,
  SiNumpy,
  SiPandas,
  SiStreamlit,
  SiOracle,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiSqlalchemy,
  SiRabbitmq,
  SiCelery,
  SiJupyter,
  SiGooglecolab,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiSelenium,
  SiNginx,
  SiApache,
} from "react-icons/si";

import { FaGithub } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export interface TechStackItem {
  name: string;
  icon: React.ReactNode;
}

const techStack: { [key: string]: TechStackItem[] } = {
  "Programming Languages": [
    { name: "Python", icon: <SiPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "SQL", icon: <PiFileSqlFill /> },
  ],

  "Frameworks / Libraries": [
    { name: "Django", icon: <SiDjango /> },
    { name: "DjangoREST Framework", icon: <SiDjango /> },
    { name: "React", icon: <SiReact /> },
    { name: "SvelteKit", icon: <SiSvelte /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Pug", icon: <SiPug /> },
  ],

  "React Ecosystem": [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React Router", icon: <SiReactrouter /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "React Query", icon: <SiReactquery /> },
    { name: "styled-components", icon: <SiStyledcomponents /> },
    { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
    { name: "Next Auth", icon: <SiNextAuth /> },
    { name: "Webpack", icon: <SiWebpack /> },
  ],

  "Styling Languages": [
    { name: "SASS / SCSS", icon: <SiSass /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],

  "Data Analysis": [
    { name: "Pandas", icon: <SiPandas /> },
    { name: "Numpy", icon: <SiNumpy /> },
    { name: "Matplotlib", icon: <PiChartScatterFill /> },
    { name: "Streamlit", icon: <SiStreamlit /> },
  ],

  Databases: [
    { name: "Oracle", icon: <SiOracle /> },
    { name: "Postgres", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Redis", icon: <SiRedis /> },
  ],

  "Database Management": [
    { name: "SQLAlchemy", icon: <SiSqlalchemy /> },
    { name: "Cx_Oracle / Oracledb", icon: <SiOracle /> },
    { name: "psycopg2", icon: <SiPostgresql /> },
  ],

  "Msg Brokers & Task Queues": [
    { name: "RabbitMQ", icon: <SiRabbitmq /> },
    { name: "Celery", icon: <SiCelery /> },
  ],

  "Notebook Environments": [
    { name: "Jupyter Notebook", icon: <SiJupyter /> },
    { name: "Google Colab", icon: <SiGooglecolab /> },
  ],

  DevOps: [
    { name: "Docker", icon: <SiDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
  ],

  "Automation and Testing": [
    { name: "Selenium", icon: <SiSelenium /> },
    { name: "PyAutoGui", icon: <GrStatusUnknownSmall /> },
    { name: "Sikuli", icon: <GrStatusUnknownSmall /> },
  ],

  "Web Servers": [
    { name: "Nginx", icon: <SiNginx /> },
    { name: "Apache 2", icon: <SiApache /> },
  ],
};

export default techStack;
