"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentByUniqueText = exports.getContentById = exports.getContentInBetweenTags = exports.getContentBetweenTags = void 0;
const Traverse_1 = require("../Traverse");
function getContentBetweenTags(html, openingTag) {
    let openingTagCount = 0;
    let closingTagCount = 0;
    let startIndex = html.indexOf(openingTag);
    if (startIndex === -1) {
        throw new Error("Opening tag not found in HTML data.");
    }
    for (let i = startIndex; i < html.length; i++) {
        if (html.substring(i, i + 4) === "<div") {
            openingTagCount++;
        }
        else if (html.substring(i, i + 5) === "</div") {
            closingTagCount++;
            if (closingTagCount === openingTagCount) {
                const endIndex = i + 6; // Include the closing tag in the result
                return html.substring(startIndex, endIndex);
            }
        }
    }
    throw new Error("Closing tag not found in HTML data.");
}
exports.getContentBetweenTags = getContentBetweenTags;
function getContentInBetweenTags(html, openingTag, closingTag) {
    const openingTagElement = openingTag.split(" ")[0].substring(1); // Extract the opening tag element from the provided openingTag parameter
    const openingTagStart = `<${openingTagElement}`;
    const closingTagElement = closingTag.substring(2, closingTag.length - 1); // Extract the closing tag element from the provided closingTag parameter
    const closingTagEnd = `</${closingTagElement}`;
    const startIndex = html.indexOf(openingTagStart);
    if (startIndex === -1) {
        throw new Error("Opening tag not found in HTML data.");
    }
    let openingTagCount = 0;
    let closingTagCount = 0;
    let endIndex = -1;
    for (let i = startIndex; i < html.length; i++) {
        if (html.substring(i, i + openingTagStart.length) === openingTagStart) {
            openingTagCount++;
        }
        else if (html.substring(i, i + closingTagEnd.length) === closingTagEnd) {
            closingTagCount++;
            if (closingTagCount === openingTagCount) {
                endIndex = i + closingTagEnd.length;
                break;
            }
        }
    }
    if (endIndex === -1) {
        throw new Error("Closing tag not found in HTML data.");
    }
    return html.substring(startIndex, endIndex);
}
exports.getContentInBetweenTags = getContentInBetweenTags;
function getContentById(html, id) {
    const helper = (0, Traverse_1.findTagById)(html, id);
    if (helper === undefined) {
        throw new Error(`Element with ID "${id}" not found in HTML data.`);
    }
    return getContentBetweenTags(html, helper);
}
exports.getContentById = getContentById;
function getContentByUniqueText(html, id) {
    const idIndex = html.indexOf(`"${id}"`);
    if (idIndex === -1) {
        throw new Error(`Element with ID "${id}" not found in HTML data.`);
    }
    const openingTagStartIndex = html.lastIndexOf("<", idIndex);
    const openingTagEndIndex = html.indexOf(">", openingTagStartIndex);
    if (openingTagStartIndex === -1 || openingTagEndIndex === -1) {
        throw new Error(`Opening tag for element with ID "${id}" not found in HTML data.`);
    }
    const openingTag = html.substring(openingTagStartIndex, openingTagEndIndex + 1);
    const closingTagStartIndex = html.indexOf("</", openingTagEndIndex);
    const closingTagEndIndex = html.indexOf(">", closingTagStartIndex);
    if (closingTagStartIndex === -1 || closingTagEndIndex === -1) {
        throw new Error(`Closing tag for element with ID "${id}" not found in HTML data.`);
    }
    const closingTag = html.substring(closingTagStartIndex, closingTagEndIndex + 1);
    return getContentInBetweenTags(html, openingTag, closingTag);
}
exports.getContentByUniqueText = getContentByUniqueText;
//# sourceMappingURL=index.js.map