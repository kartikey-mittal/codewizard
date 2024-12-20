import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 last:border-0">
      <button
        className="w-full py-4 flex items-center justify-between text-left hover:text-[#dbe2e7] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
}