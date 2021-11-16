export function removeSpecialCharacters(text: string) {
  const div = document.createElement('div');
  div.innerHTML = text;
  // console.log(div.innerText);
  return div.innerText;
}
