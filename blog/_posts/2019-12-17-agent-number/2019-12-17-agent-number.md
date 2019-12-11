---
layout: post
title: Public Agent Numbers
description: Recap of Patrick Constant talk at Paris Voice Tech
author: Patrick Constant
avatar: patrick-constant.jpg
image: /blog/2019/12/17/2019-12-17-agent-number/agent_numbers.jpg
---

This is the first in a long series of articles in which we will review the set of officially supported agents.

The first agent I want to share with you today is the **[Numbers](https://www.viky.ai/agents/viky/numbers)** agent.

<!--keep reading-->

![the image of the agent number](agent_numbers.jpg "The Numbers agent")

Numbers are very common in texts. They are also very easy to understand and recognize.

Numbers come basically in two different forms:

* using digits, such as **23**
* using letters, such as **twenty-three**

## Digit numbers

Digit numbers are already a challenge in themselves because they can have different formats. Those formats are used for readability, and they involve mostly two features:

* Thousand separators
* Decimal separators

And the funny thing is that those separators depend upon the country they are used.

* Thousand separators can be spaces, comas, dots, or even quotes
* Decimal separators can be coma or dot

Of course, they do not combine very well together, and these combinations depend on the different countries in which they are used. The main formats are the following:

* **120 000 000.90** or **120,000,000.90**: that format would be used in the U.S. and most English speaking countries, as well as some other countries;
* **120 000 000,90** or **120.000.000,90**: that format would be used in most European countries that do not speak English;
* **120'000'000.90**: that format is mostly used in Switzerland!

viky.ai is making a best effort to recognize all numbers in any formats, whether some language is specified in the request or not.

We have decided to keep the parsing of those numbers internally (we use regexes). But maybe you could create an agent using only regexes, that could do the same thing. In any case, it would be a good exercise !


## Letter numbers

Letter numbers are numbers that are written with words and thus letters. They depend upon the language. Currently, the **Numbers** agent is working on two languages:

* English
* French

Here are a few letter numbers:

* twenty (20)
* two hundred and forty-two (242)
* one hundred and sixty thousand four hundred and thirty-two (160432)
* two hundred fifty billion three hundred twenty million one hundred sixty thousand four hundred thirty-two (250320160432)

Many other languages can be added with the following rule: add the new language in this agent (by creating a copy) and then share the results with us. We most certainly will add the new language to the viky.ai Numbers agent.

## Other numbers

But numbers can be expressed in many other ways. They can be very fuzzy, for example what do we do with the following examples?

* thousands of people
* tens of thousands of people
* hundreds of millions of people
* many thousands of people

viky.ai handles that as well! And we encourage you to tests those sentences in the console of the [Numbers agent](https://www.viky.ai/agents/viky/numbers), and tell us what you think.

Have fun !