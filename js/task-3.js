function getElementWidth(content, padding, border) {
  const width1Value = parseFloat(content); // "50px" -> 50
  const width2Value = parseFloat(padding); // "8px" -> 8
  const width3Value = parseFloat(border); // "4px" -> 4

  const totalWidth = width1Value + width2Value + width3Value;

  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101.5
console.log(getElementWidth("200px", "0px", "0px")); // 200
