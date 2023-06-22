export function grabHrefValues(html) {
    const hrefRegex = /href="([^"]*)"/g;
    const matches = html.match(hrefRegex);
    if (!matches) {
        return [];
    }
    return matches.map((match) => match.replace('href="', "").replace('"', ""));
}
export function grabSrcValues(html) {
    const srcRegex = /src="([^"]*)"/g;
    const matches = html.match(srcRegex);
    if (!matches) {
        return [];
    }
    return matches.map((match) => match.replace('src="', "").replace('"', ""));
}
export function grabHrefValuesWithTag(html, tagName) {
    const hrefRegex = new RegExp(`<${tagName}\\s+[^>]*href="([^"]*)"`, "g");
    const matches = html.match(hrefRegex);
    if (!matches) {
        return [];
    }
    return matches.map((match) => match.replace(new RegExp(`<${tagName}\\s+[^>]*href="`), "").replace('"', ""));
}
export function grabSrcValuesWithTag(html, tagName) {
    const srcRegex = new RegExp(`<${tagName}\\s+[^>]*href="([^"]*)"`, "g");
    const matches = html.match(srcRegex);
    if (!matches) {
        return [];
    }
    return matches.map((match) => match.replace(new RegExp(`<${tagName}\\s+[^>]*href="`), "").replace('"', ""));
}
export function grabHrefValuesWithTagAndEndString(html, tagName, endingString) {
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
export function grabSrcValuesWithTagAndEndString(html, tagName, endingString) {
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
//# sourceMappingURL=index.js.map