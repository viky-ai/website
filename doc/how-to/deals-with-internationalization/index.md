---
layout: doc
title: "Deals with internationalization"
description: "..."
image: site_assets/img/social.jpg
order: 302
---

Agents are organized to be naturally multi-lingual. We will first explain how to practically deal with multi-languages settings and them some general principles on how to organize multi-languages agents.


##  Multi-language agent settings

When the agent is created or configurated, you can choose in which language it will be encoded [TODO show langage in the configure window]

Within the Interpretation tag of the agent, there are tags that help you put your interpretation. For example, if you have chosen the "No language", "en" and "fr" languages, you can organize your interpretation as follows:

* Interpretations that do not depend upon any language into the "No language" tag,
* English interpretations in the "en" tag,
* French interpretations in the "fr" tag.

When an interpretation is added in the "en" tag, an English lemmatization is applied. Obviously, when an interpretation is added in the "fr" tag, a French lemmatization is applied.

Note: as of now, only English and French lemmatizations are implemented.

To apply lemmatization to a word, use the following rules:

* use singular for nouns and adjectives,
* use infinitive for verbs

Within the Entities tag of the agents, languages are handled differently. When you add an entity, you add the language after the word using the language ISO 639 norm encoding, for example, to add 'cat' in French and English, add:

cat:en
chat:fr

Lemmatisation will apply according to the specified language. You do not have to have a language specific. In that case, write only:

cat


##  Principles of multi-language organization


Whether you want to create a mono-lingual or multi-lingual agent, you should apply the following principles:

* create entities with the right language: when a word come from a given language, say so !
* add the interpretation's words with the right language tag,
* when your interpretation does no depend upon upon any language, add it into the "No language" tag.

Note: it is possible to drag and drop an interpretation from a language tag to another language tag, which is a very cool feature !

As you encode more agents, you will see that the language dependent part can be quite limited.

Let us take the example of encoding the different ways of expressing "kilometers" in French and English and then getting "beyond languages". For this, you can look at the public "Length Unit" agent, to see how this is done.

First of all, create an entity list "vocabulary_kilometer" containing :

The first entity list:

kilo-mètre:fr
kilo-mètres:fr
kilomètre:fr
kilomètres:fr
kilometer:en
kilometers:en
kilo-meter:en
kilo-meters:en

and the second entity list:

km
kms

Note: we have separated the entities list into two lists, to have the abbreviations in a separate list, but this is just for clarity purposes.

Then we create a "kilometer" interpretation that aliases to this entities list and with the following solution :

```
{
  "unit": "km",
  "meters": 1000
}
```

This "kilometer" interpretation is included in the "No language" because it does not depend upon any natural language anymore.

If you want to add another language, simply added all expressions in the "vocabulary_kilometer" entities list.

In this example, we are lucky enough to remove any language dependency in one single level, but sometimes it takes more interpretations levels to reduce the dependancy. However, one or two levels are usually necessary.

This is also the reason why it is easy to add a new language in a given agent, than to create the same agent with a different language. Moreover, if you create an agent for French and an agent for English you have to create as many agents as there are languages, and this is more that 200 agents for the same linguistic function, which is quite bad. Don't do that.


##  NLP request and language


As of now, it is possible to specify one or several languages using the Accept-Language parameter. In that case, all languages are accepted, but the specified language are privileged. This means that even if you specify "en" as the only accepted language, it will still understand all other languages.

However, it is our intention to add a new parameter called "force-language" (true/false), which will get only interpretations and entities that are encoded in the specified language. This will become more important as the agents get many encoded languages. In that case if you specify "en" as the only accepted language, it will indeed only accept English.






