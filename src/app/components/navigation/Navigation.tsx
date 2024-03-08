"use client";

import React from "react";
import navigation_data from "@/app/components/navigation/nav_data";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Navigation.module.css";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = "mb-8" }) => {
  const pathname: string = usePathname();
  const currentPath: string =
    pathname.length > 1 ? pathname.substring(1) : pathname;

  return (
    <nav className={className}>
      <ul className="flex flex-row gap-32 text-2xl relative ">
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
