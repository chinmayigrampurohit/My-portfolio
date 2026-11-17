"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  ArrowRight,
  Sparkles,
  Award,
  Terminal,
  Cpu,
  Radio,
  ChevronDown,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Animated Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] bg-gradient-to-tr from-purple-700/20 via-indigo-600/20 to-pink-600/15 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Top Pill / Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-purple-500/30 backdrop-blur-md mb-6 shadow-sm shadow-purple-500/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-purple-200 tracking-wide">
                Bangalore Institute of Technology (BIT)
              </span>
            </div>

            {/* Main Greeting & Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-4">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
                Chinmayi.
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 block mt-2">
                An Aspiring Software Developer
              </span>
            </h1>

            {/* Hero Tagline */}
            <div className="relative my-3 py-1">
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
                &ldquo;{PERSONAL_INFO.heroTagline}&rdquo;
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-300/90 max-w-2xl font-normal leading-relaxed mb-8">
              {PERSONAL_INFO.heroSupportingText}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-gray-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-purple-400/40 backdrop-blur-md hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Let&apos;s Connect</span>
              </a>
            </div>

            {/* Social & Direct Contact Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-gray-400 font-medium mr-1 hidden sm:inline">Connect:</span>
              <a
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:text-white hover:bg-white/[0.1] hover:border-purple-500/40 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:text-white hover:bg-white/[0.1] hover:border-blue-500/40 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:text-white hover:bg-white/[0.1] hover:border-pink-500/40 transition-all hover:scale-110"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <div className="h-4 w-[1px] bg-white/10 mx-1 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse" />
                <span>Open for Opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Profile Avatar / High-Tech Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center relative z-10">
            <div className="relative w-[300px] sm:w-[360px] h-[340px] sm:h-[400px] flex items-center justify-center">
              
              {/* Decorative Geometric Rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-4 rounded-full border border-cyan-500/20 border-dashed pointer-events-none" />
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-600/10 via-pink-500/10 to-blue-600/10 blur-xl -z-10" />

              {/* Main Profile Card Placeholder */}
              {/* Note for Chinmayi: To use your own photo, place your image at /public/profile.jpg and replace the inner monogram with:
                  <Image src="/profile.jpg" alt="Chinmayi Grampurohit" width={320} height={320} className="w-full h-full object-cover rounded-3xl" />
              */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-3xl glass-panel p-2 flex flex-col items-center justify-between shadow-2xl border border-white/10 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-black/60 pointer-events-none" />
                
                {/* Tech Header inside Card */}
                <div className="w-full flex items-center justify-between px-3 pt-2 text-[11px] font-mono text-gray-400 z-10">
                  <span className="flex items-center gap-1.5 text-purple-300">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    <span>dev.profile</span>
                  </span>
                  <span className="text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full text-[10px]">
                    active
                  </span>
                </div>

                {/* Center Monogram / Stylized Avatar */}
                <div className="relative my-auto flex flex-col items-center justify-center z-10">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-600 p-[2px] shadow-xl shadow-purple-600/30">
                    <div className="w-full h-full bg-[#0E0C26] rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-[0.98] transition-transform">
                      {/* Grid background behind initials */}
                      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-200 to-pink-400 z-10">
                        CG
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-purple-400/80 uppercase mt-1 z-10">
                        Developer
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-white mt-3">Chinmayi Grampurohit</p>
                  <p className="text-xs text-gray-400">BIT Bangalore</p>
                </div>

                {/* Footer Pill inside Card */}
                <div className="w-full z-10 px-3 pb-2">
                  <div className="w-full py-1.5 px-3 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-between text-[11px] text-gray-300">
                    <span className="text-gray-400">Focus:</span>
                    <span className="font-medium text-purple-300">Software & AI Solutions</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: URSC ISRO First Prize */}
              <div className="absolute -top-4 -right-2 sm:-right-6 glass-panel py-2 px-3.5 rounded-2xl border border-amber-500/40 shadow-xl shadow-amber-500/10 flex items-center gap-2.5 animate-float-slow z-20">
                <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300">
                  <Award className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-amber-400">Recognition</p>
                  <p className="text-xs font-semibold text-white">First Prize – URSC (ISRO)</p>
                </div>
              </div>

              {/* Floating Badge 2: KVS First-Ever Podcast */}
              <div className="absolute -bottom-4 -left-2 sm:-left-6 glass-panel py-2 px-3.5 rounded-2xl border border-purple-500/40 shadow-xl shadow-purple-500/10 flex items-center gap-2.5 animate-float-medium z-20">
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300">
                  <Radio className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-purple-300">Leadership</p>
                  <p className="text-xs font-semibold text-white">KVS First-Ever Podcast Host</p>
                </div>
              </div>

              {/* Floating Badge 3: Tech Stack Pill */}
              <div className="absolute top-1/2 -left-6 sm:-left-12 -translate-y-1/2 glass-panel py-1.5 px-3 rounded-xl border border-cyan-500/30 shadow-lg flex items-center gap-2 hidden sm:flex z-20">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-mono text-cyan-200">Python • Next.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="flex flex-col items-center text-xs font-medium text-gray-400 hover:text-purple-300 transition-colors group"
            aria-label="Scroll to About Me section"
          >
            <span className="tracking-widest uppercase text-[10px] mb-1">Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-purple-400 group-hover:text-purple-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
