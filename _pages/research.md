---
layout: page
permalink: /research/
title: Research
description: † denotes equal contribution | * denotes corresponding authorship
years: [2026, 2025]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publication">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
