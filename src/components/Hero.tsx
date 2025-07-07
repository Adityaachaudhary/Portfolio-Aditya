
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-[#00BFFF] blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-[#00BFFF] to-blue-400 p-1 animate-scale-in">
            <div className={`w-full h-full rounded-full flex items-center justify-center text-4xl font-bold ${
              isDarkMode ? 'bg-[#1A1A2E] text-white' : 'bg-white text-gray-800'
            }`}>
              AP
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className={`text-5xl md:text-7xl font-bold leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              ADITYA PRAKASH
              <br />
              <span className="bg-gradient-to-r from-[#00BFFF] to-blue-400 bg-clip-text text-transparent">
                CHAUDHARY
              </span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <h2 className={`text-2xl md:text-3xl font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          {/* Tagline */}
          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Crafting seamless full-stack solutions with a passion for innovation.
            Turning complex problems into elegant, scalable applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-[#00BFFF] text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00BFFF] to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className={`group px-8 py-4 rounded-lg font-medium transition-all duration-300 border-2 border-[#00BFFF] hover:bg-[#00BFFF] hover:scale-105 ${
              isDarkMode ? 'text-[#00BFFF] hover:text-white' : 'text-[#00BFFF] hover:text-white'
            }`}>
              <span className="flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-6 pt-8">
            <a
              href="https://linkedin.com/in/aditya-prakash"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-[#00BFFF] hover:text-white' : 'bg-white text-gray-600 hover:bg-[#00BFFF] hover:text-white shadow-md'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/aditya-prakash"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-[#00BFFF] hover:text-white' : 'bg-white text-gray-600 hover:bg-[#00BFFF] hover:text-white shadow-md'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://leetcode.com/aditya-prakash"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-[#00BFFF] hover:text-white' : 'bg-white text-gray-600 hover:bg-[#00BFFF] hover:text-white shadow-md'
              }`}
            >
              <Code size={24} />
            </a>
            <a
              href="mailto:adityaprakash.280102@gmail.com"
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-[#00BFFF] hover:text-white' : 'bg-white text-gray-600 hover:bg-[#00BFFF] hover:text-white shadow-md'
              }`}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
