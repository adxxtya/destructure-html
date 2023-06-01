export default function findElementTagByText(data: string, text: string) {
  if (data.includes(text)) {
    const startIndex = data.lastIndexOf("<", data.indexOf(text));
    const endIndex = data.indexOf(">", data.indexOf(text)) + 1;
    const extractedText = data.slice(startIndex, endIndex);
    console.log("Extracted text:", extractedText);
  } else {
    console.log("The specific text is not found in the data.");
  }
}
