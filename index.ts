export * from "./src/return-html";
export * from "./src/return-data";

import {
  getContentById,
  getContentByUniqueText,
  getContentBetweenTags,
} from "src/return-html";

const htmlData = `
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
`;

const api = getContentById(htmlData, `<div class="blue" id="blue-div">`);

console.log(api);
