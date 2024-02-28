import Typewriter from "typewriter-effect";
import Image from "next/image";
import React from "react";
import Navigation from "../navigation/Navigation";
import HomeFooter from "./HomeFooter";

const HomeLayout: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center  h-screen">
        <Navigation />
        <main className="flex flex-col items-center justify-center  m-12">
          <div className="bg-white  leading-none inline-block rounded-full hover:transition hover:duration-300 hover:ease-out hover:bg-black ">
            <div
              className="bg-white  leading-none inline-block rounded-full  border-4 border-black m-1 border-solid  cursor-pointer 
            hover:transition hover:duration-300 hover:border-white hover:ease-out hover:-translate-y-4 boxShadow"
            >
              <Image
                className="h-60 w-60 rounded-full  "
                src={"/ahmed_logo.png"}
                alt="Ahmed Logo"
                width={300}
                height={300}
              />
            </div>
          </div>
          <h1
            className="text-white text-6xl tracking-[.5rem] py-4 px-4 font-semibold
          hover:rounded-xl hover:-translate-y-4 hover:bg-[#ffffff3a] hover:backdrop-blur-sm hover:text-yellow-500 hover:transition hover:duration-300 hover:ease-out boxShadow"
          >
            Ahmed Qureshi
          </h1>
          <h2 className="text-white text-3xl m-0">Full Stack Devloper</h2>

          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello World!")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
        </main>
        <HomeFooter />
      </div>
    </>
  );
};
export default HomeLayout;
