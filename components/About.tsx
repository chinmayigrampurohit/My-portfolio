"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  GraduationCap,
  Sparkles,
  Trophy,
  Mic,
  Code2,
  Compass,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  const { aboutMe } = PERSONAL_INFO;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-purple-pink">Chinmayi Grampurohit</span>
          </h2>
          <p className="mt-3 text-base text-gray-400 max-w-2xl">
            Passionate software developer, curious innovator, and proactive communicator.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Full Bio Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Lead Bio Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Code2 className="w-28 h-28 text-purple-400" />
              </div>
              
              <div className="flex items-center gap-3 text-purple-400 mb-4">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <GraduationCap className="w-5 h-5 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Bangalore Institute of Technology (BIT)</h3>
                  <p className="text-xs text-purple-300/80">Undergraduate Studies & Engineering</p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium">
                {aboutMe.lead}
              </p>
            </div>

            {/* Paragraph 2: Technical Passion */}
            <div className="glass-panel p-6 rounded-2xl border border-white/[0.08] flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mt-1 shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                  Creative Engineering Mindset
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {aboutMe.body1}
                </p>
              </div>
            </div>

            {/* Paragraph 3: KVS Podcast & Leadership */}
            <div className="glass-panel p-6 rounded-2xl border border-purple-500/20 flex items-start gap-4 bg-gradient-to-r from-purple-950/30 to-transparent">
              <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300 mt-1 shrink-0">
                <Mic className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-purple-200 uppercase tracking-wider mb-1">
                  Communication & Leadership Impact
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {aboutMe.body2}
                </p>
              </div>
            </div>

            {/* Paragraph 4: URSC ISRO First Prize */}
            <div className="glass-panel p-6 rounded-2xl border border-amber-500/30 flex items-start gap-4 bg-gradient-to-r from-amber-950/20 to-transparent">
              <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 mt-1 shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-1">
                  Curiosity & Innovation
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {aboutMe.body3}
                </p>
              </div>
            </div>

            {/* Paragraph 5: Conclusion / Philosophy */}
            <div className="glass-panel p-6 rounded-2xl border border-white/[0.08] flex items-start gap-4 bg-white/[0.02]">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mt-1 shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-1">
                  Forward Vision
                </h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed italic">
                  &ldquo;{aboutMe.conclusion}&rdquo;
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Creative Profile Card & Key Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-6 sticky top-24">
            
            {/* Identity & Fact Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center font-extrabold text-2xl text-white shadow-lg shadow-purple-600/30">
                  CG
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-purple-400 font-medium">{PERSONAL_INFO.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Bangalore, India</p>
                </div>
              </div>

              {/* Quick Info Matrix */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">Institution</span>
                  <span className="text-xs font-semibold text-white text-right">
                    Bangalore Institute of Technology
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 flex items-center justify-between">
                  <span className="text-xs text-amber-300 font-medium">ISRO Recognition</span>
                  <span className="text-xs font-semibold text-amber-200 text-right">
                    First Prize – URSC (ISRO)
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-500/[0.06] border border-purple-500/20 flex items-center justify-between">
                  <span className="text-xs text-purple-300 font-medium">Media Milestone</span>
                  <span className="text-xs font-semibold text-purple-200 text-right">
                    Host – First-Ever KVS Podcast
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">Core Belief</span>
                  <span className="text-xs font-semibold text-cyan-300 text-right">
                    Code That Solves Real Problems
                  </span>
                </div>
              </div>

              {/* Highlights Checklist */}
              <div className="mt-6 pt-6 border-t border-white/[0.08]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Key Attributes & Values
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "Continuous learning & fast adaptability",
                    "Strong interpersonal & public speaking skills",
                    "End-to-end technical curiosity & creativity",
                    "Commitment to impactful, scalable solutions",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
