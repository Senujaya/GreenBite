const recipes = [
  {
    id: 1,
    title: "Avocado Toast",
    category: "breakfast",
    image: "./Images/Avocado.jpg",
    description: "Crispy toast topped with creamy avocado and seasonings.",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "Salt & pepper",
      "Lemon juice"
    ],
    steps: [
      "Toast the bread until golden.",
      "Mash the avocado with salt, pepper, and lemon juice.",
      "Spread avocado mixture on toast.",
      "Serve immediately."
    ],
    nutrition: {
      Calories: "250 kcal",
      Protein: "6 g",
      Carbs: "28 g",
      Fat: "14 g"
    }
  },
  {
    id: 2,
    title: "Grilled Chicken Salad",
    category: "lunch",
    image: "./Images/Chick.jpg",
    description: "Healthy salad with grilled chicken, veggies, and dressing.",
    ingredients: [
      "200g grilled chicken breast",
      "Mixed salad greens",
      "Cherry tomatoes",
      "Olive oil & balsamic vinegar"
    ],
    steps: [
      "Grill chicken and slice thinly.",
      "Mix salad greens and tomatoes.",
      "Top with chicken slices.",
      "Drizzle olive oil and balsamic vinegar."
    ],
    nutrition: {
      Calories: "350 kcal",
      Protein: "30 g",
      Carbs: "12 g",
      Fat: "20 g"
    }
  },
  {
    id: 3,
    title: "Pasta Primavera",
    category: "dinner",
    image: "./Images/Pasta.jpg",
    description: "Classic Italian pasta with fresh vegetables.",
    ingredients: [
      "200g pasta",
      "1 cup broccoli florets",
      "1 bell pepper, sliced",
      "Olive oil & garlic"
    ],
    steps: [
      "Cook pasta until al dente.",
      "Sauté vegetables in olive oil with garlic.",
      "Mix pasta with vegetables.",
      "Season with salt and pepper."
    ],
    nutrition: {
      Calories: "420 kcal",
      Protein: "15 g",
      Carbs: "65 g",
      Fat: "12 g"
    }
  },
  {
    id: 4,
    title: "Fruit Smoothie",
    category: "snack",
    image: "./Images/Smooth.jpg",
    description: "Refreshing smoothie with fruits and yogurt.",
    ingredients: ["1 banana", "1 cup strawberries", "1/2 cup yogurt", "1/2 cup milk"],
    steps: [
      "Add banana, strawberries, yogurt, and milk to blender.",
      "Blend until smooth.",
      "Serve chilled."
    ],
    nutrition: {
      Calories: "200 kcal",
      Protein: "5 g",
      Carbs: "40 g",
      Fat: "2 g"
    }
  },
  {
    id: 5,
    title: "Quinoa Salad",
    category: "lunch",
    image: "./Images/Salad.jpg",
    description: "Light quinoa salad with fresh veggies.",
    ingredients: ["1 cup cooked quinoa", "1 cucumber", "1 tomato", "Olive oil"],
    steps: [
      "Chop cucumber and tomato.",
      "Mix with quinoa.",
      "Drizzle olive oil and mix well."
    ],
    nutrition: {
      Calories: "300 kcal",
      Protein: "8 g",
      Carbs: "50 g",
      Fat: "8 g"
    }
  },
  {
    id: 6,
    title: "Veggie Wrap",
    category: "lunch",
    image: "./Images/Veggie.jpg",
    description: "Tortilla wrap filled with fresh vegetables.",
    ingredients: ["1 tortilla", "Lettuce", "Cucumber", "Hummus"],
    steps: [
      "Spread hummus on tortilla.",
      "Add lettuce and cucumber.",
      "Roll tightly and slice in half."
    ],
    nutrition: {
      Calories: "280 kcal",
      Protein: "7 g",
      Carbs: "40 g",
      Fat: "9 g"
    }
  },
  {
    id: 7,
    title: "Grilled Salmon",
    category: "dinner",
    image: "./Images/Salmon.jpg",
    description: "Simple grilled salmon fillet with lemon.",
    ingredients: ["200g salmon fillet", "Lemon juice", "Salt & pepper"],
    steps: [
      "Season salmon with salt, pepper, and lemon.",
      "Grill for 8–10 minutes.",
      "Serve with salad."
    ],
    nutrition: {
      Calories: "370 kcal",
      Protein: "34 g",
      Carbs: "0 g",
      Fat: "24 g"
    }
  },
  {
    id: 8,
    title: "Oatmeal Bowl",
    category: "breakfast",
    image: "./Images/Oatmeal.jpg",
    description: "Warm oatmeal topped with fruits and nuts.",
    ingredients: ["1/2 cup oats", "1 cup milk", "Banana slices", "Almonds"],
    steps: [
      "Cook oats in milk.",
      "Top with banana slices and almonds.",
      "Serve warm."
    ],
    nutrition: {
      Calories: "310 kcal",
      Protein: "10 g",
      Carbs: "55 g",
      Fat: "7 g"
    }
  },
  {
    id: 9,
    title: "Veggie Stir-Fry",
    category: "dinner",
    image: "./Images/Stirfry.jpg",
    description: "Quick stir-fry with colorful vegetables.",
    ingredients: ["1 cup broccoli", "1 cup carrots", "Soy sauce", "Garlic"],
    steps: [
      "Heat oil in a pan.",
      "Add garlic, broccoli, and carrots.",
      "Stir-fry with soy sauce for 5 minutes."
    ],
    nutrition: {
      Calories: "220 kcal",
      Protein: "6 g",
      Carbs: "30 g",
      Fat: "8 g"
    }
  },
  {
    id: 10,
    title: "Greek Yogurt Parfait",
    category: "breakfast",
    image: "./Images/Parfait.jpg",
    description: "Layered yogurt with granola and berries.",
    ingredients: ["1 cup Greek yogurt", "1/2 cup granola", "1/2 cup mixed berries"],
    steps: [
      "Layer yogurt, granola, and berries in a glass.",
      "Repeat layers.",
      "Serve chilled."
    ],
    nutrition: {
      Calories: "280 kcal",
      Protein: "12 g",
      Carbs: "35 g",
      Fat: "9 g"
    }
  }
];

