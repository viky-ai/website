---
layout: doc
title: "Discover and try agents"
description: "Present how to test what sentences an agent can understand and how to guarantee this behavior over time."
image: site_assets/img/social.jpg
order: 300
---

The number of publicly available agents can be overwhelming when you try to find an existing agent that could fit your needs. To explore how multiple agents behaves against a certain text use Play.

## Using the Play interface

The Play interface is a tool applying selected agents to a text and having a visual rendering of the text coverage agent by agent

### Choosing agent thanks to the **Play** interface

There is a set of already existing agents in viky.ai, and thus, it is not necessary to create an agent at any time. Reusing an already existing agent or integrate it in another agent can be very efficient and save hours of work. Nevertheless, it may be difficult to find which one is the most appropriate to do the required work.
The play UI is a very powerful tool to do it

To do so, a text using the lexical field covered by the desired agent is needed.
Go on the **Play** interface

Click on **Edit**, next to "Playground's agent", to add or remove agents to your play interface
You can filter the agent list by typing a part of the desired agent's name in the search agent bar
Select the agents you want to test and click on **Let's go**

![Select agents to check](img/play_agent_selection.png "Select the agents to check in the play ui")

Paste the desired text in the text area and click on **Interpret**

The result of the found interpretation is displayed below the text area and the matched words are highlighted, one colour per agent matched.

By putting your mouse over an highlighted zone, the corresponding agent is highlighted in the agent's list.

![Using play.ui](img/play_use.png "Using play ui")

unselecting an agent in the agent's list will dynamically un-highlight the corresponding match in the interpreted zone.

![Unselecting an agent](img/play_unselecting_agent.png "Unselecting an agent in the play ui")

If one word can be matched by several agents, only the first match in the list will be displayed. to display the others, the matched agent has to be unselected


### Testing your agent thanks to the **Play** interface

a good way to test an agent is to test it on a long text and check all the matched words to see if it is relevant.

To do so, once your agent have been created, go in the play ui, select your agent (and only it), fill the text area with a representative text and click on interpret

All the matched will be highlighted, so the relevancy of the agent can be checked
