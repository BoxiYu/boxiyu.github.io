---
layout: page
permalink: /talks/
title: Talks
description: 
nav: true
nav_order: 4
---


<!-- pages/talks.md -->
<div class="talks">
  <style>
    table.table-borderless {
      border: none !important;
    }

    table.table-sm {
      font-size: 12px !important;
      padding: 0.2rem !important;
    }
  	th {
    	font-weight: normal !important;
  	}
  	th[scope="row"], td:first-child {
    	width: 72px;  /* 自动适应内容宽度 */
    	white-space: nowrap !important; /* 禁止换行 */
  	}
  	th[scope="row"], td:last-child {
    	padding-left: 5px;  /* 向右移动 10px */
  	}
  </style>

{% if site.talks != blank -%} 
<div class="table-responsive">
    <table class="table table-sm table-borderless">
    {%- assign talks = site.talks | reverse -%} 
    {% for item in talks %} 
    <tr>
        <th scope="row">  
        	{{ item.date | date: "%b %-d," }}<br>
  			{{ item.date | date: "%Y" }}
        </th>
        <td>
        {% if item.inline -%} 
            {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
        {%- else -%} 
            <a class="talks-title" href="{{ item.url | relative_url }}">{{ item.title }}</a>
        {%- endif %} 
        </td>
        <td>
        {% if item.place -%} 
            <span class="talks-place">{{ item.place }}</span>
        {%- endif %} 
        </td>
    </tr>
    {%- endfor %} 
    </table>
</div>
{%- else -%} 
<p>No talks so far...</p>
{%- endif %} 
</div>
