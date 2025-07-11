
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database } from 'lucide-react';
import TechIcon from './TechIcon';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const projects = [
    {
      id: 'blogify',
      title: 'BlogiFy',
      subtitle: 'Full-Stack Blogging Platform',
      description: 'A comprehensive blogging platform with user authentication, content management, and responsive design.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'Firebase', 'JWT', 'Tailwind CSS'],
      features: [
        'User authentication and authorization',
        'Rich text editor for blog creation',
        'Responsive design for all devices',
        'Real-time comments and interactions',
        'User profile management'
      ],
      liveDemo: '#',
      github: '#',
      category: 'Full-Stack',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'freescribe',
      title: 'FreeScribe',
      subtitle: 'AI-Powered Voice Transcription',
      description: 'Advanced voice-to-text application using OpenAI models with high accuracy and browser compatibility.',
      technologies: ['JavaScript', 'OpenAI API', 'Bootstrap', 'HTML', 'CSS'],
      features: [
        'Real-time voice transcription',
        'Multiple language support',
        'High accuracy speech recognition',
        'Cross-browser compatibility',
        'Export transcriptions to multiple formats'
      ],
      liveDemo: '#',
      github: '#',
      category: 'AI/ML',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'strengthmax',
      title: 'StrengthMax',
      subtitle: 'Fitness Tracking & Planning',
      description: 'Comprehensive fitness application for tracking workouts and creating personalized exercise plans.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      features: [
        'Personalized workout plans',
        'Exercise tracking and analytics',
        'Progress visualization',
        'Exercise database with instructions',
        'User goal setting and achievements'
      ],
      liveDemo: '#',
      github: '#',
      category: 'Full-Stack',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const categories = ['All', 'Full-Stack', 'AI/ML', 'Frontend', 'Backend'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-[#1A1A2E]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Featured <span className="text-[#00BFFF]">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto rounded-full mb-8" />
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Showcasing innovative solutions and technical expertise through real-world applications
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#00BFFF] text-white shadow-lg'
                    : isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                }`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-bold mb-1 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {project.title}
                      </h3>
                      <p className="text-[#00BFFF] text-sm font-medium">{project.subtitle}</p>
                    </div>
                    <div className={`p-2 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      <Code className="text-[#00BFFF]" size={20} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm mb-6 line-clamp-3 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          <TechIcon name={tech} size={12} />
                          {tech}
                        </div>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className={`p-3 rounded-lg mb-6 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="text-[#00BFFF]" size={16} />
                      <span className={`text-xs font-semibold ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        KEY FEATURES
                      </span>
                    </div>
                    <ul className={`text-sm space-y-1 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                        isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                      }`}
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#00BFFF] text-white rounded-lg transition-all duration-300 hover:bg-blue-500 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
