---
title: "CrushFTP Unauthenticated Remote Code Execution"
date: "2023-11-16T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/crushftp-unauthenticated-remote-code-execution"
category: "Vulnerability Research"
tags:
  - "Vulnerability Research"
  - "Java"
  - "CrushFTP"
description: "In August, I reported an unauthenticated root-level remote code execution vulnerability chain affecting CrushFTP 10.5.0. The vulnerability was rapidly patched, and the maintainer stated that all existing CrushFTP versions were found to be vulnerable."
---

In August, I reported an unauthenticated root-level remote code execution vulnerability chain affecting CrushFTP 10.5.0. The vulnerability was rapidly patched, and the maintainer stated that all existing CrushFTP versions were found to be vulnerable. 

This blog post is published on the [Converge Technology Solutions Cybersecurity blog](https://convergetp.com/2023/11/16/crushftp-zero-day-cve-2023-43177-discovered/).

The proof-of-concept remote code execution exploit I wrote for CrushFTP 10.5.0 in the default configuration can be found [here](https://github.com/the-emmons/CVE-2023-43177).
