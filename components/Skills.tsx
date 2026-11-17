"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  Code,
  Globe,
  GitBranch,
  Users,
  Sparkles,
  Cpu,
  Layers,
  Terminal,
  Brain,
  MessageSquare,
  Mic,
  Award,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

export default function Skills() {
  // Helper to map skill names to specialized icons
  const getSkillIcon = (name: string) => {
    switch (name) {
      case "Python":
        return <Terminal className="w-4 h-4 text-yellow-400" />;
      case "C":
      case "C++":
        return <Cpu className="w-4 h-4 text-blue-400" />;
      case "HTML":
      case "CSS":
        return <Globe className="w-4 h-4 text-orange-400" />;
      case "JavaScript":
      case "TypeScript":
        return <Code className="w-4 h-4 text-amber-300" />;
      case "React.js":
      case "Next.js":
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case "Tailwind CSS":
        return <Sparkles className="w-4 h-4 text-teal-300" />;
      case "Git":
      case "GitHub":
        return <GitBranch className="w-4 h-4 text-emerald-400" />;
      case "Problem Solving":
        return <Brain className="w-4 h-4 text-purple-400" />;
      case "Communication":
        return <MessageSquare className="w-4 h-4 text-blue-400" />;
      case "Public Speaking":
        return <Mic className="w-4 h-4 text-pink-400" />;
      case "Leadership":
        return <Award className="w-4 h-4 text-amber-400" />;
      case "Team Collaboration":
        return <Users className="w-4 h-4 text-indigo-400" />;
      case "Creative Thinking":
        return <Lightbulb className="w-4 h-4 text-emerald-400" />;
      default:
        return <CheckCircle className="w-4 h-4 text-purple-400" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming":
        return <Terminal className="w-5 h-5 text-purple-400" />;
      case "Web Development":
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case "Tools":
        return <GitBranch className="w-5 h-5 text-emerald-400" />;
      case "Professional Skills":
        return <Users className="w-5 h-5 text-pink-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; <span className="text-gradient-cyan-blue">Expertise</span>
          </h2>
          <p className="mt-3 text-base text-gray-400 max-w-2xl">
            A balanced foundation of core programming languages, modern web engineering frameworks, developer tooling, and interpersonal leadership competencies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((categoryItem) => (
            <div
              key={categoryItem.category}
              className="glass-panel p-7 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/10 group flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-105 transition-transform">
                      {getCategoryIcon(categoryItem.category)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {categoryItem.category}
                      </h3>
                      <span className="text-xs text-gray-400">
                        {categoryItem.skills.length} core competencies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Category Description */}
                <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                  {categoryItem.description}
                </p>

                {/* Animated Skill Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {categoryItem.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/chip relative px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] hover:border-purple-400/50 transition-all duration-200 cursor-default flex items-center gap-2.5 shadow-sm hover:scale-[1.03] active:scale-[0.98]"
                    >
                      <span className="shrink-0 group-hover/chip:rotate-6 transition-transform">
                        {getSkillIcon(skill.name)}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-200 group-hover/chip:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/chip:bg-purple-400 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-gray-400">
                <span className="font-mono text-gray-400/80">#verified-proficiency</span>
                <span className="text-purple-300 font-medium">Applied in Real Projects</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner on Problem Solving Mindset */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-purple-900/20 via-indigo-900/10 to-transparent flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 rounded-2xl bg-purple-500/20 border border-purple-500/30 text-purple-300 shrink-0 hidden sm:block">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Continuous Exploration &amp; Real-World Application
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                From high-speed edge computer vision to full-stack reactive applications, I focus on building reliable systems rather than superficial metric scores.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-purple-200 hover:text-white shrink-0 transition-colors"
          >
            See Skills In Action →
          </a>
        </div>

      </div>
    </section>
  );
}
