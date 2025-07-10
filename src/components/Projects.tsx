
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database } from 'lucide-react';
import TechIcon from './TechIcon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const projects = [
    {
      id: 'quick-note-stash',
      title: 'Quick Note Stash',
      subtitle: 'Lightning-Fast Note-Taking App',
      description: 'A minimalist, lightning-fast note-taking app focused on frictionless capture. Users can instantly jot down ideas, organize notes, and retrieve them in seconds—designed for seamless speed and clarity.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      features: [
        'Instant note capture and saving',
        'Lightning-fast search and retrieval',
        'Minimalist, distraction-free interface',
        'Real-time auto-save functionality',
        'Cross-device synchronization'
      ],
      liveDemo: 'https://quick-note-stash-app.vercel.app',
      github: '#',
      category: 'Full-Stack',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'aura-bookmark-nexus',
      title: 'Aura Bookmark Nexus',
      subtitle: 'AI-Driven Bookmarking Tool',
      description: 'An AI-driven bookmarking tool that saves web links and auto-generates concise summaries of each page. It empowers users to revisit and recall content instantly—no need to re-read entire articles.',
      technologies: ['React.js', 'Node.js', 'OpenAI API', 'MongoDB', 'Express.js'],
      features: [
        'AI-powered content summarization',
        'Smart bookmark organization',
        'Instant content recall',
        'Auto-tagging and categorization',
        'Full-text search capabilities'
      ],
      liveDemo: 'https://aura-bookmark-nexus.vercel.app',
      github: '#',
      category: 'AI/ML',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'finflow-visual-budgets',
      title: 'FinFlow Visual Budgets',
      subtitle: 'Dynamic Expense Tracking Dashboard',
      description: 'A dynamic expense-tracking dashboard that visualizes spending and budgets through engaging charts. Users log expenses and instantly see categorized insights, turning raw data into actionable financial clarity.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Chart.js'],
      features: [
        'Interactive expense visualization',
        'Real-time budget tracking',
        'Categorized spending insights',
        'Custom budget goals',
        'Financial trend analysis'
      ],
      liveDemo: 'https://finflow-visual-budgets.vercel.app',
      github: '#',
      category: 'Full-Stack',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'college-job-board',
      title: 'College Job Board',
      subtitle: 'Campus Job Connection Platform',
      description: 'A platform connecting students with campus job opportunities. Employers post roles, students browse and apply easily—streamlining hiring for both colleges and businesses.',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Express.js', 'JWT'],
      features: [
        'Student-employer matching system',
        'Easy job posting and application',
        'Profile and resume management',
        'Application tracking dashboard',
        'Campus-specific job filtering'
      ],
      liveDemo: 'https://college-job-board.vercel.app',
      github: '#',
      category: 'Full-Stack',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'pin-board',
      title: 'Pin-Board',
      subtitle: 'Pinterest-Inspired Image Sharing',
      description: 'A frontend image-sharing app inspired by Pinterest, built with mock APIs. Users can browse, save, and organise visual content in a clean, responsive UI—perfect for exploring and curating ideas.',
      technologies: ['React.js', 'JavaScript', 'REST APIs', 'Tailwind CSS', 'Mock APIs'],
      features: [
        'Pinterest-inspired UI/UX',
        'Image browsing and saving',
        'Visual content organization',
        'Responsive masonry layout',
        'Mock API integration'
      ],
      liveDemo: 'https://pin-board-three.vercel.app',
      github: '#',
      category: 'Frontend',
      color: 'from-indigo-500 to-purple-500'
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

          {/* Projects Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {filteredProjects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div
                    className={`group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full ${
                      isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                    }`}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    
                    <div className="relative p-6 h-full flex flex-col">
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
                      <p className={`text-sm mb-6 line-clamp-3 flex-grow ${
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
                      <div className="flex justify-center gap-4 mt-auto">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={`${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200'}`} />
            <CarouselNext className={`${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200'}`} />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
