import React, { useEffect, useState } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, User, Code, Briefcase, FolderOpen, Award, Brain, Menu, X } from 'lucide-react';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import AITools from '@/components/AITools';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['about', 'skills', 'experience', 'projects', 'certificates', 'ai-tools'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'ai-tools', label: 'AI Tools', icon: Brain },
  ];

  const isScrolled = scrollY > 20;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-strong py-3' : 'py-5'
      }`}>
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <span className="text-primary">&lt;</span>APC<span className="text-primary">/&gt;</span>
            </button>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-primary bg-primary/10' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl glass transition-all duration-300 hover:border-primary/30 text-muted-foreground hover:text-primary"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 rounded-xl glass transition-all duration-300 hover:border-primary/30 text-muted-foreground hover:text-primary"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 p-4 glass rounded-2xl animate-fade-in">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-2.5 p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                          : 'glass hover:border-primary/30 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <IconComponent size={16} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <section id="about">
          <About isDarkMode={isDarkMode} scrollY={scrollY} />
        </section>
        <section id="skills">
          <Skills isDarkMode={isDarkMode} />
        </section>
        <section id="experience">
          <Experience isDarkMode={isDarkMode} />
        </section>
        <section id="projects">
          <Projects isDarkMode={isDarkMode} />
        </section>
        <section id="certificates">
          <Certificates isDarkMode={isDarkMode} />
        </section>
        <section id="ai-tools">
          <AITools isDarkMode={isDarkMode} />
        </section>
      </main>

      {/* Footer */}
      <footer className="glass border-t border-border/50">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-sm font-bold tracking-tight" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                <span className="text-primary">&lt;</span>APC<span className="text-primary">/&gt;</span>
              </span>
              <span className="text-xs text-muted-foreground">
                © 2025 Aditya Prakash Chaudhary
              </span>
            </div>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/adityachaudhary28/" },
                { icon: Github, href: "https://github.com/Adityaachaudhary" },
                { icon: Mail, href: "mailto:adityaprakash.280102@gmail.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : "_blank"}
                  rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                  className="p-3 rounded-xl glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
