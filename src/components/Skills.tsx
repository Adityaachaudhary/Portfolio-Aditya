import React, { useState } from 'react';
import { Code, Database, Settings, Layers } from 'lucide-react';
import TechIcon from './TechIcon';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = {
    languages: { title: 'Languages', icon: Code, skills: ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'C', 'JSON'] },
    frameworks: { title: 'Frameworks', icon: Layers, skills: ['ReactJS', 'ExpressJS', 'NodeJS', 'Tailwind CSS', 'Redux Toolkit', 'Bootstrap', 'Three.js'] },
    databases: { title: 'Databases', icon: Database, skills: ['MongoDB', 'MySQL', 'Firebase', 'Neo4j'] },
    tools: { title: 'Dev Tools', icon: Settings, skills: ['Visual Studio Code', 'Git', 'GitHub', 'Google Cloud Platform', 'Figma', 'Postman', 'Cursor', 'Antigravity'] },
    competency: { title: 'Competencies', icon: Code, skills: ['Full Stack Development', 'Data Structures', 'DBMS', 'Object Oriented Programming', '3D Rendering'] },
  };

  const getAllSkills = () => Object.values(skillCategories).flatMap(c => c.skills);
  const getFilteredSkills = () => {
    if (activeCategory === 'all') return getAllSkills();
    return skillCategories[activeCategory as keyof typeof skillCategories]?.skills || [];
  };

  return (
    <section className="py-20 relative overflow-hidden section-gradient-dark-alt">
      <div className="absolute inset-0 gradient-mesh-alt" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto rounded-full glow-border mb-6" />
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'btn-primary'
                  : 'glass text-muted-foreground hover:text-foreground hover:border-primary/30'
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
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === key
                      ? 'btn-primary'
                      : 'glass text-muted-foreground hover:text-foreground hover:border-primary/30'
                  }`}
                >
                  <IconComponent size={14} />
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {getFilteredSkills().map((skill, index) => (
              <div
                key={skill}
                className="glass-card rounded-xl p-3 cursor-pointer animate-fade-in group"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <div className="text-center">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-lg flex items-center justify-center bg-muted/50 group-hover:bg-primary/20 transition-colors duration-300">
                    <TechIcon name={skill} size={14} className="transition-opacity duration-300" />
                  </div>
                  <h3 className="font-semibold text-xs text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
