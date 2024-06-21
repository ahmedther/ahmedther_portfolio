"use client";

import { motion } from "framer-motion";
import HeroImage from "../ui/HeroImage";

const LoadingScreen: React.FunctionComponent = () => {
  return (
    <motion.div
      initial={{ backgroundColor: "black" }}
      className="absolute inset-0 -z-10 flex flex-col justify-center items-center"
    >
      <HeroImage classes="animate-pulse  animate-infinite shadow-[0_0_94px_10px_rgba(255,255,255,0.75)]" />
      <h1 className="text-4xl font-semibold text-white  animate-pulse  animate-infinite ">
        Loading...
      </h1>
    </motion.div>
  );
};

export default LoadingScreen;
