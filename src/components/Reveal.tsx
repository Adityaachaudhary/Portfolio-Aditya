import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  /** delay in ms */
  delay?: number;
  /** direction of the entrance */
  from?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const offsets: Record<NonNullable<RevealProps['from']>, string> = {
  up: 'translate3d(0, 28px, 0)',
  down: 'translate3d(0, -28px, 0)',
  left: 'translate3d(-28px, 0, 0)',
  right: 'translate3d(28px, 0, 0)',
  none: 'translate3d(0, 0, 0)',
};

const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  from = 'up',
  className = '',
  as: Tag = 'div',
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as any;

  return (
    <Component
      ref={ref as any}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0, 0, 0)' : offsets[from],
        filter: visible ? 'blur(0px)' : 'blur(6px)',
        transition:
          'opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 900ms cubic-bezier(0.16, 1, 0.3, 1), filter 800ms ease-out',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
