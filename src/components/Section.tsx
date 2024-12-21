import React, { CSSProperties } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties; // Add style prop to the interface
}

export function Section({ id, title, children, className = '', style }: SectionProps) {
  // Determine the color based on the title
  const titleColor = title === 'Past Sponsors' ? '#cececf' : '#dbe2e7'; // Use the same color for all titles for now, but you can modify as needed

  return (
    <section id={id} className={`py-20 ${className}`} style={style}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: titleColor }}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}