import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070614] text-[#F8FAFC] flex flex-col selection:bg-purple-600/40 selection:text-white">
      {/* Background Ambient Glowing Canvas Elements */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-purple-900/20 via-indigo-900/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[35%] -left-40 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full" />
        <div className="absolute top-[65%] -right-40 w-[600px] h-[600px] bg-pink-900/10 blur-[150px] rounded-full" />
      </div>

      {/* Global Semantic Page Layout */}
      {/* A. NAVBAR */}
      <Navbar />

      <main className="flex-grow flex flex-col">
        {/* B. HERO SECTION */}
        <Hero />

        {/* C. ABOUT ME */}
        <About />

        {/* D. SKILLS */}
        <Skills />

        {/* E. PROJECTS */}
        <Projects />

        {/* F. ACHIEVEMENTS */}
        <Achievements />

        {/* G. CONTACT */}
        <Contact />
      </main>

      {/* H. FOOTER */}
      <Footer />
    </div>
  );
}
