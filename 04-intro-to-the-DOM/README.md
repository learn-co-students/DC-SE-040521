# Document Object Model vs. HTML

- Tree of Nodes

### DOM nodes, parent child sibling relationships

- You can traverse from parent to child,
- or better yet, user selectors

### Selectors and how to use them

| Selector name                   | Return shape   | Return type    | Reference             |
| ------------------------------- | -------------- | -------------- | --------------------- |
| `node.getElementById()`         | Single element | Element        | https://goo.gl/8cHGoy |
| `node.getElementsByClassName()` | Collection     | HTMLCollection | https://goo.gl/qcAhcp |
| `node.getElementsByTagName()`   | Collection     | HTMLCollection | https://goo.gl/QHozSh |
| `node.querySelector()`          | Single element | Element        | https://goo.gl/6Pqbcc |
| `node.querySelectorAll()`       | Collection     | NodeList       | https://goo.gl/vTfXza |

### Practice Manipulating the DOM

- Twitter
- content
- css styling
- [DIY](https://en.wikipedia.org/wiki/Document_Object_Model)
- innerHTML vs. innerText

### DOM CRUD

- `document.createElement()`
- `parentNode.appendChild(childNode)`
- `innerHTML`
- `parentNode.removeChild(childNode)` or `node.remove()`

### Customer HTML attributes (metadata)

- [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
