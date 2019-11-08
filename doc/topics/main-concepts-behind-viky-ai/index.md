---
layout: doc
title: "Main concepts behind viky.ai"
description: "We discuss here the main concepts behind viky.ai : NLP, Semantic solution, Agent, interpretation, ..."
image: site_assets/img/social.jpg
order: 200
---

We discuss here the main concepts behind viky.ai. If the terms "NLP", "Semantic solution", "agent", "interpretation", "formulation", "Entity" do not tell you anything, it is completely normal. We hope that reading this documentation will help you to clarify these terms, in order to understand viky.ai.

## NLP

NLP means Natural Language Processing. You can look it up [dedicated Wikipedia page](https://en.wikipedia.org/wiki/Natural_language_processing).

viky.ai is indeed a Natural Language Processing platform as it helps you analyse natural langage texts.

But what does exactly "natural langage texts" mean in essence?

A natural language text is in a text written in English, German, French, or any human language, as opposed to artificial languages, such as programming languages.


## Text analysis and semantic solution

What do we want to get when we analyse a text?

Well, it depends really on what is our goal. For example, with the following text:

> In november 2019, Google bought Fitbit for $2.1 billion

* we might want to extracts only dates or money amounts,
* or we might want to extract company names,
* or we might want to get information about companies buying other companies.

The result of the analysis will then be very different. This is what we call a **semantic solution**.

viky.ai's goal is to help you create text analysis processes that will provide you with **semantic solutions**.

We call such text analysis processes an **agent**.


## Agents

**Agents** are processes that analyse a text and provide you with a **semantic solution** for this text (or several **semantic solutions** in some cases).

Let us take a simple example : with the text "twenty three", we would like the agent to get the number 23. In essence you have transformed a text into a data that can be further processed by a computer.

On this example, you can achieve independance from the natural language, as you can get the same result with "vingt trois" (French), or any other naturel language expression of a number.

Now we will further description the concepts used to build **agents**.


## Interpretations and formulations

**Interpretations** are the building blocks of **agents**, they can be combined together, and the resulting combination is also an **interpretation**.

An **agent** is a set of **interpretations** that can be combined together.

An **interpretation** is defined as a list of **formulations**, those **formulations** are the different ways of expressing the **interpretation**.

For example, we can build an **interpretation** that will represent the different ways of expressing the verb "be" (here, only a sample):

* am
* is
* was
* be

In that case, the "be" **interpretation** is made of the "am", "is", "was" and "be" **formulations**.

An agent can contain only one **interpretation**. But contrary to an **interpretation**, an **agent** is the process that can be called by any other processes within viky.ai or outside viky.ai.

Let us say that we have created an **agent** "to be" that contains the "be" **interpretation**, then we are able to call this agent from any computer program.

So, if we submit the text "the cat is white" to the "to_be" **agent**, this agent will return the "be" **interpretation**. In that case, it will have recognized only the word "is" in the sentence.


## Formulations and semantic solutions

Most of the time, we want to get more information out of the analysis of the **agent**: we know which interpretation has been found by the agent, but we want to know more.

For example, if we have an agent "colours" that recognizes colours, we would like to get the RGB version of the colour, and not only the fact that it is a colour.

For this, we can create an **interpretation** for each color and create a **formulation** for each way this color is expressed. Let's say we create the "yellow" **interpretation**, it will have a "yellow" **formulation** and a "jaune" **formulation** (French for yellow), and we will attach the semantic solution `#FFFF00`which is the RBG encoding of this colour.

Thus if the text is "the cup is yellow", the colour agent will return the following **semantic solution**: `#FFFF00`.

<aside class="primary">
  <p>
    In the viky.ai framework, we often abbreviate <strong>semantic solution</strong> into
    <strong>solution</strong>.
  </p>
</aside>


## Entities

**Entities**, which are also called **named entities**, are words that have some information attached to them. For example "Emmmanuel Macron" can have the information "French president" attached to it.

You can see that somehow "Emmmanuel Macron" can be a **formulation** and "French president" can be a **semantic solution**, but in most cases, we want to massively import **entities**, with their specific solutions.

Entities list, are usually large lists of words or expressions with some information attached to them.

This why those specific **interpretations** are called **entities**.


## Combining interpretations

**Interpretations** can be combined together. This combination mechanism is the cement of the bricks which are the **agents**.

The combinations are based upon the text which the **interpretation** will analyse. Let us say we have an **entities list** containing a list of kitchen objects such as a "cup" and an **interpretation** that represents all the colors.

If we want to analyse "a red cup", we would create an **interpretation** with a **formulation** "red cup" and we would say that "red" is represented by the color **interpretation** and "cup" is represented by the kitchen objects **entities list**. Then this **interpretation** will be able to understand all the combination between a color and a kitchen object, such as "black fork", etc.

Thus we can see that with one single combination, we can achieve the analysis of many possible sentences. This combinatory power is the reflexion of the combinatory nature of the human language.

<aside class="primary">
  <p>
    When we have thus created a combination, there is another mechanism that can also combine the solutions coming from the two <strong>sub-interpretations</strong> into another more complex semantic solution.
  </p>
  <p>
    When two interpretations are combined together, they cannot overlap on the text.
  </p>
</aside>


## Combining agents

**Agents** have two types of **interpretations**:

* **public interpretations**, which can be used by any other **agents** (or any program outside of viky.ai)
* **private interpretations**, which are used only within the **agent**

Thus, to combine two **agents** together, it is only necessary to combine a **public interpretation** of an agent within any interpretation of the other **agent** whether private or public.


## Independence from the natural languages

A good property that we want to achieve is that the semantic solution does not contain information that is dependant upon the natural languages. It is not mandatory, and in some case, it can even be good to have words from the text into the solution, but it is still a good property to achieve.

In our example with the text "twenty three", we obviously obtain that property when the solution is the number "23".

In other cases such as the kitchen objects, we could attach to each object a string that is independant from the language and that represents the object. For example "tasse" (French) and "cup" (English) will both have a solution "#cup" for example, that will represent the concept of a cup.




