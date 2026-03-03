import React from 'react';
import { ExternalLink, Github, Code, Database, ArrowLeft, ArrowRight } from 'lucide-react';
import TechIcon from './TechIcon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const projects = [
    {
      id: 'blogify', title: 'BlogiFy', subtitle: 'Full-Stack Blogging Platform',
      description: 'A comprehensive blogging platform with user authentication, content management, and responsive design. User can post about his/her ideas with help of photos',
      technologies: ['React.js', 'Node.js', 'Express.js', 'Firebase', 'JWT', 'Tailwind CSS'],
      features: ['User authentication and authorization', 'Rich text editor for blog creation', 'Responsive design for all devices', 'Real-time comments and interactions', 'User profile management'],
      github: 'https://github.com/Adityaachaudhary/mern-blogg-project', category: 'Full-Stack'
    },
    {
      id: 'strengthmax', title: 'StrengthMax', subtitle: 'Fitness Tracking & Planning',
      description: 'Comprehensive fitness application for tracking workouts and creating personalized exercise plans. User can track their workout here',
      technologies: ['React.js', 'Redux Store'],
      features: ['Personalized workout plans', 'Exercise tracking and analytics', 'Exercise database with instructions', 'User goal setting and achievements'],
      liveDemo: 'https://strength-max.vercel.app/', github: 'https://github.com/Adityaachaudhary/Strength_Max', category: 'React SPA'
    },
    {
      id: 'college-job-board', title: 'College Job Board', subtitle: 'Campus Employment Platform',
      description: 'A platform connecting students with campus job opportunities. Employers post roles, students browse and apply easily.',
      technologies: ['React.js', 'TypeScript', 'JWT', 'Tailwind CSS'],
      features: ['Student and employer registration', 'Job posting and application system', 'Profile management for both parties', 'Application tracking dashboard', 'Campus-specific job filtering'],
      liveDemo: 'https://college-job-board.vercel.app', github: 'https://github.com/Adityaachaudhary/college-job-board', category: 'Frontend'
    },
    {
      id: 'finflow-visual-budgets', title: 'FinFlow Visual Budgets', subtitle: 'Dynamic Expense Tracking',
      description: 'A dynamic expense-tracking dashboard that visualizes spending and budgets through engaging charts.',
      technologies: ['React.js', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
      features: ['Visual spending analytics with charts', 'Budget creation and tracking', 'Expense categorization', 'Financial insights and reports'],
      liveDemo: 'https://finflow-visual-budgets.vercel.app', github: 'https://github.com/Adityaachaudhary/finflow-visual-budgets', category: 'Frontend'
    },
    {
      id: 'freescribe', title: 'FreeScribe', subtitle: 'AI-Powered Voice Transcription',
      description: 'Advanced voice-to-text application using OpenAI models with high accuracy and browser compatibility.',
      technologies: ['JavaScript', 'OpenAI API', 'Bootstrap', 'HTML', 'CSS'],
      features: ['Real-time voice transcription', 'Multiple language support', 'High accuracy speech recognition', 'Cross-browser compatibility', 'Export transcriptions to multiple formats'],
      liveDemo: 'https://scribe-free.vercel.app/', github: 'https://github.com/Adityaachaudhary/scribeFree', category: 'AI/ML'
    },
    {
      id: 'aura-bookmark-nexus', title: 'Aura Bookmark Nexus', subtitle: 'AI-Driven Bookmarking Tool',
      description: 'An AI-driven bookmarking tool that saves web links and auto-generates concise summaries of each page.',
      technologies: ['React.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
      features: ['AI-powered content summarization', 'Smart bookmark organization', 'Quick content retrieval'],
      liveDemo: 'https://aura-bookmark-nexus.vercel.app', github: 'https://github.com/Adityaachaudhary/aura-bookmark-nexus', category: 'React SPA'
    },
    {
      id: 'quick-note-stash', title: 'Quick Note Stash', subtitle: 'Minimalist Note-Taking App',
      description: 'A minimalist, lightning-fast note-taking app focused on frictionless capture and instant retrieval.',
      technologies: ['React.js', 'TypeScript', 'Local Storage', 'Tailwind CSS', 'Vite'],
      features: ['Lightning-fast note capture', 'Instant search and retrieval', 'Minimalist, distraction-free UI'],
      liveDemo: 'https://quick-note-stash-app.vercel.app', github: 'https://github.com/Adityaachaudhary/quick-note-stash-app', category: 'Frontend'
    },
    {
      id: 'pin-board', title: 'Pin-Board', subtitle: 'Pinterest-Inspired Image Sharing',
      description: 'A frontend image-sharing app inspired by Pinterest, built with mock APIs for browsing and organizing visual content.',
      technologies: ['React.js', 'TypeScript', 'CSS3', 'Mock APIs', 'Responsive Design'],
      features: ['Pinterest-like grid layout', 'Image browsing and saving', 'Content organization system', 'Responsive design for all devices', 'Clean, intuitive user interface'],
      liveDemo: 'https://pin-board-three.vercel.app', github: 'https://github.com/Adityaachaudhary/Pin-Board', category: 'Frontend'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden section-gradient-dark-alt">
      <div className="absolute inset-0 gradient-mesh-alt" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto rounded-full glow-border mb-6" />
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Showcasing innovative solutions and technical expertise through real-world applications
            </p>
          </div>

          {/* Carousel */}
          <div className="relative px-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-3 md:-ml-4">
                {projects.map((project) => (
                  <CarouselItem key={project.id} className="pl-3 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="glass-card rounded-2xl overflow-hidden h-[520px] md:h-[560px] group">
                      <div className="relative p-5 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                            <p className="text-primary text-xs font-medium mt-0.5">{project.subtitle}</p>
                          </div>
                          <div className="p-2 rounded-lg glass">
                            <Code className="text-primary" size={16} />
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{project.description}</p>

                        {/* Tech */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.slice(0, 3).map((tech, i) => (
                              <div key={i} className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium glass text-muted-foreground">
                                <TechIcon name={tech} size={10} />
                                {tech}
                              </div>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-0.5 rounded-md text-xs font-medium glass text-muted-foreground">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="p-3 rounded-xl bg-muted/20 mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Database className="text-primary" size={12} />
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Features</span>
                          </div>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {project.features.slice(0, 4).map((f, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 mt-auto">
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300">
                            <Github size={14} /> Code
                          </a>
                          <a href={project.liveDemo || project.github} target="_blank" rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium btn-primary">
                            <ExternalLink size={14} /> Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-primary border-primary hover:bg-primary/80 text-primary-foreground shadow-lg shadow-primary/30">
                <ArrowLeft className="h-4 w-4" />
              </CarouselPrevious>
              <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-primary border-primary hover:bg-primary/80 text-primary-foreground shadow-lg shadow-primary/30">
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
