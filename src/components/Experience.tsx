import React, { useEffect, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, Clock } from 'lucide-react';
import TechIcon from './TechIcon';

interface ExperienceProps {
  isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const [visibleStats, setVisibleStats] = useState<{ [key: string]: boolean }>({});
  const [expandedId, setExpandedId] = useState<string>('config-cloud-jr');

  const experiences = [
    {
      id: 'config-cloud-jr',
      title: 'Junior Frontend Developer',
      company: 'Config Cloud',
      location: 'Hybrid',
      period: '01/2026 - Present',
      type: 'Full-time',
      achievements: [
        { text: 'Implemented a subscription module in the React dashboard supporting', highlight: '3', suffix: 'subscription tiers and enforcing per-tier feature limits across the UI and API surface; with client-side gating and clear UX for choosing/upgrading tiers' },
        { text: 'Built an interactive 3D material preview using Three.js to render configurable 3D models and apply selected materials in real time, enabling users to preview materials on the configurator before purchase' },
        { text: 'Authored comprehensive developer documentation and a user guide for the dashboard, including step-by-step instructions, videos, GIFs, and screenshots, to speed onboarding and reduce support overhead' }
      ],
      skills: ['React.js', 'Three.js', 'TypeScript', 'REST APIs', 'Documentation']
    },
    {
      id: 'config-cloud',
      title: 'Web Developer',
      company: 'Config Cloud',
      location: 'Hybrid',
      period: '04/2025 - 12/2025',
      type: 'Full-time',
      achievements: [
        { text: 'Transformed Figma designs into', highlight: '10+', suffix: 'pixel-perfect, responsive React pages, building a reusable component library with design tokens to improve development speed, scalability, and cross-browser UI consistency' },
        { text: 'Developed', highlight: '5', suffix: 'reusable, accessible filter components (multi-select, range, search, sort) to enhance content discoverability and reduce user time-to-find relevant results' },
        { text: 'Architected a client-first image & 3D objects upload workflow (up to 10MB) using in-browser validation and S3 presigned URLs, reducing backend processing load and improving scalability' },
        { text: 'Integrated Neo4j and', highlight: '15+', suffix: 'third-party APIs to aggregate real-time data, implementing caching and optimized queries to minimize latency and enhance frontend performance' },
        { text: 'Architected an interactive 3D rendering canvas using Three.js, implementing real-time camera controls to render quality 3D assets uploaded by users' },
        { text: 'Built dynamic UI controls (sliders, image buttons, multi-select) to drive live 3D camera positioning, material updates, and model configuration in real time' },
        { text: 'Led frontend optimizations using lazy loading, memoization, and code-splitting, consistently delivering features within 2-week Agile sprints through cross-functional collaboration' }
      ],
      skills: ['React.js', 'Three.js', 'Neo4j', 'AWS S3', 'REST APIs', 'Agile']
    },
    {
      id: 'jabsz',
      title: 'Web Developer Intern',
      company: 'Jabsz Gaming Studios LLP',
      location: 'Remote',
      period: '11/2024 - 04/2025',
      type: 'Internship',
      achievements: [
        { text: 'Designed and integrated a complete Expense Management module that allowed employees to submit and track reimbursement requests online, reducing processing time and improving transparency for', highlight: '80+', suffix: 'employees using React, REST APIs, and Firebase' },
        { text: 'Collaborated with a cross-functional team of', highlight: '3', suffix: '(developers + designer + product manager) to build a Clock-In/Clock-Out system with timestamp capture and shift management' },
        { text: 'Led the full-scale migration of an ed-tech platform backend from MongoDB to Firebase, rewriting', highlight: '20+', suffix: 'RESTful APIs and refactoring data models for real-time database services' },
        { text: 'Spearheaded security enhancements by addressing vulnerabilities in localStorage, cookies, and session management, achieving', highlight: '100%', suffix: 'clearance rate of sensitive session data on logout' }
      ],
      skills: ['React.js', 'Firebase', 'MongoDB', 'REST APIs', 'JWT', 'Security']
    },
    {
      id: 'coding-blocks',
      title: 'Trainee',
      company: 'Coding Blocks',
      location: 'Uttar Pradesh, India',
      period: '06/2024 - 07/2024',
      type: 'Training',
      achievements: [
        { text: 'Acquired foundational machine learning and data science knowledge, focusing on more than', highlight: '5', suffix: 'supervised and unsupervised algorithms' },
        { text: 'Developed introductory skills in applying basic machine learning algorithms on', highlight: '10+', suffix: 'sample datasets, focusing on data preparation and model implementation' }
      ],
      skills: ['Python', 'Machine Learning', 'Data Science']
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      experiences.forEach(exp => {
        exp.achievements.forEach((_, index) => {
          const element = document.getElementById(`${exp.id}-stat-${index}`);
          if (element) {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible && !visibleStats[`${exp.id}-stat-${index}`]) {
              setVisibleStats(prev => ({ ...prev, [`${exp.id}-stat-${index}`]: true }));
            }
          }
        });
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleStats]);

  const AnimatedNumber: React.FC<{ value: string; isVisible: boolean }> = ({ value, isVisible }) => {
    const [displayValue, setDisplayValue] = useState('0');
    const numericValue = React.useMemo(() => {
      const parsed = parseInt(value.replace(/[^0-9]/g, ''));
      return isNaN(parsed) ? null : parsed;
    }, [value]);

    useEffect(() => {
      if (!isVisible || numericValue === null) { setDisplayValue(value); return; }
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) { setDisplayValue(value); clearInterval(timer); }
        else { setDisplayValue(Math.floor(start) + value.replace(/[0-9]/g, '')); }
      }, 16);
      return () => clearInterval(timer);
    }, [isVisible, numericValue, value]);

    return <span className="text-primary font-bold">{displayValue}</span>;
  };

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? '' : id);
  };

  return (
    <section className="py-20 relative overflow-hidden section-gradient-dark">
      <div className="absolute inset-0 gradient-mesh" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work <span className="text-primary">Experience</span>
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto rounded-full glow-border mb-6" />
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Professional journey building impactful solutions and gaining valuable experience
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

            {experiences.map((exp) => {
              const isExpanded = expandedId === exp.id;
              return (
                <div key={exp.id} className="relative mb-4 md:ml-20">
                  {/* Timeline dot */}
                  <div className={`absolute -left-[3.05rem] top-5 w-3 h-3 rounded-full hidden md:block transition-all duration-300 ${
                    isExpanded ? 'bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]' : 'bg-muted-foreground/40'
                  }`} />

                  <div className="glass-card rounded-2xl overflow-hidden">
                    {/* Clickable Header */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="w-full text-left p-5 md:p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 hover:bg-muted/20 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div>
                          <h3 className="text-lg font-bold text-foreground leading-tight">{exp.title}</h3>
                          <div className="flex flex-wrap items-center gap-3 text-primary text-xs font-medium mt-0.5">
                            <span className="flex items-center gap-1"><Briefcase size={12} />{exp.company}</span>
                            <span className="flex items-center gap-1"><MapPin size={12} />{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <div className="flex items-center gap-2 text-muted-foreground text-xs">
                          <Calendar size={12} />
                          <span>{exp.period}</span>
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium glass text-primary border-primary/20">
                            {exp.type}
                          </span>
                        </div>
                        <ChevronDown
                          size={16}
                          className={`text-muted-foreground transition-transform duration-300 ml-2 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {/* Collapsible Content */}
                    <div
                      className={`transition-all duration-400 ease-in-out overflow-hidden ${
                        isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        {/* Achievements */}
                        <div className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              id={`${exp.id}-stat-${achIndex}`}
                              className="flex items-start gap-2.5 p-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_6px_hsl(var(--primary)/0.5)]" />
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {achievement.text}{' '}
                                {achievement.highlight && (
                                  <AnimatedNumber value={achievement.highlight} isVisible={visibleStats[`${exp.id}-stat-${achIndex}`]} />
                                )}
                                {achievement.suffix && ` ${achievement.suffix}`}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Skills */}
                        <div>
                          <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Technologies</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.skills.map((skill, i) => (
                              <div key={i} className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300">
                                <TechIcon name={skill} size={11} />
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
