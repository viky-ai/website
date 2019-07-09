---
layout: doc
title: Agents API
description: "API technical documentation from viky.ai"
image: site_assets/img/social.jpg
order: 1
---

Welcome to the viky.ai API. You can use viky.ai API to extract information from unstructured contents or create virtual assistants to converse with your data.

## Authentication

<aside class="note">
  <h3>UTF-8</h3>
  <p>
    All data sent to this API must be encoded into UTF-8.
  </p>
  <p>
    API answers are in JSON and are UTF-8 encoded.
  </p>
</aside>

To access viky.ai resources, e.g. the `agent` endpoint for interpretation, you must specify the resource specific api token:

* in the request header: `Agent-Token: my-agent-api-token`,
* or as a URL parameter: `?agent_token=my-agent-api-token`.

Here is an example for the agent `viky/time`:

```shell
# With shell, you can just pass the correct resource token header
# with each request
curl "https://viky-beta.viky.ai/api/v1/agents/viky/time/:action" \
  -H "Agent-Token: viky-time-api-token"

# or pass the token as a parameter in the URL
curl "https://viky-beta.viky.ai/api/v1/agents/viky/time/:action?agent_token=viky-time-api-token"
```

<aside class="warning">
  <p>Make sure to replace <code>viky-time-api-token</code> with the actual resource API token.</p>
</aside>

## Errors

The viky.ai API uses the following error codes:

<table>
  <thead>
    <tr>
      <th>Error&nbsp;Code</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>401</code></td>
      <td>Unauthorized: Agent API token is wrong.</td>
    </tr>
    <tr>
      <td><code>404</code></td>
      <td>Not Found: The specified agent could not be found.</td>
    </tr>
    <tr>
      <td><code>406</code></td>
      <td>Not Acceptable: You requested a format that isn't json.</td>
    </tr>
    <tr>
      <td><code>422</code></td>
      <td>Unprocessable Entity: Parameters are not consistent.</td>
    </tr>
    <tr>
      <td><code>500</code></td>
      <td>Internal Server Error: We had a problem with our server. Try again later.</td>
    </tr>
  </tbody>
</table>

Error responses always have a message associated within the <code>errors</code> array.

```shell
# Run that command:
curl "https://viky-beta.viky.ai/api/v1/agents/viky/time/interpret.json"

# Will return an 422 HTTP code with the following body:
{
  "errors":[
    "Access denied: wrong token."
  ]
}
```

## <span class="tag tag--primary">GET</span>&nbsp;<code>/agents/:owner/:agent/interpret.json</code>

### Presentation

This endpoint __retrieves all the interpretations extracted from a sentence__ passed as parameter.

_Request example:_

Get structured data from sentence "three quarters of an hour and 5 minutes" with available agent `viky/time` interpretations.

```shell
curl -G "https://viky-beta.viky.ai/api/v1/agents/viky/time/interpret.json?" \
     --data-urlencode "sentence=three quarters of an hour and 5 minutes" \
     -H "Agent-Token: the-agent-token"
```

_JSON response:_

```json
{
  "interpretations": [
    {
      "id": "dd3ae8d2-812d-42ca-a551-b9219dd047ce",
      "slug": "viky/time/interpretations/duration_time",
      "name": "duration_time",
      "score": 0.99,
      "solution": {
        "duration": "PT50M"
      }
    }
  ]
}
```

### Available query parameters

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>:owner</code>
        <span class="tag tag--warning">required</span>
      </td>
      <td>
        <p>
          The username of the agent's owner.
          <small>Example: <code>viky</code></small>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>:agent</code>
        <span class="tag tag--warning">required</span>
      </td>
      <td>
        The name of the agent.
        <small>Example: <code>time</code></small>
      </td>
    </tr>
    <tr>
      <td>
        <code>sentence</code>
        <span class="tag tag--warning">required</span>
      </td>
      <td>
        <p>
          The sentence to be processed by the AI.
        </p>
        <p>
          <small>Example: <code>three quarters of an hour and 5 minutes</code></small>
        </p>
      </td>
    </tr>
    <tr>
      <td><code>language</code></td>
      <td>
        <p>
          The language code in which the sentence is written.
        </p>
        <p>
          Use the <a href="https://tools.ietf.org/html/rfc7231#section-5.3.5">HTTP Header Accept-Language conventions</a>.
        </p>
        <p>
          <small>Example: <code>en-US, en;q=0.9</code></small>
        </p>
      </td>
    </tr>
    <tr>
      <td><code>spellchecking</code></td>
      <td>
        <p>
          How wide the spellchecking is run.
        </p>
        <p>
          Possible values are : <code>inactive</code>, <code>low</code>, <code>medium</code> or <code>high</code>.
        </p>
        <p>
          Default value is <code>low</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>now</code></td>
      <td>
        <p>
          The user current time with the UTC offset.
        </p>
        <p>
          <small>Example: <code>2017-12-20T08:30:20+01:00</code></small>
        </p>
      </td>
    </tr>
    <tr>
      <td><code>context</code></td>
      <td>
        <p>
          A custom JSON hash for statistics purpose.
        </p>
        <p>
          <small>Example: <code>{ session_id: '0112f97b', bot_version: '1.2' }</code></small>
        </p>
      </td>
    </tr>
  </tbody>
</table>
