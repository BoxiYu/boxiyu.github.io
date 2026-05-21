---
layout: page
permalink: /publications/
title: Publications
# description: publications grouped by research topic, newest first within each group.
topics:
  - label: "Trustworthy AI"
    key: "TrustworthyAI"
  - label: "Code Agents"
    key: "CodeAgents"
  - label: "AIOps"
    key: "AIOps"
  - label: "Automated Testing"
    key: "AutomatedTesting"
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for t in page.topics %}
  <h2 class="year">{{ t.label }}</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[topic={{ t.key }}]* %}
{% endfor %}

</div>
