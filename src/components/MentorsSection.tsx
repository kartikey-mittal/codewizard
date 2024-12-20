import React from 'react';
import { Section } from './Section';
import { PersonCard } from './PersonCard';

const mentors = [
  {
    name: 'David Kim',
    role: 'Senior Software Engineer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    expertise: 'Cloud Architecture',
    social: {
      github: 'https://github.com/davidkim',
      linkedin: 'https://www.linkedin.com/in/davidkim',
      instagram: 'https://www.instagram.com/davidkim'
    }
  },
  {
    name: 'Lisa Johnson',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    expertise: 'Product Strategy',
    social: {
      github: 'https://github.com/lisajohnson',
      linkedin: 'https://www.linkedin.com/in/lisajohnson',
      instagram: 'https://www.instagram.com/lisajohnson'
    }
  },
  {
    name: 'Alex Rivera',
    role: 'UX Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    expertise: 'User Experience',
    social: {
      github: 'https://github.com/alexrivera',
      linkedin: 'https://www.linkedin.com/in/alexrivera',
      instagram: 'https://www.instagram.com/alexrivera'
    }
  },
];

export function MentorsSection() {
  return (
    <Section id="mentors" title="Meet Your Mentors">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((mentor, index) => (
          <PersonCard key={index} {...mentor} />
        ))}
      </div>
    </Section>
  );
}
