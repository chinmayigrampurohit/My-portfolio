"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { database } from "@/lib/firebase";
import { ref, push, serverTimestamp } from "firebase/database";
import {
  Mail,
  Send,
  Sparkles,
  MapPin,
  Check,
  Copy,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all fields before sending.");
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      // Save message to Firebase Realtime Database under 'contacts'
      const contactsRef = ref(database, "contacts");
      await push(contactsRef, {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        createdAt: serverTimestamp(),
        userAgent: typeof window !== "undefined" ? window.navigator.userAgent : "unknown",
      });

      setSubmitted(true);
    } catch (error: unknown) {
      console.error("Firebase submission error:", error);
      const errText = error instanceof Error ? error.message : "Unknown error";
      // Fallback message if Firebase database rules block write or network fails
      setErrorMessage(
        `Could not submit: ${errText}. Please try sending via direct email below.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoUrl = `mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name || "Colleague"}`
  )}&body=${encodeURIComponent(
    `Hi Chinmayi,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
  )}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Have an Idea? <span className="text-gradient-purple-pink">Let&apos;s Build Something Together.</span>
          </h2>
          <p className="mt-3 text-base text-gray-400 max-w-2xl">
            Whether you have a software project, research collaboration, internship opportunity, or just want to connect, feel free to reach out.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Details & Social Links */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Contact Card */}
            <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Connect Directly</h3>
              <p className="text-xs sm:text-sm text-gray-300 mb-6">
                I am always excited to discuss new technologies, impactful projects, and collaborative developer initiatives.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-gray-400">Direct Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.contact.email}`}
                        className="text-xs sm:text-sm font-semibold text-gray-200 hover:text-purple-300 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-gray-400">Location &amp; University</p>
                    <p className="text-xs sm:text-sm font-semibold text-gray-200">
                      Bangalore, India • BIT
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Professional Profiles
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/[0.04] hover:bg-[#0A66C2]/20 border border-white/[0.08] hover:border-[#0A66C2]/50 text-gray-200 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                      <span className="text-xs font-semibold">LinkedIn</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href={PERSONAL_INFO.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-purple-400/50 text-gray-200 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-semibold">GitHub</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-7 sm:p-9 rounded-3xl border border-white/10 shadow-2xl relative">
              
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.08]">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white">Send a Message</h3>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Message Sent, {formData.name}!
                  </h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Your message has been successfully saved to the database. I will review it and get back to you shortly!
                  </p>
                  
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", message: "" });
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Send Another Message</span>
                    </button>

                    <a
                      href={mailtoUrl}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-gray-300 hover:text-white flex items-center justify-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Or Open in Email App</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-gray-500 transition-colors disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-gray-500 transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Chinmayi, I saw your work on the Multimodal Attendance Agent and would love to collaborate..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm text-white placeholder-gray-500 transition-colors resize-none disabled:opacity-50"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-gray-400 mt-3">
                      Submissions are stored securely via Firebase. You can also reach out directly to{" "}
                      <a
                        href={`mailto:${PERSONAL_INFO.contact.email}`}
                        className="text-purple-400 hover:underline"
                      >
                        {PERSONAL_INFO.contact.email}
                      </a>
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
