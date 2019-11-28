---
layout: doc
title: "Interpretation"
description: "This section introduce the interpretation concept."
image: site_assets/img/social.jpg
order: 202
---

What makes a sentence different from a simple group of words? It is mainly the structure that links words around certain rules to give meaning. In linguistics, this is called grammar. In viky.ai, we use this structure to match sentences to the idea they express. This mechanism is implemented through **interpretations**.


## What is an interpretation?

Interpretations are the building blocks of agents. As a matter of fact, an agent can be made of only one interpretation. Thus everything we have said about an agent can be said about an interpretation. However, creating an agent using only one interpretation is very limited as it would not use the main property of an interpretation: its ability to combine and be combined with other interpretations.

But in order to describe this ability to combine with other interpretation, we must first introduce and describe **formulations** as interpretations are simply a list of formulations, and thus the whole mechanism of combining interpretations is done within formulations.

You can view an interpretation as the description of an idea, and formulations as the different formulations of this idea.

Of course, since an interpretation can be a combination of other interpretation, the idea can be as complex as you want. We will see later how this combination is done.

Let us first examine formulations.


## What is a formulation?

In its simplest form, a formulation is a piece of text associated with a **semantic solution** (or more simply a **solution**). In essence, you are associating a text with your idea of it.

Your idea can be a very conceptual one, for example you can associate the string "one" to the number '1'.

Or it can be very peculiar or funny if you associate the '42' solution to the text "ultimate answer"!

Usually, however, an idea can be expressed by many pieces of text, thus we can have several formulations to express the same idea. In that case we will need to put those formulations into the same interpretation. Even though an interpretation can  express different ideas from different formulations, it is a good practice that an interpretation expresses only one idea, and thus has a single semantic solution structure.

But let us take a very simple example with the idea of Euro (the money). As an arbitrary decision, we say that it is represented as "EUR". In our case, we use four different formulations to express this:
* "EUR" -> "EUR"
* "€" -> "EUR"
* "euro" -> "EUR"
* "euros" -> "EUR"

You can easily create those four formulations, by adding the same solution to each of those formulations.

We will now see how we can combine interpretation in this simple example, to simplify our work, as well as to organize our ideas (as they are indeed interpretations).


## Combining interpretations using formulations

In our EUR example, we have seen that we needed to add four times the same solutions (one for each formulation). Now is the time to do a combination.

For this, we simply create an interpretation called 'vocabulary_euro' (the name can be anything) and we add the four formulations to this interpretation without solution (autosolution checked). We thus simply get:
* "EUR"
* "€"
* "euro"
* "euros"

This 'vocabulary_euro' interpretation represents the idea of "euro" as it is expressed, but we have not yet committed to an expression of this idea (we have not yet added a semantic solution).

Now, we create a new interpretation that we will call 'euro' and we add a formulation with a text such as "euro" (any text is possible, as it serves only to link to the 'vocabulary_euro') and connect it to the 'vocabulary_euro'. Then we add the "EUR" solution in this formulation.

Now, the euro idea is committed to the "EUR" solution, in one single addition.

In this example we have seen how to join several formulations into one single addition of a solution using two interpretations.

In that case we have made a vertical combination: several expressions leading to the same solution.

Now we want to create an horizontal combination: two of more expressions combined together to create a new semantic solution. For this we will use the Numbers agent, so first, in the Overview tab, we click on "Add new dependency", and select the Numbers agent.

Here we have just declared that our agent will be using the Numbers agent as a sub-agent.

Let us then create a new interpretation called N_euros which will be able to understand:
* a number
* followed by the euro idea

We just need to create a formulation containing the text "12 euros" and link the "12" to the Numbers agent (in fact its public interpretation called 'number'), and "euros" to the 'euro' interpretation that you have previously created.

And now, your interpretation is able to understand any number followed by the euro idea.

You can try it with the following texts:
* twenty €
* 12 millions euros

