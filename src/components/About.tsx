import React, { useState, useEffect } from 'react';
import { MapPin, GraduationCap, BookOpen, Github, Linkedin, Mail, FolderOpen, Code } from 'lucide-react';
import me from '@/assets/me.jpg';

interface AboutProps {
  isDarkMode: boolean;
  scrollY?: number;
}

const About: React.FC<AboutProps> = ({ isDarkMode, scrollY = 0 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const jobTitles = ['React Developer', 'Frontend Developer', 'Full Stack Developer', 'Web Developer'];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentTitle = jobTitles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentTitle.substring(0, currentText.length + 1));
        if (currentText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(currentTitle.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, jobTitles]);

  return (
    <section className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden section-gradient-dark">
      {/* Parallax background elements */}
      <div className="absolute inset-0 gradient-mesh" style={{ transform: `translateY(${scrollY * 0.15}px)` }} />
      <div 
        className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{ 
          background: 'radial-gradient(circle, hsl(0 0% 60%), transparent 70%)',
          transform: `translateY(${scrollY * 0.1}px)` 
        }} 
      />
      <div 
        className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style={{ 
          background: 'radial-gradient(circle, hsl(0 0% 50%), transparent 70%)',
          transform: `translateY(${scrollY * -0.08}px)` 
        }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
              ADITYA PRAKASH{' '}
              <span className="text-primary glow-text">CHAUDHARY</span>
            </h1>
            <div className="text-lg md:text-xl lg:text-2xl font-medium h-8 text-muted-foreground" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <span className="text-primary">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto rounded-full glow-border" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo */}
            <div className="relative order-1">
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative aspect-square max-w-[380px] mx-auto overflow-hidden rounded-3xl glass-card p-1">
                  <img
                    src={me}
                    alt="Aditya Prakash Chaudhary"
                    className="w-full h-full object-cover rounded-[1.25rem] transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-[1.25rem] bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
                {/* Glow accents */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 order-2 text-center lg:text-left">
              <div className="flex items-center gap-2 text-primary justify-center lg:justify-start">
                <MapPin size={18} />
                <span className="text-sm font-medium tracking-wide uppercase">Based in India</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Full Stack Developer &{' '}
                <span className="text-primary">Tech Enthusiast</span>
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-base">
                  I'm a passionate full-stack developer with expertise in the{' '}
                  <span className="text-primary font-semibold">MERN stack</span> and modern web technologies.
                  I love creating seamless, user-friendly applications that solve real-world problems.
                </p>
                <p className="text-sm">
                  With a strong foundation in both{' '}
                  <span className="text-primary font-semibold">frontend</span> and{' '}
                  <span className="text-primary font-semibold">backend</span> technologies,
                  I enjoy the entire development process — from conceptualization to deployment.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-card rounded-xl p-4 text-center">
                  <GraduationCap className="text-primary mx-auto mb-2" size={20} />
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">CGPA</div>
                  <div className="text-lg font-bold text-foreground">7.63/10</div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center">
                  <BookOpen className="text-primary mx-auto mb-2" size={20} />
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Education</div>
                  <div className="text-lg font-bold text-foreground">B.Tech CSE</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-14">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary flex items-center gap-2"
            >
              <FolderOpen size={18} />
              View Projects
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-4 mt-10">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/adityachaudhary28/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/Adityaachaudhary", label: "GitHub" },
              { icon: Code, href: "https://leetcode.com/u/aditya_28/", label: "LeetCode" },
              { icon: Mail, href: "mailto:adityaprakash.280102@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : "_blank"}
                rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className="p-3 rounded-xl glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                title={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
