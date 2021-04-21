# CSS Fundamentals

## Objectives

- Discuss what CSS does and why it's important
- Cover the basics of HTML
- Differentiate between inline, internal, and external stylesheets
- Demonstrate the anatomy of a declaration block
- Understand how to use class, id, and element selectors, and selector order of importance
- Demonstrate the use of the box model
- Demonstrate the use of CSS grid or CSS flexbox in page layout
- Introduce CSS Frameworks like Bootstrap and Semantic UI

## CSS Basics

What does CSS mean?  
Cascading Stylesheets

Why do we use it?
Makes the internet look pretty

## The Good, the Bad and the Ugly

- CSS Zen Garden:  
  csszengarden.com

- My Favorite:  
  lingscars.com

## The basics of HTML

- Some elements need an opening and a closing tag.
  - `<tag>Content</tag>`
  - `<h1>Heading</h1>`
    - h1 - h6
  - `<p>Paragraph</p>`
- You can nest elements within other elements.
  - `<ul></ul>` (Unordered list) / `<ol></ol>` (Ordered list)
    - `<li>List Item</li>`
  - `<div></div>` (block) / `<span></span>` (inline)
- Some elements are self closing.

  - `<tag />`
  - `<br />`
  - `<img />`

- Semantic Elements
  - Semantic = relating to meaning in language or logic.
  - Why?
    - SEO
    - Accessibility
    - Maintainability

## Inline Styling

```
<tag style="property:value or values;”>
```

## Internal Stylesheets

```
<head>
<meta…></meta>
<title…></title>
<style>
  tag {
    property: property value or values;
  }
</style>
</head>
```

## Anatomy of the Declaration Block

selector(s) { <!--rule set-->
property: value or values; <!--declaration-->
property: value; <!--declaration-->
}

## Three Main Types of CSS Selectors

- HTML tags/elements - Least specific
- Classes
  - `.class-name`
- Ids - Most specific
  - `#id-name`

Element Selector:

```
p {
  font-size: 20px;
}
```

Class Selector:

```
.navbar {
  margin-bottom: 0px;
}
```

ID Selector:

```
#main-page-title {
  font-family: sans-serif;
}
```

Selecting Multiple Elements:

```
p, .navbar, #main-page-title {
  color: green;
}
```

## External Stylesheets

- For an external stylesheet we have to add a link in the head that looks something like this:

```
<link rel="stylesheet" href="./stylesheet.css">
```

## The Box Model

4 Elements of the box model:

- Margin
- Border
- Padding
- Content

## Layouts & Positioning - CSS Grid / Flex

Flex-based layout system

- Use this to organize your elements horizontally OR vertically
- CSS Flexbox Froggy is a great resource for this! vvv

Grid-based layout system

- Use this to organize your elements horizontally AND vertically all at once
- CSS Grid Garden is a great resource for this! vvv

These properties make it easy to create well-designed and responsive pages

## CSS Frameworks

Frameworks do a lot of the CSS work for us!!!
You can style your website very quickly by using a framework, but there are some drawbacks.  
[Semantic UI](https://semantic-ui.com/)
[Bootstrap](https://getbootstrap.com/)  
[Materialize](https://materializecss.com/)

## Resources

[Awwwards](https://www.awwwards.com/) - For inspiration  
[codrops](https://tympanus.net/codrops/css_reference/) - Fantastic resource for all things CSS  
[w3schools](https://www.w3schools.com/html/default.asp) - Great HTML resource  
[w3schools](https://www.w3schools.com/html/html_elements.asp) - Great CSS resource  
[CSS Tricks](https://css-tricks.com/) - The best resource for learning and understanding flexbox and grid  
[CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - Takes you straight to the grid page  
[CSS MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) - Another goodie  
[CSS Zen Garden](http://www.csszengarden.com/) - Great examples of some rock solid CSS experiences  
[Flexbox Froggy](https://flexboxfroggy.com/) - THE BEST way to learn flex  
[CSS Grid Garden](http://cssgridgarden.com/) - THE BEST way to learn grid  
[Code Pen](https://codepen.io/) - code examples with code sandbox  
[CSS Grid Generator](https://cssgrid-generator.netlify.app/) - Awesome tool to implement css grid quickly
