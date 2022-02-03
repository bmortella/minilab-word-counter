const text = document.getElementById("text");
const count = document.getElementById("count");
const countButton = document.getElementById("count-btn");

let wordCount = 0;
countButton.onclick = function () {
  const words = text.value.split(" ");
  wordCount = words.length;
  if (wordCount === 1 && !words[0]) {
    wordCount = 0;
  }
  count.innerHTML = `Você digitou ${wordCount} palavras`;
};
