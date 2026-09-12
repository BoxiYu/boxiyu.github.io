# Scholar publication reconciliation

Source profile: https://scholar.google.com/citations?user=Tat3jMQAAAAJ&hl=en
Checked: 2026-09-12. All 22 profile rows were expanded and reviewed.

## Deduplication

The profile lists three versions of arXiv:2501.10711: the original 274-benchmark
survey, the 572-benchmark revision, and the ICML position paper. Keep the existing
`cao2025` record and citation anchor for this single work. The website therefore
contains 20 distinct works after adding nine missing records, rather than copying
all 22 Scholar rows. No changes were made to the Scholar profile itself.

## Added records and primary metadata sources

| Key              | Source                                       | Status                             |
| ---------------- | -------------------------------------------- | ---------------------------------- |
| fang2026openrca  | https://arxiv.org/abs/2606.27154             | 2026 preprint                      |
| zhang2025cleanet | https://arxiv.org/abs/2510.22619             | 2025 preprint                      |
| lin2026agenteval | https://arxiv.org/abs/2607.06873             | 2026 preprint                      |
| xu2026bespec     | https://arxiv.org/abs/2607.02949             | 2026 preprint                      |
| cao2026omnifocus | https://arxiv.org/abs/2607.03050             | 2026 preprint                      |
| li2026trace      | https://arxiv.org/abs/2607.16242             | 2026 preprint                      |
| zheng2026adr     | https://arxiv.org/abs/2605.31058             | 2026 preprint                      |
| yu2026rt4chart   | https://arxiv.org/abs/2603.27752             | 2026 preprint                      |
| yu2021maskgan    | https://doi.org/10.1016/j.neucom.2021.02.045 | Neurocomputing 441, 192-201 (2021) |

The eight arXiv records use full authors in citation-author order, exact titles,
publication years, paper URLs, and abstracts from their abstract pages. Formatting
commands in abstracts are converted to plain text. No conference acceptance is
inferred. Preserve the spelling of author names in each source record.

The Mask-guided GAN record was checked against the Scholar article detail and
Crossref title, full authors, DOI, journal, volume, pages, and year. Its source
abstract in Scholar is truncated, so it is not imported as a complete abstract.

RT4CHART is included among selected works and linked from the research map; the
other additions have contextual summaries in Research and full publication
records. The new news item is dated as a website update, not as paper acceptance.
Citation counts are deliberately not stored because they change over time.
