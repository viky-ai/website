# viky.ai functional documentation

viky.ai is a framework enabling to easily develop NLP agents through a graphical interface.

# Registering to viky.ai

***TODO***
For the moment, registration on viky.ai can only be made on request.
Online registration is coming soon...

# The user's profile page <a id="user_profile_page"></a>

The user's profile page displays the agents available for the user and the avatar of the user if any. It also allows to update the user's information.

## Displaying the user's profile <a id="user_profile_page-display"></a>

The user's profile page can be displayed by logging in, and, in the Agents page, clicking on the user's avatar on the top right of the page (picture here)

## Updating the user's profile <a id="user_profile_page-update"></a>

To update the profile, click on ***edit your profile*** button (picture here)
This page allows the user to update his personnal informations such as Hame, Username, a little biography, and also set, update or remove an avatar or modifying the credentials.

## Deleting the user's profile <a id="user_profile_page-delete"></a>

To delete the user's profile, all the agents have to be either deleted or transferred.
To transfer an agent's ownership, see the sub-chapter ***[Transferring ownership](#updating_an_agent-transfer_ownership)*** of the chapter ***updating an agent*** of this documentation
To delete an agent, see the sub-chapter ***[Delete an agent](#agents_page-delete)*** of the chapter ***Agents page*** of this documentation

# The agents page <a id="agents_page"></a>

The Agents page displays the agents available for the user, as well for use as for update.

## Accessing the Agent's page <a id="agents_page-access"></a>

The Agents page can be accessed from the main page by logging on viky.ai (picture here), or, if the user is already logged, by clicking on ***manage agents*** (picture here)

## Agents list <a id="agents_page-list"></a>

The Agents page presents the list of all the agents available for the user.
These agents are presented as tiles, with some informations displayed :
(picture here)

- The background is a picture representative of the Agent's purpose
- At the top right of the tile, the user's rights are displayed
- At the top left, if the agent is public, a ***PUBLIC*** banner is displayed
- At the center right there is the agent owner's avatar
- At the center left, the name and the agent id are displayed
- At the bottom left, there is the list of the avatars of the users having access rights to this agent (either read or edit), and the date of the agent's last update
- At the bottom right, if the agent has edition rights, there are 3 dots, opening a menu for agent operation. See the sub-chapter ***[Agent operation](#agents_page-operation)*** below

## Agent search <a id="agents_page-search"></a>

The Agents page provides a search tool to easily find an agent
(picture here)

The search bar allows to search by agent's name. This search can be partial, which means, for example, that the agent ***Numbers*** can be found by typing ***Num*** in this search bar.
The result list can also be filtered in 2 different ways :

A first radio buttons group allow to filter either by displaying only the user's agents, displaying only the user's favorite or displaying all the agents
To know how to define an agent as favorite, see the ***[Set as favorite](#agent-favorite)*** sub-chapter in the ***Agent*** chapter

A second radio buttons group allow to filter either by displaying the private agents, the public agents or all the agents.
More informations about the agents visibility are given in the sub-chapter ***[Agent visibility](#agent-visibility)*** of the ***Agent*** chapter

Results can be sort either by the alphabetical order of the agent's names, or by the date of last update

## Agent operation <a id="agents_page-operation"></a>

These operations are displayed by clicking on the 3 dots on the bottom right of the agent's tile.
These 3 dots are only available if the user has edition rights on the agent.

- configure

This allow to open the ***Configure*** agent's page.
This is described in the ***[Configure](#agent-configure)*** sub-chapter of the ***Agent*** chapter

- share

This operation is only available for the agent's owner.
This allow to share the agent with other users
This is described in the ***[Agent sharing](#agent-sharing)*** sub chapter of the ***Agent*** chapter (link here)

- delete

This operation is only available for the agent's owner and if the agent is not shared with anyone.
This allow to delete the agent from viky.ai
This is described in the ***[Delete an agent](#agents_page-delete)*** sub chapter of the ***Agents page*** chapter

## Enter an agent <a id="agents_page-enter_agent"></a>

To enter an agent, just click on the agent tile on the agents list
The description of the agent's content is done in the ***[Agent](#agent)*** chapter

## Create an agent <a id="agents_page-create"></a>

To create an agent, in the Agents list page, click on the ***New agent*** button.
This will open the configuration page.
This configuration page is described in the ***[Configure](#agent-configure)*** sub-chapter of the ***Agent*** chapter.
Once this configuration page is filled, click on the ***Create*** button and the newly created agent's page will open.

## Delete an agent <a id="agents_page-delete"></a>

An agent can be deleted only by its owner, and cannot be deleted if it has charings.
To delete an agent, go in the ***Agents list*** page, filter the agent list in order to display it, click on the 3 dots in the bottom right corner of the agent's tile and click on ***Delete*** (picture here)
If the agent does not belong to you or if there are sharings on the agent, the ***Delete*** button won't be displayed

# Agent <a id="agent"></a>

## What is an agent ? <a id="agent-what"></a>

An agent is an autonomous element that can be developped through the viky.ai platform.
It takes a sentence in natural language in entry and returns a JSON flow representing the understanding of the sentence by the agent.
This understanding is deeply linked to the way the agent has been developped.
A set of best practices to develop an agent is described in the ***best practices*** documentation (link here)
The agent can be used through a test interface and through an api
The test interface is descriped in the ***[Testing an agent](#tests)*** chapter
The api use is described in the ***[api](https://viky-beta.viky.ai/doc/api/agents/)*** documentation

## Agent presentation <a id="agent-presentation"></a>

### Main panel <a id="agent-presentation-main_panel"></a>

The main panel is the panel on the top of the page (picture here)
It contains a picture of the agent, the agent's name, its owner and a short description.
It also contains, in the ***duplicate*** and the ***Add favorite*** button (picture here)

The ***Duplicate*** button creates a copy of the agent, belonging to the user asking for duplication, and named of the named of the agent followed by ***\[COPY\]***

The ***Add favorite*** button marks the agent as favorite, in order for the user to find it back quickly in the Agents list page

For the users having edition rights on the agent, a ***Configure*** button is also present, allowing to open the agent configuration page (picture here)
The Agent configuration is described in the sub-chapter ***[Configure](#agent-configure)*** of this chapter.

The main panel is always present on the top of the page when you are developping or testing your agent through the test interface.

There are also 3 tabs displayed in the main panel, opening 3 pages :

### Overview <a id="agent-presentation-overview"></a>

The Overview page gives a main view of the agent

At the top of this page, right below the main panel, on the right, are displayed only for the owner the ***Share*** and the ***Transfer ownership*** (picture here)

The ***Share*** button is used to share the agent with one or more other user.
The Agent Sharing is described in the sub-chapter ***[Agent Sharing](#agent-sharing)*** of this chapter.

The ***Transger Ownership*** button is used to transfer the ownership of the agent to another user.
The ownership transfer is described in the sub-chapter ***[Transger Ownership](#updating_an_agent-transfer_ownership)*** of the ***Updating an agent*** chapter in this documentation.

The ***Sharing overview*** displays all the people allowed to use or work on the agent.

The ***Dependencies*** displays, and allow to add or remove dependencies on other agents.
The agent dependencies are described in the ***[dependencies](#dependencies)*** chapter

Then, a README allows to write a few documentation on the agent
See the ***Best practices*** (link here) to know how to fill the readme

### Interpretations <a id="agent-presentation-interpretations"></a>

The Interpretations page displays the list of the interpretations existing in the agent.
Interpretations are described in the chapter ***[Interpretation](#interpretation)***

### Entities <a id="agent-presentation-entities"></a>

The Entities page page displays the list of the entities lists existing in the agent.
Entities are described in the chapter ***[Entities lists](#entities-lists)***

## Agent sharing <a id="agent-sharing"></a>

An agent belongs to an owner, who can use and edit it.
The agent can be shared with a specific user or more, either with read or edit rights.
The users with read rights will only be able to see the agent's structure and to query it
The users with edit rights will be able to modify the agent
The owner is the only person able to share the agent or to remove a sharing

There are 2 ways to do so :

- In the Overview tab, click on ***Share*** (picture here)
- In the Agents list, filter on the agent in order to display it, click on the 3 dots in the bottom right corner of the agent's tile and click on ***Share*** (picture here)

The opening popup displays the list of already allowed users and the corresponding rights (picture here)

- Adding a user

To add a user, in the ***Invite collaborators***, type the e-mail adress of the person to invite, set the rights to ***Can show*** or ***Can edit*** then click on ***Invite*** (picture here)

- Updating right

To update an user right, in the ***Sharing overview***, click on the drop down button on the right of the person to update, select the desired right

- Removing a sharing

To remove an user right, in the ***Sharing overview***, click on the drop down button on the right of the person to update, and select ***Delete***.
A popup opens to ask for conformation, click on ***Delete***

## Agent visibility <a id="agent-visibility"></a>

An agent can be public or private.
A private agent can be only seen by users with whom he was shared.
A public agent can be seen by all users, but only in read mode, except for the users with whom he was shared with edit mode.

When an agent is visible from other agents, the other agents can create dependencies on this agent in order to use its specificities in their own NLP treatment.
For more details, see the ***[Agent dependencies](#dependencies)*** chapter

Only the agent's owner can change its visibility.
To do it, go inthe Overview page, click on the configure button and set the visibility to what is needed. (picture here)

## Agent duplication <a id="agent-duplication"></a>

An agent can be easily duplicated, and any user can duplicate an agent to whom he has access.
Duplicating an agent creates another agent with exactly the same functionnality of the duplicated agent.
This newly created agent belongs to the user that requested the duplication and his name is the same as the original one, followed by [copy].

To do so, go in the ***Overview*** page of the agent and click on the ***Duplicate*** button. (picture here)

## Set as favorite <a id="agent-favorite"></a>

An user can set one or more agents as favorite.
The user can set as favorite each agent to whom he sas access in read or edition.
This will allow him to find them easily in the Agents list page, by filterinf on ***Favorite*** (picture here)

To do so, go in the ***Overview*** page of the agent and click on the ***Favorite*** button. (picture here)

## Configure <a id="agent-configure"></a>

Only the users having edition access on the agent can configure it

There are 2 ways to access to the configuration page of an agent :

- In the Overview tab, click on ***Configure*** (picture here)

- In the Agents list, filter on the agent in order to display it, click on the 3 dots in the bottom right corner of the agent's tile and click on ***Configure*** (picture here)

The agent configuration page allows to setup a set parameters on the agents :
(picture here)

- The API token

The api token is the token used as an authentication for using the agent through the API. The api use is described in the *api* documentation (link here)

- The name of the Agent

- The visibility of the agent

The Agent visibility is described in the sub chapter ***[Agent visibility](#agent-visibility)*** of this chapter in this documentation

- The ID

The Agent ID is a url compliant name for the agent. it composes, with the users login, the agent's slug. This agent slug is a unique name for each agent in viky.ai.

- The description

This is a short description of the agent's use

- The languages

The languages are the available languages for translations or sentence structures in interpretations. Those languages are the same as the ones to be found in the interpretations details. See the sub-chapter ***[Languages](#expression-languages)*** of the ***Expression*** chapter in this documentation

- The background

The background is the picture displayed as a tile in the agents list, which is the same that is displayed on the top left of the page. (picture here)


# Interpretation <a id="interpretation"></a>

## Interpretations list <a id="interpretation-list"></a>

The ***Interpretations*** tab displays the available interpretations for the agent (picture here)
Each line in this list is an interpretation.

There are 2 sections : public and private. This determine the interpretation visibility.
Details on the interpretation visibility are given in the ***[Visibility](#interpretation-visibility)*** sub-chapter below
An interpretation can be dragged and dropped from public to private or reciprocally (screenshot here)

Clicking on the button ***New interpretation*** allows to create a new interpretation (see the sub-chapter ***[Creating an interpretation](#interpretation-create)***)
This button is only available if the user has edition rights or is the owner of the agent.

In an interpretation, in the interpretations list tab, the first thig displayed, on the left, is the interpretation name
Below it can be displayed the interpretation description (if existing) (screenshot here)

Then, at the center, the number of expressions existing in this interpretation is displayed (screehshot here)

More on the right, there is the ***Used by*** button. This button opend a popup showing all the interpretations of the current agent that are using this interpretation (creenshot here).
External dependencies are not displayed (ie : interpretations from another agent using the interpretation)
If no interpretation is to displayed in this ***Used by*** functionnality, the button is inactive.

Finally, a button with 3 dots is displayed if the user has edition rights on the agent (screenshot here)
This button opens a menu allowing to open the interpretation's configuration page (see the ***[Interpretation configuration](#interpretation-configuration)*** sub-chapter), to move the interpretation to another agent (interpretations can be moved only to agents with edition rights for the current user), to move the interpretation to the last agent where an interpretation has been moved to, and to delete the interpretation.

When moving or deleting the interpretation, the links from other interpretations to the current interpretation are broken.

Clicking on an interpretation opend the interpretation detail (see the sub-chapter ***[Interpretation detail](#interpretation-detail)***)

## Visibility <a id="interpretation-visibility"></a>

An interpretation can be either public or private (picture here)
A private interpretation is used as an internal mechanics, in order to obtain the good result, ans can't be seen in the agent's returned solution or in other agents, even if the urrent agent is shared or public.
A public interpretation can be retrieved as a result or used as an alias in another agen't interpretation if the other agent has reading rights on this agent.
(more details about the alias are given in the ***[Alias](#alias)*** chapter)
The interpretation's visibility is set at the interpretation's creation (see the sub-chapter ***[Creating an interpretation](#interpretation-create)***), and can be updated by opening the interpretation configuration

## Creating an interpretation <a id="interpretation-create"></a>

To create an interpretation, in the Interpretations list pannel, click on the ***New interpretation*** button (screenshot here)
This opend the Interpretation configuration page (see the ***[Interpretation configuration](#interpretation-configuration)*** sub-chapter)
In this configuration page, fill the ***ID*** field with the required name for your interpretation.
A best practice document can be found ***here*** (link here), to know hos to name your agents, interpretations and entities lists
The ***Description*** field is not mandatory, but is useful to know what is the interpretation's topic for further evolutions
The ***Visibility*** buttons allow you to set the interpretation public or private. See the ***[Visibility](#interpretation-visibility)*** chapter above for more details
Once the visibility and ID are set (and eventually the description), click on ***Create***
This will open the interpretation detail page (see the ***[Interpretation detail](#interpretation-detail)*** sub-chapter below)

## Interpretation configuration <a id="interpretation-configuration"></a>

The interpretation configuration page allows to set or update the interpretation's ID, visibility and/or description. (sccreenshot here)
Modifying the interpretation's ID will update the interpretation's name but won't break the alias to this interpretation from other interpretations.
For more details about aliases, see the ***[Alias](#alias)*** chapter below
In the same way, if a public interpretation is used in an alias in an interpretation of another agent, setting this interpretation as private won't break this link, but it will not be possible anymore to create links to this interpretation from other agent's interpretations.

This configuration page can be accessed by clicking on ***New interpretation*** in the interpretations list page (screenshot here), or by clicking on the ***Configure*** menu obtained by clicking on the 3 dots on the right of the interpretation (screenshot here)

## interpretation detail <a id="interpretation-detail"></a>

An interpretation is the main component of an agent. It is a list of expressions (picture here)
Expressions will be defined in the chapter ***[Expression](#expression)*** below
The interpretation contains the meaning of whar has been understood by the viky.ai agent
For example: the ***Numbers*** agent has 2 public interpretations : number and number_ordinal. According to the returned interpretation, we can know if the recognized input part is an ordinal or a cardinal number, even if the recognized value itself will be returned in the solution.
Details on the interpretation visibility are given in the ***[Visibility](#interpretation-visibility)*** sub-chapter above
Details on solutions are given in the ***[Solution](#solution)*** chapter

# Expression <a id="expression"></a>

An expression is a sentence with eventually aliases to other interpretations or entities lists
An alias is a link to another interpretation or entities list. For more details, see the ***[Alias](#alias)*** chapter
It has also several properties, such as a language, a keep-order flag, a proximity and a solution combined to an auto-solution flag (screenshot here)

## languages <a id="expression-language"></a>

An expression can be without any language, or have one or more languages.
These languages are represented by the tabs at the top of the expression edition form (screenshot here)
The available languages are the same as the one selected in the Agent's configuration page (see the ***[Configure](#agent-configure)*** sub-chapter of the ***Agent*** chapter)
By clicking on the "+" symbol on the right of the language list, you can add a language to the available languages. (screenshot here)
This language will be added wor the whole agent and also added in the selected languages of the agent's configuration page.

These languages will be used to calculate the score in the viky.ai answer for a query
See the ***[viky.ai answer](#viky_answer)*** chapter for more details

## Keep order <a id="expression-keep_order"></a>

The keep order flag is a boolean flag telling that the sentence's input parts order must be respected in order to match the interpretation's pattern or not.
For example, an interpretation "Hello world" with keep order flag set to true will match on "Hello world", but not on "world hello".
On the contrary, this same interpretation with keep order flag set to false will match both on "hello world" and on "world hello"
(screenshot here)

## Proximity <a id="expression-proximity"></a>

The proximity parameter tells the distance that can exist between 2 input parts if a sentence in order to match the interpretation's pattern
Glued means that there must be neither extra word nor puctuation between 2 consecutive input parts
Glued + punc means that there must be no extra word between 2 consecutive input parts but that punctuation is accepted
Very close means that there can be at maximum 10 letters between 2 consecutive input parts
Close means that there can be at maximum 20 letters between 2 consecutive input parts
Close means that there can be at maximum 50 letters between 2 consecutive input parts

For example, an interpretation "Hello world" with proximity set to Glued + punc will match on "Hello world" and "Hello, world", but not on "Hello the world".

## Auto solution <a id="expression-auto_solution"></a>

The auto solution checkbox allows to automatically set the solution fir the considered expression.
Unchecking the auto solution checkbox allows to customize the solution.
More details about solutions and auto solution combinations are given in the ***[Solution](#solution)*** chapter

## Creating an expression <a id="expression-create"></a>

To create an expression, simply type a text in the text field of the interpretation detail then click on ***Update***.
Aliases can also be created in order to have some modularity.
More details about aliases are given in the ***[Alias](#alias)*** chapter below

# Alias <a id="alias"></a>

An Alias is a link to another interpretation or entities list in an expression.
It allows the expression to match sub-patterns or vocabulary defined in those interpretations or entities lists.
More details about entities lists are given in the ***[Entities lists](#entities_lists)*** chapter.

## creating an alias <a id="alias-create"></a>

To create an alias, the entities list or the interpretation to which the alias will be linked to must exist.
Once this interpretation or entities list created, enter a sentence in an expression and highlight the part of the text you want to be aliased.
A drop down menu will display the possible aliases. Just click on the entities list or interpretation you want to reference, and it is done. (picture here)
When many items are present in the list, a text field allows to filter the elements in order to easily find the researched entities list or interpretation.

No overlapping is possible for aliases within a single expression.

When creating an alias, the alias details appears below the expression with a customizable variable name, the url of the entities list or interpretation it is linked to, and 2 options : list and any. The variable name can be used in the solution to get informations on the matched input parts.
For more details, see the ***[solution](#solution)*** chapter

If no entities list or interpretation are available for aliases, there are still 2 standard aliases available : Number and Regex

## Number <a id="alias-number"></a>

The Number alias is a standard viky.ai alias that allows to understand a number and translate it into its numerical value. (piture here)
This understanding takes into account thousands and decimal separators in different formats.
For example, for the french format, the thousand separator is the space and the decimal separator is the coma.
So, the string "123 456,789" will return the number 123456.789
This Number alias does not understand negative numbers. This has to be handled in the agent
The result is a double, passed in the variable named in the Number alias (picture here)

## Regex <a id="alias-regex"></a>

The regex alias is a standard viky.ai alias that allows to match a string according to a regular expression.
When selected, a text field opens in order to write the regular expression to be matched (picture here)

The result is a string corresponding to the input parts matched by the regular expression (picture here)

## List <a id="alias-list"></a>

List is an option allowing yo match several input parts with the same interpretation
Only one list is allowed per expression

For example, if we create an interpretation with one expression understanding "one" without the list option and another expression understanding "two" with the list option.
If we set this interpretation as public and query the agent with "one one one", only the first one will be matched
If we query the same agent with "two two two", all the input parts will be matched. (picture here).

The returned solution if a list will be an array containing the different matches, in the order of occurency

## Any <a id="alias-any"></a>

Any allows to match on a string that does not correspond to the string to match.
It allows to add flexibility in the NLP process.
When using the any option, the correct matching is possible by using the sentence's structure recognition. So, it is strongly recommended to use this option as little as possible. Using it too much will introduce a lot of false positive match.

For example, an agent understanding "I want a computer", with an any on the "computer" will also understand "I want a car", "I want a anything", etc...
(picture here)

## Removing an alias <a id="alias-remove"></a>

To remove an alias, simply click on the cross on the right of the alias (picture here) or remove the input part in the expression

## Alias and solution <a id="alias-solution"></a>

An alias inherits of the solution of the interpretation or the entities list it references.
For example, if an interpretation has a solution

    {
      name: "john"
    }

An alias to this interpretation will return the very same json structure in the variable linked to the alias.

# Entities lists <a id="entities_lists"></a>

An entities list is a list of entities. It regroups elements that are linked to a same vocabulary concept
For example, there can be an entities list for car brands, an entities list for cities, an entities list for flowers, etc...

## Visibility <a id="entities_lists-visibility"></a>

An entities list can be either private or public. (picture here)
Private entities lists can only be used in interpretations of the current agent, whereas public entities lists can be either used by interpretations of other agents having rights on the current agent, or directly queried.
The entities list visibility is very similar to the interpretations visibility, except that there can be no mechanic within an antities list.

## Proximity <a id="entities_lists-proximity"></a>

The proximity parameter tells the distance that can exist between 2 input parts if a sentence in order to match the interpretation's pattern
Glued means that there must be neither extra word nor puctuation between 2 consecutive input parts
Very close means that there can be at maximum 10 letters between 2 consecutive input parts
Close means that there can be at maximum 20 letters between 2 consecutive input parts
Close means that there can be at maximum 50 letters between 2 consecutive input parts
The entities list proximity is very similar to the interpretations proximity, except that there can be no mechanic within an antities list.

## csv import/export <a id="entities_lists-import_export"></a>

It is possible to import or export an entities list from or to a csv file.
Check the ***[Entities list: Import/Export](https://viky-beta.viky.ai/doc/guides/entities-list-import-export/)*** documentation

# Entity <a id="entity"></a>

An entity is an element of the entities list. It represents an element of a common vocabulary concept.
For example, the entities list ***Citie*** will contain the entities ***New York***, ***London***, ***Paris***, etc... (picture here)

## Synonyms <a id="entity-synonyms"></a>

An entity can have several terms to tell the same concept.
For example, the city of New York can be written ***New York***, ***NY*** or ***Big apple***
Those 3 terms can be entered in the same entity, one per line (picture here)

## Language <a id="entity-languages"></a>

Languages can also be defined for the entities elements
For example, the city of London, in english, will be written ***London***, but in french ***Londres***
To specify the language of a term, suffix it by ":fr" for french, ":en" for english, etc
so, for the city of london, the terms will be :

    London:en
    Londres:fr

## Solution <a id="entity-solution"></a>

By default, the entity is in auto solution.
This will force the solution to the entity's first term
By unchecking the ***Auto solution***, you can force the entity to the desired value, as long as it is a valid JSON string.

## Accent sensitive <a id="entity-accent_sensitive"></a>

The accent sensitive option forces viky.ai to respect the accents.
For example, an entity for the city called Orléans with accent sensitive on will match on ***Orléans***, but not on ***Orleans***

## Case sensitive <a id="entity-case_sensitive"></a>

The case sensitive option forces viky.ai to respect the case.
For example, an entity for the city called Paris with case sensitive on will match on ***Paris***, but not on ***paris***

# Solution <a id="solution"></a>

The solution is a JSON string returned by an interpretation or an entities list when a match occurs.

When aliases to other entities lists or interpretations are existing, the variables associated inherits of the solutions returned by those entities lists or interpretations.

For example, an interpretation A having for solution

    {
      value_1: "aaaa",
      value_2: "bbbb",
    }

and an interpretation B having a solution

    {
      link_to_a: var_to_int_a
      value_3: "cccc"
    }

where var_to_int_a is the variable linked to the alias to the interpretation A
The solution returned by the interpretation B will be :

    {
      link_to_a: {
        value_1: "aaaa",
        value_2: "bbbb",
      },
      value_3: "cccc"
    }

## Auto solution <a id="solution-auto_solution"></a>

The auto solution flag is present as well for interpretation's expressions as for entities.
When aliases to other entities lists or interpretations are existing, the variables associated inherits of the solutions returned by those entities lists or interpretations.
When auto solution is set, the solution will be a JSON Hash, the key being the variable name, and the value being the value of the variable. (picture here)
When auto solution is unset, a javascript editor is displayed in order to customize the solution.

## Javascript editor <a id="solution-javascript_editor"></a>

The javascript editor allows to customize the solution when auto solution is unset.
This allows to use standard javascript developpement, up to 5000 characters, to do some calculation if needed, or to make conditional display. (picture here)

To use those functions, variables are available.
The main variables to use are the alias variables (see chapter ***[Creating an alias](#alias-create))
These variables contain the JSON values of interpretations or entities lists inherited from the alias.
But there are also other standard variables, that can be used in any solution : the ***[solution variables](#solution-variables)***

## Solution variables <a id="solution-variables"></a>

- raw_text
The ***raw_text*** variable returns the string that has been matched by the current interpretation or entities list, without any orthographical correction, stemming and regardless of any treatment performed in the solutions.
More informations about spellchecking are given in the ***[Spellchecking](#spellchecking)*** chapter
More informations about stemming are given in the ***[Stemming](#stemming)*** chapter
example :
let's define an interpretation A understanding "a coffee"
another interpretation B understanding "a cicarette"
a third interpretation C using the 2 first like "@{interpretation A} and @{interpretation B}"
When passing the sentence "I want a coffee and a cigarette" :
The interpretation C will match on "a coffee and a cigarette", so the raw_text for this interpretation will be "a coffee and a cigarette"
The interpretation B will match on "a cigarette", so the raw_text for this interpretation will be "a cigarette"
The interpretation A will match on "a coffee", so the raw_text for this interpretation will be "a coffee"
The "I want" will never be presentin the raw_text as it is never matched

- request_raw_text
The ***request_raw_text*** variable returns the whole string that has been passed to the agent for the interpretation.
example :
let's define an interpretation A understanding "a coffee"
another interpretation B understanding "a cicarette"
a third interpretation C using the 2 first like "@{interpretation A} and @{interpretation B}"
When passing the sentence "I want a coffee and a cigarette" :
The interpretation C will match on "a coffee and a cigarette"
The interpretation B will match on "a cigarette"
The interpretation A will match on "a coffee"
But in all cases, the request raw text will be "I want a coffee and a cigarette", even if the "i want" is  never matched.

- start_position
***start_position*** is the position of the first character of the  matched input part in the considered interpretation or entities list

- end_position
***end_position*** is the position of the last character of the  matched input part in the considered interpretation or entities list
example :
let's define an interpretation A understanding "a coffee"
another interpretation B understanding "a cicarette"
a third interpretation C using the 2 first like "@{interpretation A} and @{interpretation B}"
When passing the sentence "I want a coffee and a cigarette" :
The interpretation C will match on "a coffee and a cigarette", with start_position = 7 and end_position = 31
The interpretation B will match on "a cigarette", with start_position = 20 and end_position = 31
The interpretation A will match on "a coffee", with start_position = 7 and end_position = 15

To summarize, we can say that ***raw_text*** is the substring of ***request_raw_text*** starting at ***start_position*** and ending at ***end_position***

# Spellchecking <a id="spellchecking"></a>

Viky.ai provides a spellchecking option that allows to make corrections in words in order to match a word that would nat have been written correctly.
This corrections degrades the interpretation's score, in order for the matches without any spellchecking to have a better result than the matches with spellchecking. (see the ***[Score](#viky_answer-score)*** sub chapter of the ***Viky answer*** chapter for more details
This spellchecking depends on the type of correction (letter swapping, missing or extra letter), of the number of letters in the word, etc...
The spellchecking tolerance can be set in the execution pannel
the possible values are ***Inactive***, ***low***, ***medium*** and ***high***
Inactive being the spellchecking deactivation, no spellchecking will be performed and any typo will make the match fail, and High being the spellchecking with the greatest tolerance
(picture here)

# Stemming <a id="stemming"></a>

The stemming allows, in a given language, to provide to the agent only the canonical form of a word and to be able to recognize from it all its declinations.
For example, if the verb ***be*** is entered in an entity, the recognized worms will be ***be***, of course, but also ***am***, ***are***, ***was***, ***were***.
This is an example with verbs, but it also work with singular/plural

It is only available in english and in french.

# Dependencies <a id="dependencies"></a>

It is possible to create dependencies between agents.
An agent A can depend on an agent B only if the current user developping the agent A has a visibility on the agent B.
This visibility can be granted because the agent B is public, or because the owner of the agent B granted read or write access on the agent B for the current user developping the agent A.
In this case, the agent A can use the public interpretations or entities lists of the agent B.
For more details about ***Visibility***,  check the ***[Agent sharing](#agent-sharing)*** chapter and the ***[Agent visibility](#agent-visibility)*** chapter

When using the public interpretations of the agent B, the agent A will be able to get the solutions returned by the used entities lists or interpretations of the agent A, and integrate them in its own solution.

## creating a dependency
To create a dependency, in the Agent's overview panel, click on ***Add new dependency***, then select the desired agent in the displayed popup.
(picture here)
The agent displayed in the popup's list are all the agents to whom the user can access, either with edition or with writing rights.
Once the dependency has been created, it appears in the dependencies pannel (picture here).
When it is done, the dependency through the agents is created, but not used.
This dependency is oriented : the agent depending on the other can use the other agent's public interpretations or entities lists, but not reciprocally.
To use those interpretations or entities lists, in the depending agent, simply create an alias to the public interpretation or entities lists of the othe agent. (picture here)
For more details on ***aliases***, check the ***[Alias](#alias)*** chapter.

## removing a dependency
To remove a dependency,  in the Agent's overview panel, click on ***Delete*** on the left of the agen's dependency to be removed (picture here)
A confirmation popup will be open, asking to type ***DELETE***. (picture here)
If a dependency is still uses in the current agent, a warning is displayed (picture here)
The dependency can be removed anyway, but this will break the aliases created thanks to this dependency

# Updating an agent <a id="updating_an_agent"></a>
An agent can of course be updated afterwards. Not only in its functional design, such as interpretation or entities lists creation/update or deletion, but also in its management.

## Moving interpretation/entities list to another agent <a id="updating_an_agent-moving_interpretation_entity"></a>
Whenan interpretation or an eneities lists is not iseful in an agent but can be used in another one, it can be transferred, instead of be deleted then recreated.
To do so :
- For an interpretation, in the interpretation's list page, on the desired interpretation, click on the 3 dots to display the interpretation's menu (picture here) then click on ***move to***. Then select the agent you want to move the interpretation to.
- For an entity, it is very similar to moving interpretations : in the entities list's list page, on the desired entities list, click on the 3 dots to display the entities list's menu (picture here) then click on ***move to***. Then select the agent you want to move the entities list to.
- Only the agents to whom the user has writing access will be displayed in the list of agents to be moved to
- The move of interpretations or entities lists can be performed by any user having edition rights on the agent

## Transfer ownership <a id="updating_an_agent-transfer_ownership"></a>
It is possible to give an agent to another user.
To do so, in the agent's overview page, click on the ***Transfer ownership*** button. This button is available only for the agen't owner (picture here).
In the opened popup, enter the e-mail adress of the user to whom the agent will be transferred, then click on ***Transfer ownership now*** (picture here)
When it is done, the user transfering the ownership keeps edition and writing access to the agent.
Those rights can be removed afterwards (see the ***[Agent sharing](#agent-sharing)*** chapter for more details.


# Viky.ai answer <a id="viky_answer"></a>

## Interpretations <a id="viky_answer-interpretations"></a>


## Score <a id="viky_answer-score"></a>



# Test an agent <a id="tests"></a>

## Execution tab <a id="tests-execution_tab"></a>

## Automated tests <a id="tests-automated"></a>

## Use the API <a id="tests_API"></a>

# Select agents (agent's playground) <a id="playground"></a>

# Tips and tricks <a id="tips_tricks"></a>

## Navigate in an agent <a id="tips_tricks-navigate"></a>

## Drag & drop interpretation from private to public or vice versa <a id="tips_tricks-drag_drop"></a>

## Add languages from interpretations or agent's configuration <a id="tips_tricks-add_languages"></a>

## Used by <a id="tips_tricks-used_by"></a>

## Verbose <a id="tips_trick-verboses"></a>

## Now <a id="tips_tricks-now"></a>

## Customizing agent's picture <a id="tips_tricks-agent_picture"></a>

## Customizing user profile <a id="tips_tricks-user_profile"></a>


