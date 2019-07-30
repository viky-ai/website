viky.ai is a framework enabling to easily develop NLP agents through a graphical interface.

# Registering to viky.ai

***TODO***

# The user's profile page

The user's profile page displays the agents available for the user and the avatar of the user if any. It also allows to update the user's information.

## Displaying the user's profile

The user's profile page can be displayed by logging, and, in the Agents page, clicking on the user's avatar on the top right of the page <picture here>

## Updating the user's profile

To update the profile, click on ***edit your profile*** button <picture here>
This page allows the user to update his personnal informations such as Hame, Username, a little biography, and also set, update or remove an avatar or modifying the credentials.

## Deleting the user's profile

To delete the user's profile, all the agents have to be either deleted or transferred.
To transfer an agent's ownership, see the sub-chapter ***Transferring ownership*** of the chapter ***updating an agent*** of this documentation (link here)
To delete an agent, see the sub-chapter ***Delete an agent*** of the chapter ***uAgent*** of this documentation (link here)

# The agents page

The Agents page displays the agents available for the user, as well for use as for update.

## Accessing the Agent's page

The Agents page can be accessed from the main page by logging on viky.ai <picture here>, or, if the user is already logged, by clicking on ***manage agents*** <picture here>

## Agents list

The Agents page presents the list of all the agents available for the user.
These agents are presented as tiles, with some informations displayed :

- The background is a picture representative of the Agent's purpose
- On the top right of the tile, the user's rights


## Agent search
## Agent operation
    - configure

    - share

    - delete
## Enter an agent
## Create an agent

## Delete an agent

An agent can be deleted only by its owner, and cannot be deleted if it has charings.
To delete an agent, go in the ***Agents list*** page, filter the agent list in order to display it, click on the 3 dots in the bottom right corner of the agent's tile and click on ***Delete*** <picture here>
If the agent does not belong to you or if there are sharings on the agent, the ***Delete*** button won't be displayed

# Agent

## What is an agent ?

An agent is an autonomous element that can be developped through the viky.ai platform.
It takes a sentence in natural language in entry and returns a JSON flow representing the understanding of the sentence by the agent.
This understanding is deeply linked to the way the agent has been developped.
A set of best practices to develop an agent is described in the *best practices* documentation (link here)
The agent can be used through a test interface and through an api
The test interface is descriped in the *Testing an agent* chapter (link here)
The api use is described in the *api* documentation (link here)

## Agent presentation

###main panel

The main panel is the panel on the top of the page <picture here>
It contains a picture of the agent, the agent's name, its owner and a short description.
It also contains, in the ***duplicate*** and the ***Add favorite*** button <picture here>

The ***Duplicate*** button creates a copy of the agent, belonging to the user asking for duplication, and named of the named of the agent followed by ***\[COPY\]***

The ***Add favorite*** button marks the agent as favorite, in order for the user to find it back quickly in the Agents list page

For the owner of the agent only, a ***Configure*** button is also present, allowing to open the agent configuration page <picture here>

###Agent configuration page

The ***Configure*** button opens the Agent's configuration page.
the Agent configuration is described in the sub-chapter ***Configure*** of this chapter. (link here)

The main panel is always present on the top of the page when you are developping or testing your agent through the test interface.

There are also 3 tabs displayed in the main panel, opening 3 pages :

###Overview

The Overview page gives a main view of the agent

At the top of this page, right below the main panel, on the right, are displayed only for the owner the ***Share*** and the ***Transfer ownership*** <picture here>

The ***Share*** button is used to share the agent with one or more other user.
The Agent Sharing is described in the sub-chapter ***Agent Sharing*** of this chapter. (link here)

The ***Transger Ownership*** button is used to transfer the ownership of the agent to another user.
The ownership transfer is described in the sub-chapter ***Transger Ownership*** of the ***Updating an agent*** chapter in this documentation. (link here)


The ***Sharing overview*** displays all the people allowed to use or work on the agent.

The ***Dependencies*** displays, and allow to add or remove dependencies on other agents.
The agent dependencies are described in the ***dependencies*** chapter (link here)

Then, a README allows to write a few documentation on the agent
See the ***Best practices*** (link here) to know how to fill the readme

###Interpretations

