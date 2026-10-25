/**
 * A compact reference to the Pacific Studio products featured on the public
 * Pacific Studio site. Keeping this in one place lets the homepage and the
 * products page present the same names, links, and lifecycle labels.
 */
export const pacificProducts = [
  {
    id: 'openase',
    name: 'OpenASE',
    verb: 'Build',
    status: 'Released',
    description:
      'Issue-driven orchestration for the full software lifecycle, with Claude Code, Codex, and Gemini CLI working across design, development, testing, and deployment.',
    detail: 'Open source · Go · multi-agent',
    href: 'https://github.com/PacificStudio/openase',
    cta: 'View on GitHub',
  },
  {
    id: 'veriformal',
    name: 'VeriFormal',
    verb: 'Prove',
    status: 'Released',
    description:
      'AI-assisted formal verification that generates proof obligations from source code and checks the proofs by machine, with an offline workflow for C, Java, Dafny, and Rust.',
    detail: 'Formal methods · no egress',
    href: 'https://veriformal.pacificstudio.ai/',
    cta: 'Start verifying',
  },
  {
    id: 'keylight',
    name: 'KeyLight',
    verb: 'Understand',
    status: 'Beta',
    description:
      'An interactive paper reader that combines layout-aware parsing, sentence-level highlights, bilingual reading, and answers that point back to the source.',
    detail: 'PDF reader · research workflow',
    href: 'https://keylight.pacificstudio.ai/',
    cta: 'Try the beta',
  },
] as const;
