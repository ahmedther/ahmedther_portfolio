"use client";
import React, { useState } from "react";
import navigation_data from "@/app/components/navigation/nav_data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./Navigation.module.css";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = "m-12" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname: string = usePathname();
  const currentPath: string =
    pathname.length > 1 ? pathname.substring(1) : pathname;

  return (
    <nav className={`${className}`}>
      <button
        className="absolute top-0 right-0 p-2 z-20 text-6xl boxShadow text-white hover:text-yellow-500 hover:bg-white hover:rounded-xl hover:-translate-y-4 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IoIosArrowUp /> : <HiMenu />}
      </button>
      <ul
        className={`
          flex-col gap-4 text-2xl absolute top-0 right-0 text-right z-10 pt-16 pb-3
          bg-[#3a3a3a41] rounded-xl backdrop-blur-sm
          md:bg-transparent md:rounded-none md:backdrop-filter-none md:pt-0 md:pb-0
          md:flex md:flex-row md:gap-32 md:relative md:top-auto md:right-auto md:text-left
          transition-all duration-300 ease-in-out
          ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full md:opacity-100 md:translate-y-0"
          }
        `}
      >
        {navigation_data.map((nav) => (
          <li key={nav.name}>
            <Link
              className={`${styles.nav} ${
                nav.href === currentPath
                  ? styles.active
                  : styles.inactive + " boxShadow"
              } `}
              href={nav.href}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
