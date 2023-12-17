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
addIngredients(ingredients);
