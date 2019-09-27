---
layout: doc
title: "Tips and Tricks"
description: "This guide will show you some helpful tips and tricks in viky.ai."
image: site_assets/img/social.jpg
order: 8
---

This section will show you some tips and tricks in the platform.

## Recognizing a pattern

Sentences can most often times contain phrases that follow a certain pattern. Agents in viky.ai can be easily configured to understand such patterns. 

Let us again take the `Address Tutorial` agent that we created in the [Getting started](/doc/guides/getting-started/) section. 

In our expression for the **address** interpretation, we had created an alias to `viky/numbers/interpretations/number` for the postal code. However, if we check the French postal code system, they are always of 5 digits. But, our agent recognizes any length of number as postal code. Let us correct that.

Edit the expression "12 avenue de Flandres 75019 Paris". Remove the alias to `viky/numbers/interpretations/number` for the postal code.

![Remove annotation](img/regex/remove_annotation.png "Remove annotation for postal code")

Highlight "**75019**". This time select `Regex` from the list. You will be prompted to enter a regular expression. In the text box enter `[0-9]{5}`. Also update your solution as follows:

``` javascript
{
  "street_number": street_number.number,
  "route_type": route_type,
  "route_name": route_name,
  "postal_code": postal_code,
  "locality": locality.name
}
```

![Enter regular expression](img/regex/add_regex.png "Enter a regular expression for postal code")

Now your agent recognizes the postal code correctly. 

You can similarly make your agents recognize patterns such as telephone numbers, emails and so on using `Regex`.

## Interpretation with a list of similar phrases

Let us again go back to our `Address Tutorial` agent. An address can contain additional information such as the apartment number, building number, floor number and so on. These are all optional information in an address.

Addresses with additional info can take the form of any one of the following:
* Apt 2, 12 avenue de Flandres 75019 Paris
* Apt 2, Batiment B, 12 avenue de Flandres 75019 Paris
* Apt 2, 1er étage, Batiment B, 12 avenue de Flandres 75019 Paris

Let us see how we can incorporate this in our agent.

One way would be to create separate expressions for each of these sentences. However, the better and non repetative way is to treat this additional information in the address as a list. Let us see how we can do this.

Let us first create a few components that will recognize the additional information in the address.

<span class="tag tag--primary">Step 1</span> Create an entities list `building_components` which contains the terms "batiment", "etage" and "apartment".

![building_components entities list](img/list/building_components.png "Entities list for the building components")

<span class="tag tag--primary">Step 2</span> Create a private interpretation `supplementary_address` to recognize the additional information in an address. Add the following expressions in the interpretation:
* Add "Apt 1" as your first expression. 
  * Highlight "Apt" and create an alias to the `building_components` entities list you created earlier.
  * Highlight "1" and create an alias to `Regex` type. Enter "[A-Za-z0-9\S]+" in the text box for regular expression.

![first supplementary_address expressions](img/list/supplementary_address_1.png "First expression for supplementary address")

* Add "1er étage" as your second expression.
  * Highlight "1er" and create an alias to `viky/numbers/interpretations/number_ordinal`.
  * Highlight "étage" and create an alias to the `building_components` entities list.

![second supplementary_address interpretation](img/list/supplementary_address_2.png "Second expression for supplementary address")

Now that we have an interpretation to recognize the additional information in an address, let us create an expression for addresses with additional information.

Add an expression "Apt 2 12 avenue de Flandres 75019 Paris" in the **address** interpretation. Create highlights as follows:
1. Highlight "Apt 2" and create an alias to the `supplementary_address` interpretation you created in the previous step. Select the option `List`. 
2. Highlight other part of the address like before.

![address expression with additional info](img/list/additional_info_address.png "Expression with additional address information")

Test the expression "Apt 2 12 avenue de Flandres 75019 Paris" in the console.

![test_expression](img/list/test_expression.png "Test your new expression")

You can see that the solution for the additional information is structured in an array. The `List` option that you selected for alias to the `supplementary_address` interpretation tells the NLP that it can contain more than one number of such interpretation. That is why the solution is structured in an array. 

Let us test some other expressions with building information, floor numbers, etc. 

![successful_tests](img/list/other_tests_additional_info.png "Successful recognition of other sentences") 

Your agent can now recognize addresses with multiple additional information.


## Any

## Keep order

## Proximity

## Case sensitive/Accent sensitive

## Duplicate an agent

There are many public agents in viky.ai. These agents can be explored and tested by everyone in the platform. What if you find an agent that you would like to work with but you do not have the required access rights to it? Yes, you can create your own that has the same structure and behave the same. But it would be very tedious to do so for a complex agent.

Viky.ai allows you to duplicate any agent that is visible to you. When you view an agent, you can find a `Duplicate` button at the top of the `Overview` tab.

![duplicate_button](img/duplicate/duplicate_button.png "Duplicate button")

Click on the `Duplicate` button. Voila!, you have your very own agent that behaves exactly the same with just a click of a button. You can now edit and change the agent as per your requirements.

![duplicated_agent](img/duplicate/duplicated_agent.png "You have your very own Hello agent")

## Drag and drop/ Move to


## Now in tests