"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./src/return-html"), exports);
__exportStar(require("./src/return-data"), exports);
const return_html_1 = require("src/return-html");
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
const api = (0, return_html_1.getContentById)(htmlData, `<div class="blue" id="blue-div">`);
console.log(api);
//# sourceMappingURL=index.js.map