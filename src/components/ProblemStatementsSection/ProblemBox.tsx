import React, { useState } from 'react';
import { Lock, Unlock } from 'lucide-react';

interface ProblemBoxProps {
  title: string;
  description: string;
  isLocked: boolean;
  onToggle: () => void;
}

export function ProblemBox({ title, description, isLocked, onToggle }: ProblemBoxProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (!isLocked) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div 
      className={`
        border border-gray-700 rounded-lg p-4 transition-all duration-300
        ${isLocked ? 'bg-gray-800/30' : 'bg-gray-800/50 hover:bg-gray-800/70 cursor-pointer'}
        ${isExpanded ? 'ring-2 ring-purple-500' : ''}
      `} style={{backgroundColor: 'rgba(1, 1, 7, 0.5)'}}
    >
      <div className="flex items-center justify-between" onClick={isLocked ? onToggle : handleClick}>
        <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
        <button 
          className={`p-2 rounded-full transition-colors ${isLocked ? 'text-gray-500' : 'text-[#dbe2e7]'}`}
          onClick={(e) => {
            e.stopPropagation();
            if (isLocked) onToggle();
          }}
        >
          {isLocked ? <Lock className="w-5 h-5" /> : <Unlock className="w-5 h-5" style={{color:"#46c25c"}}/>}
        </button>
      </div>
      <div 
        className={`
          overflow-hidden transition-all duration-300
          ${isExpanded ? 'mt-4 max-h-48' : 'max-h-0'}
        `}
      >
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
