export function getContentBetweenTags(
  html: string,
  openingTag: string
): string {
  let openingTagCount = 0;
  let closingTagCount = 0;
  const openingTagElement = openingTag.split(" ")[0].substring(1); // Extract the opening tag element from the provided openingTag parameter
  const openingTagStart = `<${openingTagElement}`;
  const openingTagEnd = `</${openingTagElement}`;

  let startIndex = html.indexOf(openingTagStart);

  if (startIndex === -1) {
    throw new Error("Opening tag not found in HTML data.");
  }

  for (let i = startIndex; i < html.length; i++) {
    if (html.substring(i, i + openingTagStart.length) === openingTagStart) {
      openingTagCount++;
    } else if (html.substring(i, i + openingTagEnd.length) === openingTagEnd) {
      closingTagCount++;
      if (closingTagCount === openingTagCount) {
        const endIndex = i + openingTagEnd.length;
        return html.substring(startIndex, endIndex);
      }
    }
  }

  throw new Error("Closing tag not found in HTML data.");
}

export function getContentInBetweenTags(
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

export function getContentById(html: string, id: string): string {
  const idIndex = html.indexOf(`id="${id}"`);

  if (idIndex === -1) {
    throw new Error(`Element with ID "${id}" not found in HTML data.`);
  }

  const openingTagStartIndex = html.lastIndexOf("<", idIndex);
  const openingTagEndIndex = html.indexOf(">", openingTagStartIndex);

  if (openingTagStartIndex === -1 || openingTagEndIndex === -1) {
    throw new Error(
      `Opening tag for element with ID "${id}" not found in HTML data.`
    );
  }

  const openingTag = html.substring(
    openingTagStartIndex,
    openingTagEndIndex + 1
  );

  const closingTagStartIndex = html.indexOf("</", openingTagEndIndex);
  const closingTagEndIndex = html.indexOf(">", closingTagStartIndex);

  if (closingTagStartIndex === -1 || closingTagEndIndex === -1) {
    throw new Error(
      `Closing tag for element with ID "${id}" not found in HTML data.`
    );
  }

  const closingTag = html.substring(
    closingTagStartIndex,
    closingTagEndIndex + 1
  );

  return getContentInBetweenTags(html, openingTag, closingTag);
}
