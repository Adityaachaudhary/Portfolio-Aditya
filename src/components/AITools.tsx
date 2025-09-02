
import React from 'react';
import { Brain, Code, Zap, Sparkles, Bot, Rocket, Terminal, Lightbulb, MessageSquare, Cpu, Wand2, GitBranch } from 'lucide-react';

interface AIToolsProps {
  isDarkMode: boolean;
}

const AITools: React.FC<AIToolsProps> = ({ isDarkMode }) => {
  const aiTools = [
    {
      name: 'Cursor',
      description: 'AI-powered code editor with intelligent autocomplete and code generation',
      icon: Code,
      experience: 'Expert',
      category: 'Development'
    },
    {
      name: 'Lovable.dev',
      description: 'AI-driven web application builder for rapid prototyping and development',
      icon: Sparkles,
      experience: 'Expert',
      category: 'Web Development'
    },
    {
      name: 'Bolt.new',
      description: 'AI-powered full-stack development platform for building applications',
      icon: Zap,
      experience: 'Advanced',
      category: 'Full-Stack'
    },
    {
      name: 'Replit',
      description: 'Collaborative coding platform with AI assistance for multiple languages',
      icon: Terminal,
      experience: 'Advanced',
      category: 'Collaboration'
    },
    {
      name: 'Firebase Studio',
      description: 'Google\'s AI-enhanced backend development and deployment platform',
      icon: Rocket,
      experience: 'Intermediate',
      category: 'Backend'
    },
    {
      name: 'V0.dev',
      description: 'AI component generator for React and Next.js applications',
      icon: Bot,
      experience: 'Advanced',
      category: 'UI/UX'
    },
    {
      name: 'GitHub Copilot',
      description: 'AI pair programmer that suggests code and entire functions',
      icon: GitBranch,
      experience: 'Expert',
      category: 'Development'
    },
    {
      name: 'ChatGPT',
      description: 'AI assistant for problem-solving, code review, and technical guidance',
      icon: MessageSquare,
      experience: 'Expert',
      category: 'General AI'
    },
    {
      name: 'Claude AI',
      description: 'Advanced AI assistant for complex reasoning and code analysis',
      icon: Brain,
      experience: 'Expert',
      category: 'General AI'
    },
    {
      name: 'Grok',
      description: 'Real-time AI assistant with up-to-date information and coding capabilities',
      icon: Lightbulb,
      experience: 'Intermediate',
      category: 'General AI'
    },
    {
      name: 'Gemini',
      description: 'Google\'s multimodal AI for text, code, and image generation',
      icon: Cpu,
      experience: 'Advanced',
      category: 'Multimodal AI'
    },
    {
      name: 'Perplexity',
      description: 'AI-powered search engine for research and information gathering',
      icon: Wand2,
      experience: 'Advanced',
      category: 'Research'
    }
  ];

  const getExperienceColor = (experience: string) => {
    switch (experience) {
      case 'Expert': return 'from-green-400 to-emerald-500';
      case 'Advanced': return 'from-blue-400 to-cyan-500';
      case 'Intermediate': return 'from-yellow-400 to-orange-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <section className={`py-20 relative overflow-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-gradient-to-r from-[#00BFFF] to-green-400 rounded-full blur-3xl animate-pulse delay-1500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Brain className="text-[#00BFFF]" size={48} />
              <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${
                isDarkMode 
                  ? 'from-white via-gray-200 to-[#00BFFF]' 
                  : 'from-gray-900 via-gray-700 to-[#00BFFF]'
              } bg-clip-text text-transparent`}>
                AI Tools & <span className="text-[#00BFFF]">Experience</span>
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-[#00BFFF] to-green-400 mx-auto rounded-full mb-8 shadow-lg shadow-[#00BFFF]/50" />
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Leveraging cutting-edge AI tools to enhance development workflow and create innovative solutions
            </p>
          </div>

          {/* AI Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {aiTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-6 rounded-2xl transition-all duration-500 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 border border-gray-700/50 hover:border-[#00BFFF]/30' 
                      : 'bg-gradient-to-br from-white/90 via-gray-50/90 to-white/90 border border-gray-200/50 hover:border-[#00BFFF]/30'
                  } backdrop-blur-sm shadow-2xl hover:shadow-[#00BFFF]/20`}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00BFFF]/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Tool Icon */}
                    <div className="flex items-start justify-center mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#00BFFF]/20 to-purple-600/20 border border-[#00BFFF]/30 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-[#00BFFF]" size={24} />
                      </div>
                    </div>

                    {/* Tool Info */}
                    <div className="text-center">
                      <h3 className={`text-lg font-bold group-hover:text-[#00BFFF] transition-colors duration-300 mb-2 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {tool.name}
                      </h3>
                      <span className="text-xs text-[#00BFFF] bg-[#00BFFF]/10 px-2 py-1 rounded-md">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Experience Summary */}
          <div className={`text-center p-8 rounded-2xl ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50' 
              : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200/50'
          } backdrop-blur-sm shadow-2xl`}>
            <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-white to-[#00BFFF]' 
                : 'from-gray-900 to-[#00BFFF]'
            } bg-clip-text text-transparent`}>
              AI-Powered Development Approach
            </h3>
            <p className={`text-lg max-w-3xl mx-auto mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Integrating artificial intelligence into my development workflow to boost productivity, 
              enhance code quality, and accelerate project delivery while staying at the forefront of technological innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Code Generation', 'Automated Testing', 'Smart Debugging', 'UI/UX Enhancement', 'Performance Optimization'].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#00BFFF]/20 to-purple-600/20 text-[#00BFFF] border border-[#00BFFF]/30 hover:scale-105 transition-transform duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITools;
