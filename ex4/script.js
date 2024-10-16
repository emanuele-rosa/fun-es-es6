const fruits = [
  "abacate",
  "uva",
  "maracujá",
  "mamão",
  "cereja",
  "jaboticaba",
  "jaca",
  "guaraná",
];
function createFruitList(fruits) {
  const fruitList = document.getElementById("fruitList");

  fruitList.innerHTML = "";

  fruits.forEach(function (fruit) {
    const li = document.createElement("li");
    li.textContent = fruit;
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
