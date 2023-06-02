<div align="center">
  <h1>Destructure HTML</h1>
</div>


The destructure-html package simplifies HTML deconstruction and data extraction, making it easy to extract information & elements from complex HTML structures.

Install the package:

```npm i -g destructure-html```

This package 
- was created to extract relevant information seamlessly from scraped data
- enables destructuring data which is in the form of html

**New features will be consistently updated and released on a regular basis.**

---

### How to use

> CommonJS

```
// commonjs require statement
const dsh = require('destructure-html')


// scraped data from netflix
const htmlData = `
<div class="lolomoRow ltr-0" data-context="genre">42479280414AECBB...
<div class="lolomoRow ltr-0" data-context="continueWatching"><h2 class="rowHeader"...
<div class="lolomoRow  ltr-0" data-context="trendingNow"><h2 class="rowHeader ltr-0"...
`;


// This will return an array of texts from the html content

const getHtmlText = dsh.findNestedTexts(htmlData)
console.log(getHtmlText);


// output: [ 'TV Shows', 'Suits', 'Cowboy Bebop', ...
//    'Continue Watching for Aditya', 'Rick and Morty', ...
//    'Selected for You Today', 'The Office (U.S.)' ... ]
```

> ModernJS

```
// modernjs import statement
import { findTagById, getContentBetweenTags } from 'destructure-html'


// scraped data from netflix
const exampleHtmlData = `
<div class="lolomoRow ltr-0" data-context="genre">42479280414AECBB...
<div class="lolomoRow ltr-0" data-context="continueWatching"><h2 class="rowHeader"...
<div class="lolomoRow  ltr-0" data-context="trendingNow"><h2 class="rowHeader ltr-0"...
`;


// This will return the whole html Tag with something unique
// like an ID or unique class that only the div contains 

const htmlTag = findTagById(exampleHtmlData, "continueWatching")
console.log(htmlTag);


// output:  <div class="lolomoRow ltr-0" data-context="continueWatching">


// The previous output can now be used to find the texts
// only between the opening and closing tag 

const data = getContentBetweenTags(exampleHtmlData, htmlTag)
console.log(data);


// output: <div class="lolomoRow ltr-0" data-context="continueWatching"><h2 
// class="title">Continue Watching for Aditya</div><div class="aro - row 
// - header more - visible"><div><di ... div></div></div></div></div >


// This can be now used with findNestedTexts() to get all the required text within
```

> CDN package

```
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

### What to use When && When to use What

To establish a clearer relationship with the table below, let's consider the following example data.

> Example data (exampleHtmlData)
```
<div class="gray">
    <p>Some text</p>
    <div class="blue">
      <div>More text</div>
    </div>
    <div class="blue">
      <div>Some More text</div>
    </div>
</div>
<div>
    <p>Another paragraph</p>
</div>
```

Scroll Right to view more columns >>>

| Functions | Parameter(s) | Parameter Example | Output | Takes | Returns |
| --- | --- | --- | --- | --- | --- |
| `findTagById()` | htmlData,<br>uniqueId | `findTagById(exampleHtmlData, "gray");` | `<div class="blue">` | The first parameter is the html data you want to be searched through <br> Secondly, a unique text that is only available in that html tag (can be anything, like "gray" here is only available once in the whole data). | The whole html **opening tag**, but doesn't provide the content and closing tag. |
| `findTagByClass()` | htmlData,<br>className | `const htmlTag = findTagByClass(exampleHtmlData, "blue");` | 2 | The first parameter is again the html data you want the data to be extracted from <br> Second parameter is the class name used for styling the html. | If there is a single html tag with the className provided, it returns a string of the whole html tag like "findTagById()" function, but if there are more than one html tag with the same class it returns the total number of times the class is being repeated. |  
| `findTagByClass()` | htmlData,<br>className | `const htmlTag = findTagByClass(exampleHtmlData, "gray");` | `<div class="gray">` | The first parameter is the html data you want the data to be extracted from <br> Second parameter is the class name used for styling the html. | If there is a single html tag with the className provided, it returns a string of the whole html tag like "findTagById()" function, but if there are more than one html tag with the same class it returns the total number of times the class is being repeated. |  
| `getContentBetweenTags()` | htmlData,<br>openingTag | ```const htmlContent = getContentBetweenTags(exampleHtmlData, `<div class="gray">`);``` | &lt;div class="gray"&gt;<br>  &lt;p&gt;Some text&lt;/p&gt;<br>  &lt;div class="blue"&gt;<br>  &lt;div&gt;More text&lt;/div&gt;<br>  &lt;/div&gt;<br>  &lt;div class="blue"&gt;<br>  &lt;div&gt;Some More text&lt;/div&gt;<br>  &lt;/div&gt;<br>&lt;/div&gt; | The first parameter is the data to be searched from and the second parameter is whole div tag (this div tag can be obtained from either findTagById() or findTagByClass()). | This function returns all the html content starting **from the opening tag, with all the content in the middle till the closing tag**. |  
| `findNestedTexts()` | htmlData | `const htmlText = findNestedTexts(exampleHtmlData);` | [ 'Some text', 'More text', 'Some More text', 'Another paragraph' ] | There is only one parameter which is the whole html data you got. | This will return an array with all the text at different places in the data. |
 
---

### Contributing

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

### Contact me 

If you have any questions, feedback, or need support with destructure-html, you can reach out to me through the following channels:

    GitHub Issues: https://github.com/adxxtya/destructure-html/issues

I am always ready to assist you and appreciate any feedback or suggestions you may have.