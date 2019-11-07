---
layout: doc
title: "Getting started - Part 2"
description: "This guide teaches you how to extract a French postal addresses from a text in a structured way with viky.ai."
image: site_assets/img/social.jpg
order: 2
---

This tutorial begins where [Getting started - Part 1](../getting-started-part-1/) left off. You'll create your first interpretation, some entities and use the console.

## First basic interpretation

### Create an interpretation

In the **Interpretations** tab, click on the **New Interpretation** button.

![New interpretation screenshot](img/04_new_interpretation.png 'Access to "New Interpretation" button')

<aside class="note">
  <h3>Interpretation visibility</h3>
  <ul>
    <li>Public interpretations are those exposed by the agent; they provide final solutions.</li>
    <li>Private interpretations are used to perform intermediate calculations or computations.</li>
  </ul>
</aside>

A modal box with the form “Create a new interpretation” opens.

1. Fill the `ID` with "address".
2. Set your interpretation visibility to **Public**.
3. Fill a description: "Identifies the French postal addresses."
3. Click on the **Create** button.

![Interpretation form screenshot](img/05_form_interpretation.png "Creating address interpretation")

### Create your first formulation

Your first interpretation is created. Now click on it and select the **fr** tab. Type "12 avenue de Flandres 75019 Paris" in the text area, then click on **Add**.

Keep the default options (_keep order_, _close_, _auto solution_) as is. We will come back to them later.

![Formulation form screenshot](img/06_first_formulation.png "Adding a formulation")

### Testing the agent

A console panel is on the right to test in live your agent. Type "12 avenue de Flandres 75019 Paris" in the text field and click on the arrow to send the request. This console calls your agent by REST API.

You can see the returned solution in the **Explain** tab (opened by default). The solution is also available in JSON format; click on the **JSON** tab to see it.

![Console screenshot](img/07_first_console.png "Manual test in console")

The returned value is the interpretation you just created and the score is the match confidence level: 0 means no match, and 1 means an exact match. Here the score is 1 because the sentence typed in the console exactly matches the formulation you just created.

<aside class="primary">
  <p>
    The <strong>Console</strong> has multiple usages. It could be a place to realize your <strong>manual unit tests</strong>, validate an interpretation each time you create a new one.
  </p>
  <p>
    It also allows to save your tests to create an <strong>automated tests suite</strong>. A best practice to have in an NLP project is to have continuous improvements with a view of potential regressions.
  </p>
</aside>


## Route types

You want to be able to identify any _French postal address_ with other street number, route types and names, and localities.

We will start with the route types detection by using an entities list.

### Create a route type entities list

Click on the **Entities** tab and click on the **New entities list** button.

![Entities lists UI screenshot](img/08_new_entities_list.png 'Access to "New entities list" button')

<aside class="note">
  <h3>Naming conventions</h3>
  <ul>
    <li>Names are always in English.</li>
    <li>Favor the singular form to name an interpretation.</li>
    <li>Favor plural form to name an entities list.</li>
  </ul>
</aside>

A modal box with the form "Create a new entities list" opens.

1. Type "route_types" in the `ID` text field.
2. Select **Private** and **Glued** options.
3. Click on the **Create** button.

![create entities list screenshot](img/09_create_entities_list.png "Entities list creation form")

Click on the entities list you just created to open it and enter route types names:

1. Type "rue" in the **Terms** text area ; then click on **Add**,
2. Type "avenue" in the **Terms** text area; then click on **Add**,
3. Type "impasse" in the **Terms** text area; then click on **Add**,
4. Type "passage" in the **Terms** text area; then click on **Add**,

![filling the entities list screenshot](img/10_filling_entities.png 'Adding terms in "route_types" entities list')

<aside class="primary">
  <p>
    It is also possible to import long lists of entities into viky.ai with a CSV file.
  </p>
</aside>


### Link entities list to interpretations

Go back to the **Interpretations** tab, click on the **address** public interpretation.

<span class="tag tag--primary">Step 1</span> <strong>Edit the current formulation in address interpretation</strong>

Click on the formulation "12 avenue de Flandres 75019 Paris" in order to edit it.

![UI screenshot](img/11_edit_formulation.png 'Edit a formulation by clicking on it')

<span class="tag tag--primary">Step 2</span> <strong>Link avenue with route_types entities list</strong>

1. Highlight **avenue** in "12 avenue de Flandres 75019 Paris".
2. A drop-down list appears displaying the different interpretations and entities lists available.
3. Choose the **route_types** entities list (it should be labeled like `yourname/youragent/entities_lists/route_types`).
4. Click on **Update**

![Interpretation form screenshot](img/12_linking_entities_to_interpretations.png "Linking an expression part to an entities list")

![updating interpretation screenshot](img/13_updating_interpretation.png "Link between interpretation and entities list is done")

<span class="tag tag--primary">Step 3</span> <strong>Validate</strong>

Test in console the interpretation with the following sentences:

- 12 impasse de Flandres 75019 Paris
- 12 avenue de Flandres 75019 Paris
- 12 rue de Flandres 75019 Paris

All sentences are successful, the interpretation **address** is found on each route type variant.

![Console screenshots](img/14_route_types_tests.png "All variants work")
