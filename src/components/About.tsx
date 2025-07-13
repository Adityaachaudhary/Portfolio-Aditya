
import React from 'react';
import { Download, MapPin, Calendar, GraduationCap, Code, Award, BookOpen, Star } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section className={`py-20 relative overflow-hidden ${
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
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-white via-gray-200 to-[#00BFFF]' 
                : 'from-gray-900 via-gray-700 to-[#00BFFF]'
            } bg-clip-text text-transparent`}>
              About <span className="text-[#00BFFF]">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00BFFF] to-cyan-400 mx-auto rounded-full mb-8 shadow-lg shadow-[#00BFFF]/50" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo Section - Increased size significantly */}
            <div className="relative">
              <div className="relative w-full max-w-2xl mx-auto">
                {/* Much larger container */}
                <div className="relative w-[500px] h-[500px] mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-[#00BFFF]/20 to-purple-600/20 border-2 border-[#00BFFF]/30 shadow-2xl shadow-[#00BFFF]/20">
                  <img
                    src="/lovable-uploads/1f43db19-f6e6-413f-9c5a-6a33cbe0850d.png"
                    alt="Aditya Prakash Chaudhary"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#00BFFF] to-cyan-400 rounded-full blur-xl opacity-60 animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-40 animate-pulse delay-1000" />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#00BFFF]">
                    <MapPin size={20} />
                    <span className="text-lg font-medium">Based in India</span>
                  </div>
                  <h3 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Full Stack Developer & 
                    <span className="bg-gradient-to-r from-[#00BFFF] to-cyan-400 bg-clip-text text-transparent"> Tech Enthusiast</span>
                  </h3>
                </div>

                <div className={`space-y-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p className="text-lg">
                    I'm a passionate full-stack developer with expertise in the <span className="text-[#00BFFF] font-semibold">MERN stack</span> and modern web technologies. 
                    I love creating seamless, user-friendly applications that solve real-world problems.
                  </p>
                  <p>
                    With a strong foundation in both <span className="text-[#00BFFF] font-semibold">frontend</span> and <span className="text-[#00BFFF] font-semibold">backend</span> technologies, 
                    I enjoy the entire development process - from conceptualization and design to deployment and maintenance.
                  </p>
                </div>

                {/* Resume Details - Only CGPA and Education */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl ${
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

                {/* Download Resume Button */}
                <div className="pt-4">
                  <button className="group relative overflow-hidden rounded-xl py-4 px-8 bg-gradient-to-r from-[#00BFFF] to-cyan-400 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00BFFF]/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-3">
                      <Download size={20} />
                      Download Resume
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
