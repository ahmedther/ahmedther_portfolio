import React from "react";
import { Metadata } from "next";
import SharedLayout from "../components/shared/SharedLayout";

export const metadata: Metadata = {
  title:
    "About | Ahmed Qureshi - Full Stack Developer | Learn More About My Journey",
  description:
    "Get to know more about Ahmed Qureshi, a seasoned Full Stack Developer based in Halifax, NS. Discover his journey, experiences, projects, and contributions in the field of web development. Specializing in Python, JavaScript, Dart, SQL, Django, DjangoREST Framework, React, SvelteKit, Flutter, Next.js, and more.",
  creator: "Ahmed Qureshi",
  publisher: "Ahmed Qureshi",
};

const AboutMe: React.FunctionComponent = () => {
  return (
    <SharedLayout>
      <h2 className=" text-6xl font-semibold m-0">About Me</h2>
      <div className="w-full h-1 bg-[#3a3a3a41] " />
      <p className="text-3xl leading-[4rem] text-justify  ">
        Hello! I&apos;m Ahmed Qureshi, a programmer based in Halifax, Nova
        Scotia. My journey into the world of coding began out of personal
        curiosity and quickly evolved into a deep passion. I&apos;ve spent
        countless hours engrossed in learning various computer languages, often
        losing track of time. <br />
        <br /> I started my career as a network administrator, preparing for
        CCNA and developing an interest in cybersecurity. This led me to the
        world of coding, which I found I had a real knack for. What started as a
        hobby soon turned into a career that I deeply enjoy. <br />
        <br /> Over time, I&apos;ve managed to learn a diverse tech stack on my
        own, including Python, JavaScript, TypeScript, Dart, HTML, SQL, Django,
        DjangoREST Framework, React, SvelteKit, Flutter, Next.js, and many more.
        My particular interest lies in automating repetitive tasks, which not
        only improves efficiency but also provides me with a unique sense of
        satisfaction.
        <br />
        <br /> Currently, I&apos;m focusing on Data Structures & Algorithms,
        continuously striving to enhance my skills and stay updated by learning
        new technologies. This continuous learning process keeps me engaged and
        ensures that I&apos;m always at the forefront of technological
        advancements.
        <br />
        <br /> The fact that I can do what I love for a living feels like a
        bonus. This self-driven learning, passion for automation and technology,
        and my continuous pursuit of knowledge are what set me apart in my
        field. I&apos;m excited to continue my journey in the tech industry, and
        I can&apos;t wait to see where it takes me next!
      </p>
    </SharedLayout>
  );
};

export default AboutMe;
