import React from 'react';
import { Award, CheckCircle, ArrowLeft, ArrowRight, Eye } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CertificatesProps {
  isDarkMode: boolean;
}

const Certificates: React.FC<CertificatesProps> = ({ isDarkMode }) => {
  const certificates = [
    {
      title: 'Certified in Javascript (Basic)', issuer: 'HackerRank', date: '2024',
      description: 'Fundamental JavaScript concepts including ES6 features, async programming, and DOM manipulation.',
      skills: ['JavaScript', 'ES6', 'Async/Await', 'DOM Manipulation'],
      link: 'https://hackerrank.com/certificates/javascript-basic', verified: true
    },
    {
      title: 'Certified in Java Programming Fundamentals', issuer: 'Infosys Springboard', date: '2024',
      description: 'Core Java programming concepts including OOP principles, collections, and exception handling.',
      skills: ['Java', 'OOP', 'Collections', 'Exception Handling'],
      link: 'https://infosys.springboard.com/certificates/java-fundamentals', verified: true
    },
    {
      title: 'Certified in Website Development', issuer: 'Infosys Springboard', date: '2024',
      description: 'Comprehensive web development course covering HTML, CSS, JavaScript, and modern web development practices.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web Standards'],
      link: '#', verified: true
    },
    {
      title: 'Career Essentials in Generative AI', issuer: 'Microsoft and LinkedIn', date: '2024',
      description: 'Essential knowledge and skills for working with generative AI technologies and their applications.',
      skills: ['Generative AI', 'Machine Learning', 'AI Applications', 'Prompt Engineering'],
      link: '#', verified: true
    },
    {
      title: 'Certified in CSS (Basic)', issuer: 'HackerRank', date: '2024',
      description: 'Fundamental CSS concepts including styling, layouts, flexbox, grid, and responsive design principles.',
      skills: ['CSS3', 'Flexbox', 'Grid Layout', 'Responsive Design', 'Animations'],
      link: '#', verified: true
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden section-gradient-dark">
      <div className="absolute inset-0 gradient-mesh" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications & <span className="text-primary">Achievements</span>
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto rounded-full glow-border" />
          </div>

          {/* Carousel */}
          <div className="relative px-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-3 md:-ml-4">
                {certificates.map((cert, index) => (
                  <CarouselItem key={index} className="pl-3 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="glass-card rounded-2xl p-6 h-[380px] group flex flex-col">
                      {/* Icon & Verified */}
                      <div className="flex items-start justify-between mb-5">
                        <div className="p-3 rounded-xl glass border-primary/20">
                          <Award className="text-primary" size={24} />
                        </div>
                        {cert.verified && (
                          <div className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full text-xs font-medium border border-emerald-400/20">
                            <CheckCircle size={12} />
                            Verified
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                          {cert.title}
                        </h3>
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-primary text-sm font-medium">{cert.issuer}</p>
                          <span className="text-xs text-muted-foreground glass px-2 py-0.5 rounded-md">{cert.date}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-grow">{cert.description}</p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {cert.skills.map((skill, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-full text-xs font-medium glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300">
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Button */}
                        <button className="w-full btn-primary flex items-center justify-center gap-2 mt-auto">
                          <Eye size={14} />
                          View Certificate
                        </button>
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

export default Certificates;
