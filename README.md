<div align="center">
  <img src="./logo.svg" alt="logo" style="" />
</div>
<div align="center">
  <h1>Destructure HTML</h1>
</div>


<p align="center" style="line-height: 2;">
  <a href="https://www.npmjs.com/package/destructure-html" target="_blank"><img src="https://img.shields.io/npm/v/destructure-html.svg?style=flat-square&color=007acc&label=version&logo=NPM" alt="version" /></a>
  <a href="https://www.npmjs.com/adxxtya/destructure-html" target="_blank"><img alt="npm weekly downloads" src="https://img.shields.io/npm/dw/destructure-html?logo=npm&style=flat-square&color=007acc" /></a>
    <a href="https://www.npmjs.com/adxxtya/destructure-html" target="_blank"><img alt="npm bundle size (scoped)" src="https://img.shields.io/bundlephobia/minzip/destructure-html.svg?style=flat-square&label=%F0%9F%92%BE%20gzipped&color=007acc" /></a>
    <a href="https://github.com/adxxtya/destructure-html/blob/master/LICENSE" target="_blank"><img alt="GitHub" src="https://img.shields.io/github/license/adxxtya/destructure-html.svg?style=flat-square&label=%F0%9F%93%9C%20license&color=08CE5D" /></a>
</p>

<div align="center">
  <h3>Before using the package, you can try it out <a href="https://adxxtya.github.io/destructure-html/">Live</a> </h3>
</div>


The destructure-html is a lightweight package that simplifies HTML deconstruction and data extraction, making it easy to extract information & elements from complex HTML structures.

Install the package:

> npm i destructure-html


This package 
- was created to extract relevant information seamlessly from scraped data
- enables destructuring data which is in the form of html
- constructs data in any form from raw html

**New features will be consistently updated and released on a regular basis.**

---

### 🏃 Quick Start

> CommonJS

```javascript
// commonjs require statement
const dsh = require('destructure-html')


// scraped data from netflix
const htmlData = `
<div class="lolomoRow ltr-0" data-context="genre">42479280414AECBB...
<div class="lolomoRow ltr-0" data-context="continueWatching"><h2 class="rowHeader"...
<div class="lolomoRow  ltr-0" data-context="trendingNow"><h2 class="rowHeader ltr-0"...
`;


// This will return an array of src values which may containt images or other important data from the html content
const getHtmlText = dsh.grabSrcValues(htmlData)
console.log(getHtmlText);



// output: [
//  'https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaJ71EC0meuaQJkcwU3H1IVx-9PSbCQ-1vzPySh7k3264YotnvQ9lQmPQP_S_cb95GRP9lUkJsTlkmGcIpqXspMai9q5C_2Mq-k.jpg?r=183',
  .
  .
  .
//  'https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeo26eQTyK5t9xceCCE86N3JsqgZ2eCMMsHxyBzGx8UTvD8-aHTe6EAtYMbn5R4gfMWLRNbUhOZZljpBjZ8zTIiPJjt3L-3TWyKv-5fSvooKuS0sLg0v0oT9--ay1HFx3MU3.jpg?r=438' ]
```

> ModernJS

```javascript
// modernjs import statement
import { getContentByUniqueText } from 'destructure-html'


// scraped data from netflix
const exampleHtmlData = `
<div class="lolomoRow ltr-0" data-context="genre">42479280414AECBB...
<div class="lolomoRow ltr-0" data-context="continueWatching"><h2 class="rowHeader"...
<div class="lolomoRow  ltr-0" data-context="trendingNow"><h2 class="rowHeader ltr-0"...
`;


// This will return the whole html content from the starting of the tag with a unique text
// like an unique class or other attribute that only the div contains in the whole page
const htmlTag = getContentByUniqueText(html, "continueWatching")
console.log(htmlTag);



// output: <div class="lolomoRow ltr-0" data-context="continueWatching"><h2 
// class="title">Continue Watching for Aditya</div><div class="aro - row 
// - header more - visible"><div><di ... div></div></div></div></div>
```

> CDN package

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">


    <!-- The package can be imported via CDN links as well -->
    <script src="https://unpkg.com/destructure-html@1.1.0/lib/es5/index.js"></script>


    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    I don't know what I'm doing with my life.
