import React, { useState, useEffect } from 'react';
import { Download, MapPin, Calendar, GraduationCap, Code, Award, BookOpen, Star, Github, Linkedin, Mail, FolderOpen } from 'lucide-react';
import me from '@/assets/me.jpg';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const jobTitles = [
    'React Developer',
    'Frontend Developer', 
    'Full Stack Developer',
    'Web Developer'
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentTitle = jobTitles[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentTitle.substring(0, currentText.length + 1));
        
        if (currentText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(currentTitle.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, jobTitles]);

  return (
    <section className={`min-h-screen flex items-center justify-center py-20 relative overflow-hidden ${
      isDarkMode
        ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-[#00BFFF] to-purple-600 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Name Header */}
          <div className="text-center mb-16">
            <h1 className={`text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight bg-gradient-to-r ${
              isDarkMode 
                ? 'from-white via-gray-200 to-[#00BFFF]' 
                : 'from-gray-900 via-gray-700 to-[#00BFFF]'}
            } bg-clip-text text-transparent mb-6`}>
              ADITYA PRAKASH CHAUDHARY
            </h1>
            <div className={`text-lg md:text-xl lg:text-2xl font-medium h-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className="bg-gradient-to-r from-[#00BFFF] to-cyan-400 bg-clip-text text-transparent">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${
              isDarkMode
                ? 'from-white via-gray-200 to-[#00BFFF]'
                : 'from-gray-900 via-gray-700 to-[#00BFFF]'
            } bg-clip-text text-transparent`}>
              About <span className="text-[#00BFFF]">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00BFFF] to-cyan-400 mx-auto rounded-full mb-8 shadow-lg shadow-[#00BFFF]/50" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Photo Section - Responsive design */}
            <div className="relative order-1 lg:order-1">
              <div className="relative w-full max-w-lg mx-auto lg:max-w-2xl">
                {/* Responsive container */}
                <div className="relative w-full aspect-square max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-[#00BFFF]/20 to-purple-600/20 border-2 border-[#00BFFF]/30 shadow-2xl shadow-[#00BFFF]/20">
                  <img
                    src={me}
                    alt="Aditya Prakash Chaudhary"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                
                {/* Decorative elements - Responsive */}
                <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-[#00BFFF] to-cyan-400 rounded-full blur-xl opacity-60 animate-pulse" />
                <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-40 animate-pulse delay-1000" />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-2 text-center lg:text-left">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#00BFFF]">
                    <MapPin size={20} />
                    <span className="text-lg font-medium">Based in India</span>
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Full Stack Developer & 
                    <span className="bg-gradient-to-r from-[#00BFFF] to-cyan-400 bg-clip-text text-transparent"> Tech Enthusiast</span>
                  </h3>
                </div>

                <div className={`space-y-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p className="text-base md:text-lg">
                    I'm a passionate full-stack developer with expertise in the <span className="text-[#00BFFF] font-semibold">MERN stack</span> and modern web technologies. 
                    I love creating seamless, user-friendly applications that solve real-world problems.
                  </p>
                  <p className="text-sm md:text-base">
                    With a strong foundation in both <span className="text-[#00BFFF] font-semibold">frontend</span> and <span className="text-[#00BFFF] font-semibold">backend</span> technologies, 
                    I enjoy the entire development process - from conceptualization and design to deployment and maintenance.
                  </p>
                </div>

                {/* Resume Details - Only CGPA and Education */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 md:p-6 rounded-2xl ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50'
                    : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200/50'
                } backdrop-blur-sm shadow-2xl`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-[#00BFFF]/20 to-purple-600/20">
                      <GraduationCap className="text-[#00BFFF]" size={20} />
                    </div>
                    <div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>CGPA</div>
                      <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>7.63/10</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-[#00BFFF]/20 to-purple-600/20">
                      <BookOpen className="text-[#00BFFF]" size={20} />
                    </div>
                    <div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Education</div>
                      <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>B.Tech CSE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12 mb-12">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-[#00BFFF] to-cyan-400 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00BFFF]/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 text-sm md:text-base">
                <FolderOpen size={18} />
                View Projects
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-6 md:space-x-8">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/adityachaudhary28/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/Adityaachaudhary", label: "GitHub" },
              { icon: Code, href: "https://leetcode.com/u/aditya_28/", label: "LeetCode" },
              { icon: Mail, href: "mailto:adityaprakash.280102@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : "_blank"}
                rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className={`group p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl border ${
                  isDarkMode 
                    ? 'border-gray-600/50 bg-gray-900/50 text-gray-300' 
                    : 'border-gray-300/50 bg-white/50 text-gray-700'}
                } hover:bg-gradient-to-br hover:from-[#00BFFF] hover:to-cyan-400 hover:text-white hover:border-[#00BFFF] backdrop-blur-sm shadow-lg`}
                title={label}
              >
                <Icon size={20} className="md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
