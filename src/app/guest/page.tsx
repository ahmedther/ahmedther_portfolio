"use client";

import { useEffect, useState } from "react";

import LoadingScreen from "../components/ui/LoadingScreen";

export default function Guest() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    window.location.replace("/");
  }, []);

  if (!isClient) {
    return <LoadingScreen />;
  }

  return <LoadingScreen />;
}
