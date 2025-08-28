import React, { useEffect, useState } from 'react';
import { ChevronDown, Moon, Sun, Mail, Github, Linkedin, ExternalLink, Code, User, Briefcase, FolderOpen, Award, MessageSquare, Brain } from 'lucide-react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import AITools from '@/components/AITools';
import Contact from '@/components/Contact';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Set initial theme
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certificates', 'ai-tools', 'contact'];
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
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'ai-tools', label: 'AI Tools', icon: Brain },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'dark bg-gradient-to-br from-black via-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-90 border-b border-opacity-20">
        <div className={`transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-black/90 border-gray-700' 
            : 'bg-white/90 border-gray-200'
        }`}>
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold bg-gradient-to-r from-[#00BFFF] to-cyan-400 bg-clip-text text-transparent">
                Portfolio
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative text-sm font-medium transition-colors duration-200 hover:text-[#00BFFF] ${
                      activeSection === item.id 
                        ? 'text-[#00BFFF]' 
                        : isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00BFFF] to-cyan-400 rounded-full shadow-lg shadow-[#00BFFF]/50" />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode 
                    ? 'hover:bg-gray-700 text-gray-300 border border-gray-600/50 hover:border-[#00BFFF]/50' 
                    : 'hover:bg-gray-100 text-gray-700 border border-gray-300/50 hover:border-[#00BFFF]/50'
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section id="home">
          <Hero isDarkMode={isDarkMode} />
        </section>

        <section id="about">
          <About isDarkMode={isDarkMode} />
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

        <section id="contact">
          <Contact isDarkMode={isDarkMode} />
        </section>
      </main>

      {/* Footer */}
      <footer className={`border-t transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-black border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 Aditya Prakash Chaudhary. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a
                href="https://www.linkedin.com/in/adityachaudhary28/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                  isDarkMode 
                    ? 'hover:bg-gray-700 text-gray-400 hover:text-[#00BFFF]' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-[#00BFFF]'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Adityaachaudhary"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                  isDarkMode 
                    ? 'hover:bg-gray-700 text-gray-400 hover:text-[#00BFFF]' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-[#00BFFF]'
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:adityaprakash.280102@gmail.com"
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                  isDarkMode 
                    ? 'hover:bg-gray-700 text-gray-400 hover:text-[#00BFFF]' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-[#00BFFF]'
                }`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
