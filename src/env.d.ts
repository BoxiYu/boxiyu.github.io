/// <reference types="astro/client" />
declare module 'bibtex-parse-js' {
  export interface BibEntry {
    citationKey: string;
    entryType: string;
    entryTags: Record<string, string>;
  }
  export function toJSON(input: string): BibEntry[];
  export function toBibtex(input: BibEntry[]): string;
}
