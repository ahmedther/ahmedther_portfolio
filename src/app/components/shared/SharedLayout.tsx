import React from "react";
import Navigation from "../navigation/Navigation";
import GlareEffect from "../ui/GlareEffect";

interface GlareEffectsProps {
  children: React.ReactNode;
  glareClassName?: string;
}

const SharedLayout: React.FunctionComponent<GlareEffectsProps> = ({
  children,
  glareClassName,
}) => {
  return (
    <main className="flex flex-col items-center gap-14 min-h-screen">
      <Navigation />
      <GlareEffect className={glareClassName}>{children}</GlareEffect>;
    </main>
  );
};

export default SharedLayout;
