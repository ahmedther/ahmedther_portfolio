import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesTs from "./components/paricles/ParticlesTs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Ahmed Qureshi - Full Stack Developer | Python, JavaScript, Dart, SQL, Django, React, SvelteKit, Flutter, Next.js",
  description:
    "Ahmed Qureshi is a seasoned Full Stack Developer based in Halifax, NS, with expertise in Python, JavaScript, Dart, SQL, Django, DjangoREST Framework, React, SvelteKit, Flutter, Next.js, and more. With a strong background in both front-end and back-end development, Ahmed has a proven track record of creating dynamic and responsive web applications.",
  creator: "Ahmed Qureshi",
  publisher: "Ahmed Qureshi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ParticlesTs />
      </body>
    </html>
  );
}
