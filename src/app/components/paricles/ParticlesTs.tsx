"use client";

import { useEffect, useMemo, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import particleConfig from "./particles.config";

import { motion } from "framer-motion";
import HeroImage from "../ui/HeroImage";

interface ParticlesTsProps {
  children: React.ReactNode;
}

const ParticlesTs = ({ children }: ParticlesTsProps) => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {};

  const options: ISourceOptions = useMemo(() => particleConfig, []);

  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className=" absolute -z-10"
        />
        {children}
      </>
    );
  }

  return (
    <motion.div
      initial={{ backgroundColor: "black" }}
      className="absolute inset-0 -z-10 flex flex-col justify-center items-center"
    >
      <HeroImage classes="animate-pulse animate-bounce  animate-infinite shadow-[0_0_94px_10px_rgba(255,255,255,0.75)]" />
      <h1 className="text-4xl font-semibold text-white  animate-pulse animate-bounce  animate-infinite ">
        Loading...
      </h1>
    </motion.div>
  );
};

export default ParticlesTs;
