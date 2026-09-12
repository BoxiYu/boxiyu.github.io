export const site = {
  name: 'Boxi Yu',
  url: 'https://boxiyu.github.io',
  role: 'Senior Research Fellow at Lero, Ireland',
  email: 'boxi.yu@lero.ie',
  description:
    'Boxi Yu, Senior Research Fellow at Lero, Ireland. Research on software testing, trustworthy AI, and the evaluation of coding agents.',
  scholar: 'https://scholar.google.com/citations?user=Tat3jMQAAAAJ',
  github: 'https://github.com/BoxiYu',
  orcid: 'https://orcid.org/0000-0001-5213-7189',
};

export const projects = [
  {
    id: 'swe-abs',
    paper: 'yu2026sweabs',
    name: 'SWE-ABS',
    year: '2026',
    venue: 'ICML',
    question: 'What does a passing benchmark really prove?',
    summary:
      'Coverage- and mutation-driven test augmentation rejected 19.71% of previously passing patches in our evaluation of 30 agents on SWE-Bench Verified.',
    method:
      'SWE-ABS first uses program slicing to guide tests toward untested code, then uses plausible incorrect patches to generate adversarial tests that expose semantic blind spots.',
    finding:
      "The study strengthened tests for 50.2% of the 500 benchmark instances. The leading evaluated agent's success rate fell from 78.80% to 62.20%, and the previously top-ranked agent moved to fifth place. These figures describe the systems and benchmark evaluated in the paper.",
    links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2603.00520' }],
    topic: 'Coding agent evaluation',
  },
  {
    id: 'utboost',
    paper: 'yu2025utboost',
    name: 'UTBoost',
    year: '2025',
    venue: 'ACL',
    question: 'How rigorously do we evaluate coding agents?',
    summary:
      'Generated unit tests exposed 345 erroneous patches that had originally passed SWE-Bench evaluation, showing how test quality changes conclusions about coding agents.',
    method:
      'UTGenerator analyzes project code and dependencies to generate executable unit tests for real Python projects. UTBoost augments the benchmark test suites and re-evaluates agent patches against the stronger tests.',
    finding:
      'The study identified 36 instances with insufficient tests and 345 erroneous patches previously classified as passing. Re-evaluation changed 18 leaderboard positions on SWE-Bench Lite and 11 on Verified in the studied submissions.',
    links: [
      { label: 'ACL paper', href: 'https://aclanthology.org/2025.acl-long.189/' },
      { label: 'Code & test artifacts', href: 'https://github.com/CUHK-Shenzhen-SE/UTBoost' },
      {
        label: 'Verified dataset',
        href: 'https://huggingface.co/datasets/Bertsekas/SWE-Bench_Verified_UTBoost',
      },
    ],
    topic: 'Benchmark reliability',
  },
  {
    id: 'retromorphic-testing',
    paper: 'yu2023Retro',
    name: 'Retromorphic Testing',
    year: '2023',
    venue: 'arXiv',
    question: 'How do we test without a known answer?',
    summary:
      'A dual-program approach to constructing test oracles: transform an input, map the output back to the input domain, and check the resulting relation.',
    method:
      'Inspired by inverse functions, a forward program and a backward program connect inputs and outputs. An auxiliary program can serve either role, allowing a relation between the original and transformed inputs to reveal inconsistencies.',
    finding:
      'The paper develops three testing modes and illustrates applications to algorithms, traditional software, and AI systems. The relation depends on the programs and task; it does not require every pair of programs to be exact inverses.',
    links: [
      { label: 'Preprint', href: 'https://arxiv.org/abs/2310.06433' },
      { label: 'Code', href: 'https://github.com/CUHK-Shenzhen-SE/RetromorphicTesting' },
    ],
    topic: 'Automated testing',
  },
  {
    id: 'rome',
    paper: 'yu2023rome',
    name: 'ROME',
    year: '2023',
    venue: 'ISSTA',
    question: 'Can controlled image changes reveal captioning errors?',
    summary:
      'Object removal and inpainting create natural-looking image pairs for testing the consistency of image captions.',
    method:
      'ROME recursively removes and inpaints objects in an image, then compares the objects mentioned in captions before and after the transformation. This turns expected changes in image content into a metamorphic test oracle.',
    finding:
      'Across one commercial captioning API and four algorithms, the study reported 9,121 erroneous issues from 226 seed images, with precision ranging from 86.47% to 92.17%.',
    topic: 'Trustworthy AI',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2306.02228' },
      { label: 'Code', href: 'https://github.com/RobustNLP/TestIC' },
    ],
  },
  {
    id: 'tin',
    paper: 'yu2023tin',
    name: 'TIN',
    year: '2023',
    venue: 'ESEC/FSE',
    question: 'Can consistency checks both detect and repair NER errors?',
    summary:
      'Metamorphic relations across similar contexts and entities support automated testing and improvement of named entity recognition systems.',
    method:
      'TIN compares entity predictions across related contexts and entities, using inconsistencies to report errors and guide automatic repairs.',
    finding:
      'In the evaluation of two models and the Azure and AWS APIs, 702 of 784 manually inspected reports were confirmed as errors. Automatic repair reduced errors by 26.8% to 50.6% across the evaluated systems.',
    topic: 'Trustworthy AI',
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2308.07937' },
      { label: 'Code', href: 'https://github.com/RobustNLP/TestNER' },
    ],
  },
  {
    id: 'lightad',
    paper: 'yu2024LightAD',
    name: 'LightAD',
    year: '2024',
    venue: 'ICSE',
    question: 'When is a simpler model enough for log anomaly detection?',
    summary:
      'An empirical comparison of classical and deep learning approaches examines accuracy and computational cost across five log datasets.',
    method:
      'The study compares methods on HDFS, BGL, Spirit, Liberty, and Thunderbird. The accompanying LightAD toolkit combines preprocessing, deduplication, and automated model selection.',
    finding:
      'LightAD makes the trade-off between F1, training time, and inference time explicit in model selection. The comparison motivates evaluating classical baselines and preprocessing choices alongside deep learning models for log-based anomaly detection.',
    topic: 'AIOps',
    links: [
      { label: 'Paper', href: '/assets/pdf/LightAD.pdf' },
      { label: 'Code', href: 'https://github.com/BoxiYu/LightAD' },
    ],
  },
];
