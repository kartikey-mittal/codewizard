import React, { useState } from 'react';
import { Section } from '../Section';
import { ProblemBox } from './ProblemBox';

const problems = [
  {
    title: 'AI-Powered Healthcare Assistant',
    description: 'Design an AI system that helps medical professionals analyze patient data and suggest potential diagnoses based on symptoms and medical history.',
  },
  {
    title: 'Smart City Traffic Management',
    description: 'Create a solution that optimizes traffic flow in urban areas using real-time data from various sources to reduce congestion and improve emergency response times.',
  },
  {
    title: 'Sustainable Energy Monitor',
    description: 'Develop a platform that tracks and optimizes energy consumption in buildings, providing real-time analytics and suggestions for reducing carbon footprint.',
  },
  {
    title: 'Educational Resource Equalizer',
    description: 'Build a system that helps distribute educational resources fairly across different regions, considering factors like population density and existing infrastructure.',
  },
  {
    title: 'Supply Chain Optimizer',
    description: 'Create an intelligent system that predicts and prevents supply chain disruptions using machine learning and real-time monitoring.',
  },
];

export function ProblemStatementsSection() {
  const [unlockedProblems, setUnlockedProblems] = useState<number[]>([]);

  const toggleProblem = (index: number) => {
    setUnlockedProblems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Section id="problems" title="Problem Statements">
      <div className="grid gap-4 max-w-3xl mx-auto">
        {problems.map((problem, index) => (
          <ProblemBox
            key={index}
            title={problem.title}
            description={problem.description}
            isLocked={!unlockedProblems.includes(index)}
            onToggle={() => toggleProblem(index)}
          />
        ))}
      </div>
    </Section>
  );
}