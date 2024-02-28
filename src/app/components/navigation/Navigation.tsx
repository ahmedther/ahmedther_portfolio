"use client";

import React from "react";
import navigation_data from "@/app/components/navigation/nav_data";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Navigation.module.css";

const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="mb-8">
      <ul className="flex flex-row gap-32 text-2xl relative ">
        {navigation_data.map((nav) => (
          <li
            key={nav.name}
            className={`${styles.nav} ${
              nav.href === pathname
                ? styles.active
                : styles.inactive + " boxShadow"
            } `}
          >
            <Link href={nav.href}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
