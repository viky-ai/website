---
layout: doc
title: "Match unknown words"
description: "How to match an expression even if your agent is not prepared for it."
image: site_assets/img/social.jpg
order: 306
---

Usually, your agent uses annotations to define the sentence structure. But having a well-defined and consistent structure can be difficult, if not impossible. One way to solve this problem is to use the **"Any option "**.

## "Any" option to the rescue

When annotating a formulation, a special option called "Any" is available. It allows the agent to match anything to this position in the sentence and link it to the associated JavaScript variable in the solution.

You already saw how an agent can match an unexpected road name for the "Address Tutorial" agent that we created in the "[Getting started](/doc/tutorials/getting-started-part-3/#route-name)" tutorial. Let's dig a little deeper with this example.


## Without "Any" option

First, remove the "Any" option of the "route_names" annotation if it is already set. Do so on every formulations in the "address" interpretation. The associated entities list should only contains two entities: "Champs Elysées" and  "Rivoli".

Try the sentence "12 avenue Rivoli 75019 Paris" in the console. Note the matching interpretation score. Since it is a perfect match so we have a perfect score of `1.0`.

![Console perfect match](img/01_no_any_perfect_match.png "Perfect match on an expected sentence")

Change the road name to something that is not part of the entities list such as "12 avenue Louise Weiss 75019 Paris". Try again in the console. Nothing match.

![Console nothing match](img/02_no_any_no_match.png "Nothing match because of unexpected road name")


## With "Any" option

<aside class="note">
  <h3>Note</h3>
  <p>
    For better results, frame your <code>Any</code> annotation between two others matching expressions so the NLP knows when the <code>Any</code> starts and ends.
  </p>
</aside>

Now reenable the "Any" option on the "route_names". Retry your previous sentence with the unknown road name, in this example "12 avenue Louise Weiss 75019 Paris".

The interpretation match because even if a part of the sentence is still missing, the NLP is now forced to fill in the blank. Note that the score is lower because of this option.

![Console any match](img/03_any_partial_match.png "One match thanks to the 'any' option despite unexpected road name")

If you type the road name with the known road name, here "12 avenue Rivoli 75019 Paris" the score is `1.0` again even with the "Any" option still present.

![Console any perfect match](img/04_any_perfect_match.png "Perfect match on expected road name even with the 'any' option")

What happened is that the annotated interpretation or list of entities will be used first, but if nothing matches, the "Any" option will be used as a fallback solution and will still collect the corresponding text. In this case, the associated score will be decreased compared to not triggering the "Any" option.

<aside class="warning">
  <p>
    The use of the "Any" option is very powerful but since it has a "catch all" behavior, you should use it with caution.
  </p>
  <p>
    To prevent potential misuse, two restrictions are enforced by viky.ai. First you must have at least two annotations to enable an "Any" option. Second you can have at most two "Any" options enabled.
  </p>
</aside>
