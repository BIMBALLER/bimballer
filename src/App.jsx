import React from 'react';
import { Github, Mail, Linkedin, Zap, GraduationCap, Download, ExternalLink } from 'lucide-react';

const App = () => {
  // Enhanced Tech Stack with Official Logos (using SimpleIcons CDN)
  const stacks = [
    { name: 'React', icon: 'react' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'Tailwind', icon: 'tailwindcss' },
    { name: 'HTML5', icon: 'html5' },
    { name: 'CSS3', icon: 'css3' },
    { name: 'Vite', icon: 'vite' },
    { name: 'Node.js', icon: 'nodedotjs' },
    { name: 'Git', icon: 'git' },
    { name: 'Netlify', icon: 'netlify' },
    { name: 'Bootstrap', icon: 'bootstrap' }
  ];

  const projects = [
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
    {
      title: "Random Quote Generator",
      tech: ["HTML", "CSS", "JS", "API"],
      desc: "A modern web application delivering dynamic content with a focus on clean typography.",
      link: "https://psychic-journey-lovat.vercel.app/",
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
            ABIMBOLA<span className="text-cyan-400">.</span>
          </span>
          <div className="flex gap-4 md:gap-10 text-[10px] md:text-xs uppercase tracking-widest font-bold">
            <a href="#projects" className="hover:text-cyan-400 transition">Work</a>
            <a href="#contact" className="text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - Fixed for Mobile */}
      <section id="about" className="relative pt-32 pb-16 md:pt-48 md:pb-20 px-6">
        <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest">
              <Zap size={12} /> Built for Results
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
              Business Mind. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Developer Soul.
              </span>
            </h1>
            <p className="text-base md:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I am <span className="text-white font-medium">Abimbola Abdulmuizz</span>. 
              A Business graduate from KWASU who bridges the gap between complex code and business strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-white text-black text-center font-bold rounded-full hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/10">
                View Work
              </a>
              <a href="/resume.pdf" download className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-white/10 rounded-full hover:bg-white/5 transition-all text-white font-bold">
                <Download size={18} className="text-cyan-400" /> Resume
              </a>
            </div>
          </div>

          <div className="relative group order-1 lg:order-2 max-w-[300px] md:max-w-md mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-[2rem] md:rounded-[3rem] blur-2xl opacity-50"></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-slate-900 border border-white/10 shadow-2xl">
              <img src="/me.jpg" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-slate-900 border border-white/10 p-3 md:p-5 rounded-xl md:rounded-2xl shadow-2xl backdrop-blur-md">
              <GraduationCap className="text-cyan-400 mb-1 md:mb-2" size={20} />
              <p className="text-[10px] md:text-sm font-bold text-white uppercase tracking-tighter">KWASU Graduate</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH MARQUEE WITH LOGOS */}
      <div className="py-10 md:py-16 bg-slate-900/20 border-y border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[...stacks, ...stacks].map((tech, i) => (
            <div key={i} className="mx-6 md:mx-12 flex items-center gap-3 group">
              <img 
                src={`https://cdn.simpleicons.org/${tech.icon}/94a3b8`} 
                alt={tech.name}
                className="w-6 h-6 md:w-8 md:h-8 group-hover:filter-none transition-all grayscale"
                style={{ filter: 'brightness(0) invert(0.7)' }}
              />
              <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-slate-700 group-hover:text-cyan-400/50 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS SECTION - High Responsiveness */}
      <section id="projects" className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Live Previews</h2>
            <p className="text-cyan-400 font-mono text-xs md:text-sm uppercase tracking-widest">Interactive Portfolio</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
            {projects.map((p, i) => (
              <div key={i} className="group flex flex-col w-full">
                <div className="rounded-t-xl bg-[#1e293b] p-2 md:p-3 border-x border-t border-white/10 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/30"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
                  </div>
                  <div className="flex-grow mx-2 bg-[#020617] rounded py-1 px-3 text-[9px] md:text-[10px] text-slate-500 font-mono truncate">{p.link}</div>
                </div>
                <div className="relative h-[280px] sm:h-[350px] md:h-[450px] w-full bg-white overflow-hidden border-x border-b border-white/10 rounded-b-xl shadow-2xl">
                  <iframe 
                    src={p.link} 
                    title={p.title} 
                    className="w-[1000px] h-[800px] origin-top-left scale-[0.32] sm:scale-[0.45] md:scale-[0.55] lg:scale-[0.45] xl:scale-[0.55] pointer-events-none group-hover:pointer-events-auto transition-all"
                  ></iframe>
                  <div className="absolute inset-0 bg-[#020617]/40 lg:group-hover:opacity-0 transition-opacity flex items-center justify-center text-white font-bold text-[10px] uppercase tracking-widest backdrop-blur-[1px] md:flex hidden">
                    Interact with Preview
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition">{p.title}</h3>
                    <a href={p.link} target="_blank" rel="noreferrer" className="text-cyan-400 hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => <span key={t} className="text-[9px] font-bold uppercase px-2 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-20 border-t border-white/5 text-center px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 italic">Let's build something significant.</h2>
          <div className="flex justify-center gap-4 md:gap-6 mb-12">
            <a href="https://github.com/BIMBALLER/" className="p-4 bg-white/5 rounded-full hover:bg-cyan-400 hover:text-black transition-all"><Github size={20} /></a>
            <a href="https://linkedin.com/in/omoniyi-abimbola-abdulmuizz/" className="p-4 bg-white/5 rounded-full hover:bg-cyan-400 hover:text-black transition-all"><Linkedin size={20} /></a>
            <a href="mailto:abimbolaabdulmuizz@email.com" className="p-4 bg-white/5 rounded-full hover:bg-cyan-400 hover:text-black transition-all"><Mail size={20} /></a>
          </div>
          <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.4em] text-slate-600">© 2026 ABIMBOLA ABDULMUIZZ • KWASU ALUM</p>
        </div>
      </footer>
    </div>
  );
};

export default App;