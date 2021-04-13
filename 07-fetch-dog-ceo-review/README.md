# Fetch Dog CEO Challenge

## Learning Goals

- Practice accessing information from APIs and using it to update the DOM
- Practice listening for user events and updating the DOM in response

## Introduction

In this lab, you will write JavaScript to get images of dogs and a list of dog
breeds from API's and render them to the DOM. You will also add some click
behavior to the list elements and implement a filter.

> **Note**: this lab does not contain tests. You will be working from the
requirements described below and verifying that your code is working correctly
in the browser.

## Challenge 1

This repository includes an `index.html` file that loads an `index.js` file.

```js
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
```

Add JavaScript that:

- on page load, fetches the images using the url above ⬆️
- parses the response as `JSON`
- adds image elements to the DOM **for each** 🤔 image in the array

---

## Challenge 2

```js
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
```

After the first challenge is completed, add JavaScript that:

- on page load, fetches all the dog breeds using the url above ⬆️
- adds the breeds to the page in the `<ul>` provided in `index.html`

---

## Challenge 3

Once all of the breeds are rendered in the `<ul>`, add JavaScript so that, when
the user clicks on any one of the `<li>`s, the font color of that `<li>`
changes. This can be a color of your choosing.

---

## Challenge 4

Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
so that the user can filter breeds that start with a particular letter using a
[dropdown](https://www.w3docs.com/learn-html/html-select-tag.html).

For example, if the user selects 'a' in the dropdown, only show the breeds with
names that start with the letter a. For simplicity, the dropdown only includes
the letters a-d. However, we can imagine expanding this to include the entire
alphabet.

---

![dog ceo](https://dog.ceo/img/dog.jpg)
