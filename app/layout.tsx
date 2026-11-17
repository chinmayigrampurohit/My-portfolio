import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chinmayi Grampurohit | Aspiring Software Developer",
  description:
    "Personal portfolio of Chinmayi Grampurohit — Aspiring Software Developer at Bangalore Institute of Technology (BIT). URSC (ISRO) First Prize Winner, Host of the First-Ever KVS Podcast, and Builder of intelligent software solutions.",
  keywords: [
    "Chinmayi Grampurohit",
    "Software Developer",
    "Bangalore Institute of Technology",
    "BIT",
    "ISRO URSC First Prize",
    "KVS Podcast Host",
    "Multimodal Attendance & Engagement Agent",
    "Portfolio",
    "Next.js Developer",
    "Python",
    "TypeScript",
  ],
  authors: [{ name: "Chinmayi Grampurohit" }],
  creator: "Chinmayi Grampurohit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/chinmayigrampurohit",
    title: "Chinmayi Grampurohit | Aspiring Software Developer",
    description:
      "Turning Ideas Into Intelligent Solutions. Explore the portfolio of Chinmayi Grampurohit — software projects, technical skills, and achievements.",
    siteName: "Chinmayi Grampurohit Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinmayi Grampurohit | Aspiring Software Developer",
    description:
      "Turning Ideas Into Intelligent Solutions. Explore projects, skills, and achievements.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#070614] text-[#F8FAFC] selection:bg-purple-600/40 selection:text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
