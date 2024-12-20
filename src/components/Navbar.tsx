import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#judges', label: 'Judges' },
    { href: '#mentors', label: 'Mentors' },
    { href: '#team', label: 'Team' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-[#dbe2e7]">
            CodeWizard
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#dbe2e7] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition-colors">
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-[#dbe2e7] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full mt-4 transition-colors">
              Register Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}