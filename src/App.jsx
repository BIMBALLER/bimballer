import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Zap, Download, ExternalLink, ArrowUp, Briefcase, Sun, Moon, MessageCircle } from 'lucide-react';

const App = () => {
  const [isLight, setIsLight] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const WHATSAPP_NUMBER = "2348058979847"; 
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello Abimbola, I saw your portfolio and would like to connect!`;

  const toggleTheme = () => {
    const newMode = !isLight;
    setIsLight(newMode);
    document.documentElement.classList.toggle('light', newMode);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.setAttribute('download', 'Abimbola_Abdulmuizz_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const checkScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const stacks = [
    { name: 'React', icon: 'react' }, { name: 'JavaScript', icon: 'javascript' },
    { name: 'Tailwind', icon: 'tailwindcss' }, { name: 'Node.js', icon: 'nodedotjs' },
    { name: 'Vite', icon: 'vite' }, { name: 'Git', icon: 'git' },
    { name: 'Netlify', icon: 'netlify' }, { name: 'HTML5', icon: 'html5' }
  ];

  const projects = [
    { title: "Logistic Web Solution", tech: ["JavaScript", "CSS3", "UX"], strategy: "Optimizing supply chain visibility through data-driven UI.", link: "https://onels.netlify.app/" },
    { title: "Standard Portal", tech: ["React", "UI/UX", "Management"], strategy: "Streamlining enterprise resource access for high productivity.", link: "https://standardportal.netlify.app/" },
    { title: "Habu Peti Brand", tech: ["HTML5", "Branding", "Retail"], strategy: "Converting brand identity into digital retail growth.", link: "https://habupeti.netlify.app/" },
    { title: "Random Quote Generator", tech: ["JavaScript", "API"], strategy: "Optimizing lightweight performance and clean interface design.", link: "https://psychic-journey-lovat.vercel.app/" }
  ];

  const filteredProjects = projects.filter(p => activeFilter === 'All' ? true : p.tech.includes(activeFilter));

  return (
    <div className="min-h-screen bg-primary text-secondary transition-colors duration-500 selection:bg-accent selection:text-white">
      
      {/* PERSISTENT THEME TOGGLE (BOTTOM RIGHT) */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
        <button 
          onClick={toggleTheme} 
          className="p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl text-accent active:scale-90 md:hover:scale-110 transition-all"
          aria-label="Toggle Theme"
        >
          {isLight ? <Moon size={22} /> : <Sun size={22} />}
        </button>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className={`p-4 bg-accent text-white rounded-full shadow-2xl transition-all duration-500 active:scale-90 ${showScroll ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <ArrowUp size={22} strokeWidth={3} />
        </button>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-primary/60 backdrop-blur-xl border-b border-white/5 px-5 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-xl font-black italic uppercase tracking-tighter">ABIMBOLA<span className="text-accent">.</span></span>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2 bg-accent text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-accent/20 active:scale-95 transition-transform">
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-5 relative overflow-hidden text-center lg:text-left">
        <div className="max-w-7xl mx-auto flex flex-col items-center lg:items-start lg:grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-[10px] font-bold uppercase tracking-widest animate-bounce"><Zap size={12} />HIT ME UP LET'S BUILD</div>
            <h1 className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tighter uppercase">Business Mind.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 animate-gradient-x">Dev Soul.</span></h1>
            <p className="text-sm md:text-xl opacity-70 max-w-md mx-auto lg:mx-0 leading-relaxed">Bridging the gap between <span className="font-bold text-secondary">profit strategies</span> and <span className="font-bold text-secondary">scalable code</span>.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="px-10 py-4 bg-accent text-white font-bold rounded-2xl text-center shadow-xl shadow-accent/20 active:scale-95 transition-transform uppercase text-sm">View Work</a>
              <button onClick={handleDownload} className="flex items-center justify-center gap-2 px-10 py-4 border border-white/10 rounded-2xl font-bold active:bg-white/5 transition-all uppercase text-sm"><Download size={18} /> Resume</button>
            </div>
          </div>
          <div className="relative group max-w-[280px] md:max-w-md aspect-[4/5] mx-auto">
            <img src="/me.jpg" className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000 border border-white/10 shadow-2xl" alt="Profile" />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-8 bg-white/5 border-y border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[...stacks, ...stacks, ...stacks].map((tech, i) => (
            <div key={i} className="mx-8 md:mx-16 flex items-center gap-4">
              <img src={`https://cdn.simpleicons.org/${tech.icon}`} className="w-8 h-8 md:w-12 md:h-12 grayscale opacity-40" alt={tech.name} />
              <span className="text-2xl md:text-5xl font-black opacity-10 uppercase tracking-tighter">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">Portfolio</h2>
            <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 justify-center">
              {['All', 'React', 'JavaScript'].map(f => (
                <button key={f} onClick={() => setActiveFilter(f)} className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest shrink-0 transition-all ${activeFilter === f ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-white/5 opacity-40'}`}>{f}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            {filteredProjects.map((p, i) => (
              <div key={i} className="group flex flex-col space-y-6">
                <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10 bg-black shadow-2xl">
                  <iframe src={p.link} className="w-full h-full absolute top-0 left-0 scale-100 opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" title={p.title}></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {p.tech.map(t => <span key={t} className="px-2 py-1 bg-black/40 backdrop-blur-md text-white rounded text-[8px] font-bold uppercase">{t}</span>)}
                  </div>
                </div>
                <div className="space-y-4 px-2 text-left">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold uppercase tracking-tight">{p.title}</h3>
                    <a href={p.link} target="_blank" rel="noreferrer" className="p-3 bg-accent/10 text-accent rounded-full active:bg-accent active:text-white transition-all"><ExternalLink size={18} /></a>
                  </div>
                  <div className="p-5 bg-white/5 rounded-2xl border-l-4 border-accent italic text-sm opacity-70 leading-relaxed">
                    "{p.strategy}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-24 text-center border-t border-white/5 bg-gradient-to-b from-transparent to-accent/5 px-5">
        <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter leading-none">Let's build <br/><span className="text-accent underline decoration-white/10">Significant</span> Work.</h2>
        <div className="flex justify-center gap-4 mb-16">
          <a href="https://github.com/BIMBALLER/" className="p-5 md:p-8 bg-white/5 rounded-3xl hover:bg-white hover:text-black transition-all shadow-xl"><Github size={30} /></a>
          <a href="https://linkedin.com/in/omoniyi-abimbola-abdulmuizz/" className="p-5 md:p-8 bg-white/5 rounded-3xl hover:bg-[#0077b5] hover:text-white transition-all shadow-xl"><Linkedin size={30} /></a>
          <a href={WHATSAPP_LINK} className="p-5 md:p-8 bg-white/5 rounded-3xl hover:bg-[#25D366] hover:text-white transition-all shadow-xl"><MessageCircle size={30} /></a>
        </div>
        <p className="text-[10px] md:text-xs uppercase font-bold tracking-[0.8em] opacity-30">© 2026 ABIMBOLA ABDULMUIZZ • NIGERIA</p>
      </footer>
    </div>
  );
};

export default App;