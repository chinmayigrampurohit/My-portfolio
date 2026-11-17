"use client";

import React, { useState } from "react";
import { ProjectItem } from "@/data/portfolioData";
import {
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Eye,
  Activity,
  Mic,
  Clock,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<"architecture" | "telemetry" | "fusion">("fusion");

  if (project.isFeatured) {
    return (
      <div className="relative rounded-3xl glass-panel p-6 sm:p-9 border border-purple-500/30 shadow-2xl shadow-purple-950/30 overflow-hidden group">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-b from-purple-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
        
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-200 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>{project.badge || "Featured Project"}</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Edge-Privacy Verified</span>
            </span>
          </div>

          {/* GitHub Action Button */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-purple-400/50 text-white text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm group/btn"
          >
            <GithubIcon className="w-4 h-4 text-purple-300 group-hover/btn:rotate-6 transition-transform" />
            <span>View Source Repository</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project Description & Highlights */}
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-purple-300 mb-4">
              {project.subtitle}
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 font-normal">
              {project.description}
            </p>

            {/* Architecture Highlights */}
            <div className="mb-6 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Core Engineering Capabilities
              </h4>
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Technology Tags */}
            <div className="mt-auto pt-6 border-t border-white/[0.08]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-purple-400/40 text-xs font-mono text-gray-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup / Interactive Telemetry Inspector */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="rounded-2xl bg-[#09081B] border border-white/10 p-5 shadow-2xl flex flex-col">
              
              {/* Telemetry Window Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-gray-400 ml-2">
                    edge_telemetry.json
                  </span>
                </div>
                <span className="text-[10px] font-mono text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded">
                  CYCLE: 60s
                </span>
              </div>

              {/* Sub-Tabs for Interactive Architecture Preview */}
              <div className="flex items-center gap-1.5 mb-4 p-1 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs">
                <button
                  onClick={() => setActiveTelemetryTab("fusion")}
                  className={`flex-1 py-1 px-2 rounded-lg font-medium transition-all ${
                    activeTelemetryTab === "fusion"
                      ? "bg-purple-600 text-white shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Multimodal Weights
                </button>
                <button
                  onClick={() => setActiveTelemetryTab("architecture")}
                  className={`flex-1 py-1 px-2 rounded-lg font-medium transition-all ${
                    activeTelemetryTab === "architecture"
                      ? "bg-purple-600 text-white shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Edge Privacy
                </button>
                <button
                  onClick={() => setActiveTelemetryTab("telemetry")}
                  className={`flex-1 py-1 px-2 rounded-lg font-medium transition-all ${
                    activeTelemetryTab === "telemetry"
                      ? "bg-purple-600 text-white shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Live Payload
                </button>
              </div>

              {/* Tab 1: Multimodal Fusion Weights */}
              {activeTelemetryTab === "fusion" && (
                <div className="space-y-3 my-2 animate-in fade-in duration-150">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-cyan-300 font-medium">
                        <Eye className="w-3.5 h-3.5" /> Gaze &amp; Visual Target Alignment
                      </span>
                      <span className="font-mono text-cyan-200">35%</span>
                    </div>
                    <div className="w-full bg-white/[0.06] h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full w-[35%]" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-purple-300 font-medium">
                        <Activity className="w-3.5 h-3.5" /> Body Language &amp; Spine Alignment
                      </span>
                      <span className="font-mono text-purple-200">25%</span>
                    </div>
                    <div className="w-full bg-white/[0.06] h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full w-[25%]" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-pink-300 font-medium">
                        <Mic className="w-3.5 h-3.5" /> Vocal Activity &amp; Diarization (VAD)
                      </span>
                      <span className="font-mono text-pink-200">25%</span>
                    </div>
                    <div className="w-full bg-white/[0.06] h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-pink-500 to-rose-500 h-full rounded-full w-[25%]" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                        <Clock className="w-3.5 h-3.5" /> Kinematic Head Cadence (0.5-2.0Hz)
                      </span>
                      <span className="font-mono text-amber-200">15%</span>
                    </div>
                    <div className="w-full bg-white/[0.06] h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 h-full rounded-full w-[15%]" />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Edge Privacy Architecture */}
              {activeTelemetryTab === "architecture" && (
                <div className="space-y-3.5 my-2 text-xs text-gray-300 animate-in fade-in duration-150">
                  <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-start gap-2.5">
                    <Lock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Transient Frame Purge</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        Frames in GPU buffer are wiped within ≤33ms. Zero raw footage is recorded or saved to disk.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">AES-256-GCM Vector Hashes</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        Facial embeddings are converted into pseudonymized cryptographic vectors (`REG-xxxxx`).
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Live Telemetry Payload */}
              {activeTelemetryTab === "telemetry" && (
                <div className="my-2 p-3 rounded-xl bg-black/60 border border-white/[0.06] font-mono text-[11px] text-purple-300 overflow-x-auto animate-in fade-in duration-150">
                  <pre>{`{
  "timestamp_utc": "2026-11-17T15:37:00Z",
  "participant_id": "REG-83921",
  "attendance_status": "Present",
  "engagement_score": 88.4,
  "state": "Highly Engaged",
  "fusion_metrics": {
    "gaze_alignment": 0.92,
    "spine_upright": 0.86,
    "vocal_vad": 0.78,
    "head_cadence_hz": 1.15
  },
  "gemini_suggestion": "Active engagement high; maintain conversational pacing."
}`}</pre>
                </div>
              )}

              {/* Key Quantitative Metrics Footer */}
              <div className="grid grid-cols-4 gap-2 pt-3 mt-3 border-t border-white/[0.06] text-center">
                {project.metrics?.map((m) => (
                  <div key={m.label} className="p-2 rounded-lg bg-white/[0.02]">
                    <p className="text-xs font-bold text-white font-mono">{m.value}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }

  // Standard Reusable Project Card (for other projects)
  return (
    <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/[0.06]">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-400 bg-purple-950/50 border border-purple-500/20 px-2.5 py-0.5 rounded-full">
            {project.badge || "Project"}
          </span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/[0.06] transition-colors"
            aria-label={`${project.title} repository`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-purple-300/80 font-medium mb-3">
          {project.subtitle}
        </p>

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="space-y-2 mb-6">
          {project.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md bg-white/[0.04] text-[11px] font-mono text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-semibold text-gray-200 hover:text-white flex items-center justify-center gap-2 transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Explore on GitHub</span>
          <ExternalLink className="w-3 h-3 text-gray-400" />
        </a>
      </div>
    </div>
  );
}
