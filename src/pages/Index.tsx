
import React, { useEffect, useState } from 'react';
import { ChevronDown, Moon, Sun, Mail, Github, Linkedin, ExternalLink, Code, User, Briefcase, FolderOpen, Award, MessageSquare } from 'lucide-react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certificates', 'contact'];
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
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
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
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-[#1A1A2E]' : 'bg-gray-50'}`}>
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-90 border-b border-opacity-20">
        <div className={`${isDarkMode ? 'bg-[#1A1A2E]/90 border-gray-700' : 'bg-white/90 border-gray-200'} transition-colors duration-300`}>
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold bg-gradient-to-r from-[#00BFFF] to-blue-400 bg-clip-text text-transparent">
                Aditya Prakash
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative text-sm font-medium transition-colors duration-200 hover:text-[#00BFFF] ${
                      activeSection === item.id 
                        ? 'text-[#00BFFF]' 
                        : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00BFFF] rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
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

        <section id="contact">
          <Contact isDarkMode={isDarkMode} />
        </section>
      </main>

      {/* Footer */}
      <footer className={`border-t transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0F0F2C] border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 Aditya Prakash Chaudhary. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a
                href="https://linkedin.com/in/aditya-prakash"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/aditya-prakash"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:adityaprakash.280102@gmail.com"
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
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
