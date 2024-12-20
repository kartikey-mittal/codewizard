import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

interface PersonCardProps {
  name: string;
  role: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

export function PersonCard({ name, role, image, social }: PersonCardProps) {
  return (
    <div className="bg-[#171717] rounded-xl shadow-lg p-6 backdrop-blur-sm hover:scale-105 transition-transform">
      <div className="flex items-center gap-4">
        {/* Image Section */}
        <div className="w-1/2">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-md" // Updated for slight border radius and full height
          />
        </div>
        {/* Name and Role Section */}
        <div className="w-1/2">
          <h3 className="text-xl font-semibold text-center text-white mb-1">{name}</h3>
          <p className="text-center text-gray-400 mb-4">{role}</p>
          {/* Social Icons */}
          {social && (
            <div className="flex justify-center gap-4">
              {social.github && (
                <a
                  href={social.github}
                  aria-label="GitHub"
                  className="text-white hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label="LinkedIn"
                  className="text-white hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  aria-label="Instagram"
                  className="text-white hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
