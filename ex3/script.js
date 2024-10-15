function createFruitList(fruits) {
  const fruitList = document.getElementById("fruitList");

  fruitList.innerHTML = "";

  fruits.forEach(function (fruit) {
    const li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
  });
}

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

createFruitList(fruits);
