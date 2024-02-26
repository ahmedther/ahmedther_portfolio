import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeLayout: React.FC = () => {
  return (
    <header className="flex flex-col justify-center items-center  h-screen">
      <nav className="mb-8">
        <ul className="flex flex-row gap-44 text-2xl ">
          <li className="text-yellow-500 hover:text-yellow-500">
            <Link href="/"> Home</Link>
          </li>
          <li className="text-white opacity-45 hover:opacity-100 hover:text-yellow-500 hover:font-semibold">
            <Link href="/about"> About Me</Link>
          </li>
          <li className="text-white opacity-45 hover:opacity-100 hover:text-yellow-500 hover:font-semibold">
            Resume
          </li>
          <li className="text-white opacity-45 hover:opacity-100 hover:text-yellow-500 hover:font-semibold">
            Projects
          </li>
          <li className="text-white opacity-45 hover:opacity-100 hover:text-yellow-500 hover:font-semibold">
            Guest List
          </li>
        </ul>
      </nav>
      <main className="flex flex-col items-center justify-center  m-12">
        <div className="bg-white  leading-none inline-block rounded-full hover:thover:transition hover:duration-300 hover:ease-out hover:bg-yellow-500  ">
          <div className="bg-white  leading-none inline-block rounded-full  border-4 border-black m-1 border-solid  cursor-pointer hover:transition hover:duration-300 hover:border-yellow-500 hover:ease-out ">
            <Image
              className="h-60 w-60 rounded-full  "
              src={"/ahmed_logo.png"}
              alt="Ahmed Logo"
              width={300}
              height={300}
            />
          </div>
        </div>
        <h1 className="text-white text-6xl tracking-[.5rem] hover:text-yellow-500 hover:transition hover:duration-300 hover:ease-out">
          Ahmed Qureshi
        </h1>
        <h2 className="text-white text-3xl m-0">Full Stack Devloper</h2>;
      </main>
    </header>
  );
};
export default HomeLayout;
