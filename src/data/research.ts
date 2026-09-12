export const researchGroups = [
  {
    id: 'coding-agents',
    title: 'Evaluating coding agents',
    question: 'What does a passing benchmark establish?',
    description: 'Strengthening tests and examining the reliability of benchmark results.',
    projects: ['swe-abs', 'utboost'],
    related: [
      { name: 'BeSpec', href: '/publications/#xu2026bespec' },
      { name: 'Code RLVR synthesis', href: '/publications/#zheng2026adr' },
      { name: 'Benchmark design', href: '/publications/#cao2025' },
    ],
  },
  {
    id: 'test-oracles',
    title: 'Constructing test oracles',
    question: 'How can we test without a known answer?',
    description: 'Using relations between programs and executions to detect inconsistencies.',
    projects: ['rt4chart', 'retromorphic-testing'],
    related: [],
  },
  {
    id: 'ai-systems',
    title: 'Testing AI systems',
    question: 'Which changes should an AI system respond to?',
    description: 'Controlled transformations reveal errors in vision and language systems.',
    projects: ['rome', 'tin'],
    related: [
      { name: 'AgentEval', href: '/publications/#lin2026agenteval' },
      { name: 'TRACE', href: '/publications/#li2026trace' },
      { name: 'MetaIC', href: '/publications/#yu2022automated' },
    ],
  },
];

export const empiricalResearch = {
  id: 'aiops',
  title: 'AIOps & empirical evaluation',
  question: 'When is a simpler model enough?',
  description:
    'Studying causal evaluation, data contamination, and efficiency in operational AI systems.',
  projects: ['lightad'],
  related: [
    { name: 'OpenRCA 2.0', href: '/publications/#fang2026openrca' },
    { name: 'CLEANet', href: '/publications/#zhang2025cleanet' },
  ],
};