The Interpretations page displays the list of the interpretations existing in the agent.
Interpretations are described in the chapter ***Interpretations*** (link here)

###Entities

The Entities page page displays the list of the entities existing in the agent.
Entities are described in the chapter ***Entities*** (link here)

##Agent sharing

An agent belongs to an owner, who can use and edit it.
The agent can be shared with a specific user or more, either with read or edit rights.
The users with read rights will only be able to see the agent's structure and to query it
The users with edit rights will be able to modify the agent
The owner is the only person able to share the agent or to remove a sharing

There are 2 ways to do so :

- In the Overview tab, click on ***Share*** <picture here>
- In the Agents list, filter on the agent in order to display it, click on the 3 dots in the bottom right corner of the agent's tile and click on ***Share*** <picture here>

The opening popup displays the list of already allowed users and the corresponding rights <picture here>

    - Adding a user

To add a user, in the ***Invite collaborators***, type the e-mail adress of the person to invite, set the rights to ***Can show*** or ***Can edit*** then click on ***Invite*** <picture here>

    - Updating right

To update an user right, in the ***Sharing overview***, click on the drop down button on the right of the person to update, select the desired right

    - Removing a sharing

To remove an user right, in the ***Sharing overview***, click on the drop down button on the right of the person to update, and select ***Delete***.
A popup opens to ask for conformation, click on ***Delete***

## Agent visibility

An agent can be public or private.
A private agent can be only seen by users with whom he was shared.
A public agent can be seen by all users, but only in read mode, except for the users with whom he was shared with edit mode.

Only the agent's owner can change its visibility.
To do it, go inthe Overview page, click on the configure button and set the visibility to what is needed. <picture here>

## Agent duplication

An agent can be easily duplicated, and any user can duplicate an agent to whom he has access.
Duplicating an agent creates another agent with exactly the same functionnality of the duplicated agent.
This newly created agent belongs to the user that requested the duplication and his name is the same as the original one, followed by [copy].

To do so, go in the ***Overview*** page of the agent and click on the ***Duplicate*** button. <picture here>

## Set as favorite

An user can set one or more agents as favorite.
The user can set as favorite each agent to whom he sas access in read or edition.
This will allow him to find them easily in the Agents list page, by filterinf on ***Favorite*** <picture here>

To do so, go in the ***Overview*** page of the agent and click on the ***Favorite*** button. <picture here>

## Configure

Only the agent's owner can configure it
There are 2 ways to access to the configuration page of an agent :
- In the Overview tab, click on ***Configure*** <picture here>
- In the Agents list, filter on the agent in order to display it, click on the 3 dots in the bottom right corner of the agent's tile and click on ***Configure*** <picture here>

The agent configuration page allows to setup a set parameters on the agents :
<picture here>

- The API token
The api token is the token used as an authentication for using the agent through the API. The api use is described in the *api* documentation (link here)

- The name of the Agent

- The visibility of the agent
The Agent visibility is described in the sub chapter *Agent visibility* of this chapter in this documentation (link here)

- The ID
The Agent ID is a url compliant name for the agent. it composes, with the users login, the agent's slug. This agent slug is a unique name for each agent in viky.ai.

- The description

- The languages
The languages are the available languages for translations or sentence structures in interpretations. Those languages are the same as the ones to be found in the interpretations details. See the sub-chapter ***languages*** of the ***interpretations*** chapter in this documentation (link here)

- The background
The background is the picture displayed as a tile in the agents list, which is the same that is displayed on the top left of the page.

# Interpretation

## languages


# Expression

# Alias
# Entities lists
# Entity


# Keep order
# List
# Regex
# Languages
# Solution
## Auto solution
## Javascript editor
## Moment.js
## Solution variables
    - raw_text
    - request_raw_text
    - start_position
    - end_position
# Dependency
# Updating an agent
## Moving interpretation/entities list to another agent
## Transfer ownership
# Test an agent
## Execution tab
## Automated tests
# Select agents (agent's playground)
# Tips and tricks
## Navigate in an agent
## Drag & drop interpretation from private to public or vice versa
## Add languages from interpretations or agent's configuration
## Used by
## Verbose
## Now
## Customizing agent's picture
## Customizing user profile


