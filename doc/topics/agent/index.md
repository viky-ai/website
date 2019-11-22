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

Agents are the fundamental elements of text understanding. You can shape them to interpret from mundane ideas to abstract concepts.
You may be tempted at first to include every sentences you need into one single big agent. This is usually a bad idea. Including too many subjects of focus in the same agent blur the scope outline of what the agent is supposed to understand.

The proper way to handle such case is to split your big agent into many smaller ones. Each small agent should focus on a specific subject, it should be short and to the point. A general rule of thumbs is to follow the single responsibility principle stating that an agent should have only one reason to change. Basically an agent about the weather should only be updated if you want to match new sentences about the weather forecast and not for sentences about flights booking for instance.

Only small agents won't get you very far to solve real life business issues. Here comes the composition. An agent is able to include an arbitrary number of other agents and exploit their results to produce a new outcome. This form a tree of dependencies between agents without limit of depth nor width.

There is two ways to use this dependencies tree. The first one is by depth. At the bottom we have agents for practical ideas like numbers, date, length units, cities, etc. On top of that comes agents for slightly more elaborated concepts. For instance with numbers and cities we can create a new agent "postal address" that depends on the first two for those details and tie them with the missing concept of address. Again, we can add a third higher level where the postal address become a dependency of a "package delivery" agent. We can repeat this process as much as we want. In the end, the root agent in this tree is the entry point for the text analysing process and it describes the most abstract level of understanding.

The other way to exploit the dependencies tree is by width. Agents can be assembled when they are about subjects that complements each other. For instance if we need to understand the order "I want to watch a spy movie." we just need two agents. One to understand orders in the form of "I want to watch" and a second to understand movies categories, here "a spy movie". Those two dependencies are siblings in the dependency tree.

Even by reusing agents, fully covering your use case can require some effort and a lot of time. A core feature of viky.ai is the ability to collaborate between users at building agents. Let's see how it works.


## How agents participate in the collaborative view ?

When you tackle a large project covering a wide variety of sentences with convoluted syntax, it involves a lot of work even when reusing dependencies. In this case viky.ai allows you to invite users to collaborate at creating the agent.

Collaboration is configured by user and by agent, meaning you have total control of who sees what in your workspace.

Once you found a potential collaborator viky.ai sends a notification to inform the person of his new status. Depending on the access rights you have setup, the collaborator can either just navigate through or also edit the agent.
The navigation is useful when asking feedback to someone about your current work. It is also a convenient way to authorize particular users to integrate your agent in his own project.
Giving an edition access is similar to the navigation with the added right to update the agent content.
Non the less, you stay the agent's owner meaning you are the only one able to change the agent configuration and you are the only one that can manage access rights (including revocation) at anytime.

One great way to collaborate is to contribute back to the viky.ai community by giving away freely part of your work. For this, make your agent public.


## Make it public

We have seen how to take advantage of already existing agents. But we have also seen that you will want to create your own agent that will use some of your ideas and existing agents.

In some case you will want to divide your idea into smaller ideas, each of those ideas can be represented by a smaller agent that you will want to create. This happens when those smaller ideas have some kind of independent life from your main idea.

This is how we have created public agents: they represent independent smaller ideas.

We believe that using that kind of modus operandi, will create a lot of independent agents that will represent and take part in bigger and bigger ideas.


## Conclusion

You agent must have some good properties. Among the agent's good properties, we can cite:

* **Completeness**: if your agent is to cover some ideas in texts, it must do so as extensively as possible. For example, if you want to do agent that is expressing numbers in English, it must handle as many numbers as possible (and all if possible).
* **Consistency**: your agent's semantic solution must have a structure that coherently and consistently represent your thoughts about the texts it analyses.
* **independent from natural language**: as the semantic solution of your agent really represent an idea, it should be normal to have that idea expressed the same way for any language this agent is analyzing.
* **Multilingual**: as you are representing ideas taken from text, your agent should normally be multilingual. And, even if, at first, it is monolingual, it should not be too difficult to add another language to your agent to express the same idea.
