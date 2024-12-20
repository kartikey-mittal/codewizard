import React from 'react';
import { Section } from '../Section';
import { FAQItem } from './FAQItem';

const faqs = [
  {
    question: "What's the registration deadline?",
    answer: "Registration closes 48 hours before the event starts. Early registration is recommended as spots are limited.",
  },
  {
    question: "Do I need to have a team?",
    answer: "No, you can register individually! We'll have team formation activities at the start of the event.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, and any personal items you'll need. We'll provide food, drinks, and a comfortable workspace.",
  },
  {
    question: "Is there a participation fee?",
    answer: "No, participation is completely free! All meals, swag, and resources are provided by our sponsors.",
  },
  {
    question: "What skill level is required?",
    answer: "All skill levels are welcome! We have mentors to help you learn and grow throughout the event.",
  },
];

export function FAQSection() {
  return (
    <Section id="faq" title="Frequently Asked Questions">
      <div className="max-w-2xl mx-auto bg-gray-800/50 rounded-xl p-6">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </Section>
  );
}