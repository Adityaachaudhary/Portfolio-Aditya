import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, ArrowLeft, ArrowRight } from 'lucide-react';
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
    // Full-Stack Projects
    {
      id: 'blogify',
      title: 'BlogiFy',
      subtitle: 'Full-Stack Blogging Platform',
      description: 'A comprehensive blogging platform with user authentication, content management, and responsive design. User can post about his/her ideas with help of photos',
      technologies: ['React.js', 'Node.js', 'Express.js', 'Firebase', 'JWT', 'Tailwind CSS'],
      features: [
        'User authentication and authorization',
        'Rich text editor for blog creation',
        'Responsive design for all devices',
        'Real-time comments and interactions',
        'User profile management'
      ],
      
      github: 'https://github.com/Adityaachaudhary/mern-blogg-project',
      category: 'Full-Stack',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'strengthmax',
      title: 'StrengthMax',
      subtitle: 'Fitness Tracking & Planning',
      description: 'Comprehensive fitness application for tracking workouts and creating personalized exercise plans. User can track their workout here',
      technologies: ['React.js', 'Redux Store'],
      features: [
        'Personalized workout plans',
        'Exercise tracking and analytics',
        'Exercise database with instructions',
        'User goal setting and achievements'
      ],
      liveDemo: 'https://strength-max.vercel.app/',
      github: 'https://github.com/Adityaachaudhary/Strength_Max',
      category: 'React-based Single page application',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'college-job-board',
      title: 'College Job Board',
      subtitle: 'Campus Employment Platform',
      description: 'A platform connecting students with campus job opportunities. Employers post roles, students browse and apply easily.A bridge between campuses, companies and students',
      technologies: ['React.js', 'TypeScript','JWT', 'Tailwind CSS'],
      features: [
        'Student and employer registration',
        'Job posting and application system',
        'Profile management for both parties',
        'Application tracking dashboard',
        'Campus-specific job filtering'
      ],
      liveDemo: 'https://college-job-board.vercel.app',
      github: 'https://github.com/Adityaachaudhary/college-job-board',
      category: 'Frontend Project',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'finflow-visual-budgets',
      title: 'FinFlow Visual Budgets',
      subtitle: 'Dynamic Expense Tracking',
      description: 'A dynamic expense-tracking dashboard that visualizes spending and budgets through engaging charts.',
      technologies: ['React.js', 'TypeScript','Chart.js', 'Tailwind CSS'],
      features: [
        'Visual spending analytics with charts',
        'Budget creation and tracking',
        'Expense categorization',
        'Financial insights and reports',
      ],
      liveDemo: 'https://finflow-visual-budgets.vercel.app',
      github: 'https://github.com/Adityaachaudhary/finflow-visual-budgets',
      category: 'Frontend Project',
      color: 'from-emerald-500 to-teal-500'
    },
    // AI/ML Projects
    {
      id: 'freescribe',
      title: 'FreeScribe',
      subtitle: 'AI-Powered Voice Transcription',
      description: 'Advanced voice-to-text application using OpenAI models with high accuracy and browser compatibility. your dialogues can be transcribed and translated into any other language of choice',
      technologies: ['JavaScript', 'OpenAI API', 'Bootstrap', 'HTML', 'CSS'],
      features: [
        'Real-time voice transcription',
        'Multiple language support',
        'High accuracy speech recognition',
        'Cross-browser compatibility',
        'Export transcriptions to multiple formats'
      ],
      liveDemo: 'https://scribe-free.vercel.app/',
      github: 'https://github.com/Adityaachaudhary/scribeFree',
      category: 'AI/ML',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'aura-bookmark-nexus',
      title: 'Aura Bookmark Nexus',
      subtitle: 'AI-Driven Bookmarking Tool',
      description: 'An AI-driven bookmarking tool that saves web links and auto-generates concise summaries of each page. This helps users quickly revisit and understand saved resources without reading the entire page again.',
      technologies: ['React.js', 'TypeScript','OpenAI API', 'Tailwind CSS'],
      features: [
        'AI-powered content summarization',
        'Smart bookmark organization',
        'Quick content retrieval',
      ],
      liveDemo: 'https://aura-bookmark-nexus.vercel.app',
      github: 'https://github.com/Adityaachaudhary/aura-bookmark-nexus',
      category: 'React based single page application',
      color: 'from-violet-500 to-purple-500'
    },

    {
      id: 'quick-note-stash',
      title: 'Quick Note Stash',
      subtitle: 'Minimalist Note-Taking App',
      description: 'A minimalist, lightning-fast note-taking app focused on frictionless capture and instant retrieval. It is note-taking application that enables users to quickly jot down, organize, and access their thoughts or ideas. Designed for simplicity and speed.',
      technologies: ['React.js', 'TypeScript', 'Local Storage', 'Tailwind CSS', 'Vite'],
      features: [
        'Lightning-fast note capture',
        'Instant search and retrieval',
        'Minimalist, distraction-free UI',
      ],
      liveDemo: 'https://quick-note-stash-app.vercel.app',
      github: 'https://github.com/Adityaachaudhary/quick-note-stash-app',
      category: 'Frontend Project',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'pin-board',
      title: 'Pin-Board',
      subtitle: 'Pinterest-Inspired Image Sharing',
      description: 'A frontend image-sharing app inspired by Pinterest, built with mock APIs for browsing and organizing visual content.',
      technologies: ['React.js', 'TypeScript', 'CSS3', 'Mock APIs', 'Responsive Design'],
      features: [
        'Pinterest-like grid layout',
        'Image browsing and saving',
        'Content organization system',
        'Responsive design for all devices',
        'Clean, intuitive user interface'
      ],
      liveDemo: 'https://pin-board-three.vercel.app',
      github: 'https://github.com/Adityaachaudhary/Pin-Board',
      category: 'Frontend Project',
      color: 'from-pink-500 to-rose-500'
    }
  ];



  return (
    <section className={`py-20 ${isDarkMode ? 'bg-[#1A1A2E]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
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


          {/* Projects Carousel */}
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem key={project.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className={`group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-102 hover:shadow-2xl h-[600px] ${
                      isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                    }`}>
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
                        <p className={`text-sm mb-6 flex-grow ${
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
                            {project.features.map((feature, idx) => (
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
              <CarouselPrevious className={`absolute left-2 top-1/2 -translate-y-1/2 ${
                isDarkMode ? 'bg-[#00BFFF] border-[#00BFFF] hover:bg-blue-500 text-white' : 'bg-[#00BFFF] border-[#00BFFF] hover:bg-blue-500 text-white'
              }`}>
                <ArrowLeft className="h-4 w-4" />
              </CarouselPrevious>
              <CarouselNext className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                isDarkMode ? 'bg-[#00BFFF] border-[#00BFFF] hover:bg-blue-500 text-white' : 'bg-[#00BFFF] border-[#00BFFF] hover:bg-blue-500 text-white'
              }`}>
                <ArrowRight className="h-4 w-4" />
              </CarouselNext>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
