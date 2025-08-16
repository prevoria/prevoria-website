"use client";
import { useState } from "react";
import { CheckCircle, ArrowRight, Sparkles, Shield, Clock, Gift } from "lucide-react";
import { Tile, FeatureCard } from "@/components/ui";

export default function Page(){
  const [email, setEmail] = useState("");
  return (<div className="min-h-screen text-slate-100">
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2"><div className="h-8 w-8 rounded-xl bg-emerald-500/20 grid place-items-center">
          <Sparkles className="h-5 w-5 text-emerald-400" /></div><span className="font-semibold tracking-wide">Prevoria</span></div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#focus" className="hover:text-white">Focus Areas</a>
          <a href="#modules" className="hover:text-white">Modules</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Smart Choices. <span className="text-emerald-400">Validated Outcomes.</span></h1>
          <p className="mt-5 text-lg text-slate-300 max-w-xl">Prevoria is an Agentic AI platform that reduces regret and amplifies value for students. Start with six focused modules across Loss Prevention and Joy Amplification.</p>
          <form onSubmit={(e)=>{e.preventDefault(); alert(`Thanks! We'll be in touch at ${email}`);}} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input type="email" required placeholder="Enter your email for early access" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full sm:w-96 rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"/>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-900 hover:bg-emerald-400 transition">Join waitlist <ArrowRight className="h-4 w-4"/></button>
          </form>
          <p className="mt-3 text-xs text-slate-400">No spam. One update per month.</p>
        </div>
        <div className="relative">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 shadow-2xl">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <FeatureCard icon={<Shield className="h-5 w-5" />} title="Loss Prevention" bullets={["Exam Coach Bot","Scholarship Advisor","Time Management Tracker"]} />
              <FeatureCard icon={<Gift className="h-5 w-5" />} title="Joy Amplification" bullets={["Campus Deal Finder","Skill Match AI","Study Abroad Advisor"]} />
            </div>
          </div>
          <div className="absolute -inset-6 -z-10 blur-3xl bg-emerald-500/10 rounded-[3rem]" />
        </div>
      </div>
    </section>
    <section id="focus" className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">Focus areas</h2>
      <p className="mt-3 text-slate-300 max-w-3xl">Start simple. Ship value. Our MVP targets three loss-prevention and three joy-amplification themes designed with students and campuses.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <Tile icon={<Shield className="h-5 w-5" />} title="Decision Clarity" desc="Guardrails that reduce regret before you commit."/>
        <Tile icon={<Clock className="h-5 w-5" />} title="Time Optimization" desc="Plan smarter, avoid crunch, finish calm."/>
        <Tile icon={<Shield className="h-5 w-5" />} title="Opportunity Preservation" desc="Never miss scholarships or deadlines."/>
        <Tile icon={<Gift className="h-5 w-5" />} title="Micro‑Wins" desc="Celebrate progress with meaningful feedback."/>
        <Tile icon={<Sparkles className="h-5 w-5" />} title="Peer Momentum" desc="Motivation loops via buddies & leaderboards."/>
        <Tile icon={<Sparkles className="h-5 w-5" />} title="Interest Paths" desc="Explore topics aligned to your spark."/>
      </div>
    </section>
    <section id="modules" className="mx-auto max-w-7xl px-4 py-16 border-t border-white/10">
      <h2 className="text-2xl md:text-3xl font-semibold">Six starter modules</h2>
      <p className="mt-3 text-slate-300 max-w-3xl">Each module runs on the shared AI core with privacy-first data handling.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          {h:"Exam Coach Bot", p:"Personalized revision plans and mock tests with targeted feedback."},
          {h:"Scholarship Advisor", p:"Matches your profile to grants and alerts you before deadlines."},
          {h:"Time Management Tracker", p:"Calendar sync, priorities, and gentle focus nudges."},
          {h:"Campus Deal Finder", p:"Real-time student perks for food, transit, and events."},
          {h:"Skill Match AI", p:"Connect skills to internships, projects, and competitions."},
          {h:"Study Abroad Advisor", p:"Programs, funding, and step-by-step application checklists."},
        ].map((m)=> (<div key={m.h} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition">
          <h3 className="font-semibold text-lg">{m.h}</h3>
          <p className="mt-2 text-sm text-slate-300">{m.p}</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400"/> Privacy-first</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400"/> Fast to pilot</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400"/> Measurable CSAT</li>
          </ul></div>))}
      </div>
    </section>
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 border-t border-white/10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">About Prevoria</h2>
          <p className="mt-3 text-slate-300">Prevoria blends Agentic AI with human‑centered design to help students avoid regret and experience validated outcomes. Built to expand beyond education into life decisions across careers, health, and finance.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-semibold">MVP principles</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400"/> Ship simple, measure impact</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400"/> Privacy and consent by default</li>
            <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400"/> Transparent reasoning and easy opt‑out</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 border-t border-white/10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Partner with Prevoria</h2>
          <p className="mt-3 text-slate-300">Universities, student communities, and early adopters — join our MVP pilots.</p>
        </div>
        <form onSubmit={(e)=>{e.preventDefault(); alert("Thanks! We’ll reach out soon.");}} className="flex flex-col sm:flex-row gap-3">
          <input type="email" required placeholder="Contact email" className="w-full sm:w-96 rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"/>
          <button type="submit" className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-900 hover:bg-emerald-400 transition">Request a pilot</button>
        </form>
      </div>
      <footer className="pt-10 pb-16 text-center text-sm text-slate-400">© {new Date().getFullYear()} Prevoria — Smart Choices. Validated Outcomes.</footer>
    </section>
  </div>);
}
