/**
 * Interactive lecture notes, shown on the homepage "Courses" section and the
 * Teaching page, ordered from a first program to coding agents. Boxi Yu
 * teaches Data Structures with Yintong Huo; AIE1001 and CSC4801 are
 * CUHK–Shenzhen courses taught by their own instructors, with notes and
 * videos co-designed by Boxi Yu. Lecture titles follow the published sites
 * under https://boxi-cs.github.io/.
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
  unit: 'lectures' | 'chapters';
  firstLecture: number;
  lectures: string[];
  /** Lecture numbers whose notes are still being written. */
  inPreparation?: number[];
  tone: 'blueberry' | 'teal' | 'strawberry';
}

export const featuredCourses: Course[] = [
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
