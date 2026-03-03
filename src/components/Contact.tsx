
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageSquare } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adityaprakash.280102@gmail.com',
      link: 'mailto:adityaprakash.280102@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/adityachaudhary28/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my repositories',
      link: 'https://github.com/Adityaachaudhary'
    }
  ];

  return (
    <section className="py-20 section-gradient-dark-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8 glow-border" />
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
                  Let's Start a Conversation
                </h3>
                <p className="text-base md:text-lg mb-8 text-muted-foreground">
                  I'm always excited to discuss new opportunities, interesting projects, or just chat about technology. Feel free to reach out through any of the following channels.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center gap-4 p-4 md:p-6 rounded-xl transition-all duration-300 hover:scale-105 glass-card group"
                    >
                      <div className="p-3 rounded-lg transition-colors duration-300 bg-muted/50 group-hover:bg-primary/20">
                        <IconComponent className="text-primary transition-colors duration-300" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{contact.label}</h4>
                        <p className="text-sm text-muted-foreground">{contact.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Call to Action */}
              <div className="glass-card p-4 md:p-6 rounded-xl">
                <h4 className="font-semibold mb-2 text-foreground">Open to Opportunities</h4>
                <p className="text-sm text-muted-foreground">
                  Currently seeking full-time opportunities in full-stack development. Let's connect if you think we'd be a great fit!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-4 md:p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center gap-2 px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed ${
                    isSubmitting ? 'animate-pulse' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
