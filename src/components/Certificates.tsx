
import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

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
    }
  ];

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-[#16213E]' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Certifications & <span className="text-[#00BFFF]">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto rounded-full mb-8" />
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Continuous learning and professional development through industry-recognized certifications
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-50 hover:bg-white shadow-md'
                }`}
              >
                {/* Certificate Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  }`}>
                    <Award className="text-[#00BFFF]" size={32} />
                  </div>
                  {cert.verified && (
                    <div className="flex items-center gap-1 text-green-500">
                      <CheckCircle size={16} />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>

                {/* Certificate Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {cert.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-[#00BFFF] font-medium">{cert.issuer}</p>
                      <span className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div>
                    <h4 className={`text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      SKILLS COVERED
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 hover:bg-[#00BFFF] hover:text-white ${
                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Link */}
                  <div className="pt-4">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#00BFFF] hover:text-blue-400 font-medium text-sm transition-colors duration-300"
                    >
                      View Certificate
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00BFFF]/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className={`mt-16 p-8 rounded-xl text-center ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <div className="max-w-2xl mx-auto">
              <h3 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Committed to Continuous Learning
              </h3>
              <p className={`text-lg mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Staying current with industry trends and expanding technical expertise through ongoing education and professional development.
              </p>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00BFFF] mb-1">2</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Certifications Earned
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00BFFF] mb-1">100%</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Verified Credentials
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00BFFF] mb-1">2024</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Latest Achievement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
