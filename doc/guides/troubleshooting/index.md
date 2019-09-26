---
layout: doc
title: "Troubleshooting"
description: "This guide shows you various ways you can troubleshoot your agents so that it works exactly how you want it to."
image: site_assets/img/social.jpg
order: 7
---

As you develop your agent with many interpretations and entities lists and possibly some dependencies, you may need to troubleshoot your agent to get the exact picture of the structure of the agent as well as how it is interpreting various sentences provided to it. This guide will show how the platform helps you in these aspects.

## Understanding interpretation dependencies

An expression of an interpretation can contain aliases to other interpretations and entities lists. This creates dependencies among the interpretations and the entities lists. 

A top-down approach to exploring this dependency is pretty straight forward. You click on the desired interpretation in the list and the list expands to show you what other interpretations or entities lists this particular interpretation refers to.

![Aliases](img/top_down.png "Interpretation aliases referring to other interpretations")

A bottom-up approach would be to see if this particular interpretation is being used by any other interpretations. This is facilitated by the `Used by...` button on the top right corner of the interpretation detail view. A `Used by...` button is also available in the rightmost corner for each interpretation in the interpretation list. This same option is available for entities lists as well.

![Used by in interpretations](img/used_by_interpretations.png "Used by button in details view")

![Used by in entities list](img/used_by_entities.png "Used by button in list view")

This `Used by...` button is disabled if the interpretation or entities list is not used by any other. On the other hand, if it is used, clicking on it shows the list of interpretations that are using it in a pop up. 

![Used by pop up](img/used_by_popup.png "List of other interpretations that are using the selected interpretation")

The pop up list also allows you to navigate to the interpretations and entities lists in the list. Just click on one and the platform redirects you to the clicked interpretation/entities list. The platform scrolls to as well as highlights the clicked interpretation or entities list.

![Navigate to used by interpretation](img/used_by_highlighted.png "Clicked interpretation is highlighted")

Thus, you can easily understand how the interpretations and entities lists of an agent are structured.

## Understanding how a sentence is interpreted

The console panel allows you to test your agent by sending interpret requests. It responds with matched interpretations as well as the solution for the sentence. The console panel's functionality is not just limited to that. It allows you to explore in detail how your agent interprets each word in your requested sentence. To explore, turn the `Verbose` mode `ON` and send the request again. The `Explain` tab will now have three sections for each of the interpretations matching the sentence.

1. `Scores` section shows how the score was calculated.
2. `Highlight` section shows which words of the sentence were matched by the interpretation.
3. `Solution` section gives the corresponding solution for the sentence.

![Explain with Verbose ON](img/verbose_on.png "Verbose mode ON")

The `Highlight` section further allows you to see how the NLP matched each word with the interpretations and entities lists of the agent. Just click on one of the highlighted words and you will see a list of interpretations and entities lists matched for that word. If you watch closely, the first interpretation or entities list within the list is the minimal interpretation matching the word. The interpretations and entities lists in the list are arranged in a tree fashion with the last one being the one that incorporates all the interpretations and entities lists above it.

![Highlight list](img/highlight_list.png "List of matching interpretations for a word")

You can even navigate to interpretations in the list. Just click on an item in the list and the platform takes you to the exact expression within the clicked interpretation or entities list that matched the word.

![Click on an item](img/highlight_click.png "Navigate from within the highlight list")

This gives you an exact idea how NLP breaks down your sentence to match the interpretations you created for your agent.











