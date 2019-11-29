---
layout: doc
title: "Interpretation"
description: "This section introduce the interpretation concept."
image: site_assets/img/social.jpg
order: 202
---

What makes a sentence different from a simple group of words? It is mainly the structure that links words around certain rules to give meaning. In linguistics, this is called grammar. In viky.ai, we use this structure to match sentences to the idea they express. This mechanism is implemented through **interpretations**.


## What is an interpretation?

Interpretations are the building blocks of agents. In fact, an agent can be made of a single interpretation. However, the creation of such an agent is very limited because it would not use its main property: the ability to combine and be combined with others.

But to describe this capacity, it is first necessary to introduce and describe the **formulations**. Interpretations are only a simple list of formulations, and therefore the entire mechanism for combining interpretations is done within the formulations.

You can see an interpretation as the identification of an idea, and formulations as the different descriptions of that idea.

Of course, since an interpretation can be a combination of other interpretations, this idea can be as complex as you want. We will see later how this combination works.

Let's first look at the formulations.


## What is a formulation?

In its simplest form, a formulation is a sentence associated with a **semantic solution** (or more simply a **solution**). Essentially, you associate a text with your idea of it.

Your idea can be very conceptual, for example you can associate the string "one" with the number "1". Or it can be very special or funny if you associate the solution "42" with the text "the answer to everything"!

Usually, an idea can be expressed in many textual representations, so we can have several formulations to express this idea. In this case, we will have to group these formulations in the same interpretation.

There is nothing to prevent you from putting formulations related to different ideas in the same interpretation. However, it is a good practice that an interpretation expresses only one idea and therefore has only one semantic solution structure.

Let's take a very simple example with the idea of controlling a thermostat. As an arbitrary decision, we say that it is represented by a semantic solution in the form of `change_temperature`. In our case, we use three different formulations to express this:

* "Increases the temperature in the living room to nineteen degrees." -> `change_temperature`
* "Lower the temperature in the bedroom to 18 degrees." -> `change_temperature`
* "I want 20 degrees in the bathroom." -> `change_temperature`

You can easily create these three formulations by adding the same solution to each of them. We can associate these three sentences with the idea of changing the room temperature.

Now let's see how we can combine this example with other interpretations to organize our ideas.


## Combining interpretations using formulations

In our example, we have associated three different sentences with the same semantic solution. While identifying the idea as we wanted, this has two disadvantages. First, we can only understand exactly these three sentences. If we say instead, "I want _21_ degrees in the bathroom." it won't work. Secondly, the semantic solution is correct but devoid of real interest because we understand the idea but not the details that are essential to know what to do in practice.

Let's improve our interpretation by detecting the corresponding room. Let's start by creating an entities list called "rooms" containing these entities:

* living room
* garage
* bathroom
* bedroom
* kitchen

Now, in each formulation, we annotate the location of the room in the sentence with this entities list. We obtain the following formulations:

* "Increases the temperature in the `@{rooms}` to nineteen degrees."
* "Lower the temperature in the `@{rooms}` to 18 degrees."
* "I want 20 degrees in the `@{rooms}`."

It acts as a kind of placeholder in each formulation. In practice, this does two things:

* it extracts in the semantic solution the room requested in the sentence
* it allows to place any room of the entities list at this location in the sentence

We are now able to interpret a new sentence like "I want 20 degrees in the _kitchen_", whose solution is "`kitchen`".

In this case, we made a vertical combination: one expression is linked to another to exploit its solution.

We still have the limitation of having fixed temperatures in our formulations. Let's improve our example by being more flexible in temperature detection.

We have seen in the [Agent](/doc/topics/agent/) topic guide that we can create dependencies to reuse interpretations. That's exactly what we're going to do with the agent [Numbers](https://www.viky.ai/agents/viky/numbers). Once added as a dependency, this agent exposes an interpretation to detect any number expression in the sentence.

In each formulation, we replace the characters expressing a number with a reference to the interpretation of the agent Numbers. We obtain the following formulations:
                                                                                                                          
* "Increases the temperature in the `@{rooms}` to `@{number:temperature}` degrees."
* "Lower the temperature in the `@{rooms}` to `@{number:temperature}` degrees."
* "I want `@{number:temperature}` degrees in the `@{rooms}`."

We are now able to understand a new sentence like "Lower the temperature in the _garage_ to _16_ degrees.", whose solution is:

```javascript
{
  "rooms": "garage",
  "temperature": "16"
}
```

This is a horizontal combination: several expressions are combined together in a formulation to create a new semantic solution.

Now we are able to interpret commands to change the temperature of a room. The semantic solution we obtain is the central piece to exploit this interpretation. We will see how to customize it according to our needs.


### Semantic solutions

In the last section, we have shown how interpretations can be combined, which is a very powerful mechanism.

But perhaps you saw in the last example that the semantic solution was created automatically. This may be sufficient in many cases, but in some cases you want to change it to meet your specific needs.

This is very important, because we need to imitate the human capacity to understand things and adapt its understanding to its immediate needs.

Thus, when we combine interpretations, we are confronted with two different realities:

1. the semantic solution obtained in the sub-interpretation cannot be changed in some cases. In our example, we could change the solution from "rooms", because it belongs to us, but we cannot change the solution from the agent Numbers, because it is a public agent belonging to another user.
2. we all have our own ways of interpreting things in a way that is consistent with our representation of the world, but from an external point of view it is completely arbitrary. We must therefore be able to be totally arbitrary in the way we build the solution.

We demonstrate these two points in the following example. First of all, we know that:

* the solution from the "rooms" entities list is the semantic solution of the corresponding entity
* the solution from the "number" interpretation is the object:

```json
{
  "number": 20
}
```

Let's say we want to convert the temperature into a normalized fahrenheit unit, so we need to write code to do it. Fortunately, it is possible to use Javascript for this purpose. In this very simple case, here is what the solution may look like:

```javascript
{
  "rooms": "garage",
  "temperature": (temperature.number * 9/5) + 32
}
```

Of course, everything can be done here, demonstrating the potential for arbitrary solutions.


## Options of a formulation

There are two mechanisms to control exactly which text a formulation matches. These two mechanisms are very powerful:

* **keep order**: to match the text in the same order
* **proximity**: to accept or reject certain unknown words between the words of the formulation text.

### Keep order

It is possible to match an expression with or without word order.
This can be interesting when the order in the sentence is important, for accurate correspondence, or on the contrary, to have a more flexible correspondence.

For example, for numbers, the order is very important: "one hundred and two" is very different from "two hundred and one", and in this case, the order must be kept.
On the other hand, when registering a reservation, options can be given in any order: "I want a hotel with a spa for Christmas" is the same as "I want a hotel for Christmas with a spa".


### Proximity

It can be very convenient to accept a few additional words in a formulation, just as it may be necessary to be very strict on the definition of what is accepted or not.

For instance: the sentences "I want coffee" or "I want **a** coffee" are semantically the same while no words should be accepted between "New" and "York" in the city name "New York".

By default, the proximity is set to **close**. The possible values are:

* **glued**: no extra words are allowed
* **glued + punc**: only punctuation is allowed between 2 consecutive matched words
* **very close**: approximately 1 word (8 letters) is allowed between 2 consecutive matched words
* **close**: approximately 3 words (20 letters) are allowed between 2 consecutive matched words
* **far**: approximately 8 words (50 letters) are allowed between 2 consecutive matched words


### Generic types of interpretations

There are only two generic types of interpretations:

* **Number**: represents digital number such as 12 or 34.56
* **Regex**: introduces the possibility of adding a regex as an interpretation

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
