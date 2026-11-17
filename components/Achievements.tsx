"use client";

import React from "react";
import {
  Trophy,
  Mic,
  CheckCircle2,
  Building2,
  Users2,
  Star,
  Radio,
} from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm shadow-amber-500/10">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Honors &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Major <span className="text-gradient-gold">Achievements</span>
          </h2>
          <p className="mt-3 text-base text-gray-300 max-w-2xl">
            Distinguished recognitions celebrating scientific curiosity, innovation, high-impact communication, and proven leadership.
          </p>
        </div>

        {/* Two Large Visually Distinctive Achievement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: URSC (ISRO) - First Prize with Premium Gold Accent */}
          <div className="relative rounded-3xl glass-panel p-8 sm:p-10 gold-card-glow transition-all duration-300 group flex flex-col justify-between overflow-hidden">
            {/* Ambient Gold Radial Glow inside Card */}
            <div className="absolute -top-16 -right-16 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-yellow-500/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Badge & Recognition Header */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-amber-500/20">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wider uppercase">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Featured Achievement</span>
                </span>
                <span className="text-xs font-mono font-semibold text-amber-400/90 px-3 py-1 rounded-lg bg-amber-950/50 border border-amber-500/30">
                  Recognition: First Prize
                </span>
              </div>

              {/* Icon & Title Area */}
              <div className="flex items-start gap-5 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 text-black shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform shrink-0">
                  <Trophy className="w-8 h-8 text-black fill-black/20" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-amber-200 transition-colors">
                    First Prize – URSC (ISRO)
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5 text-sm font-semibold text-amber-400">
                    <Building2 className="w-4 h-4" />
                    <span>URSC – U R Rao Satellite Centre, ISRO</span>
                  </div>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6 font-normal">
                Secured <strong className="text-amber-300 font-bold">First Prize</strong> at URSC (ISRO). This landmark achievement reflects curiosity, dedication, problem-solving capability, and genuine enthusiasm for learning and high-standard scientific innovation.
              </p>

              {/* Detailed Verified Highlights */}
              <div className="space-y-3 mb-6 bg-black/30 p-5 rounded-2xl border border-amber-500/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Milestone Highlights
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "Awarded First Prize by U R Rao Satellite Centre (ISRO)",
                    "Excellence in technological innovation and creative inquiry",
                    "Demonstrated analytical rigor and dedication to scientific problem-solving",
                    "A distinguished honor reflecting curiosity and commitment to excellence",
                  ].map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Tag */}
            <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs text-amber-300/80">
              <span className="font-mono">#ISRO #URSC #FirstPrize</span>
              <span className="font-semibold text-amber-300">Innovation &amp; Curiosity</span>
            </div>
          </div>

          {/* Card 2: KVS First-Ever Podcast Host with Electric Purple / Magenta Accent */}
          <div className="relative rounded-3xl glass-panel p-8 sm:p-10 podcast-card-glow transition-all duration-300 group flex flex-col justify-between overflow-hidden">
            {/* Ambient Purple Radial Glow inside Card */}
            <div className="absolute -top-16 -right-16 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-pink-600/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Badge & Recognition Header */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-purple-500/20">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/40 text-purple-300 text-xs font-bold tracking-wider uppercase">
                  <Radio className="w-3.5 h-3.5 text-purple-400" />
                  <span>Media &amp; Leadership Milestone</span>
                </span>
                <span className="text-xs font-mono font-semibold text-purple-300 px-3 py-1 rounded-lg bg-purple-950/50 border border-purple-500/30">
                  Official Podcast Host
                </span>
              </div>

              {/* Icon & Title Area */}
              <div className="flex items-start gap-5 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-500 text-white shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform shrink-0">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-purple-200 transition-colors">
                    Host – First-Ever KVS Podcast
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5 text-sm font-semibold text-purple-300">
                    <Users2 className="w-4 h-4" />
                    <span>Featured a KVS IAS Commissioner</span>
                  </div>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6 font-normal">
                Selected to host the inaugural <strong className="text-purple-300 font-bold">first-ever KVS podcast</strong>, conducting a landmark interview featuring a <strong className="text-purple-300 font-bold">KVS IAS Commissioner</strong>. An experience that strengthened public-speaking, leadership, communication, and interpersonal presence.
              </p>

              {/* Detailed Verified Highlights */}
              <div className="space-y-3 mb-6 bg-black/30 p-5 rounded-2xl border border-purple-500/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Competencies &amp; Impact
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "Hosted the historic first-ever official KVS podcast episode",
                    "Featured an insightful session with a distinguished KVS IAS Commissioner",
                    "Honed executive public speaking, articulate moderation, and interpersonal poise",
                    "Exemplified proactive leadership, conversational agility, and media storytelling",
                  ].map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Tag */}
            <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between text-xs text-purple-300/80">
              <span className="font-mono">#KVSPodcast #Leadership #PublicSpeaking</span>
              <span className="font-semibold text-purple-300">Communication &amp; Leadership</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
