---
layout: doc
title: "Agent"
description: "This section will introduce concept of agent."
image: site_assets/img/social.jpg
order: 201
---

Understanding unstructured texts expressed in natural language is a complex topic and has been for years an active field of research and development.
One major difficulty is the subtext people introduce in their daily communications such as idiomatic expressions, humor (irony, sarcasm...) or metaphor to name a few. This create ambiguity that only a human being is able to understand thanks to the conversation context.

A computer on the other hand is completely oblivious to such context. As a consequence, a good solution is to delimit a clear scope which define what and how sentences are analyzed. In viky.ai this is called an **agent**.


## What is an agent ?

When we define a set of sentences that we want to understand, they usually imply some business requirements that create an implicit context. This means several sentences refers to a common subjects or are related in one way or another.

For instance, in the context of movies, sentences like "What film won the best picture Oscar in 2010?", "I want to watch a spy movie." or "Who directed Pulp Fiction?" all convey the idea to find movies based on different criteria. Even if they do not express exactly the same intention we can still group them.

This is where the agent come into play. It is the entry point for you to build and manage the analyzing process by providing those features:
* define a set of rules to analyse sentences
* submit a new sentence to interpret
* reuse other agents as dependencies 
* maintain a consistent interpretation quality over time
* manage access right between collaborators

And we can add the corollary descriptions:

* Your agent is done within the viky.ai platform and is then run by the platform.
* The analysis or the form that you want is the semantic structure that you will decide your agent will create.

An agent rules are so flexible that you can analyze texts of any subjects. In fact, the agent purpose is first defined by what kind of text you want analyse. Do you want to understand postal addresses in letters? Do you want to extract emotions in a text? Do you want to analyse questions in a chatbot?

Such flexibility is the key to help you structure your agent. Chances are you will end up with a collection of agents, each one dedicated to a specific task. It is easy to layer them from a narrow use case at the bottom to wider and more abstract at the top. For instance with three agents you can have a first agent dedicated to find numbers, use it in a second one to find references to money and the last one to understand sentences about financial data.

This strategy of composition is at the heart of viky.ai and we are going to explore it in more details in the next section. 


## How to organize agents together ?

Agents can be organized together as ideas can be organized together. When you create agents, you want to know if there are already agents that can do part or all of the work that you have set your mind to do.

Thus it is important to know which agent already exist. You have different ways to find which agent can be of use for create your own agent:

* first of all, you can go through all public agent and look at their readme, but also their tests suite, to know if they can be of use
* then you can choose the one you selected and test them in the Play interface (check this page [Discover and try agents](/doc/how-to/discover-and-try-agents/) for more information on how to use the Play interface)

If an agent is doing exactly what you want to do (or close), you might want to simply use it or contribute to it.

Usually some agents can do part of the job that you have in mind, which means that those agents can handle part of the text that you want to handle with your agent. A simple example can be taken from already existing public agents: let's say we want to handle amounts of money, like "14 millions of euros". You can find the "Numbers" agent which can handle "14 millions of", then you discover that another agent call "Money Unit" which handles all the moneys including "euros". So you could create an agent which is the combination of numbers and money units. In fact, in that case there is already an agent called measures that is doing exactly this, but in an even more general way. Please look at this agent to see how it is done.

Of course you might not find exactly what you need, then in this case, your agent will be a combination of some existing agents and your own ideas of an agent that will exactly fit your needs.


## How agents participate in the collaborative view ?

Agents are really an expression of your thoughts, thus, you can really collaborate the same way you collaborate in real life by sharing your thoughts, exchanging ideas, and also keeping your ideas private if you want to.

If you want to keep your idea private, please do so, but at some point, you will want to discuss ideas, share ideas, collaborate. Let us describe how you can do it with agents.

Let us view an agent as an expression of your thoughts in a given subject. You will need to first describe what you want to achieve with this agent. The Overview of the agent is a good place to do that:

A readme gives you the possibility to describe you agent any way you want. We suggest the following sections:
* **Purpose**: describe what you wanted to achieve with the agent, its goal,
* **Available interpretations**: describe in detail what the agent is able to understand, by giving examples and the associated solution.

Another very interesting part that will help you document your agent but also check if your agent is always doing what you have designed it to do is the tests suite. Please refer to [Make non regression tests](/doc/how-to/make-non-regression-tests/), for detailed information on this feature.

We recommend you do not give too many examples in your Readme, but use the tests suite instead.

Describing your agent and documenting it is a good way to start if your want other people to use it. However you agent must have some good properties, just like when you express your ideas, this expression must have some good properties.

Amoung the agent's good properties, we can cite:

* **Completeness**: if your agent is to cover some ideas in texts, it must do so as extensively as possible. For example, if you want to do agent that is expressing numbers in English, it must handle as many numbers as possible (and all if possible).
* **Consistency**: your agent's semantic solution must have a structure that coherently and consistently represent your thoughts about the texts it analyses.
* **independent from natural language**: as the semantic solution of your agent really represent an idea, it should be normal to have that idea expressed the same way for any language this agent is analyzing.
* **Multilingual**: as you are representing ideas taken from text, your agent should normally be multilingual. And, even if, at first, it is monolingual, it should not be too difficult to add another language to your agent to express the same idea.


## When to do an agent, and when not to do an agent

We have seen how to take advantage of already existing agents. But we have also seen that you will want to create your own agent that will use some of your ideas and existing agents.

In some case you will want to divide your idea into smaller ideas, each of those ideas can be represented by a smaller agent that you will want to create. This happens when those smaller ideas have some kind of independent life from your main idea.

This is how we have created public agents: they represent independent smaller ideas.

We believe that using that kind of modus operandi, will create a lot of independent agents that will represent and take part in bigger and bigger ideas.
