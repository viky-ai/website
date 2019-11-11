---
layout: doc
title: "Work collaboratively"
description: "This guide shows how viky.ai supports collaborative working."
image: site_assets/img/social.jpg
order: 301
---

There are two ways to work collaboratively:

* working in private
* working in public

When you work with a public agent, you will have to apply some behaviors and rules in order for you agent to be most successful. This is what we describe here.


## Working collaboratively in private

When you create an agent, you alone can see and modify your agent: you are the owner of the agent. However, you can share your agent with somebody else by clicking on the "share button" [TODO: image écran du bouton share].

Then you can choose if the person can only view or modify the agent [TODO: image écran sur ce choix]. If you choose for the person to be able to modify the agent, then you are beginning to work collaboratively with this person. You can repeat this operation with as many persons as you want.

Only the persons with whom you have shared your agent can view and modify your agent. But nobody else can: your agent is still private.

If you want your agent to become public, you can do so by clicking on the "configure" button and change the visibility of your agent from private to public. If you do so, everybody will see your agent. They will also be able to copy it. However, they will not be able to change it (except if you invite them to do so).


## Working collaboratively in public

Working in public is the same as working in private, except that you are working on a public agent. If you want to modify a public agent, you can do so

We distinguish two kind of public agents:

* your public agent
* the public agent of others

### Working collaboratively with your public agent

If you are the owner of your public agent, you do exactly the same things you did when you agent was private.

However, when you have decided to make public you agent, please read carefully section 'The public agent philosophy', to make sure you handle your public agent properly.


### Working collaboratively with a public agent which is not yours

If you want to modify a public agent (for example, to add a new language), you will first need to talk to the public agent's owner (see section 'Communicating with an agent's owner'). Then, if the agent's owner agrees, you will be able to work on the public agent in collaboration with the owner.


## A word on viky.ai's public agent


viky.ai's public agent are simply public agent that have been created and that are managed by the Viky team. They are in no way different from any other public agents.

However, the Viky team has taken a great care in creating them, and making them useful for as many people as possible. We are confident enough in the fact that those agents (and many more in the future) will become referents for the tasks they have been created for.

If you still want to improve such an agent, for example to add the same function but using a different language, please contact us at support@viky.ai.



## The public agent rule of conduct

As the agent has been made public, and as some other people are starting using it, you have to apply some rule of conduct, specifically if you want to change it, improve it, and still have other people use it.

First of all, you can see how many people are using your agent by looking at the "Dependencies (n) - Dependents (m)" section in the Overview tag of you agent [TODO : screenshot]. The 'm' number will tells you how many agents are using your agent. The more agents are using your agent, the more careful you need to be when you do some changes to your agent.

If you click on this number, you will be able to see which agents are using your agent.

When your public agent starts to be used by other agents, here are some safety rules that you can use:

* You can safely change the name of your public interpretations,
* Do not ever remove a public interpretation from your agent, as many users will be badly impacted,
* Never change the structure of semantic solutions of your agent, whether directly or from some changes in the private interpretation's semantic solutions of your agent,
* You can add new public interpretation without any problem,
* You can also change some behavior within your private interpretation, like having new interpretations, but be careful with the structure of the public semantic solutions.

At some point, you may come to a point, where you need to make more profound modifications on your public agent. In that case, we propose the following protocol:

* First, duplicate your agent to get your own private copy of your public agent,
* Second make all the modifications you want in the duplicated agent. Remember that it would still be much better to follow the above rules because your users will be able to adopt much more easily your new version of your agent.
* Third, when you are satisfied with your modifications, you can make you agent public.

To make your new version of your agent public, we recommand the following actions :

* rename your old agent 'foo' to 'foo-old',
* publish you new as foo and advertize this new agent.

Please note that, all the people using your old agent will simply see that the agent has been renamed 'foo-old', but will still use the old agent. They will need to change the links to your new agent themselves to use your new agent. This is necessary, because there is no garanty that your new agent is compatible with the old agent. This is why is it better for you to keep the new version of your agent compatible with the old version.

Note: There is no way for the moment, to change globally a sub-agent's use in a given agent from one version of this sub-agent to another version of this sub-agent. You will have to do it manually, by changing all the 'calls' (alias) of the sub-agent in your agent. However, we intend to implement such mechanism in a near future.

## The public agent's philosophy

We encourage you to create as many agent as you want, we also encourage you to duplicate public agent whenever you need to do it.

However, when you publish your agent in public, it should have most of those properties so that other want to use it:

* The agent should cover properly the natural langage function that it is supposed to cover. For example, if the agent "Number" covers numbers from "one" to "ninety nine", it may not be enough or will not be very useful.
* The agent should be a simple copy of an already existing public agent.
* Same thing if the agent is slightly improved copy of an already existing public agent: please submit your improvements to the owner of the orignal public agent, or keep it private for your own use.

Our goal for public agents is to have well defined and well documentation public agents for a given natural language function and avoid unecessary duplications.

Also, we are aware our current agent work on a limited number of languages, thus we are willing to help people that want to implement those agents in more languages.


## Communicating with an agent's owner.

It is not currently possible to communication directly with an agent's owner. We want to simplify that communication by creating this possibility within the viky.ai platform, but it is not done yet. For the moment, you will need to go through viky.ai's team to do so, by using the support@viky.ai mail. Thank you for you patience.




