---
layout: doc
title: "Make non regression tests"
description: "Present how to test what sentences an agent can understand and how to guarantee this behavior over time."
image: site_assets/img/social.jpg
order: 304
---

Your agent can go through many changes. So you need to make sure that with every change your agent still behaves the way you want it to. viky.ai has the notion of regression tests to help you do so.

## Adding a non regression test

Let us see how we can create a non regression tests suite for the `Address Tutorial` agent that we created in the "[Getting started](/doc/tutorials/getting-started-part-1/)" tutorial.

Every time you ask your agent to interpret a sentence, you will be given an option to add the sentence to the test suite. Type "12 avenue de Flandres 75019 Paris" in the text field of the console and send the request. You will see a "Add to tests suite" button on the bottom right corner of the "Explain" tab.

![Agent overview screenshot, focus on Addd to tests suite button](img/01_add_test.png "Add to tests suite button")

Click the "Add to tests suite" button. You will now see that a "Tests Suite" has been created at the bottom of the console. You can see the summary of your test suite there.

![Agent overview screenshot, focus on the tests suite summary](img/02_test_summary.png "Tests suite summary")

Click on the summary. You will now see the tests suite with the test that you previously added.

![Agent overview screenshot, focus on tests suite overview](img/03_test_suite.png "Tests suite overview")

Clicking on the test will show you its details:

* `Query` i.e. the sentence for the test
* Different options chosen during the interpret request: `Spellchecking`, `Language` and `Now`
* `Slug` of the first interpretation found for the sentence
* `Solution` for the sentence

![Agent overview screenshot, focus on a test details view](img/04_test_details.png "Detailed test view")

## Updating an existing test

Till now you can see that the Tests Suite is green which means all the tests have passed. The test details shows us that the expected and got values for the slug and the solution match.

Let us try to edit our agent and see what happens to the tests suite.

Edit the solution for the formulation in address interpretation as below:

```javascript
{
  "street_number": street_number.number,
  "route_type": route_type,
  "route_name": route_name,
  "postal_code": postal_code.number,
  "locality": locality.nom_commune
}
```

![Update formulation form screenshot](img/05_update_agent.png "Update second address formulation")

As soon as you updated your interpretation, you will see that the tests suite ran the test and updated its result. You will now see that the test has failed. You can also see what failed in the test - in our case its the solution that did not match. The test detail shows what was the expected solution and what solution was returned.

![Failed test screenshot](img/06_test_fail.png "Failed test")

Click on the "Send" button. It prompts the console to interpret the sentence again. You will see that the console now returns the new solution that we just updated earlier.

![Send test sentence in console screenshot](img/07_test_update.png "You can update the test in failure")

The console also indicates that the test for this sentence is in failed state. Click on the "Update" button. You will see that the test passed and the expected solution for the test was updated with the new solution.

![Green tests suite screenshot](img/08_test_pass.png "Green updated test with the new solution")

Hence, you saw that with every change in your agent, your tests suite will run and tell you if the tests you added passed or failed with your new changes. You can add multiple tests for different types of sentences that your agent can interpret. You can now be sure that your agent behaves as expected whenever you make any changes.

Another aspect of the non regression tests can be when you explore other agents in viky.ai. You can check out their tests suite and understand what kind of sentences the agent is able to understand without having to go through the interpretations and entities lists.

## Testing a sentence with a time reference

Testing an agent using time reference can be difficult. For instance if the agent is able to understand "Book a table for the day after tomorrow" and translate the expression "the day after tomorrow" in a normalized ISO 8601 format as its interpretation's solution, the corresponding date will change every day.

For that situation, you can use the "now" option in the console by switching it to `manual`. It allows you to freeze the current time used to interpret the sentence.

If you set the "now" option to `2019-02-27T15:00:00+01:00` ( _February 27, 2019_ ) the solution will be two days later `2019-03-01T15:00:00+01:00` ( _March 1st, 2019_ ).

![Console screenshot with now option set to manual](./img/09_now_in_2019.png "Interpret's solution is March 1st, 2019")

If you set it to `2020-02-27T15:00:00+01:00` ( _February 27, 2020_ ) the solution will also be two days later `2020-02-29T15:00:00+01:00` ( _February 29, 2020_ ) but still in February since it is a leap year.

![Console screenshot with now option set to manual](./img/10_now_in_2020.png "Interpret's solution is February 29, 2020")
