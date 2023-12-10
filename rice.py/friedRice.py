class Ingredient:
    def __init__(self, name, quantity):
        self.name = name
        self.quantity = quantity

    def __str__(self):
        return f'{self.quantity} {self.name}'


class Instruction:
    def __init__(self, step_number, description):
        self.step_number = step_number
        self.description = description

    def __str__(self):
        return f'{self.step_number}. {self.description}'


class FriedRiceRecipe:
    def __init__(self):
        self.ingredients = [
            Ingredient('cups cooked rice (preferably day-old)', 2),
            Ingredient('tbsp vegetable oil', 2),
            Ingredient('cup mixed vegetables (carrots, peas, corn)', 1),
            Ingredient('eggs, beaten', 2),
            Ingredient('tbsp soy sauce', 3),
            Ingredient('tsp sesame oil', 1),
            Ingredient('Salt and pepper to taste', None),
            Ingredient('Green onions, chopped, for garnish', None)
        ]

        self.instructions = [
            Instruction(1, 'Heat vegetable oil in a large pan or wok over medium-high heat.'),
            Instruction(2, 'Add mixed vegetables and stir-fry for 2-3 minutes until they are tender.'),
            Instruction(3, 'Push the vegetables to the side of the pan, pour the beaten eggs into the empty space, and scramble them.'),
            Instruction(4, 'Once the eggs are cooked, mix them with the vegetables.'),
            Instruction(5, 'Add the cooked rice to the pan and break up any clumps.'),
            Instruction(6, 'Pour soy sauce and sesame oil over the rice, and stir-fry for an additional 2-3 minutes.'),
            Instruction(7, 'Season with salt and pepper to taste.'),
            Instruction(8, 'Garnish with chopped green onions before serving.'),
            Instruction(9, 'Enjoy your delicious Python Fried Rice!')
        ]

    def print_ingredients(self):
        print('Ingredients:')
        for ingredient in self.ingredients:
            print(f'- {ingredient}')

    def print_instructions(self):
        print('\nInstructions:')
        for instruction in self.instructions:
            print(instruction)

    def cook(self):
        self.print_ingredients()
        self.print_instructions()

# Let's cook some more complex fried rice!
fried_rice_recipe = FriedRiceRecipe()
fried_rice_recipe.cook()