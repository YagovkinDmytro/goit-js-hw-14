const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

/////Option #1/////

function addIngredients(ingredients) {
  const listOfIngredients = document.querySelector("#ingredients");
  ingredients.forEach((name) => {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.textContent = name;
    return listOfIngredients.append(listItem);
  });
  return listOfIngredients;
}
console.log(addIngredients(ingredients));

/////Option #2/////

// const listOfIngradients = ingredients.map((name) => {
//   const listOfIngredients = document.querySelector("#ingredients");
//   const listItem = document.createElement("li");
//   listItem.classList.add("item");
//   listItem.textContent = name;
//   return listOfIngredients.append(listItem);
// });

// console.log(listOfIngradients);

/////Option #3/////

// const ulIngredients = document.getElementById("ingredients");

// ingredients.forEach((ingredient) => {
//   // Створюємо елемент <li>
//   const liElement = document.createElement("li");

//   // Додаємо назву інгредієнта як текстовий вміст
//   liElement.textContent = ingredient;

//   // Додаємо клас 'item'
//   liElement.classList.add("item");

//   // Додаємо елемент <li> до списку <ul>
//   ulIngredients.appendChild(liElement);
// });
