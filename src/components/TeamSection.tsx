import React from 'react';
import { Section } from './Section';
import { PersonCard } from './PersonCard';

const teamMembers = [
  {
    name: 'Jennifer Lee',
    role: 'Event Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    social: {
      github: 'https://github.com/alexrivera',
      linkedin: 'https://www.linkedin.com/in/alexrivera',
      instagram: 'https://www.instagram.com/alexrivera'
    }
  },
  {
    name: 'Marcus Chen',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    social: {
      github: 'https://github.com/alexrivera',
      linkedin: 'https://www.linkedin.com/in/alexrivera',
      instagram: 'https://www.instagram.com/alexrivera'
    }
  },
  {
    name: 'Sophia Patel',
    role: 'Marketing Lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    social: {
      github: 'https://github.com/alexrivera',
      linkedin: 'https://www.linkedin.com/in/alexrivera',
      instagram: 'https://www.instagram.com/alexrivera'
    }
  }
];

export function TeamSection() {
  return (
    <Section id="team" title="Our Team">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <PersonCard key={index} {...member} />
        ))}
      </div>
    </Section>
  );
}