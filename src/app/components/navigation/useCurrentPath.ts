"use client";

import { usePathname } from "next/navigation";

export default function useCurrentPath() {
  const pathname: string = usePathname();
  const currentPath: string =
    pathname.length > 1 ? pathname.substring(1) : pathname;

  return currentPath;
}
