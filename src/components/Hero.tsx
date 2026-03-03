import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Download, Code } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const jobTitles = [
    'Full Stack Developer',
    'MERN Developer', 
    'Frontend Developer',
    'React Developer',
    'JavaScript Developer'
  ];
  
  useEffect(() => {
    const currentTitle = jobTitles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentTitle.length) {
          setTypedText(currentTitle.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % jobTitles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, jobTitles]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 section-gradient-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-muted/50 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-muted/30 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-muted/40 blur-3xl animate-pulse delay-2000" />
      </div>
      <div className="absolute inset-0 gradient-mesh" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Heading */}
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
                ADITYA PRAKASH{' '}
                <span className="text-primary glow-text">CHAUDHARY</span>
              </h1>
            </div>
            
            {/* Typing effect */}
            <div className="h-20 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
                <span className="inline-block min-w-[1ch]">{typedText}</span>
                <span className="text-primary font-bold animate-pulse">|</span>
              </h2>
            </div>
          </div>

          {/* Tagline */}
          <div className="relative">
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light text-muted-foreground">
              Crafting <span className="text-primary font-semibold">seamless digital experiences</span> with 
              <br className="hidden md:block" />
              innovative solutions and <span className="text-primary font-semibold">scalable architecture</span>
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-primary/50 rounded-full glow-border" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary flex items-center gap-2 px-10 py-4 text-base"
            >
              <Code size={20} />
              View Projects
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-8 pt-8">
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
                className="group p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl glass hover:border-primary/50 hover:-translate-y-1"
                title={label}
              >
                <Icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:scale-110 text-muted-foreground hover:text-primary"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-muted-foreground hover:border-primary rounded-full flex justify-center transition-colors duration-300">
            <div className="w-1 h-3 rounded-full mt-2 animate-bounce bg-muted-foreground" />
          </div>
          <ChevronDown size={24} className="animate-pulse" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
