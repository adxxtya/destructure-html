export function getContentBetweenTags(
  html: string,
  openingTag: string
): string {
  let openingTagCount = 0;
  let closingTagCount = 0;
  let startIndex = html.indexOf(openingTag);

  if (startIndex === -1) {
    throw new Error("Opening tag not found in HTML data.");
  }

  for (let i = startIndex; i < html.length; i++) {
    if (html.substring(i, i + 4) === "<div") {
      openingTagCount++;
    } else if (html.substring(i, i + 5) === "</div") {
      closingTagCount++;
      if (closingTagCount === openingTagCount) {
        const endIndex = i + 6;
        return html.substring(startIndex, endIndex);
      }
    }
  }

  throw new Error("Closing tag not found in HTML data.");
}
