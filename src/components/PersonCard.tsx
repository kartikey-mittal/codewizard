import React, { useState } from 'react';
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="bg-[#12151d] rounded-xl shadow-lg p-6 backdrop-blur-sm hover:scale-105 transition-transform" style={{ border: "1px solid #2f2e31" }}>
      <div className="flex items-center gap-4">
        {/* Image Section */}
        <div className="w-1/2 relative" style={{ backgroundColor: 'transparent' }}>
          <div
            className={`w-full h-full rounded-md ${isLoaded ? 'hidden' : 'bg-gray-700 animate-pulse'}`}
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover rounded-md ${isLoaded ? 'block' : 'hidden'}`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsError(true)}
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