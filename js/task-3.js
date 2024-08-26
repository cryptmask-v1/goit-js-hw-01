function getElementWidth(content, padding, border) {
  const content = parseFloat(content); // "50px" -> 50
  const padding = parseFloat(padding); // "8px" -> 8
  const border = parseFloat(border); // "4px" -> 4

  const totalWidth = content + padding + border;

  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
