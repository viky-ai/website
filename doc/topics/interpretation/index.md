---
layout: doc
title: "Interpretation"
description: "This section will introduce the interpretation concepts."
image: site_assets/img/social.jpg
order: 203
---

## What's an interpretation

## Has many formulations

### Keep order


It is possible to match an expression by respecting the order or not.
This can be interesting when the structure of the sentence is important, to match precisely, or, on the opposite, to have a very flexible match.

For example, for the numbers, the order is very important : hundred two is very different from two hundred, and in this case, the order must be kept.
On the opposite, when registering a reservation, the options can be given in an undefined order : "I want an hotel with a spa for christmas" is the very same thing as "I want an hotel for christmas with a spa"

This can be handled with the **keep order** annotation
This annotation has to be set by formulation and is covering a whole formulation

### Proximity

It can be very convenient to accept a few extra words in a formulation, as it can be very powerful to be very strict on the definition of what is accepted or not

For example : the sentences "I want cofee", "I want **a** cofee" and "I want **some** cofee" are exactly the same whereas no word must be accepted between "new" and "york" in the name of the "new york" city.

By default, the proximity is set to **close**

the possible values are :
* **glued**: no ewtra word is allowed
* **glued + punc**: only punctuation is allowed between 2 consecutive matched words
* **very close**: approximatively 1 word (8 letters) is allowed between 2 consecutive matched words
* **close**: approximatively 3 words (20 letters) are allowed between 2 consecutive matched words
* **far**: approximatively 8 words (50 letters) are allowed between 2 consecutive matched words

### Solution

### Annotations

#### Interpretation / Entities list

#### Type number

#### Type regexp

Sentences can most often times contain phrases that follow a certain pattern. Agents in viky.ai can be easily configured to understand such patterns with regexp.


