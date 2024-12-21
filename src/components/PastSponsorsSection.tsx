
import { Section } from './Section';

const pastSponsors = [
  { name: 'TechCorp', tier: 'platinum', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
  { name: 'DevHub', tier: 'gold', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
  { name: 'CloudNet', tier: 'gold', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
  { name: 'CodeLabs', tier: 'silver', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
  { name: 'DataFlow', tier: 'silver', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
  { name: 'AIVentures', tier: 'bronze', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
  { name: 'DataFlow', tier: 'silver', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
  { name: 'AIVentures', tier: 'bronze', imageUrl: 'https://i.pinimg.com/474x/6e/39/83/6e3983ef421a6536731ab1123d847d60.jpg' },
];

export function PastSponsorsSection() {
  return (
    <Section id="past-sponsors" title="Past Sponsors" >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {pastSponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-gray-700/70 p-2 rounded-lg backdrop-blur-sm hover:scale-105 transition-all"
            style={{ border: "1px solid #444", opacity: 0.8 }}
          >
            <img
              src={sponsor.imageUrl}
              alt={sponsor.name}
              className="w-full h-20 object-cover rounded-t-md"
              onLoad={(e) => e.target.style.opacity = '1'}
              onError={(e) => e.target.style.backgroundColor = 'gray'}
              style={{ opacity: 0 }}
            />
            <div className={`text-center mt-2 text-sm ${
              sponsor.tier === 'platinum' ? 'text-xl' :
              sponsor.tier === 'gold' ? 'text-lg' :
              'text-base'
            }`}>
              {/* <span className={`text-xs ${
                sponsor.tier === 'platinum' ? 'text-[#dbe2e7]' :
                sponsor.tier === 'gold' ? 'text-yellow-400' :
                sponsor.tier === 'silver' ? 'text-gray-400' :
                'text-orange-400'
              }`}>
                {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)} Sponsor
              </span> */}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}