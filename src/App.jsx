import React from 'react';
import { Github, ExternalLink, Mail, Linkedin, Globe, Zap, GraduationCap, Code2, Briefcase, Download } from 'lucide-react';

const App = () => {
  const stacks = ['React', 'TailwindCSS', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Vite', 'Git', 'Vercel', 'Netlify'];
  
  const projects = [
    {
      title: "Random Quote Generator",
      tech: ["HTML", "CSS", "JS", "API"],
      desc: "A modern web application delivering dynamic content with a focus on clean typography.",
      link: "https://psychic-journey-lovat.vercel.app/",
    },
    {
      title: "Logistic Web Solution",
      tech: ["JavaScript", "CSS3", "UX"],
      desc: "An end-to-end logistics platform designed for efficient tracking and service management.",
      link: "https://onels.netlify.app/",
    },
    {
      title: "Standard Portal",
      tech: ["React", "UI/UX", "Management"],
      desc: "A sophisticated portal interface focused on streamlined user access and data management.",
      link: "https://standardportal.netlify.app/",
    },
    {
      title: "Habu Peti Brand",
      tech: ["HTML5", "Branding", "Retail"],
      desc: "A premium brand presence for a laundry and apparel startup, focusing on customer conversion.",
      link: "https://habupeti.netlify.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <span className="text-2xl font-black tracking-tighter text-white">
            ABIMBOLA<span className="text-cyan-400">.</span>
          </span>
          <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-bold">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Work</a>
            <a href="#contact" className="text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="about" className="relative pt-48 pb-20 px-8">
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
              <Zap size={14} /> Built for Results
            </div>
            <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight">
              Business Mind. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Developer Soul.
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
              I am <span className="text-white font-medium">Abimbola Abdulmuizz</span>. 
              A Business graduate from KWASU who bridges the gap between complex code and business strategy.
            </p>
            
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <a href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/10">
                View My Projects
              </a>
              <a 
                href="/resume.pdf" 
                download="Abimbola_Abdulmuizz_CV.pdf"
                className="flex items-center gap-2 px-8 py-4 border border-white/10 rounded-full hover:bg-white/5 transition-all text-white font-bold"
              >
                <Download size={18} className="text-cyan-400" /> Download CV
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-[3rem] blur-2xl opacity-50"></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-900 border border-white/10 shadow-2xl">
              <img src="/me.jpg" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-white/10 p-5 rounded-2xl shadow-2xl backdrop-blur-md">
              <GraduationCap className="text-cyan-400 mb-2" size={24} />
              <p className="text-sm font-bold text-white uppercase tracking-tighter">KWASU Graduate</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <div className="py-16 bg-slate-900/20 border-y border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...stacks, ...stacks].map((tech, i) => (
            <span key={i} className="mx-12 text-4xl font-black uppercase tracking-tighter text-slate-800 hover:text-cyan-400/50 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-white mb-2">Live Previews</h2>
            <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest">Interactive Project Journey</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {projects.map((p, i) => (
              <div key={i} className="group flex flex-col">
                <div className="rounded-t-2xl bg-[#1e293b] p-3 border-x border-t border-white/10 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                  </div>
                  <div className="flex-grow mx-4 bg-[#020617] rounded py-1 px-3 text-[10px] text-slate-500 font-mono truncate">{p.link}</div>
                </div>
                <div className="relative h-[450px] w-full bg-white overflow-hidden border-x border-b border-white/10 rounded-b-2xl shadow-2xl">
                  <iframe 
                    src={p.link} 
                    title={p.title} 
                    className="w-[1280px] h-[1000px] origin-top-left scale-[0.35] md:scale-[0.55] lg:scale-[0.45] xl:scale-[0.55] pointer-events-none group-hover:pointer-events-auto transition-all"
                  ></iframe>
                  <div className="absolute inset-0 bg-[#020617]/50 group-hover:opacity-0 transition-opacity flex items-center justify-center pointer-events-none text-white font-bold text-xs uppercase tracking-[0.3em] backdrop-blur-[2px] group-hover:backdrop-blur-none">
                    Explore Live Site
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition">{p.title}</h3>
                    <a href={p.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex gap-2">
                    {p.tech.map(t => <span key={t} className="text-[10px] font-bold uppercase px-2 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-20 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-white mb-8 italic">Let's build something significant.</h2>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/BIMBALLER/" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-cyan-400 hover:text-black transition-all">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/omoniyi-abimbola-abdulmuizz/" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-cyan-400 hover:text-black transition-all">
              <Linkedin size={24} />
            </a>
            <a href="mailto:abimbolaabdulmuizz@email.com" className="p-4 bg-white/5 rounded-full hover:bg-cyan-400 hover:text-black transition-all">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-slate-600 italic">© 2026 ABIMBOLA ABDULMUIZZ • KWASU ALUM</p>
        </div>
      </footer>
    </div>
  );
};

export default App;