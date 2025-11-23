import type { Metadata } from "next";
import {
  JetBrains_Mono,
  DM_Sans,
  Sora,
} from "next/font/google";
import "./globals.css";

const base = DM_Sans({
  variable: "--font-base",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ashfiqun Ahmed Miftah | Data Analyst & UI/UX Designer",
  description:
    "Portfolio of Ashfiqun Ahmed Miftah — blending SQL, Python, Tableau, Power BI, and human-centered design to turn data into decisions and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${base.variable} ${mono.variable} ${display.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
