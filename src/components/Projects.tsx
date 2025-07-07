
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Zap, Users, Globe, Shield } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

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
      impact: {
        text: 'Enhanced user experience for over',
        number: '10+',
        suffix: 'users with a responsive interface for seamless client-server communication'
      },
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
      technologies: ['JavaScript', 'OpenAI API', 'Audiotext APIs', 'Bootstrap', 'Web Speech API'],
      features: [
        'Real-time voice transcription',
        'Multiple language support',
        'High accuracy speech recognition',
        'Cross-browser compatibility',
        'Export transcriptions to multiple formats'
      ],
      impact: {
        text: 'Ensured compatibility across',
        number: '10+',
        suffix: 'browsers with accurate voice-to-text conversion'
      },
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
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Chart.js'],
      features: [
        'Personalized workout plans',
        'Exercise tracking and analytics',
        'Progress visualization',
        'Exercise database with instructions',
        'User goal setting and achievements'
      ],
      impact: {
        text: 'Consolidated data for',
        number: '50+',
        suffix: 'compound and accessory exercises to deliver tailored workout plans'
      },
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

  const ProjectModal = ({ project }: { project: typeof projects[0] }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className={`text-3xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {project.title}
              </h3>
              <p className="text-[#00BFFF] font-medium">{project.subtitle}</p>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              ✕
            </button>
          </div>

          {/* Description */}
          <p className={`text-lg mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {project.description}
          </p>

          {/* Impact */}
          <div className={`p-6 rounded-lg mb-8 border-l-4 border-[#00BFFF] ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <h4 className={`font-semibold mb-2 flex items-center gap-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <Zap className="text-[#00BFFF]" size={20} />
              Impact
            </h4>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.impact.text} <span className="text-[#00BFFF] font-bold text-xl">{project.impact.number}</span> {project.impact.suffix}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h4 className={`font-semibold mb-4 flex items-center gap-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <Code className="text-[#00BFFF]" size={20} />
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className={`flex items-start gap-3 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className={`font-semibold mb-4 flex items-center gap-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <Database className="text-[#00BFFF]" size={20} />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-8">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#00BFFF] text-white rounded-lg font-medium hover:bg-blue-500 transition-colors"
            >
              <Globe size={20} />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors border-2 border-[#00BFFF] ${
                isDarkMode ? 'text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white' : 'text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white'
              }`}
            >
              <Github size={20} />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );

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
                className={`group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                }`}
                onClick={() => setSelectedProject(project.id)}
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
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {tech}
                        </span>
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

                  {/* Impact */}
                  <div className={`p-3 rounded-lg mb-6 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="text-[#00BFFF]" size={16} />
                      <span className={`text-xs font-semibold ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        IMPACT
                      </span>
                    </div>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.impact.text} <span className="text-[#00BFFF] font-bold">{project.impact.number}</span> {project.impact.suffix.slice(0, 30)}...
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center">
                    <button className="text-[#00BFFF] text-sm font-medium hover:underline">
                      View Details
                    </button>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`p-2 rounded-lg transition-colors ${
                          isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                        }`}
                      >
                        <Github size={16} className="text-[#00BFFF]" />
                      </a>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`p-2 rounded-lg transition-colors ${
                          isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                        }`}
                      >
                        <ExternalLink size={16} className="text-[#00BFFF]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={projects.find(p => p.id === selectedProject)!} />
      )}
    </section>
  );
};

export default Projects;
