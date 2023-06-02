export function findTagById(data: string, text: string): string | undefined {
  if (data.includes(text)) {
    const startIndex = data.lastIndexOf("<", data.indexOf(text));
    const endIndex = data.indexOf(">", data.indexOf(text)) + 1;
    const extractedText = data.slice(startIndex, endIndex);
    return extractedText;
  } else {
    throw new Error("The specific text was not found.");
  }
}

export function findTagByClass(
  data: string,
  className: string
): string | number {
  const classIndexes = [];
  let count = 0;
  let elementText = "";

  let index = data.indexOf('class="');
  while (index !== -1) {
    classIndexes.push(index);
    index = data.indexOf('class="', index + 1);
  }

  for (let i = 0; i < classIndexes.length; i++) {
    const classIndex = classIndexes[i];
    const nextIndex = classIndex + 7;

    if (
      data.substr(nextIndex, className.length) === className &&
      data[nextIndex + className.length] === '"'
    ) {
      count++;
      elementText = "";
    }

    let start = classIndex;
    while (start > 0 && data[start] !== "<") {
      start--;
    }

    let end = classIndex + 7 + className.length;
    while (end < data.length && data[end] !== ">") {
      end++;
    }

    if (count === 1) {
      elementText = data.slice(start, end + 1);
    }
  }

  if (count === 1) {
    return elementText;
  }

  return count;
}
