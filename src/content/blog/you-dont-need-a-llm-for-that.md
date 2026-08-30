---
title: "You don't need a LLM for that"
description: 'ASD.'
pubDate: 'Aug 29 2026'
heroImage: '../../assets/blog-placeholder-3.jpg'
author: 'James Tognola'
---

**We see so many instances of businesses outsourcing problems to LLMs, that used to be solved with a straight-forward algorithm and good system design.**
I am not referring to using LLMs for development assistance or for generating code, which I find incredibly productive and
useful, but tasks that used to be solved in a room with a whiteboard and a good conversation. Things like classification,
structuring data, data extraction, financial analysis, and more. LLMs can be very good for these tasks but quite often are
overkill.

Over the past few years:
1. I've spoken to many "SaaS" companies that act as middle men to LLMs, charging businesses to use their
APIs or Apps that just use an API to an LLM.
2. Worked with engineers who have used LLMs for tasks that could be programmed, instead are sent to
ChatGPT's API with a prompt.
3. I've started growing tired of seeing platforms that provide AI slop as a feature because it is an
impressive marketing tool or a buzz word for their shareholders.

Specifically, my resentment hides in engineers outsourcing core features to an API that, to them, magically solves a problem.

> Using a hammer to crack a walnut.

More and more businesses succumb to the temptation of rapid delivery by
outsourcing more complicated matters to LLMs, then to realise the long term cost implications. For an initial MVP,
or trial to test the market this can be incredibly efficient and cost effective. For existing solutions or scaling platforms,
this can be a death sentence.

> You are outsourcing your data, IP, and thinking to a separate business built from learning from data.

I am not alone with this problem, m<>

> An example

We've all seen businesses that have popped up that can turn <>

An example of a business I worked with sent data straight to ChatGPT's APIs to return information from every email,
and also the attachments. EXPLAIN MORE ABOUT THIS, BE MORE CONCRETE. A more efficient solution would've been to classify,
use an OCR, some regex and then use an SLM to create this structured data. The pipeline, in an efficient system, would look
similar to `Unstructued Data > Classification > OCR > Regex > SLM > Structured Data`.

The only explanations I find to this are:

- We don't have the knowledge or resource;
- We don't have the time;
- And we don't have the budget;

This isn't good programming nor system design. This is a short term solution that will come back to bite you in the long run: long-term costs;
and a feature that will continue to rise in cost. In fact, these same developers will often have conversations around model performance
(which in reality, in features like this, ten to only be about a 1% improvement in success rates).

Over the coming months I've decided to dedicate some time to produce real world examples of these systems and how to build them more efficiently. I will provide some guides and simple libraries in realation that will be consumeable from a high-level but also avoid abstracting the "brains" out of these concepts.

This isn't going to be anti-AI or LLM, just a right-sizing approach to these problems.

My first article in this series will be about recommendations, based off of real enterprise experience and conversations.