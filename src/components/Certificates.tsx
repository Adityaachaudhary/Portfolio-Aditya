
import React from 'react';
import { Award, ExternalLink, CheckCircle, ArrowLeft, ArrowRight, Eye } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CertificatesProps {
  isDarkMode: boolean;
}

const Certificates: React.FC<CertificatesProps> = ({ isDarkMode }) => {
  const certificates = [
    {
      title: 'Certified in Javascript (Basic)',
      issuer: 'HackerRank',
      date: '2024',
      description: 'Fundamental JavaScript concepts including ES6 features, async programming, and DOM manipulation.',
      skills: ['JavaScript', 'ES6', 'Async/Await', 'DOM Manipulation'],
      link: 'https://hackerrank.com/certificates/javascript-basic',
      verified: true
    },
    {
      title: 'Certified in Java Programming Fundamentals',
      issuer: 'Infosys Springboard',
      date: '2024',
      description: 'Core Java programming concepts including OOP principles, collections, and exception handling.',
      skills: ['Java', 'OOP', 'Collections', 'Exception Handling'],
      link: 'https://infosys.springboard.com/certificates/java-fundamentals',
      verified: true
    },
    {
      title: 'Certified in Website Development',
      issuer: 'Infosys Springboard',
      date: '2024',
      description: 'Comprehensive web development course covering HTML, CSS, JavaScript, and modern web development practices.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web Standards'],
      link: '#',
      verified: true
    },
    {
      title: 'Career Essentials in Generative AI',
      issuer: 'Microsoft and LinkedIn',
      date: '2024',
      description: 'Essential knowledge and skills for working with generative AI technologies and their applications in various industries.',
      skills: ['Generative AI', 'Machine Learning', 'AI Applications', 'Prompt Engineering'],
      link: '#',
      verified: true
    },
    {
      title: 'Certified in CSS (Basic)',
      issuer: 'HackerRank',
      date: '2024',
      description: 'Fundamental CSS concepts including styling, layouts, flexbox, grid, and responsive design principles.',
      skills: ['CSS3', 'Flexbox', 'Grid Layout', 'Responsive Design', 'Animations'],
      link: '#',
      verified: true
    }
  ];

  const totalCertificates = certificates.length;

  return (
    <section className={`py-20 relative overflow-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#00BFFF] to-cyan-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-white via-gray-200 to-[#00BFFF]' 
                : 'from-gray-900 via-gray-700 to-[#00BFFF]'
            } bg-clip-text text-transparent`}>
              Certifications & <span className="text-[#00BFFF]">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00BFFF] to-cyan-400 mx-auto rounded-full mb-8 shadow-lg shadow-[#00BFFF]/50" />
          </div>

          {/* Certificates Carousel */}
          <div className="relative mb-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {certificates.map((cert, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className={`group relative p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] h-96 ${
                      isDarkMode 
                        ? 'bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 border border-gray-700/50 hover:border-[#00BFFF]/30' 
                        : 'bg-gradient-to-br from-white/90 via-gray-50/90 to-gray-100/90 border border-gray-300/50 hover:border-[#00BFFF]/30'
                    } backdrop-blur-sm shadow-2xl hover:shadow-[#00BFFF]/20`}>
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00BFFF]/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Certificate Icon */}
                      <div className="flex items-start justify-between mb-6 relative z-10">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-[#00BFFF]/20 to-purple-600/20 border border-[#00BFFF]/30">
                          <Award className="text-[#00BFFF]" size={32} />
                        </div>
                        {cert.verified && (
                          <div className="flex items-center gap-1 text-green-400 bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">
                            <CheckCircle size={16} />
                            <span className="text-xs font-medium">Verified</span>
                          </div>
                        )}
                      </div>

                      {/* Certificate Content */}
                      <div className="space-y-4 flex flex-col h-full relative z-10">
                        <div>
                          <h3 className={`text-xl font-bold mb-2 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          } group-hover:text-[#00BFFF] transition-colors duration-300`}>
                            {cert.title}
                          </h3>
                          <div className="flex items-center justify-between">
                            <p className="text-[#00BFFF] font-medium">{cert.issuer}</p>
                            <span className={`text-sm px-2 py-1 rounded-md ${
                              isDarkMode 
                                ? 'text-gray-400 bg-gray-800/50' 
                                : 'text-gray-600 bg-gray-200/50'
                            }`}>
                              {cert.date}
                            </span>
                          </div>
                        </div>

                        <p className={`text-sm leading-relaxed flex-grow ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {cert.description}
                        </p>

                        {/* Skills */}
                        <div>
                          <h4 className={`text-sm font-semibold mb-2 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            SKILLS COVERED
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                                  isDarkMode 
                                    ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 hover:from-[#00BFFF]/20 hover:to-purple-600/20 hover:text-white border border-gray-600/50 hover:border-[#00BFFF]/50'
                                    : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-[#00BFFF]/20 hover:to-purple-600/20 hover:text-gray-900 border border-gray-400/50 hover:border-[#00BFFF]/50'
                                }`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* View Certificate Button */}
                        <div className="pt-4 mt-auto">
                          <button className="w-full group/btn relative overflow-hidden rounded-xl py-3 px-4 bg-gradient-to-r from-[#00BFFF] to-cyan-400 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00BFFF]/30 focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/50">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                            <div className="relative flex items-center justify-center gap-2">
                              <Eye size={16} />
                              View Certificate
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#00BFFF] to-cyan-400 border-none hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300">
                <ArrowLeft className="h-4 w-4" />
              </CarouselPrevious>
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#00BFFF] to-cyan-400 border-none hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg hover:shadow-[#00BFFF]/50 transition-all duration-300">
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
