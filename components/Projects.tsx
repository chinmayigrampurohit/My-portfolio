"use client";

import React from "react";
import { PROJECTS } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import { FolderGit2, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export default function Projects() {
  const featuredProject = PROJECTS.find((p) => p.isFeatured) || PROJECTS[0];
  const otherProjects = PROJECTS.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-purple-pink">Projects</span>
          </h2>
          <p className="mt-3 text-base text-gray-400 max-w-2xl">
            Real-world software implementations combining AI, edge computer vision, multimodal signal processing, and responsive architectures.
          </p>
        </div>

        {/* Featured Project Flagship Card */}
        <div className="mb-14">
          <ProjectCard project={featuredProject} />
        </div>

        {/* Supporting / Additional Projects Grid */}
        {otherProjects.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/[0.08]">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Software Engineering Initiatives
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Algorithmic foundations and full-stack development explorations
                </p>
              </div>
              <a
                href="https://github.com/chinmayigrampurohit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>View All Repositories</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* GitHub Repositories Banner */}
        <div className="mt-14 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 text-white shrink-0 hidden sm:block">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Explore More on GitHub
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Browse source code, development logs, experiments, and ongoing projects on my GitHub profile.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/chinmayigrampurohit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shrink-0"
          >
            <GithubIcon className="w-4 h-4" />
            <span>@chinmayigrampurohit</span>
          </a>
        </div>

      </div>
    </section>
  );
}
