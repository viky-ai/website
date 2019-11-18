---
layout: doc
title: "Agent"
description: "This section will introduce the agent concept."
image: site_assets/img/social.jpg
order: 201
---

If you didn't read "main concepts behind viky.ai", you should do it before you read this article. You will understand how agents fit in the viky.ai platform, and have a first idea of what is an agent.

In this article, we want to describe in details:

* What is an agent ?
* How agents participate in the collaborative view ?
* How to organize agents together, and tips how to call an agent ?
* When to do an agent, and when not to do an agent ?

## What is an agent ?

An agent is essentially a set of rules that can analyse and "understand" a piece of text. But this definition expresses only what an agent is made of, just like we would say that a dog is made of a head, legs, a body and a tail. This does not just defines properly an agent.

In fact, an agent is first defined by what you want to do when you analyse a text: do you want to understand a number written in letters, do you want to analyze logs from a computer, do you want to extracts emotions in a text, or do you want to analyse what people say in a chatbot ? Those are only a few examples of what you can do with an agent.

In essence only your imagination can limit the scope of your agents.

So we would say that an agent is a process that can analyse a piece of information that is written as a text, and this analysis can take any shape or form you like. This freedom of description is mimicking the freedom of thought you have.

And we can add the corrolary descriptions:

* Your description of the agent is done within the viky.ai platform, and this description is then run (processed) by the platform.
* The analysis or the form that you want is the semantic structure that you will decide your agent will create.

## How agents participate in the collaborative view ?

As we said in the last paragraph, agents are really an expression of your thoughts, thus, you can really collaborate the same way you collaborate in real life by sharing your thoughts, exchanging ideas, and also keeping your ideas private if you want to.

If you want to keep your idea private, please do so, but at some point, you will want to discuss ideas, share ideas, collaborate. Let us describe how you can do it with agents.

Let us view an agent as an expression of your thoughts in a given subject. You will need to first describe what you want to achieve with this agent. The Overview of the agent is a good place to do that:

A readme gives you the possibility to describe you agent any way you want. We suggest the following sections:
* **Purpose**: describe what you wanted to achieve with the agent, its goal,
* **Available interpretations**: describe in detail what the agent is able to understand, by giving examples and the associated solution.

Another very interesting part that will help you document your agent but also check if your agent is always doing what you have designed it to do is the tests suite. Please refer to [Make non regression tests](/doc/how-to/make-non-regression-tests/), for detailed information on this feature.

We recommand you do not give too many examples in your Readme, but use the tests suite instead.

Describing your agent and documenting it is a good way to start if your want other people to use it. However you agent must have some good properties, just like when you express your ideas, this expression must have some good properties.

Amoung the agent's good properties, we can cite:

* **Completeness**: if your agent is to cover some ideas in texts, it must do so as extensively as possible. For example, if you want to do agent that is expressing numbers in English, it must handle as many numbers as possible (and all if possible).
* **Consistency**: your agent's semantic solution must have a structure that coherently and consistently represent your thoughts about the texts it analyses.
* **Independant from natural language**: as the semantic solution of your agent really represent an idea, it should be normal to have that idea expressed the same way for any language this agent is analizing.
* **Multilingual**: as you are representing ideas taken from text, your agent should normally be multilingual. And, even if, at first, it is monolingual, it should not be too difficult to add another language to your agent to express the same idea.


## How to organize agents together ?

Agents can be organized together as ideas can be organized together. When you create agents, you want to know if there are already agents that can do part or all of the work that you have set your mind to do.

Thus it is important to know which agent already exist. You have different ways to find which agent can be of use for create your own agent:

* first of all, you can go through all public agent and look at their readme, but also their tests suite, to know if they can be of use.
* then you can choose the one you selected and test them in the Play interface (check this page [Discover and try agents](/doc/how-to/discover-and-try-agents/) for more information on how to use the Play interface)

If an agent is doing exactly what you want to do (or close), you might want to simply use it or contribute to it.

Usually some agents can do part of the job that you have in mind, which means that those agents can handle part of the text that you want to handle with your agent. A simple example can be taken from already existing public agents : let's say we want to handle amounts of money, like "14 millions of euros". You can find the "Numbers" agent which can handle "14 millions of", then you discover that another agent call "Money Unit" which handles all the moneys including "euros". So you could create an agent which is the combination of numbers and money units. In fact, in that case there is already an agent called measures that is doing exactly this, but in an even more general way. Please look at this agent to see how it is done.

Of course you might not find exactly what you need, then in this case, your agent will be a combination of some existing agents and your own ideas of an agent that will exactly fit your needs.

## When to do an agent, and when not to do an agent

In the last paragraph, we have seen how to take advantage of already existing agents. But we have also seen that you will want to create your own agent that will use some of your ideas and existing agents.

In some case you will want to divide your idea into smaller ideas, each of those ideas can be represented by a smaller agent that you will want to create. This happens when those smaller ideas have some kind of independant life from your main idea.

This is how we have created public agents: they represent independant smaller ideas.

We believe that using that kind of modus operandi, will create a lot of independant agents that will represent and take part in bigger and bigger ideas.