</body>
</html>
```


---

### ✂️ What to use When && When to use What

To establish a clearer relationship with the table below, let's consider the following example data.

> Example data (htmlData)


const htmlData = 
```html
<div class="gray">
    <p>Some text</p>
    <div class="blue" id="blue-div">
      <div>More text</div>
      <a href="https://lorem-ipsum.com/browse/69">
        <img src="https://placeholder.com/first.png" alt="" />
      </a>
    </div>
    <div class="blue">
      <div>Some More text</div>
      <a href="https://lorem-ipsum.com/browse/420">
        <img src="https://placeholder.com/second.png" alt="" />
      </a>    
    </div>
</div>
<div>
    <p>Another paragraph</p>
</div>
```



| Functions | Parameter(s) | Parameter Example | Output | Takes | Returns |
| --- | --- | --- | --- | --- | --- |
| `grabHrefValues()` | html <br> (string) | `grabHrefValues(htmlData);` | [ <br>'https://lorem-ipsum.com/browse/69',<br> 'https://lorem-ipsum.com/browse/420' <br>] | Accepts the HTML data as a parameter. | Returns an array of all href values found in the provided input. |
| `grabSrcValues()` | html <br> (string) | `grabSrcValues(htmlData);` | [ <br>'https://placeholder.com/first.png',<br> 'https://placeholder.com/second.png' <br>] | Accepts the HTML data as a parameter. | Returns an array of all src values found in the provided input. |
| `findNestedTexts()` | html <br> (string) | `const htmlText = findNestedTexts(exampleHtmlData);` | [ 'Some text', 'More text', 'Some More text', 'Another paragraph' ] | Accepts the complete HTML data as a parameter. | Returns an array containing all the text found at different locations within the HTML data. |
| `getContentById()` | html (string), <br> id (string) | `const htmlContent = getContentById(exampleHtmlData, "blue-div");` | &lt;div class="blue" id="blue-div"&gt;<br>&lt;div&gt;More text&lt;/div&gt;<br>&lt;a href="https://lorem-ipsum.com/browse/69"&gt;!\[alt\](https//placeholder.com/first.png)&lt;/a&gt;<br>&lt;/div&gt;| Important: The ID should be a unique identifier present only within this element. Accepts the HTML data and a unique ID as parameters. | Returns the entire HTML content of the specified element, including its tags and inner content, which can be used to extract text or other relevant data later. |
| `findTagById()` | htmlData,<br>uniqueId | `findTagById(exampleHtmlData, "gray");` | `<div id="gray">` | Accepts the HTML data and a unique text identifier present within the HTML tag as parameters. | Returns the complete opening tag of the HTML element matching the specified ID, without its content or closing tag. |
| `findTagByClass()` | htmlData,<br>className | `const htmlTag = findTagByClass(exampleHtmlData, "blue");` | 2 | Accepts the HTML data and a class name used for styling as parameters. | If there is a single HTML tag with the provided class name, it returns a string containing the entire HTML tag similar to the findTagById() function. If there are multiple HTML tags with the same class, it returns the total count of occurrences. |  
| `getContentBetweenTags()` | htmlData,<br>openingTag | ```const htmlContent = getContentBetweenTags(exampleHtmlData, `<div class="gray">`);``` | &lt;div class="gray"&gt;<br>  &lt;p&gt;Some text&lt;/p&gt;<br>  &lt;div class="blue"&gt;<br>  &lt;div&gt;More text&lt;/div&gt;<br>  &lt;/div&gt;<br>  &lt;div class="blue"&gt;<br>  &lt;div&gt;Some More text&lt;/div&gt;<br>  &lt;/div&gt;<br>&lt;/div&gt; | Accepts the HTML data and the complete opening tag of a div element (obtained from either findTagById() or findTagByClass()) as parameters. | Returns all the HTML content starting from the specified opening tag, including all content within until the closing tag. |  


---

### 🙌 Contributing

Contributions to destructure-html are welcome and encouraged! To contribute to the project, follow these steps:

1. Fork the repository and clone it to your local machine.
2. Set up your development environment.
3. Make changes or add new features to the codebase.
4. Write tests to ensure the code behaves as expected.
5. Commit your changes and push them to your forked repository.
6. Submit a pull request with a clear description of the changes you made and their purpose.
7. Your pull request will be reviewed by the maintainers, and any necessary feedback will be provided.
8. Once your changes pass the review process, they will be merged into the main repository.

By contributing to destructure-html, you help improve the package and make it more robust for everyone to use.

---

### 📲 Contact me 

If you have any questions, feedback, or need support with destructure-html, you can reach out to me through the following channels:

    GitHub Issues: https://github.com/adxxtya/destructure-html/issues

I am always ready to assist you and appreciate any feedback or suggestions you may have.