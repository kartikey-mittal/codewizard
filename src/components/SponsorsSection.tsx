import React from 'react';
import { Section } from './Section';

const sponsors = [
  { name: 'TechCorp', tier: 'platinum' },
  { name: 'DevHub', tier: 'gold' },
  { name: 'CloudNet', tier: 'gold' },
  { name: 'CodeLabs', tier: 'silver' },
  { name: 'DataFlow', tier: 'silver' },
  { name: 'AIVentures', tier: 'bronze' },
];

export function SponsorsSection() {
  return (
    <Section id="sponsors" title="Our Sponsors">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm hover:scale-105 transition-all"
          >
            <div className={`text-center ${
              sponsor.tier === 'platinum' ? 'text-2xl' :
              sponsor.tier === 'gold' ? 'text-xl' :
              'text-lg'
            }`}>
              <h3 className="font-bold text-white mb-2">{sponsor.name}</h3>
              <span className={`text-sm ${
                sponsor.tier === 'platinum' ? 'text-[#dbe2e7]' :
                sponsor.tier === 'gold' ? 'text-yellow-400' :
                sponsor.tier === 'silver' ? 'text-gray-400' :
                'text-orange-400'
              }`}>
                {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)} Sponsor
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}