import React from 'react';
import { Section } from './Section';

const sponsors = [
  { name: 'TechCorp', tier: 'platinum', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
  { name: 'DevHub', tier: 'gold', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
  { name: 'CloudNet', tier: 'gold', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
  { name: 'CodeLabs', tier: 'silver', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
  { name: 'DataFlow', tier: 'silver', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
  { name: 'AIVentures', tier: 'bronze', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
  { name: 'DataFlow', tier: 'silver', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
  { name: 'AIVentures', tier: 'bronze', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
];

export function SponsorsSection() {
  return (
    <Section id="sponsors" title="Our Sponsors">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm hover:scale-105 transition-all" 
            style={{ border: "1px solid #383838" }}
          >
            <img
              src={sponsor.imageUrl}
              alt={sponsor.name}
              className="w-full h-32 object-cover rounded-t-xl"
              onLoad={(e) => e.target.style.opacity = '1'}
              onError={(e) => e.target.style.backgroundColor = 'gray'}
              style={{ opacity: 0 }}
            />
            <div className={`text-center mt-4 ${
              sponsor.tier === 'platinum' ? 'text-2xl' :
              sponsor.tier === 'gold' ? 'text-xl' :
              'text-lg'
            }`}>
              {/* <h3 className="font-bold text-white mb-1">{sponsor.name}</h3> */}
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