const recipeList = document.getElementById("recipeList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const modal = document.getElementById("recipeModal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close");

function renderRecipes(filteredRecipes) {
  recipeList.innerHTML = "";
  recipeList.className = "recipe-grid";
  if (filteredRecipes.length === 0) {
    recipeList.innerHTML = "<p>No recipes found.</p>";
    return;
  }
  filteredRecipes.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h3>${recipe.title}</h3>
      <p>${recipe.description}</p>
    `;
    card.addEventListener("click", () => openModal(recipe));
    recipeList.appendChild(card);
  });
}

function openModal(recipe) {
  modalBody.innerHTML = `
    <h2>${recipe.title}</h2>
    <img src="${recipe.image}" alt="${recipe.title}">
    <h3>Ingredients</h3>
    <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}</ul>
    <h3>Steps</h3>
    <ol>${recipe.steps.map(step => `<li>${step}</li>`).join("")}</ol>
    <h3>Nutrition Info</h3>
    <table>
      <tr><th>Calories</th><td>${recipe.nutrition.Calories}</td></tr>
      <tr><th>Protein</th><td>${recipe.nutrition.Protein}</td></tr>
      <tr><th>Carbs</th><td>${recipe.nutrition.Carbs}</td></tr>
      <tr><th>Fat</th><td>${recipe.nutrition.Fat}</td></tr>
    </table>
  `;
  modal.style.display = "block";
}

closeBtn.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

function filterRecipes() {
  const searchText = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const filtered = recipes.filter(r => {
    const matchesName = r.title.toLowerCase().includes(searchText);
    const matchesCategory = category === "all" || r.category === category;
    return matchesName && matchesCategory;
  });
  renderRecipes(filtered);
}

searchInput.addEventListener("input", filterRecipes);
categoryFilter.addEventListener("change", filterRecipes);

renderRecipes(recipes);