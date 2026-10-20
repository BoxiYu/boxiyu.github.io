/**
 * Interactive lecture notes, shown on the homepage "Courses" section and the
 * Teaching page, ordered from AI literacy for everyone, through a first
 * program, to coding agents. Boxi Yu designed AI for All (AI 通识课) and
 * teaches Data Structures with Yintong Huo; AIE1001 and CSC4801 are
 * CUHK–Shenzhen courses taught by their own instructors, with notes and
 * videos co-designed by Boxi Yu. Lecture titles follow the published sites
 * under https://boxi-cs.github.io/ and https://boxi-ai.github.io/.
 */
export interface Course {
  id: string;
  /** Large label on the card band; aria-hidden, the heading carries the name. */
  badge: string;
  name: string;
  level: string;
  context: string;
  /** Leading word for the people line, e.g. "Instructor". */
  role: string;
  people: { name: string; href?: string }[];
  official?: string;
  summary: string;
  detail: string;
  href: string;
  unit: 'lectures' | 'chapters' | 'modules';
  firstLecture: number;
  lectures: string[];
  /** Module codes (e.g. "C1") used as the label and URL path instead of L01, L02, … */
  lectureIds?: string[];
  /** Lecture numbers whose notes are still being written. */
  inPreparation?: number[];
  tone: 'moss' | 'blueberry' | 'teal' | 'strawberry';
}

export const featuredCourses: Course[] = [
  {
    id: 'ai-for-all',
    badge: 'AI 通识课',
    name: 'AI Literacy for Everyone',
    level: 'Open course · No coding',
    context: 'Open course in Chinese and English',
    role: 'Designer',
    people: [{ name: 'Boxi Yu' }],
    summary:
      'Eight shared modules on using AI, checking what it says, and knowing when not to use it, with tracks for K12, university, working adults, seniors, and teachers. The core module, C4, teaches how to check AI: it makes mistakes, so learn to catch them.',
    detail: 'Notes, 3–5 minute videos, and interactive pages per module',
    href: 'https://boxi-ai.github.io/ai-for-all/',
    unit: 'modules',
    firstLecture: 1,
    lectures: [
      "What AI is and isn't",
      'Data, models and hallucination',
      'Describing and delegating',
      "Checking AI's answers",
      'Safety, privacy, scams and deepfakes',
      'Fairness, ethics, society and work',
      'Agents: delegation and oversight',
      'When not to use AI',
    ],
    lectureIds: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'],
    tone: 'moss',
  },
  {
    id: 'aie1001',
    badge: 'AIE1001',
    name: 'Introduction to AI Programming',
    level: 'Introductory · Python',
    context: 'CUHK–Shenzhen',
    role: 'Instructor',
    people: [{ name: 'Prof. Pinjia He', href: 'https://pinjiahe.github.io/' }],
    summary:
      'From number systems to recursion, classes, and data structures, ending with how large language models work. Step through what Python does in memory, predict each output before it appears, and finish every lecture with a self-check.',
    detail: 'Notes and 3–4 short videos per lecture',
    href: 'https://boxi-cs.github.io/aie1001/',
    unit: 'lectures',
    firstLecture: 1,
    lectures: [
      'Computers and Number Systems',
      'Python Basics',
      'Flow Control',
      'Functions, Strings and Files',
      'Lists, Dictionaries and Tuples',
      'Recursion',
      'Objects and Classes',
      'Inheritance and Polymorphism',
      'Algorithm Analysis',
      'Stacks, Queues, Lists and Trees',
      'Large Language Models',
    ],
    tone: 'blueberry',
  },
  {
    id: 'data-structures',
    badge: 'Data Structures',
    name: 'Data Structures',
    level: 'Core · Python & Java',
    context: 'Python and Java versions',
    role: 'Instructors',
    people: [{ name: 'Boxi Yu' }, { name: 'Yintong Huo', href: 'https://yintonghuo.github.io/' }],
    summary:
      'The structures behind every program, from arrays and linked lists to search trees, hash tables, heaps, and graphs, with complexity and proof methods as the common language. Pick Python or Java: the concepts are shared, the code is in your language.',
    detail: 'Notes and four 8–10 minute videos in every chapter',
    href: 'https://boxi-cs.github.io/data-structures/',
    unit: 'chapters',
    firstLecture: 1,
    lectures: [
      'Complexity and Proof Methods',
      'Arrays and Linked Lists',
      'Linear Data Structures',
      'Recursion',
      'Trees and Binary Search Trees',
      'Sorted Maps and Balanced Search Trees',
      'Unsorted Maps and Hashing',
      'Heaps and Priority Queues',
      'Graphs and Graph Algorithms',
    ],
    tone: 'teal',
  },
  {
    id: 'csc4801',
    badge: 'CSC4801',
    name: 'AI-assisted Software Engineering',
    level: 'Advanced · Coding agents',
    context: 'CUHK–Shenzhen · Fall 2026',
    role: 'Instructor',
    people: [{ name: 'Jinsheng Ba' }],
    official: 'https://sra-research.github.io/CSC4801/',
    summary:
      'How LLMs and agents work, then how to use them across the software lifecycle: prompts, MCP and skills, requirements, coding, and team collaboration. Step through the agent loop, prompts, and tool calls, then try each step with a coding agent of your own.',
    detail: 'Notes and videos, released with the lectures',
    href: 'https://boxi-cs.github.io/csc4801/',
    unit: 'lectures',
    firstLecture: 0,
    lectures: [
      'Introduction',
      'The Principles of Large Language Models',
      'Principles of Agents',
      'Advanced Agents',
      'MCP & Skills',
      'How to Write a Prompt',
      'Requirements',
      'Requirements Exercise',
      'Coding I',
      'Coding II',
      'Team Collaboration',
    ],
    tone: 'strawberry',
  },
];
