class PastaRecipe {
  constructor() {
    this.ingredients = [
      "250g spaghetti",
      "2 tbsp olive oil",
      "3 cloves garlic, minced",
      "1 can (400g) crushed tomatoes",
      "1 tsp dried oregano",
      "1 tsp dried basil",
      "Salt and pepper to taste",
      "Grated Parmesan cheese for serving",
    ];

    this.instructions = [
      "1. Boil a large pot of salted water and cook the spaghetti according to package instructions.",
      "2. In a skillet, heat olive oil over medium heat and sauté minced garlic until fragrant.",
      "3. Add crushed tomatoes, oregano, basil, salt, and pepper. Simmer for 10 minutes.",
      "4. Drain the cooked spaghetti and toss it in the tomato sauce until well coated.",
      "5. Serve the pasta on plates, topped with grated Parmesan cheese.",
      "6. Enjoy your delicious JavaScript Pasta!",
    ];
  }

  printIngredients() {
    console.log("Ingredients:");
    this.ingredients.forEach((ingredient) => {
      console.log(`- ${ingredient}`);
    });
  }

  printInstructions() {
    console.log("\nInstructions:");
    this.instructions.forEach((step, index) => {
      console.log(`${index + 1}. ${step}`);
    });
  }

  cook() {
    this.printIngredients();
    this.printInstructions();
  }
}

// Let's cook some pasta!
const pastaRecipe = new PastaRecipe();
pastaRecipe.cook();
