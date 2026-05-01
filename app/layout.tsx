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
  title: "Ashfiqun Ahmed Miftah | QA Engineer & SQA Portfolio",
  description:
    "Portfolio of Ashfiqun Ahmed Miftah — focused on QA, SQA practices, structured testing, and reliable web and mobile product delivery.",
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
