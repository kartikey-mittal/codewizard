import React from 'react';
import { Navbar } from './components/Navbar';
import { ParticlesBackground } from './components/ParticlesBackground';
import { CountdownTimer } from './components/CountdownTimer';
import { Section } from './components/Section';
import { SponsorsSection } from './components/SponsorsSection';
import { MentorsSection } from './components/MentorsSection';
import { TeamSection } from './components/TeamSection';
import { ProblemStatementsSection } from './components/ProblemStatementsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { PrizePool } from './components/PrizePool';
import { Code2, Wifi, Coffee, Gift } from 'lucide-react';
import {  Bed, Bus, Medal, Book, Smile } from 'lucide-react';


function App() {
  const amenities = [
    { icon: <Wifi className="w-8 h-8" />, title: 'High-Speed WiFi', description: 'Stay connected with blazing fast internet' },
    { icon: <Coffee className="w-8 h-8" />, title: 'Free Food & Drinks', description: 'Keep energized throughout the event' },
    { icon: <Gift className="w-8 h-8" />, title: 'Swag Kits', description: 'Exclusive merchandise for all participants' },
    { icon: <Code2 className="w-8 h-8" />, title: 'Workshop Access', description: 'Learn from industry experts' },
    { icon: <Bed className="w-8 h-8" />, title: 'Accommodation', description: 'Comfortable stay for all participants' },
    { icon: <Bus className="w-8 h-8" />, title: 'Transportation', description: 'Hassle-free commute options for attendees' },
    { icon: <Medal className="w-8 h-8" />, title: 'Awards & Recognition', description: 'Get rewarded for your outstanding efforts' },
    { icon: <Smile className="w-8 h-8" />, title: 'Networking Opportunities', description: 'Connect with like-minded individuals' },
];


  return (
    <div className="min-h-screen bg-black-dark text-white bg-grain-texture bg-cover bg-fixed">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <ParticlesBackground />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 text-[#fff] bg-clip-text">
            CodeWizard <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">2025</span>
          </h1>
          <p className="text-xl mb-12 text-gray-300">
            36 Hours of Innovation, Creativity, and Code
          </p>
          <div className="mb-12">
            <CountdownTimer />
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
            Register Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About CodeWizard" className="bg-[#070707]">
        <div className="max-w-3xl mx-auto text-center text-gray-300">
          <p className="mb-6">
            Join us for an unforgettable weekend of coding, creativity, and collaboration. 
            CodeWizard brings together the brightest minds in technology to solve real-world problems.
          </p>
          <p>
            Whether you're a seasoned developer or just starting your coding journey, 
            CodeWizard offers an inclusive environment for learning and innovation.
          </p>
        </div>
      </Section>

      {/* Amenities Section */}
      <Section id="amenities" title="What We Offer" className="bg-black-dark">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item, index) => (
            <div key={index} className="p-6 bg-black-light rounded-xl backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-[#dbe2e7] mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <PrizePool />
      <ProblemStatementsSection />
      <SponsorsSection />
      <MentorsSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;