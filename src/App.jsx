import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Zap, GraduationCap, Download, ExternalLink, Check, ArrowUp, Briefcase, Sun, Moon, MessageCircle } from 'lucide-react';

const App = () => {
  const [isLight, setIsLight] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  // UPDATE: Replace with your actual number (Country Code + Number)
  const WHATSAPP_NUMBER = "2348058979847"; 
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello Abimbola, I saw your portfolio and would like to connect!`;

  const toggleTheme = () => {
    const newMode = !isLight;
    setIsLight(newMode);
    if (newMode) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.setAttribute('download', 'Abimbola_Abdulmuizz_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("abimbolaabdulmuizz@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const checkScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const stacks = [
    { name: 'React', icon: 'react' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'Tailwind', icon: 'tailwindcss' },
    { name: 'Node.js', icon: 'nodedotjs' },
    { name: 'Vite', icon: 'vite' },
    { name: 'Git', icon: 'git' },
    { name: 'Netlify', icon: 'netlify' },
    { name: 'HTML5', icon: 'html5' }
  ];

  const projects = [
    {
      title: "Logistic Web Solution",
      tech: ["JavaScript", "CSS3", "UX"],
      strategy: "Optimizing supply chain visibility through data-driven UI.",
      link: "https://onels.netlify.app/",
    },
    {
      title: "Standard Portal",
      tech: ["React", "UI/UX", "Management"],
      strategy: "Streamlining enterprise resource access for high productivity.",
      link: "https://standardportal.netlify.app/",
    },
    {
      title: "Habu Peti Brand",
      tech: ["HTML5", "Branding", "Retail"],
      strategy: "Converting brand identity into digital retail growth.",
      link: "https://habupeti.netlify.app/",
    },
    {
      title: "Random Quote Generator",
      tech: ["JavaScript", "API"],
      strategy: "Optimizing lightweight performance and clean interface design.",
      link: "https://psychic-journey-lovat.vercel.app/",
    }
  ];

  const filteredProjects = projects.filter(p => 
    activeFilter === 'All' ? true : p.tech.includes(activeFilter)
  );

  return (
    <div className="min-h-screen bg-primary text-secondary transition-colors duration-500">
      
      {/* FLOATING TOOLS */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <button onClick={toggleTheme} className="p-4 bg-accent text-white rounded-full shadow-lg hover:rotate-12 transition-all">
          {isLight ? <Moon size={24} /> : <Sun size={24} />}
        </button>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg transition-all ${showScroll ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <ArrowUp size={24} className="text-accent" />
        </button>
      </div>

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-primary/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-black tracking-tighter">ABIMBOLA<span className="text-accent">.</span></span>
          <div className="flex items-center gap-4">
            <button onClick={copyEmail} className="hidden sm:block px-4 py-2 text-xs font-bold uppercase opacity-60 hover:opacity-100 transition-all">
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-xs font-bold uppercase hover:scale-105 transition-all shadow-lg shadow-accent/20">
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-24 px-6">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-accent/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1]">
              Business Mind.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate-gradient-x">Developer Soul.</span>
            </h1>
            <p className="text-lg opacity-80 max-w-xl mx-auto lg:mx-0">
              KWASU Business Graduate bridging the gap between profit strategies and scalable code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="px-8 py-4 bg-accent text-white font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-accent/20">View Work</a>
              <button onClick={handleDownload} className="flex items-center justify-center gap-2 px-8 py-4 border border-accent/30 rounded-full font-bold hover:bg-accent/5">
                <Download size={18} /> Get Resume
              </button>
            </div>
          </div>
          <div className="mx-auto relative group order-1 lg:order-2">
            <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-2xl group-hover:bg-accent/30 transition-all"></div>
            <img src="/me.jpg" className="relative w-64 md:w-80 rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/10" alt="Profile" />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-12 bg-white/5 border-y border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...stacks, ...stacks, ...stacks].map((tech, i) => (
            <div key={i} className="mx-12 flex items-center gap-4 group">
              <img src={`https://cdn.simpleicons.org/${tech.icon}`} className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all" alt={tech.name} />
              <span className="text-4xl font-black opacity-20 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <h2 className="text-4xl font-black uppercase tracking-tight text-center md:text-left">Selected Work</h2>
            <div className="flex gap-2 bg-white/5 p-1 rounded-full border border-white/5">
              {['All', 'React', 'JavaScript'].map(f => (
                <button key={f} onClick={() => setActiveFilter(f)} className={`px-6 py-2 rounded-full text-xs font-bold transition-all uppercase tracking-widest ${activeFilter === f ? 'bg-accent text-white shadow-lg' : 'hover:bg-white/10 opacity-60'}`}>{f}</button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            {filteredProjects.map((p, i) => (
              <div key={i} className="group p-6 bg-white/5 rounded-[2rem] border border-white/5 hover:border-accent/30 transition-all shadow-xl">
                <div className="aspect-video bg-primary rounded-2xl mb-8 overflow-hidden relative border border-white/10">
                   <iframe src={p.link} className="w-[1200px] h-[900px] origin-top-left scale-[0.3] md:scale-[0.4] pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity" title={p.title}></iframe>
                   <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold uppercase">{p.title}</h3>
                    <a href={p.link} target="_blank" rel="noreferrer" className="p-3 bg-accent/10 text-accent rounded-full hover:bg-accent hover:text-white transition-all"><ExternalLink size={20} /></a>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-purple-500/5 border border-purple-500/10 rounded-xl">
                    <Briefcase size={18} className="text-purple-400 shrink-0 mt-1" />
                    <p className="text-sm opacity-70 italic leading-relaxed">"{p.strategy}"</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tech.map(t => <span key={t} className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-bold uppercase tracking-widest border border-white/5">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-32 text-center border-t border-white/5 bg-white/5 backdrop-blur-sm">
        <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tight">Let's build something <span className="text-accent animate-pulse">significant.</span></h2>
        <div className="flex justify-center gap-4 md:gap-8 mb-20">
          <a href="https://github.com/BIMBALLER/" target="_blank" rel="noreferrer" className="group p-6 bg-white/5 rounded-[2rem] hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
            <Github size={32} className="group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://linkedin.com/in/omoniyi-abimbola-abdulmuizz/" target="_blank" rel="noreferrer" className="group p-6 bg-white/5 rounded-[2rem] hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-lg">
            <Linkedin size={32} className="group-hover:scale-110 transition-transform" />
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="group p-6 bg-white/5 rounded-[2rem] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-lg">
            <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
        <p className="text-[10px] md:text-xs uppercase font-bold tracking-[0.8em] opacity-40">© 2026 ABIMBOLA ABDULMUIZZ • STRATEGY & CODE</p>
      </footer>
    </div>
  );
};

export default App;