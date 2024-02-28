"use client";

import React from "react";

import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Tippy from "@tippyjs/react";

const HomeFooter: React.FunctionComponent = () => {
  return (
    <footer className="flex  gap-32 mt-24">
      <a href="https://github.com/ahmedther" className="w-24 h-w-24 ">
        <FaSquareGithub
          className={`boxShadow h-full w-full text-white hover:text-yellow-500 hover:bg-white hover:rounded-xl hover:-translate-y-4 `}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ahmed--qureshi/"
        className="w-24 h-w-24 "
      >
        <FaLinkedin
          className={`boxShadow h-full w-full text-white hover:text-[#0a66c2]  hover:bg-white hover:rounded-xl hover:-translate-y-4 `}
        />
      </a>
      <Tippy
        className="-translate-y-10 "
        trigger="click"
        content={
          <span className=" bg-white text-xl rounded-md p-4 font-bold ">
            &#10003; Email ID Copied!
          </span>
        }
        hideOnClick={false}
        arrow={true}
        animation="fade"
        onShow={(instance) => {
          const timeout: NodeJS.Timeout = setTimeout(() => {
            instance.unmount();
            clearTimeout(timeout);
          }, 1000);
        }}
        allowHTML={true}
      >
        <button
          className="w-24 h-w-24  "
          onClick={() => navigator.clipboard.writeText("aa10980@gmail.com")}
        >
          <MdOutlineAlternateEmail
            className={`boxShadow h-full w-full text-white hover:text-yellow-500 hover:bg-white hover:rounded-xl hover:-translate-y-4 `}
          />
        </button>
      </Tippy>
    </footer>
  );
};

export default HomeFooter;
