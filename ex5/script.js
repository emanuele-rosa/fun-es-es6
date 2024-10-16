const fruits = [
  { name: "abacate", isSelected: false },
  { name: "uva", isSelected: false },
  { name: "maracujá", isSelected: false },
  { name: "mamão", isSelected: false },
  { name: "cereja", isSelected: false },
  { name: "jaboticaba", isSelected: false },
  { name: "jaca", isSelected: false },
  { name: "guaraná", isSelected: false },
];
function createFruitList(fruits) {
  const fruitList = document.getElementById("fruitList");

  fruitList.innerHTML = "";

  fruits.forEach(function (fruit, index) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = fruit.isSelected;

    checkbox.addEventListener("change", function () {
      fruit[index].isSelected = checkbox.checked;
    });

    li.textContent = fruit.name;
    li.appendChild(checkbox);
    fruitList.appendChild(li);
  });
}

function findFruit() {
  createFruitList(fruits);
  const searchText = document.getElementById("searchText").value.toLowerCase();

  const filteredFruits = fruits.filter(function (fruit) {
    return fruit.toLowerCase().startsWith(searchText);
  });

  createFruitList(filteredFruits);
}

document.getElementById("searchText").addEventListener("keyup", findFruit);

findFruit(fruits);
