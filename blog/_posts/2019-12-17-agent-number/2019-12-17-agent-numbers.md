---
layout: post
title: Public Agent Numbers
description: Introducing the official viky.ai Numbers agent 
author: Patrick Constant
avatar: patrick-constant.jpg
image: /blog/2019/12/17/2019-12-17-agent-numbers/agent_numbers.png
---

This is the first of a long series of articles in which we will review officially supported agents.

What do "Your flight will land on December 24", "I'm selling this table for fifteen dollars" and "We served hundreds of customers today" have in common? The answer is that their most important information is conveyed by numbers.

Today, I want to share with you the **[Numbers agent](https://www.viky.ai/agents/viky/numbers)**  who is dedicated to understanding this type of sentence.

<!--keep reading-->

![Illustration of the Numbers agent](agent_numbers.png "The Numbers agent")

Numbers are very common in texts. We find them in different contexts such as dates, quantities, financial data, weather indicators, etc. They are often an essential element in understanding the meaning of a sentence.

We find numbers essentially in two different forms: cardinal and ordinal. Each of these forms can be expressed in two ways:

* using digits, such as **23**
* using letters, such as **twenty-three**

## Digit numbers

Digit numbers are already a challenge in themselves because they can have different formats. These formats are used for readability, and they have two main characteristics:

* Thousand separators
* Decimal separators

The tricky thing is that these separators depend on the country in which they are used.

* Thousand separators can be spaces, comas, dots or even quotes
* Decimal separators can be coma or dot

Of course, they do not combine very well together, and these combinations depend on the different countries in which they are used. The main formats are as follows:

* **120 000 000.90** or **120,000,000.90**: that format is used in the U.S. and most English speaking countries, as well as some other countries;
* **120 000 000,90** or **120.000.000,90**: that format is used in most European countries that do not speak English;
* **120'000'000.90**: that format is mostly used in Switzerland!

viky.ai does its best to recognize all numbers in any format, whether or not a language is specified in the request.

We decided to keep the parsing of these numbers internally using the Number annotation type.

## Letter numbers

Letter numbers are numbers that are written with words and therefore letters. They depend on the language. Currently, the **Numbers** agent works in two languages:

* English
* French

Here are a few letter numbers:

* twenty (20)
* two hundred and forty-two (242)
* one hundred and sixty thousand four hundred and thirty-two (160432)
* two hundred fifty billion three hundred twenty million one hundred sixty thousand four hundred thirty-two (250320160432)

## Ordinal numbers

Numbers can be expressed in many other ways. They can be very fuzzy, for example, what do we do with the following examples?

* thousands of people
* tens of thousands of people
* hundreds of millions of people
* many thousands of people

viky.ai handles that as well!

The Numbers agent is an excellent elementary brick for any task requiring understanding numbers in any form.

We encourage you to tests those sentences in the [Numbers agent](https://www.viky.ai/agents/viky/numbers)'s console, and let us know what you think. If you find a bug or have suggestions for this bot do not hesitate to open an [issue on Github](https://github.com/viky-ai/viky-ai/issues/new?labels=Agent+issue&template=3-agent-issue.md). 

Have fun!
