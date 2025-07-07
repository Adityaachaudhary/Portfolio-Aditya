
import React from 'react';
import { User, Heart, Code, Lightbulb } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const skills = [
    'Effective Communication',
    'Teamwork',
    'Leadership',
    'Adaptability',
    'Creativity'
  ];

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-[#16213E]' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              About <span className="text-[#00BFFF]">Me</span>
            </h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="text-center">
              <div className={`relative inline-block p-1 rounded-2xl bg-gradient-to-r from-[#00BFFF] to-blue-400`}>
                <img 
                  src="/lovable-uploads/1f43db19-f6e6-413f-9c5a-6a33cbe0850d.png"
                  alt="Aditya Prakash Chaudhary"
                  className="w-80 h-80 rounded-xl object-cover object-center"
                />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <p className="mb-6">
                  Hello! I'm Aditya Prakash Chaudhary, a passionate Full Stack Developer with a strong foundation in modern web technologies. I thrive on creating seamless digital experiences that bridge the gap between innovative design and robust functionality.
                </p>
                <p className="mb-6">
                  My journey in technology has led me through diverse projects, from developing comprehensive web applications to implementing scalable backend solutions. I'm currently pursuing my Bachelor's in Computer Science and Engineering at GLA University, where I've maintained a strong academic record while gaining hands-on industry experience.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with fellow developers. I believe in continuous learning and the power of collaboration to create impactful solutions.
                </p>
              </div>

              {/* Soft Skills */}
              <div className="space-y-4">
                <h3 className={`text-xl font-semibold flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <Heart className="text-[#00BFFF]" size={24} />
                  Core Values
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        isDarkMode 
                          ? 'bg-gray-700 text-gray-300 hover:bg-[#00BFFF] hover:text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-[#00BFFF] hover:text-white'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h3 className={`text-xl font-semibold flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <Lightbulb className="text-[#00BFFF]" size={24} />
                  Education
                </h3>
                <div className={`p-4 rounded-lg border-l-4 border-[#00BFFF] ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}>
                  <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Bachelor of Technology - Computer Science and Engineering
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    GLA University, Mathura • CPI: 7.63 • Sept 2021 - June 2025
                  </p>
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
