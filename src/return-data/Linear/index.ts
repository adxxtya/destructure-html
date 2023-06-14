export function grabHrefValues(html: string): string[] {
  const hrefRegex = /href="([^"]*)"/g;
  const matches = html.match(hrefRegex);

  if (!matches) {
    return [];
  }

  return matches.map((match) => match.replace('href="', "").replace('"', ""));
}

export function grabSrcValues(html: string): string[] {
  const srcRegex = /src="([^"]*)"/g;
  const matches = html.match(srcRegex);

  if (!matches) {
    return [];
  }

  return matches.map((match) => match.replace('src="', "").replace('"', ""));
}

export function grabHrefValuesWithTag(html: string, tagName: string): string[] {
  const hrefRegex = new RegExp(`<${tagName}\\s+[^>]*href="([^"]*)"`, "g");
  const matches = html.match(hrefRegex);

  if (!matches) {
    return [];
  }

  return matches.map((match) =>
    match.replace(new RegExp(`<${tagName}\\s+[^>]*href="`), "").replace('"', "")
  );
}

export function grabSrcValuesWithTag(html: string, tagName: string): string[] {
  const srcRegex = new RegExp(`<${tagName}\\s+[^>]*href="([^"]*)"`, "g");
  const matches = html.match(srcRegex);

  if (!matches) {
    return [];
  }

  return matches.map((match) =>
    match.replace(new RegExp(`<${tagName}\\s+[^>]*href="`), "").replace('"', "")
  );
}

export function grabHrefValuesWithTagAndEndString(
  html: string,
  tagName: string,
  endingString: string[]
): string[] {
  const hrefRegex = new RegExp(`<${tagName}\\s+[^>]*href="([^"]*)"`, "g");
  const matches = html.match(hrefRegex);

  if (!matches) {
    return [];
  }

  return matches
    .map((match) =>
      match
        .replace(new RegExp(`<${tagName}\\s+[^>]*href="`), "")
        .replace('"', "")
    )
    .filter((url) =>
      endingString.some((extension) => url.endsWith(`.${extension}`))
    );
}

export function grabSrcValuesWithTagAndEndString(
  html: string,
  tagName: string,
  endingString: string[]
): string[] {
  const srcRegex = new RegExp(`<${tagName}\\s+[^>]*href="([^"]*)"`, "g");
  const matches = html.match(srcRegex);

  if (!matches) {
    return [];
  }

  return matches
    .map((match) =>
      match
        .replace(new RegExp(`<${tagName}\\s+[^>]*href="`), "")
        .replace('"', "")
    )
    .filter((url) =>
      endingString.some((extension) => url.endsWith(`.${extension}`))
    );
}
