---
layout: doc
title: "Best practices"
description: "This guide will show you some recommended practices for viky.ai."
image: site_assets/img/social.jpg
order: 9
---

# viky.ai - Agent Style Guide

This style guide dedicated to the viky.ai agents recommends the best practices in order for a viky.ai user to produce agents maintained by the platform's other users


## Naming convention for agents

Agents names are in _english_ and must be quite shorts.
When it is about an agent created for a given customer or client, this one appears in the agent's name.
If you want to version an agent, write the version in the name of the agent.

Globally, use this syntax : <code>(Client|Project) (Agent name) (Version)</code>.

    # Good
    Address
    YP Demo v1.1

    # Bad
    Address recognition agent
    Demonstrator v 1.1 for YellowPages


## Naming convention for entities lists

Entities list names are in _english_ and _in plural_.

    # Good
    colors
    brands
    towns

    # Bad
    color
    couleurs
    brand
    ville


## Naming convention for interpretations

### In english

The interpretations names are _in english_.

    # Good
    colors
    dates
    date_ranges

    # Bad
    couleur
    intervalle_de_dates


### Singular or plural?

We can distinguish two types of interpretations, those who express the concept itself, and those who are the content og this concept.

The interpretations expressing the concept itself will be singular
The interpretations expressing the content of the concept will be plural.

_Examples :_

The words « master », « competence », « knowledge », « expertise », « ability », express the concept of competence but not a skill, so the interpretation will be called « skill ».

The words Les mots« well organized », « autonomy », « developpement », « computer aided design » are skills, the interpretation will then be named « skills ».

### Interpretations with option « List »

The interpretations allowing to detect a, emlements list (option "List") are plural and suffixed with **_list**.

    # Good
    criteria_list
    colors_list

    # Bad
    critères
    criteria
    list_criteria
    color_list

A list is made of elements. Those elements can be interpretations or entities.

#### Direct use of an entities list

To recognize a list of elements with same nature, an entities list can directly be used. Let's take the following example : you want to recognize a list of colors. To do so, create an interpretation named **colors_list** referring to the entities list **colors** grouping the colors with associated informations (name, abbreviation, RGB code, ...).

    # Good
    # Interpretation List         Entities list
    colors_list                   colors

    # bad
    # Interpretation List         Entities list
    colors                        color

#### Using an intermediate interpretation

To recognize a list of elements with multiple nature, it is recommended to use an intermediate interpretation. In this case, the intermediate interpretation has the same name as the parent interpretation without the **_list** suffix.

In the sentnece « I want to visit Paris, London, India and the Yorkshire », we can identify a list of places by using an interpretation **locations_list** constituted with an interpretation **locations** referring to several entities lists (countries, towns, areas, ...).

    # Good
    # Interpretation List         Intermediate interpretation
    locations_list                locations

    # Bad
    # Interpretation List         Intermediate interpretation
    lieux_list                    lieux
    locations                     location
    locations_list                location_element

## Prepositions, conjonctions

The articles, prepositions and conjonctions are not specified, unless explicit need for differenciation.

Examples :_

In the sentence « I can do some developpement», « can do » is identified as **skill** and « developpement » is identified as **skills**, but the preposition « some » is not identified

In the sentence « a movie from Brad Pitt and a movie with Brad Pitt », the first « Brad Pitt » is director (**directors**), the second one is actor (**actors**). It is clearly needed here, the prepositions « from » and « with » are specified.

## Punctuation

The punctuation elements won't be specified, unless there is an explicit need (separator identification, etc...).
