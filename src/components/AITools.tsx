import React from 'react';
import { Brain, Code, Zap, Sparkles, Bot, Rocket, Terminal, Lightbulb, MessageSquare, Cpu, Wand2, GitBranch } from 'lucide-react';

interface AIToolsProps {
  isDarkMode: boolean;
}

const AITools: React.FC<AIToolsProps> = ({ isDarkMode }) => {
  const aiTools = [
    { name: 'Cursor', description: 'AI-powered code editor', icon: Code, category: 'Development' },
    { name: 'Lovable.dev', description: 'AI web app builder', icon: Sparkles, category: 'Web Dev' },
    { name: 'Bolt.new', description: 'Full-stack AI platform', icon: Zap, category: 'Full-Stack' },
    { name: 'Replit', description: 'Collaborative coding', icon: Terminal, category: 'Collaboration' },
    { name: 'Firebase Studio', description: 'Backend development', icon: Rocket, category: 'Backend' },
    { name: 'V0.dev', description: 'AI component generator', icon: Bot, category: 'UI/UX' },
    { name: 'GitHub Copilot', description: 'AI pair programmer', icon: GitBranch, category: 'Development' },
    { name: 'ChatGPT', description: 'AI problem-solving', icon: MessageSquare, category: 'General AI' },
    { name: 'Claude AI', description: 'Complex reasoning', icon: Brain, category: 'General AI' },
    { name: 'Grok', description: 'Real-time AI assistant', icon: Lightbulb, category: 'General AI' },
    { name: 'Gemini', description: 'Multimodal AI', icon: Cpu, category: 'Multimodal' },
    { name: 'Perplexity', description: 'AI-powered search', icon: Wand2, category: 'Research' },
  ];

  return (
    <section className="py-20 relative overflow-hidden section-gradient-dark-alt">
      <div className="absolute inset-0 gradient-mesh-alt" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <Brain className="text-primary" size={36} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                AI Tools & <span className="text-primary">Experience</span>
              </h2>
            </div>
            <div className="w-16 h-0.5 bg-primary mx-auto rounded-full glow-border" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mb-12">
            {aiTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div key={index} className="glass-card rounded-xl p-4 group text-center">
                  <div className="p-2 rounded-lg glass border-primary/20 inline-flex mb-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-primary" size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                    {tool.name}
                  </h3>
                  <span className="text-[10px] text-primary/80 bg-primary/10 px-2 py-0.5 rounded-md">
                    {tool.category}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="glass-card rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">
              AI-Powered <span className="text-primary">Development Approach</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              Integrating artificial intelligence into my development workflow to boost productivity,
              enhance code quality, and accelerate project delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Code Generation', 'Automated Testing', 'Smart Debugging', 'UI/UX Enhancement', 'Performance Optimization'].map((skill, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium glass text-primary border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5">
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
