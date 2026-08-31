import React from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  /** two digit index, e.g. "01" */
  index: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ index, label, children, className = '' }) => (
  <div className={`mb-14 ${className}`}>
    <Reveal from="up">
      <div className="flex items-center gap-4 mb-5">
        <span
          className="text-xs tracking-[0.35em] text-muted-foreground/70 uppercase"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          {index}
        </span>
        <span className="hairline flex-1" />
        <span
          className="text-xs tracking-[0.35em] text-muted-foreground/70 uppercase"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          {label}
        </span>
      </div>
    </Reveal>
    <Reveal from="up" delay={90}>
      {children}
    </Reveal>
  </div>
);

export default SectionHeading;
