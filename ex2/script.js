document.getElementById("inputText").addEventListener("keyup", function () {
  let liElement = document.getElementById("liElement");
  let inputText = document.getElementById("inputText").value;

  liElement.textContent = inputText;
});
