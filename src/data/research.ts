export const researchGroups = [
  {
    id: 'coding-agents',
    title: 'Evaluating coding agents',
    question: 'What does a passing benchmark establish?',
    description: 'Strengthening tests and examining the reliability of benchmark results.',
    projects: ['swe-abs', 'utboost'],
    related: [{ name: 'Benchmark design', href: '/publications/#cao2025' }],
  },
  {
    id: 'test-oracles',
    title: 'Constructing test oracles',
    question: 'How can we test without a known answer?',
    description: 'Using relations between programs and executions to detect inconsistencies.',
    projects: ['retromorphic-testing'],
    related: [],
  },
  {
    id: 'ai-systems',
    title: 'Testing AI systems',
    question: 'Which changes should an AI system respond to?',
    description: 'Controlled transformations reveal errors in vision and language systems.',
    projects: ['rome', 'tin'],
    related: [{ name: 'MetaIC', href: '/publications/#yu2022automated' }],
  },
];

export const empiricalResearch = {
  id: 'aiops',
  title: 'AIOps & empirical evaluation',
  question: 'When is a simpler model enough?',
  description: 'Studying accuracy, preprocessing, and computational cost in log anomaly detection.',
  projects: ['lightad'],
  related: [],
};
