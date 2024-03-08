"use client";

import * as React from "react";
import Typewriter from "typewriter-effect";

interface TypewritterEffectProps {
  titles?: string[];
}

const TypewritterEffect: React.FunctionComponent<TypewritterEffectProps> = ({
  titles = [
    "Full-Stack Developer",
    "Back-End Developer",
    "Front-End Developer",
    "Code Weaver",
    "Digital Alchemist",
  ],
}) => {
  return (
    <Typewriter
      options={{
        strings: titles,
        autoStart: true,
        loop: true,
        
      }}
    />
  );
};

export default TypewritterEffect;
