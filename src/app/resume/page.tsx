import React, { useState } from "react";
import { Metadata } from "next";

import Navigation from "../components/navigation/Navigation";
import GlareEffect from "../components/ui/GlareEffect";

export const metadata: Metadata = {
  title:
    "Resume | Ahmed Qureshi - Full Stack Developer | Learn More About My Journey",
  description:
    "Get to know more about Ahmed Qureshi, a seasoned Full Stack Developer based in Halifax, NS. Discover his journey, experiences, projects, and contributions in the field of web development. Specializing in Python, JavaScript, Dart, SQL, Django, DjangoREST Framework, React, SvelteKit, Flutter, Next.js, and more.",
};

const Resume: React.FunctionComponent = () => {
  return (
    <main className="text-white text-8xl">
      <Navigation />
    </main>
  );
};

export default Resume;