The first text will be interpreted as:

```json
{
  "number": 20,
  "euro": "EUR"
}
```
We let you discover what the second text will look like.

### Solutions

In the last paragraph, we have shown how interpretations can be combined together, and this is a very powerful mechanism.

But maybe you have seen in the last example, that the solution has created itself automatically. This can be very good in many cases, but in some cases, you want to change the solution you get to fit your own need.

This is very important, because we need to mimic the human capacity to understand thing and to mold his understanding to his immediate need.

Thus when we combine interpretations together we are confronted with two different realities:
* first reality: the solution that are given to us in the sub-interpretation cannot be changed in some occasion. In our case, we could change the "EUR" solution, because it is an interpretation that belong to us, but we cannot change the solution coming from the Numbers agent, as it is a public agent.
* second reality: we have each our own need to interpret thing the way we want, and from your viewpoint this is what you want, but from an outside viewpoint, it is completely arbitrary. So we need to be able to be totally arbitrary in the way we build solution.

So we demonstrate those two points in that simple example:

First of all we know that:

* the solution from the 'euro' interpretation is "EUR"
* the solution from the 'number' interpretation is:

```json
{
  "number": 20
}
```
Let us say we want to have the following solution: "20 EUR", then we would need to write some code to do this. Fortunately, it is possible to use the Javascript language to do such thing. In that very simple case, here is what the solution can look like:

```javascript
number.number + " " + euro
```

Of course anything can be done here, thus demonstrating the possibilities of being arbitrary with regards to solutions.


## The different characteristics of a formulation

There are two mechanisms to control exactly what text a formulation is matching. Those two mechanisms are very powerful:

* **keep order**: to match the text in the same order
* **proximity**: to accept or deny some unknown words between the words of the formulation text.

### Keep order

It is possible to match an expression by respecting the order or not.
This can be interesting when the order of the words in the sentence is important, to match precisely, or, on the opposite, to have a very flexible match.

For example, for the numbers, the order is very important: hundred two is very different from two hundred, and in this case, the order must be kept.
On the opposite, when registering a reservation, the options can be given in an undefined order: "I want an hotel with a spa for christmas" is the very same thing as "I want an hotel for christmas with a spa"

This can be handled with the **keep order** checkbox of the formulation.


### Proximity

It can be very convenient to accept a few extra words in a formulation, as it can be very powerful to be very strict on the definition of what is accepted or not

For example: the sentences "I want coffee", "I want **a** coffee" and "I want **some** coffee" are exactly the same whereas no word must be accepted between "new" and "york" in the name of the "New-York" city.

By default, the proximity is set to **close**. The possible values are:

* **glued**: no extra word is allowed
* **glued + punc**: only punctuation is allowed between 2 consecutive matched words
* **very close**: approximately 1 word (8 letters) is allowed between 2 consecutive matched words
* **close**: approximately 3 words (20 letters) are allowed between 2 consecutive matched words
* **far**: approximately 8 words (50 letters) are allowed between 2 consecutive matched words


### Generic types of interpretations

There are only two generic types of interpretations:

* Number: represents digital number such as 12 or 34.56
* Regex: introduces the possibility of adding a regex as an interpretation

It is very important to notice that there are only two types of interpretations that are not encoded within the framework of viky.ai. This is because we want to limit the number of primitive function within our NLP component, in order to achieve maximum expressiveness of the interpretation's language.


#### Type Number

The generic interpretation 'Number' matches only numbers such as 12 or 34.56, it has been used to create the Numbers agent, which is much more general, and is to be used most of the time.


#### Type Regex

The generic interpretation 'Regex' does something that no interpretation can easily do: match specific list of characters using regular expressions to make it as an interpretation.

For example, we can use regular expressions to recognize IP addresses with the following regular expression:

```
(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)
```

Check our [IP addresses agent](https://www.viky.ai/agents/viky/ip-address) to see how it is working.
