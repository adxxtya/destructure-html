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
