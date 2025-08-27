
import React, { useEffect, useState } from 'react';
import { Briefcase, Calendar, MapPin, Users, Code, Database } from 'lucide-react';
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
        {
          text: 'Converted',
          highlight: '6+',
          suffix: 'Figma dashboard pages into modular React (ES6+) components styled with CSS Modules, building a reusable UI component library'
        },
        {
          text: 'Implemented multi-select filters and server-side pagination with REST APIs, cutting redundant API calls by',
          highlight: '45%',
          suffix: 'and improving median time-to-first-interaction by ~1.2s'
        },
        {
          text: 'Designed a robust drag-and-drop file uploader with preview, client-side validation, resumable uploads, and progress tracking, integrated with AWS S3 and neo4j'
        }
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
        {
          text: 'Designed and integrated a complete Expense Management module that allowed employees to submit and track reimbursement requests online, reducing processing time and improving transparency for',
          highlight: '80+',
          suffix: 'employees using React, REST APIs, and Firebase'
        },
        {
          text: 'Collaborated with a cross-functional team of',
          highlight: '3',
          suffix: '(developers + designer + product manager) to build a Clock-In/Clock-Out system with timestamp capture and shift management'
        },
        {
          text: 'Led the full-scale migration of an ed-tech platform backend from MongoDB to Firebase, rewriting',
          highlight: '20+',
          suffix: 'RESTful APIs and refactoring data models for real-time database services'
        },
        {
          text: 'Spearheaded security enhancements by addressing vulnerabilities in localStorage, cookies, and session management, achieving',
          highlight: '100%',
          suffix: 'clearance rate of sensitive session data on logout'
        }
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
        {
          text: 'Acquired foundational machine learning and data science knowledge, focusing on more than',
          highlight: '5',
          suffix: 'supervised and unsupervised algorithms'
        },
        {
          text: 'Developed introductory skills in applying basic machine learning algorithms on',
          highlight: '10+',
          suffix: 'sample datasets, focusing on data preparation and model implementation'
        }
      ],
      skills: ['Python', 'Machine Learning', 'Data Science']
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      experiences.forEach(exp => {
        exp.achievements.forEach((achievement, index) => {
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
    handleScroll(); // Check initial visibility
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleStats]);

  const AnimatedNumber: React.FC<{ value: string; isVisible: boolean }> = ({ value, isVisible }) => {
    const [displayValue, setDisplayValue] = useState('0');

    useEffect(() => {
      if (!isVisible || !value) return;

      const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
      if (isNaN(numericValue)) {
        setDisplayValue(value);
        return;
      }

      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start) + value.replace(/[0-9]/g, ''));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return <span className="text-[#00BFFF] font-bold">{displayValue}</span>;
  };

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-gradient-to-br from-[#16213E] via-[#1A1A2E] to-[#0F172A]' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Work <span className="text-[#00BFFF]">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto rounded-full mb-8" />
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Professional journey building impactful solutions and gaining valuable experience
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#00BFFF] hidden md:block" />

            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 md:ml-20">
                {/* Timeline Dot */}
                <div className="absolute -left-12 top-6 w-4 h-4 bg-[#00BFFF] rounded-full border-4 border-white hidden md:block" />

                {/* Experience Card */}
                <div className={`p-8 rounded-xl transition-all duration-300 hover:shadow-lg ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-50 hover:bg-white shadow-md'
                }`}>
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 text-[#00BFFF] font-medium">
                        <span className="flex items-center gap-1">
                          <Briefcase size={16} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 mt-4 md:mt-0 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        id={`${exp.id}-stat-${achIndex}`}
                        className={`flex items-start gap-3 p-4 rounded-lg ${
                          isDarkMode ? 'bg-gray-700' : 'bg-white'
                        }`}
                      >
                        <div className="w-2 h-2 bg-[#00BFFF] rounded-full mt-2 flex-shrink-0" />
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {achievement.text}{' '}
                           {achievement.highlight && (
                             <AnimatedNumber 
                               value={achievement.highlight} 
                               isVisible={visibleStats[`${exp.id}-stat-${achIndex}`]} 
                             />
                           )}
                           {achievement.suffix && ` ${achievement.suffix}`}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className={`text-sm font-semibold mb-3 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      TECHNOLOGIES USED
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 hover:bg-[#00BFFF] hover:text-white ${
                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          <TechIcon name={skill} size={14} />
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
