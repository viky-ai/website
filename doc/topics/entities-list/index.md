---
layout: doc
title: "Entities list"
description: "This section will introduce the entities list concept."
image: site_assets/img/social.jpg
order: 203
---

## What are entities list exactly?

Entities list are in fact simply interpretations. They have exactly the same properties as interpretations. However, they are proposed in the viky.ai platform in a different interface as they are used in a different way.

But first of all, let us define entities list as list of entities, or more exactly lists of named entities.

[Named entities](https://en.wikipedia.org/wiki/Named_entity) are a well known concept in the NLP world. They are texts representing a real-world object, such as persons, locations, organizations, products, etc.

We hope this reminds you of something: a text representing an idea? So, yes, named entities are precisely interpretations.

Can we match an idea to a real-world object? Yes, because we just have to have an idea of this real-world object! And since idea are quite arbitrary, we can use *any* representation of this real-world object, and this is a semantic solution.

For example, we can represent the "Paris" town as:

```json
{
  "geonameId": "2988507",
  "name": "Paris",
  "asciiName": "Paris",
  "latitude": "48.85341",
  "longitude": "2.3488",
  "countryCode": "FR",
  "population": "2138551",
  "timeZone": "Europe/Paris"
}
```

And you can see that most of this information is quite arbitrary:
* **geonameId**: does not mean anything appart from the GeoNames repository.
* **name**: well ok...
* **asciiName**: for Americans...
* **latitude** and **longitude**: where in Paris exactly ?
* **countryCode**: this is the Alpha-2 code of the ISO 3166-1 ISO norm, thus perfectly arbitrary, as all norms are.
* **population**: this gives an idea, but nothing more.
* **timeZone**: another arbitrary norm.

But we don't mind arbitrary as this is a normal characteristic of an idea!

Another difference is that an entities list cannot combine with interpretations. If we view an interpretation as a tree of interpretations, Entities list can only be leaves in this tree.

Then you might ask this simple question:


## Why do we have Entities list exactly?

Well Entities list have two interesting properties that can be used to simplify editing interpretations:

* it is possible to massively import/export entities, please read [Import, export entities](/doc/how-to/import-export-entities/) to know more about this property.
* it is possible to add several texts in different languages at the same place, and link them with the same solution.

for example you can add the following texts at the same time:

```
kilogramme:fr
kilogram:en
kg
```

and link all of those texts to the same solution, for example "kg".

