import React from 'react';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

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
        <div className="grid md:grid-cols-4 gap-8">
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
            <h4 className="text-lg font-semibold text-white mb-4">Venue</h4>
            <div className="text-gray-400 space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>
                  SRM Institute of Science and Technology
                  <br />
                  NCR Campus, Ghaziabad
                  <br />
                 Meerut Road, Modinagar
                 <br />
                 Uttar Pradesh 201204
                </p>
              </div>
              
              <div className="mt-4">
                {/* Add iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.3260168700413!2d77.538654!3d28.799356999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf51f5aadb701%3A0x39add03eb3926d26!2sSRM%20Institute%20of%20Science%20and%20Technology%20NCR%20Campus!5e0!3m2!1sen!2sin!4v1734777258644!5m2!1sen!2sin"
                  
                  style={{borderRadius: 15 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SRMIST Location"
                ></iframe>
              </div>
            </div>
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
