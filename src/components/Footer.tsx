import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-800/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#dbe2e7] mb-4">CodeWizard</h3>
            <p className="text-gray-400">
              Join us in creating the future through code and innovation.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-[#dbe2e7]">About</a></li>
              <li><a href="#sponsors" className="text-gray-400 hover:text-[#dbe2e7]">Sponsors</a></li>
              <li><a href="#judges" className="text-gray-400 hover:text-[#dbe2e7]">Judges</a></li>
              <li><a href="#mentors" className="text-gray-400 hover:text-[#dbe2e7]">Mentors</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-[#dbe2e7] transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CodeWizard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}