'use client';

import { ReactNode, useEffect, useRef } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li';
  stagger?: number;
  delay?: number;
  y?: number;
};

// IntersectionObserver-based reveal. Resilient — if JS fails, content stays visible
// because we only apply the hidden class after mount, then flip it on intersection.
export default function Reveal({
  children,
  className,
  as = 'div',
  stagger = 0.08,
  delay = 0,
  y = 40,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>('[data-reveal]');
    const items = targets.length ? Array.from(targets) : [el];

    // Apply initial hidden styles via inline style (not CSS class) so SSR renders visible.
    items.forEach((t, i) => {
      t.style.opacity = '0';
      t.style.transform = `translateY(${y}px)`;
      t.style.filter = 'blur(6px)';
      t.style.transition = `opacity 0.9s cubic-bezier(.22,.61,.36,1) ${delay + i * stagger}s, transform 0.9s cubic-bezier(.22,.61,.36,1) ${delay + i * stagger}s, filter 0.9s cubic-bezier(.22,.61,.36,1) ${delay + i * stagger}s`;
    });

    const reveal = () => {
      items.forEach((t) => {
        t.style.opacity = '1';
        t.style.transform = 'translateY(0)';
        t.style.filter = 'blur(0)';
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal();
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(el);

    // Safety: if observer never fires (e.g. element already past), show after 2s.
    const safety = setTimeout(reveal, 2500);

    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, [stagger, delay, y]);

  const Tag = as as 'div';
  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </Tag>
  );
}
