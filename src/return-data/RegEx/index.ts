export function findNestedTexts(html: string): string[] {
  const texts: string[] = [];

  const withoutComments = html.replace(/<!--[\s\S]*?-->/g, "");

  const pattern = />([^<]*)</g;
  let match;

  while ((match = pattern.exec(withoutComments)) !== null) {
    const text = match[1].trim();
    if (text.length > 0) {
      texts.push(text);
    }
  }

  return texts;
}

function getContentInBetweenTags(
  html: string,
  openingTag: string,
  closingTag: string
): string {
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
    } else if (html.substring(i, i + closingTagEnd.length) === closingTagEnd) {
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
