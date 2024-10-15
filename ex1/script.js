function addListItem() {
  const newValue = document.getElementById("inputText").value;
  const list = document.getElementById("unorderedList");

  if (newValue) {
    const newElement = `<li>${newValue}</li>`;
    list.innerHTML += newElement;

    document.getElementById("inputText").value = "";
  }
}

function clearList() {
  const list = document.getElementById("unorderedList");
  list.innerHTML = "";
}
