---
layout: doc
title: "Sample guide"
---

<aside class="important">
  <p>
    This page presents the possibilities offered by the documentation publication system based on Markdown format.
  </p>
</aside>


## Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text. You should not indent paragraphs with spaces or tabs.

You can add emphasis by making text **bold** or *italic*.


## Headings

To create a heading, add number signs (`#`) in front of a word or phrase. The number of number signs you use should correspond to the heading level.

### Headings (level 3)
#### Headings (level 4)
##### Headings (level 5)
###### Headings (level 6)


## List

You can organize items into ordered and unordered lists.

### Unordered Lists

To create an unordered list, add dashes, asterisks, or plus signs in front of line items. Indent one or more items to create a nested list.

* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
* Enim facere ea assumenda saepe labore :
  * Exercitationem ad tempora commodi.
  * Animi voluptatum consequuntur quos.
* Aut quod libero nam perferendis iure blanditiis voluptatibus.

### Ordered Lists

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
2. Enim facere ea assumenda saepe labore :
    1. Exercitationem ad tempora commodi.
    2. Animi voluptatum consequuntur quos.
3. Aut quod libero nam perferendis iure blanditiis voluptatibus.


## Blockquotes

> There is only one God, his name is Death. And there is only one thing we say
> to Death : “Not today”.
> <cite>Game of Thrones, Syrio Forel to Arya.</cite>


## Images

Images are automatically transformed into a `figure`. If present, image title attribute is used to generate `figcaption`.

![Aerial view of a beach](img/nature.jpg "Nature is beautiful")


## Code

### Inline code

To denote a word or phrase as code, enclose it in tick marks.<br />
For example: `this is code`, right?


### Block code

To create code blocks, indent every line of the block by at least four spaces or one tab.

    {
      "solution": {
        "type": "query",
        "joke": {
          "query": "Anton, do you think I’m a bad mother?",
          "response": "My name is Paul."
        }
      }
    }

To set up syntax highlighting use fenced code blocks markup.

Ruby code sample:

```ruby
class Array
  def extract!
    return to_enum(:extract!) { size } unless block_given?
    extracted_elements = []
    reject! do |element|
      extracted_elements << element if yield(element)
    end
    extracted_elements
  end
end
```

JSON code sample:

```json
{
  "solution": {
    "developper": true,
    "name": "Michel"
  }
}
```

