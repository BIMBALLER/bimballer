import React from 'react';
import { Zap, Download, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="relative pt-32 pb-16 md:pt-48 md:pb-20 px-6">
      {/* ELITE POP: Multi-color animated glow background */}
      <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-transparent blur-[120px] rounded-full animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <Zap size={12} className="animate-bounce" /> Built for Results
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
            Business Mind. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Developer Soul.
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            I am <span className="text-white font-medium underline decoration-cyan-500/30 underline-offset-4">Abimbola Abdulmuizz</span>. 
            A Business graduate from KWASU who bridges the gap between complex code and business strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-cyan-500/25">
              View Work
            </a>
            <a href="/resume.pdf" download className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-white/10 rounded-full hover:bg-white/5 transition-all text-white font-bold backdrop-blur-sm">
              <Download size={18} className="text-cyan-400" /> Resume
            </a>
          </div>
        </div>

        {/* IMAGE SECTION WITH GLASS EFFECT */}
        <div className="relative group order-1 lg:order-2 max-w-[300px] md:max-w-md mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-[2rem] md:rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000"></div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-slate-900 border border-white/10 shadow-2xl">
            <img 
              src="/me.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700 hover:scale-110" 
            />
          </div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-slate-900/80 border border-white/10 p-3 md:p-5 rounded-xl md:rounded-2xl shadow-2xl backdrop-blur-xl">
            <GraduationCap className="text-cyan-400 mb-1 md:mb-2" size={20} />
            <p className="text-[10px] md:text-sm font-bold text-white uppercase tracking-tighter">KWASU Graduate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;