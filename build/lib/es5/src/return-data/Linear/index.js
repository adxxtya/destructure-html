"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grabSrcValuesWithTagAndEndString = exports.grabHrefValuesWithTagAndEndString = exports.grabSrcValuesWithTag = exports.grabHrefValuesWithTag = exports.grabSrcValues = exports.grabHrefValues = void 0;
function grabHrefValues(html) {
    const hrefRegex = /href="([^"]*)"/g;
    const matches = html.match(hrefRegex);
    if (!matches) {
        return [];
    }
    return matches.map((match) => match.replace('href="', "").replace('"', ""));
}
exports.grabHrefValues = grabHrefValues;
function grabSrcValues(html) {
    const srcRegex = /src="([^"]*)"/g;
    const matches = html.match(srcRegex);
    if (!matches) {
        return [];
    }
    return matches.map((match) => match.replace('src="', "").replace('"', ""));
}
exports.grabSrcValues = grabSrcValues;
function grabHrefValuesWithTag(html, tagName) {
    const hrefRegex = new RegExp(`<${tagName}\\s+[^>]*href="([^"]*)"`, "g");
    const matches = html.match(hrefRegex);
    if (!matches) {
        return [];
    }
    return matches.map((match) => match.replace(new RegExp(`<${tagName}\\s+[^>]*href="`), "").replace('"', ""));
}
exports.grabHrefValuesWithTag = grabHrefValuesWithTag;
function grabSrcValuesWithTag(html, tagName) {
    const srcRegex = new RegExp(`<${tagName}\\s+[^>]*href="([^"]*)"`, "g");
    const matches = html.match(srcRegex);
    if (!matches) {
        return [];
    }
    return matches.map((match) => match.replace(new RegExp(`<${tagName}\\s+[^>]*href="`), "").replace('"', ""));
}
exports.grabSrcValuesWithTag = grabSrcValuesWithTag;
function grabHrefValuesWithTagAndEndString(html, tagName, endingString) {
    const hrefRegex = new RegExp(`<${tagName}\\s+[^>]*href="([^"]*)"`, "g");
    const matches = html.match(hrefRegex);
    if (!matches) {
        return [];
    }
    return matches
        .map((match) => match
        .replace(new RegExp(`<${tagName}\\s+[^>]*href="`), "")
        .replace('"', ""))
        .filter((url) => endingString.some((extension) => url.endsWith(`.${extension}`)));
}
exports.grabHrefValuesWithTagAndEndString = grabHrefValuesWithTagAndEndString;
function grabSrcValuesWithTagAndEndString(html, tagName, endingString) {
    const srcRegex = new RegExp(`<${tagName}\\s+[^>]*href="([^"]*)"`, "g");
    const matches = html.match(srcRegex);
    if (!matches) {
        return [];
    }
    return matches
        .map((match) => match
        .replace(new RegExp(`<${tagName}\\s+[^>]*href="`), "")
        .replace('"', ""))
        .filter((url) => endingString.some((extension) => url.endsWith(`.${extension}`)));
}
exports.grabSrcValuesWithTagAndEndString = grabSrcValuesWithTagAndEndString;
//# sourceMappingURL=index.js.map