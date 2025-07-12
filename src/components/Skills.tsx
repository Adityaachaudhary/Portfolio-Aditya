
import React, { useState } from 'react';
import { Code, Database, Settings, Layers } from 'lucide-react';
import TechIcon from './TechIcon';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = {
    languages: {
      title: 'Languages',
      icon: Code,
      skills: ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'C']
    },
    frameworks: {
      title: 'Frameworks',
      icon: Layers,
      skills: ['ReactJS', 'ExpressJS', 'NodeJS', 'Tailwind CSS', 'Redux Toolkit', 'Bootstrap']
    },
    databases: {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Firebase']
    },
    tools: {
      title: 'Dev Tools',
      icon: Settings,
      skills: ['Visual Studio Code', 'Git', 'GitHub', 'Google Cloud Platform', 'Figma', 'Postman']
    },
    competency: {
      title: 'Competencies',
      icon: Code,
      skills: ['Full Stack Development', 'Data Structures', 'DBMS', 'Object Oriented Programming']
    }
  };

  const getAllSkills = () => {
    return Object.values(skillCategories).flatMap(category => category.skills);
  };

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return getAllSkills();
    }
    return skillCategories[activeCategory as keyof typeof skillCategories]?.skills || [];
  };

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-[#1A1A2E]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Technical <span className="text-[#00BFFF]">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto rounded-full mb-8" />
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-[#00BFFF] text-white shadow-lg'
                  : isDarkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              All Skills
            </button>
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-[#00BFFF] text-white shadow-lg'
                      : isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  <IconComponent size={18} />
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {getFilteredSkills().map((skill, index) => (
              <div
                key={skill}
                className={`group p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer animate-fade-in ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                    : 'bg-white hover:bg-gray-50 text-gray-700 shadow-md'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    isDarkMode ? 'bg-gray-700 group-hover:bg-[#00BFFF]' : 'bg-gray-100 group-hover:bg-[#00BFFF]'
                  }`}>
                    <TechIcon 
                      name={skill} 
                      size={24} 
                      className="transition-opacity duration-300"
                    />
                  </div>
                  <h3 className={`font-semibold text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-white group-hover:text-[#00BFFF]' : 'text-gray-900 group-hover:text-[#00BFFF]'
                  }`}>
                    {skill}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary - Remove this section as shown in the image */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
