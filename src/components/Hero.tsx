
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Download, Code } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const jobTitles = [
    'Full Stack Developer',
    'MERN Developer', 
    'Frontend Developer',
    'React Developer',
    'JavaScript Developer'
  ];
  
  useEffect(() => {
    const currentTitle = jobTitles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentTitle.length) {
          setTypedText(currentTitle.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % jobTitles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, jobTitles]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      isDarkMode ? 'bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F0F2C]' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-[#00BFFF] to-blue-500 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-400 to-blue-300 blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${isDarkMode ? 'bg-blue-400' : 'bg-blue-300'} animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          {/* Main Heading with enhanced styling */}
          <div className="space-y-6">
            <div className="relative">
              <h1 className={`text-6xl md:text-8xl font-bold leading-tight tracking-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="block mb-2">ADITYA PRAKASH</span>
                <span className="block bg-gradient-to-r from-[#00BFFF] via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  CHAUDHARY
                </span>
              </h1>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#00BFFF] opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#00BFFF] opacity-50" />
            </div>
            
            {/* Enhanced typing effect */}
            <div className="h-20 flex items-center justify-center">
              <h2 className={`text-3xl md:text-4xl font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <span className="inline-block min-w-[1ch]">{typedText}</span>
                <span className="animate-pulse text-[#00BFFF] font-bold">|</span>
              </h2>
            </div>
          </div>

          {/* Enhanced tagline */}
          <div className="relative">
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Crafting <span className="text-[#00BFFF] font-semibold">seamless digital experiences</span> with 
              <br className="hidden md:block" />
              innovative solutions and <span className="text-[#00BFFF] font-semibold">scalable architecture</span>
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent rounded-full" />
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-4 bg-gradient-to-r from-[#00BFFF] to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transform"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Code size={20} />
                View Projects
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className={`group relative px-10 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-[#00BFFF] hover:scale-105 hover:shadow-xl overflow-hidden ${
              isDarkMode ? 'text-[#00BFFF] hover:text-white' : 'text-[#00BFFF] hover:text-white'
            }`}>
              <span className="relative z-10 flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF] to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center items-center space-x-8 pt-8">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/aditya-prakash", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/aditya-prakash", label: "GitHub" },
              { icon: Code, href: "https://leetcode.com/aditya-prakash", label: "LeetCode" },
              { icon: Mail, href: "mailto:adityaprakash.280102@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : "_blank"}
                rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className={`group p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl border border-opacity-20 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-[#00BFFF] hover:text-white hover:border-[#00BFFF]' 
                    : 'bg-white/80 border-gray-300 text-gray-600 hover:bg-[#00BFFF] hover:text-white hover:border-[#00BFFF] shadow-lg'
                }`}
                title={label}
              >
                <Icon size={24} className="transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-colors duration-300 hover:scale-110 ${
          isDarkMode ? 'text-gray-400 hover:text-[#00BFFF]' : 'text-gray-600 hover:text-[#00BFFF]'
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDarkMode ? 'border-gray-400' : 'border-gray-600'
          }`}>
            <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
              isDarkMode ? 'bg-gray-400' : 'bg-gray-600'
            }`} />
          </div>
          <ChevronDown size={24} />
        </div>
      </button>
    </section>
  );
};

export default Hero;
