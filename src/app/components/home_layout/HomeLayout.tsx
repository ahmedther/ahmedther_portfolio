import React from "react";
import Navigation from "../navigation/Navigation";
import HomeFooter from "./HomeFooter";
import TypewritterEffect from "../ui/TypewritterEffect";
import HeroImage from "../ui/HeroImage";

const HomeLayout: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center  h-screen">
        <Navigation />
        <main className="flex flex-col items-center justify-center  m-12">
          <div className="bg-white  leading-none inline-block rounded-full hover:transition hover:duration-300 hover:ease-out hover:bg-black ">
            <HeroImage classes="border-4 border-black m-1 border-solid" />
          </div>
          <h1
            className="text-white text-6xl tracking-[.5rem] py-4 px-8 font-semibold
          hover:rounded-xl hover:-translate-y-4 hover:bg-[#ffffff] hover:backdrop-blur-sm hover:text-yellow-500 hover:transition hover:duration-300 hover:ease-out boxShadow"
          >
            Ahmed Qureshi
          </h1>
          <h2
            //  className="text-white text-3xl m-0"
            className="text-white text-4xl  py-4 px-8 font-semibold
           hover:rounded-xl  hover:bg-[#ffffff] hover:backdrop-blur-sm hover:text-yellow-500 hover:transition hover:duration-300 hover:ease-out boxShadow"
          >
            <TypewritterEffect />
          </h2>
        </main>
        <HomeFooter />
      </div>
    </>
  );
};
export default HomeLayout;
