---
layout: doc
title: "Entities list"
description: "This section will introduce the entities list concept."
image: site_assets/img/social.jpg
order: 203
---

Beside its structure, the sentence carries another kind of information in the form of entities. They defines what the sentence is about without ambiguity.


## What is an entity?

[Named entities](https://en.wikipedia.org/wiki/Named_entity) are a well known concept in the NLP world. They are texts representing a real-world object, such as persons, locations, organizations, products, etc. If we view an interpretation as the tree structure of the sentence, then entities are leaves in this tree.

Once an entity is detected, the goal is to associate it with a meaning in the form of an arbitrary semantic solution. For example, we can represent the town "London" as the following solution:

```json
{
  "name": "London",
  "latitude": "51.50853",
  "longitude": "-0.12574",
  "country_code": "GB",
  "time_zone": "Europe/London"
}
```

We can see that most of this information is quite arbitrary:

* **name**: it is the normalized name of the city. In this example we will use it to grasp the core meaning of the entity.
* **latitude** and **longitude**: locates where London is exactly.
* **country_code**: this is the Alpha-2 code of the ISO 3166-1 ISO norm, thus perfectly arbitrary, as all norms are.
* **time_zone**: another arbitrary norm.

Once we have a normalized way to describe the entity, we can now associate every synonymous expressions with this representation. For instance, when we read the French translation "Londres" or if we say "capital of the UK" we are still talking about the same city. Thus we are able to link all of them with the core idea identified by the semantic solution.

In viky.ai, it is not just about detecting the presence of an entity but also to give a structured meaning helping you process it further down your own business use case.


## Why a list?

Now that we understand what an entity is in viky.ai, why are they grouped into list?

Even if an entity can live on its own once it is attached to a semantic solution, we often have to deal with many of the same kind. For instance if we have sentences stating something about colors, money or brands we usually need to understand not just one but several variations of them. Thus it is easier to manage an entities list that embody a common theme or at least bind entities in a meaningful way for your use case.

When using standardize concepts such as cities, countries, etc. you will often find external third-party knowledge bases. To help you, viky.ai provides tools to massively import or export those lists.

Inside an entities list each item is present with a possible translation and with a corresponding solution. When building a list, the amount of data you can put can be huge but if you are not careful this has some downsides.


## KISS

Although an entities list may contains millions of items, we advise not to do so. Creating a huge list including every entities you could ever need is a tempting approach but it comes at a cost. A general rule of thumb is to follow the KISS principle meaning Keep It Simple Stupid.

Why "simple"? Dealing with large lists will introduce a lot of noise when matching new sentences. For instance you could create a list with every cities in the world but using that list you will see there is always a city name that match an unexpected word in your sentence.

Why "stupid"? When building semantics solutions, only put descriptive data to identify your concept. The proper and more convenient way is to do your formatting in the parent interpretation.
