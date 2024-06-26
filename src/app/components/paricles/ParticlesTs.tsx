"use client";

import { useEffect, useMemo, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import particleConfig from "./particles.config";

import LoadingScreen from "../ui/LoadingScreen";

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

  return <LoadingScreen />;
};

export default ParticlesTs;
