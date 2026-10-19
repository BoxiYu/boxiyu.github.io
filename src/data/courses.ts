/**
 * Interactive lecture notes for CUHK–Shenzhen courses, shown on the homepage
 * "Courses" section and the Teaching page. Each course is taught by its own
 * instructor; the notes and videos are co-designed with Boxi Yu. Lecture
 * titles follow the published sites under https://boxi-cs.github.io/.
 */
export const featuredCourses = [
  {
    id: 'aie1001',
    code: 'AIE1001',
    name: 'Introduction to AI Programming',
    level: 'Introductory · Python',
    term: 'CUHK–Shenzhen',
    instructor: 'Prof. Pinjia He',
    instructorHref: 'https://pinjiahe.github.io/',
    official: '',
    summary:
      'From number systems to recursion, classes, and data structures, ending with how large language models work. Step through what Python does in memory, predict each output before it appears, and finish every lecture with a self-check.',
    detail: 'Notes and 3–4 short videos per lecture',
    href: 'https://boxi-cs.github.io/aie1001/',
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
    firstLecture: 1,
  },
  {
    id: 'csc4801',
    code: 'CSC4801',
    name: 'AI-assisted Software Engineering',
    level: 'Advanced · Coding agents',
    term: 'CUHK–Shenzhen · Fall 2026',
    instructor: 'Jinsheng Ba',
    instructorHref: '',
    official: 'https://sra-research.github.io/CSC4801/',
    summary:
      'How LLMs and agents work, then how to use them across the software lifecycle: prompts, MCP and skills, requirements, coding, and team collaboration. Step through the agent loop, prompts, and tool calls, then try each step with a coding agent of your own.',
    detail: 'Notes and videos, released with the lectures',
    href: 'https://boxi-cs.github.io/csc4801/',
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
    firstLecture: 0,
  },
] as const;
