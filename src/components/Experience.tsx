import React, { useEffect, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import TechIcon from './TechIcon';

interface ExperienceProps {
  isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const [visibleStats, setVisibleStats] = useState<{ [key: string]: boolean }>({});

  const experiences = [
    {
      id: 'config-cloud',
      title: 'Web Developer Intern',
      company: 'Config Cloud',
      location: 'Hybrid',
      period: '06/2025 - Present',
      type: 'Internship',
      achievements: [
        { text: 'Converted', highlight: '6+', suffix: 'Figma dashboard pages into modular React (ES6+) components styled with CSS Modules, building a reusable UI component library' },
        { text: 'Implemented multi-select filters and server-side pagination with REST APIs, cutting redundant API calls by', highlight: '45%', suffix: 'and improving median time-to-first-interaction by ~1.2s' },
        { text: 'Designed a robust drag-and-drop file uploader with preview, client-side validation, resumable uploads, and progress tracking, integrated with AWS S3 and neo4j' }
      ],
      skills: ['React.js', 'CSS Modules', 'Axios', 'REST APIs', 'AWS S3', 'Neo4j']
    },
    {
      id: 'jabsz',
      title: 'Web Developer Intern',
      company: 'Jabsz Gaming Studios LLP',
      location: 'Remote',
      period: '01/2025 - 06/2025',
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

            {experiences.map((exp) => (
              <div key={exp.id} className="relative mb-10 md:ml-20">
                {/* Timeline dot */}
                <div className="absolute -left-[3.05rem] top-8 w-3 h-3 bg-primary rounded-full hidden md:block shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />

                <div className="glass-card rounded-2xl p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-primary text-sm font-medium">
                        <span className="flex items-center gap-1"><Briefcase size={14} />{exp.company}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} />{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium glass text-primary border-primary/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        id={`${exp.id}-stat-${achIndex}`}
                        className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 shadow-[0_0_6px_hsl(var(--primary)/0.5)]" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
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
                    <h4 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300">
                          <TechIcon name={skill} size={12} />
                          {skill}
                        </div>
                      ))}
                    </div>
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

export default Experience;
